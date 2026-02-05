"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[285,6694],{

/***/ 64744
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_RTLService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73948);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isRTL: false,
      currentLocale: 'en'
    };
  },
  computed: {
    /**
     * Get RTL-aware CSS classes
     */
    rtlClasses: function rtlClasses() {
      return {
        'rtl': this.isRTL,
        'ltr': !this.isRTL,
        'text-right': this.isRTL,
        'text-left': !this.isRTL,
        'float-right': this.isRTL,
        'float-left': !this.isRTL
      };
    },
    /**
     * Get RTL-aware text alignment
     */
    textAlign: function textAlign() {
      return this.isRTL ? 'right' : 'left';
    },
    /**
     * Get RTL-aware float direction
     */
    floatDirection: function floatDirection() {
      return this.isRTL ? 'right' : 'left';
    }
  },
  mounted: function mounted() {
    // Initialize RTL status
    this.updateRTLStatus();

    // Listen for RTL changes
    window.addEventListener('rtl-changed', this.handleRTLChange);
  },
  beforeDestroy: function beforeDestroy() {
    // Clean up event listener
    window.removeEventListener('rtl-changed', this.handleRTLChange);
  },
  methods: {
    /**
     * Update RTL status from service
     */
    updateRTLStatus: function updateRTLStatus() {
      this.isRTL = _services_RTLService__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getRTLStatus();
      this.currentLocale = _services_RTLService__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getCurrentLocale();
    },
    /**
     * Handle RTL change events
     */
    handleRTLChange: function handleRTLChange(event) {
      this.isRTL = event.detail.isRTL;
      this.currentLocale = event.detail.locale || _services_RTLService__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getCurrentLocale();
      this.$forceUpdate(); // Force component re-render
    },
    /**
     * Set RTL mode for a specific locale
     */
    setRTLMode: function setRTLMode(locale) {
      _services_RTLService__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.setRTLModeByLocale(locale);
    },
    /**
     * Check if current locale is RTL
     */
    isCurrentLocaleRTL: function isCurrentLocaleRTL() {
      return _services_RTLService__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLanguageRTLStatus(this.currentLocale);
    },
    /**
     * Get RTL-aware margin/padding classes
     */
    getRTLSpacingClasses: function getRTLSpacingClasses(baseClass, size) {
      if (this.isRTL) {
        return _defineProperty(_defineProperty({}, "".concat(baseClass, "-right-").concat(size), true), "".concat(baseClass, "-left-").concat(size), false);
      } else {
        return _defineProperty(_defineProperty({}, "".concat(baseClass, "-left-").concat(size), true), "".concat(baseClass, "-right-").concat(size), false);
      }
    },
    /**
     * Get RTL-aware border classes
     */
    getRTLBorderClasses: function getRTLBorderClasses(baseClass, side) {
      if (this.isRTL) {
        var rtlSideMap = {
          'left': 'right',
          'right': 'left',
          'start': 'end',
          'end': 'start'
        };
        return _defineProperty({}, "".concat(baseClass, "-").concat(rtlSideMap[side] || side), true);
      } else {
        return _defineProperty({}, "".concat(baseClass, "-").concat(side), true);
      }
    }
  }
});

/***/ },

/***/ 36694
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorHandler: () => (/* binding */ ErrorHandler),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37225);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


/**
 * Centralized error handling utility
 * Provides consistent error display across the application
 */
var ErrorHandler = /*#__PURE__*/function () {
  function ErrorHandler() {
    _classCallCheck(this, ErrorHandler);
  }
  return _createClass(ErrorHandler, null, [{
    key: "handleApiError",
    value:
    /**
     * Handle API errors with proper error messages
     * @param {Object} error - The error object from axios
     * @param {Object} options - Additional options for error handling
     * @returns {void}
     */
    function handleApiError(error) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$showValidati = options.showValidationErrors,
        showValidationErrors = _options$showValidati === void 0 ? true : _options$showValidati,
        _options$customMessag = options.customMessage,
        customMessage = _options$customMessag === void 0 ? null : _options$customMessag,
        _options$title = options.title,
        title = _options$title === void 0 ? null : _options$title,
        _options$timer = options.timer,
        timer = _options$timer === void 0 ? 6000 : _options$timer,
        _options$showTimerPro = options.showTimerProgressBar,
        showTimerProgressBar = _options$showTimerPro === void 0 ? true : _options$showTimerPro;

      // Log detailed error information for debugging
      this.logErrorDetails(error, options.context || 'API Error');

      // If custom message is provided, show it
      if (customMessage) {
        this.showError(title || _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Error'), customMessage, timer, showTimerProgressBar);
        return;
      }

      // Handle different error types
      if (error.response) {
        var _error$response = error.response,
          status = _error$response.status,
          data = _error$response.data;
        switch (status) {
          case 400:
            this.handleBadRequest(data, showValidationErrors);
            break;
          case 401:
            this.handleUnauthorized();
            break;
          case 403:
            this.handleForbidden(data);
            break;
          case 404:
            this.handleNotFound(data);
            break;
          case 409:
            this.handleConflict(data);
            break;
          case 422:
            this.handleValidationErrors(data, showValidationErrors);
            break;
          case 499:
            // Demo version message - handled by interceptors
            break;
          default:
            if (status >= 500) {
              this.handleServerError(data);
            } else {
              this.handleGenericError(data, error.message);
            }
        }
      } else if (error.request) {
        // Network error
        this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Network Error'), _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Unable to connect to server. Please check your internet connection.'), 8000, true);
      } else {
        // Other errors
        this.handleGenericError(null, error.message);
      }
    }

    /**
     * Handle 400 Bad Request errors
     */
  }, {
    key: "handleBadRequest",
    value: function handleBadRequest(data) {
      var showValidationErrors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var errorMessage = (data === null || data === void 0 ? void 0 : data.message) || _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Bad Request Error');
      if (showValidationErrors && data !== null && data !== void 0 && data.validation_errors && Array.isArray(data.validation_errors)) {
        this.showBackendValidationErrors(data.validation_errors, errorMessage);
      } else {
        this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Bad Request'), errorMessage);
      }
    }

    /**
     * Handle 401 Unauthorized errors
     */
  }, {
    key: "handleUnauthorized",
    value: function handleUnauthorized() {
      this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Authentication Error'), _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('You are not authorized to perform this action. Please log in again.'), 5000);
    }

    /**
     * Handle 403 Forbidden errors
     */
  }, {
    key: "handleForbidden",
    value: function handleForbidden(data) {
      var errorMessage = (data === null || data === void 0 ? void 0 : data.message) || _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t("You don't have permission to perform this action.");
      this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Permission Error'), errorMessage);
    }

    /**
     * Handle 404 Not Found errors
     */
  }, {
    key: "handleNotFound",
    value: function handleNotFound(data) {
      var errorMessage = (data === null || data === void 0 ? void 0 : data.message) || _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('The requested resource was not found. Please check your data and try again.');
      this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Resource Not Found'), errorMessage);
    }

    /**
     * Handle 409 Conflict errors
     */
  }, {
    key: "handleConflict",
    value: function handleConflict(data) {
      var errorMessage = (data === null || data === void 0 ? void 0 : data.message) || _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Data Conflict Error');
      this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Data Conflict'), errorMessage);
    }

    /**
     * Handle 422 Validation errors
     */
  }, {
    key: "handleValidationErrors",
    value: function handleValidationErrors(data) {
      var showValidationErrors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!showValidationErrors) return;
      if (data !== null && data !== void 0 && data.errors) {
        // Laravel validation errors
        var validationErrors = data.errors;
        var errorMessages = Object.values(validationErrors).flat();
        if (errorMessages.length > 0) {
          var errorList = errorMessages.map(function (error) {
            return "\u2022 ".concat(error);
          }).join('\n');
          this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Validation Error'), errorList, 8000, true);
        }
      } else if (data !== null && data !== void 0 && data.validation_errors && Array.isArray(data.validation_errors)) {
        // Backend validation errors
        this.showBackendValidationErrors(data.validation_errors, data.message);
      } else {
        // Show specific error message if available, otherwise show generic message
        var errorMessage = (data === null || data === void 0 ? void 0 : data.message) || _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Please check your input and try again.');
        this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Validation Error'), errorMessage);
      }
    }

    /**
     * Handle server errors (5xx)
     */
  }, {
    key: "handleServerError",
    value: function handleServerError(data) {
      var errorMessage = (data === null || data === void 0 ? void 0 : data.message) || _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Server Error');
      this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Server Error'), "".concat(errorMessage, " (").concat(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Please try again later or contact support'), ")"), 8000, true);
    }

    /**
     * Handle generic errors
     */
  }, {
    key: "handleGenericError",
    value: function handleGenericError(data, fallbackMessage) {
      var errorMessage = (data === null || data === void 0 ? void 0 : data.message) || fallbackMessage || _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Please check your input and try again.');
      this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Error'), errorMessage);
    }

    /**
     * Show backend validation errors
     */
  }, {
    key: "showBackendValidationErrors",
    value: function showBackendValidationErrors(validationErrors, mainMessage) {
      if (!Array.isArray(validationErrors) || validationErrors.length === 0) {
        this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Validation Error'), mainMessage);
        return;
      }
      var errorList = validationErrors.map(function (error) {
        return "\u2022 ".concat(error);
      }).join('\n');
      this.showError(_plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Validation Error'), "".concat(mainMessage, "\n\n").concat(errorList), 10000, true);
    }

    /**
     * Show error using SweetAlert2
     */
  }, {
    key: "showError",
    value: function showError(title, message) {
      var timer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6000;
      var showTimerProgressBar = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      if (typeof window !== 'undefined' && window.toast && typeof window.toast.fire === 'function') {
        window.toast.fire({
          type: 'error',
          title: "".concat(title !== null && title !== void 0 ? title : _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Error')).concat(message ? ': ' + message : ''),
          timer: timer,
          timerProgressBar: showTimerProgressBar
        });
        return;
      }
      // Fallback to console if toast not available
      // eslint-disable-next-line no-console
      console.error(title, message);
    }

    /**
     * Show success message
     */
  }, {
    key: "showSuccess",
    value: function showSuccess(title, message) {
      var timer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
      if (typeof window !== 'undefined' && window.toast && typeof window.toast.fire === 'function') {
        window.toast.fire({
          type: 'success',
          title: "".concat(title !== null && title !== void 0 ? title : _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Success')).concat(message ? ': ' + message : ''),
          timer: timer,
          timerProgressBar: true
        });
        return;
      }
      // eslint-disable-next-line no-console
      console.log(title, message);
    }

    /**
     * Show warning message
     */
  }, {
    key: "showWarning",
    value: function showWarning(title, message) {
      var timer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5000;
      if (typeof window !== 'undefined' && window.toast && typeof window.toast.fire === 'function') {
        window.toast.fire({
          type: 'warning',
          title: "".concat(title !== null && title !== void 0 ? title : _plugins_i18n__WEBPACK_IMPORTED_MODULE_0__["default"].t('Warning')).concat(message ? ': ' + message : ''),
          timer: timer,
          timerProgressBar: true
        });
        return;
      }
      // eslint-disable-next-line no-console
      console.warn(title, message);
    }

    /**
     * Log detailed error information for debugging
     * @param {Object} error - The error object
     * @param {String} context - Context where the error occurred
     */
  }, {
    key: "logErrorDetails",
    value: function logErrorDetails(error) {
      var _error$response2, _error$response3;
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Unknown';
      var errorInfo = {
        context: context,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        error: {
          message: error.message,
          stack: error.stack,
          name: error.name
        }
      };

      // Add response details if available
      if (error.response) {
        var _error$response$confi, _error$response$confi2, _error$response$confi3, _error$response$confi4;
        errorInfo.response = {
          status: error.response.status,
          statusText: error.response.statusText,
          data: error.response.data,
          headers: error.response.headers,
          config: {
            url: (_error$response$confi = error.response.config) === null || _error$response$confi === void 0 ? void 0 : _error$response$confi.url,
            method: (_error$response$confi2 = error.response.config) === null || _error$response$confi2 === void 0 ? void 0 : _error$response$confi2.method,
            params: (_error$response$confi3 = error.response.config) === null || _error$response$confi3 === void 0 ? void 0 : _error$response$confi3.params,
            data: (_error$response$confi4 = error.response.config) === null || _error$response$confi4 === void 0 ? void 0 : _error$response$confi4.data
          }
        };
      }

      // Add request details if available
      if (error.request) {
        errorInfo.request = {
          readyState: error.request.readyState,
          status: error.request.status,
          responseText: error.request.responseText
        };
      }

      // Log to console with detailed information
      console.group("\uD83D\uDEA8 Error in ".concat(context));
      console.error('Full Error Object:', error);
      console.error('Error Details:', errorInfo);
      if ((_error$response2 = error.response) !== null && _error$response2 !== void 0 && (_error$response2 = _error$response2.data) !== null && _error$response2 !== void 0 && _error$response2.message) {
        console.error('Backend Error Message:', error.response.data.message);
      }
      if ((_error$response3 = error.response) !== null && _error$response3 !== void 0 && (_error$response3 = _error$response3.data) !== null && _error$response3 !== void 0 && _error$response3.errors) {
        console.error('Backend Validation Errors:', error.response.data.errors);
      }
      console.groupEnd();

      // Send to backend logging endpoint if available
      this.sendErrorToBackend(errorInfo);
    }

    /**
     * Send error details to backend for logging
     * @param {Object} errorInfo - Error information to log
     */
  }, {
    key: "sendErrorToBackend",
    value: (function () {
      var _sendErrorToBackend = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(errorInfo) {
        var _window$auth, _window$auth2, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              if (!(window.axios && "production" === 'production')) {
                _context.n = 1;
                break;
              }
              _context.n = 1;
              return window.axios.post('/api/log-frontend-error', _objectSpread(_objectSpread({}, errorInfo), {}, {
                user_id: ((_window$auth = window.auth) === null || _window$auth === void 0 || (_window$auth = _window$auth.user) === null || _window$auth === void 0 ? void 0 : _window$auth.id) || null,
                tenant_id: ((_window$auth2 = window.auth) === null || _window$auth2 === void 0 || (_window$auth2 = _window$auth2.tenant) === null || _window$auth2 === void 0 ? void 0 : _window$auth2.id) || null
              }));
            case 1:
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.warn('Failed to send error to backend:', _t);
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }));
      function sendErrorToBackend(_x) {
        return _sendErrorToBackend.apply(this, arguments);
      }
      return sendErrorToBackend;
    }())
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorHandler);

/***/ },

/***/ 51900
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76798);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-group[data-v-1def6f66]{margin-bottom:1rem}.form-group label[data-v-1def6f66]{color:#495057;font-size:.95rem;font-weight:500;margin-bottom:.5rem}.required[data-v-1def6f66]{color:#dc3545;font-weight:700}.form-control[data-v-1def6f66]{background:#fff!important;border:1px solid #e5e7eb;font-size:14px;padding:10px 16px}.form-control[data-v-1def6f66]:focus{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)}.is-invalid[data-v-1def6f66]{border-color:#dc3545!important}textarea.form-control[data-v-1def6f66]{min-height:100px;resize:vertical}.v-select[data-v-1def6f66]{background:#fff!important;border:1px solid #e5e7eb;border-radius:10px}.v-select .vs__dropdown-toggle[data-v-1def6f66]{background:#fff!important;border:1px solid #e5e7eb;padding:10px 16px}.btn-success[data-v-1def6f66]{background:#2ab930!important;border:none!important;color:#fff!important;font-weight:500;padding:10px 20px!important}.btn-success[data-v-1def6f66]:hover{background:#229a26!important;box-shadow:0 4px 8px rgba(42,185,48,.3);transform:translateY(-1px)}.btn-secondary[data-v-1def6f66]{background:#6c757d!important;border:none!important;color:#fff!important;font-weight:500;padding:10px 20px!important}.btn-secondary[data-v-1def6f66]:hover{background:#5a6268!important;box-shadow:0 4px 8px hsla(208,7%,46%,.3);transform:translateY(-1px)}.create-button[data-v-1def6f66]{cursor:pointer;text-decoration:none}.row[data-v-1def6f66]{margin-bottom:1rem}.row[data-v-1def6f66]:last-child{margin-bottom:0}@media (max-width:768px){.form-control[data-v-1def6f66]{font-size:.9rem;padding:8px 12px}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 50797
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76798);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav-tabs[data-v-cd890c6e]{border-bottom:2px solid #dee2e6;margin-bottom:1.5rem}.nav-tabs .nav-item[data-v-cd890c6e]{margin-bottom:-2px}.nav-tabs .nav-link[data-v-cd890c6e]{background-color:transparent;border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem;color:#495057;cursor:pointer;font-weight:500;padding:.75rem 1.5rem;transition:all .2s ease}.nav-tabs .nav-link[data-v-cd890c6e]:hover{border-color:#e9ecef #e9ecef #dee2e6;color:#33a0d9}.nav-tabs .nav-link.active[data-v-cd890c6e]{background-color:#fff;border-color:#dee2e6 #dee2e6 transparent;color:#33a0d9;font-weight:600}.nav-tabs .nav-link i[data-v-cd890c6e]{margin-right:.5rem}.tab-content[data-v-cd890c6e]{min-height:200px}.tab-pane[data-v-cd890c6e]{padding:0}.form-group[data-v-cd890c6e]{margin-bottom:1rem}.form-group label[data-v-cd890c6e]{color:#495057;font-size:.95rem;font-weight:500;margin-bottom:.5rem}.required[data-v-cd890c6e]{color:#dc3545;font-weight:700}.form-control[data-v-cd890c6e]{background:#fff!important;border:1px solid #e5e7eb;font-size:14px;padding:10px 16px}.form-control[data-v-cd890c6e]:focus{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)}.is-invalid[data-v-cd890c6e]{border-color:#dc3545!important}textarea.form-control[data-v-cd890c6e]{min-height:100px;resize:vertical}.v-select[data-v-cd890c6e]{background:#fff!important;border:1px solid #e5e7eb;border-radius:10px}.v-select .vs__dropdown-toggle[data-v-cd890c6e]{background:#fff!important;border:1px solid #e5e7eb;padding:10px 16px}.btn-success[data-v-cd890c6e]{background:#2ab930!important;border:none!important;color:#fff!important;font-weight:500;padding:10px 20px!important}.btn-success[data-v-cd890c6e]:hover{background:#229a26!important;box-shadow:0 4px 8px rgba(42,185,48,.3);transform:translateY(-1px)}.btn-secondary[data-v-cd890c6e]{background:#6c757d!important;border:none!important;color:#fff!important;font-weight:500;padding:10px 20px!important}.btn-secondary[data-v-cd890c6e]:hover{background:#5a6268!important;box-shadow:0 4px 8px hsla(208,7%,46%,.3);transform:translateY(-1px)}.create-button[data-v-cd890c6e]{cursor:pointer;text-decoration:none}.create-btn[data-v-cd890c6e]{border-left:none;border-radius:0 .25rem .25rem 0;cursor:pointer;padding:11px;transition:background-color .2s ease}.create-btn[data-v-cd890c6e]:hover{background-color:#e9ecef}.category-select[data-v-cd890c6e]{margin-right:0!important}.category-select .vs__dropdown-toggle[data-v-cd890c6e]{border-radius:.25rem 0 0 .25rem!important;border-right:none!important}[dir=rtl] .category-select .vs__dropdown-toggle[data-v-cd890c6e]{border-left:none!important;border-radius:0 .25rem .25rem 0!important;border-right:1px solid #ced4da!important}[dir=rtl] .create-btn[data-v-cd890c6e]{border-left:none;border-radius:.25rem 0 0 .25rem;border-right:1px solid #ced4da}[dir=ltr] .create-btn[data-v-cd890c6e]{border-left:1px solid #ced4da;border-radius:0 .25rem .25rem 0;border-right:none}.row[data-v-cd890c6e]{margin-bottom:1rem}.row[data-v-cd890c6e]:last-child{margin-bottom:0}@media (max-width:768px){.nav-tabs .nav-link[data-v-cd890c6e]{font-size:.9rem;padding:.5rem 1rem}.tab-content[data-v-cd890c6e]{padding:.5rem}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 45371
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76798);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".create-button[data-v-43595425]{cursor:pointer;text-decoration:none}.modal-content[data-v-43595425]{margin:1.75rem auto;max-width:1000px}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 12825
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76798);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".create-btn[data-v-65c2e2a1]{align-items:center;background-color:#f8f9fa;border:1px solid #e5e7eb;border-left:none;cursor:pointer;display:flex;justify-content:center;padding:11px;transition:background-color .2s ease}.create-btn[data-v-65c2e2a1]:hover{background-color:#e9ecef}.create-btn i[data-v-65c2e2a1]{color:#33a0d9;font-size:18px}[dir=rtl] .create-btn[data-v-65c2e2a1]{border-left:1px solid #e5e7eb;border-radius:.25rem 0 0 .25rem;border-right:none}[dir=ltr] .create-btn[data-v-65c2e2a1]{border-left:none;border-radius:0 .25rem .25rem 0;border-right:1px solid #e5e7eb}.d-flex.w-100 .v-select[data-v-65c2e2a1]{flex:1}.d-flex.w-100 .v-select .vs__dropdown-toggle[data-v-65c2e2a1]{border-right:none}[dir=rtl] .d-flex.w-100 .v-select .vs__dropdown-toggle[data-v-65c2e2a1]{border-left:none;border-right:1px solid #e5e7eb}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 55031
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76798);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".items-table-wrapper[data-v-6362b7f3]{display:block;margin-left:0;margin-right:0;width:100%}.table-custom[data-v-6362b7f3]{-webkit-overflow-scrolling:touch;border:none!important;overflow-x:auto;overflow-y:visible;width:100%}.table-custom table[data-v-6362b7f3]{border-collapse:separate;border-spacing:0;height:100%;min-width:100%;table-layout:auto;width:100%}.table-custom table thead th[data-v-6362b7f3]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.table-custom table thead tr[data-v-6362b7f3]{border:none!important}.table-custom table thead th[data-v-6362b7f3]:first-child{border-top-left-radius:10px}.table-custom table thead th[data-v-6362b7f3]:last-child{border-top-right-radius:10px}[dir=rtl] .table-custom table thead th[data-v-6362b7f3]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .table-custom table thead th[data-v-6362b7f3]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.custom-qty-input[data-v-6362b7f3]{align-items:center;display:flex;margin:0 auto;width:-moz-fit-content;width:fit-content}.button-minus[data-v-6362b7f3],.button-plus[data-v-6362b7f3]{align-items:center;border:none;border-radius:50%;cursor:pointer;display:flex;font-size:14px;font-weight:700;height:30px;justify-content:center;transition:all .2s ease;width:30px}.button-minus[data-v-6362b7f3]{background-color:#dc3545;color:#fff}.button-plus[data-v-6362b7f3]{background-color:#007bff;color:#fff}.button-minus[data-v-6362b7f3]:hover{background-color:#c82333;transform:scale(1.05)}.button-plus[data-v-6362b7f3]:hover{background-color:#0056b3;transform:scale(1.05)}.quantity-field[data-v-6362b7f3]{border:1px solid #ced4da;border-radius:5px;margin:0 5px;padding:5px;text-align:center;width:60px}.quantity-field[data-v-6362b7f3]:focus{border-color:#007bff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25);outline:none}.clickable-badge[data-v-6362b7f3]{cursor:pointer;transition:all .3s ease;-webkit-user-select:none;-moz-user-select:none;user-select:none}.clickable-badge[data-v-6362b7f3]:hover{background-color:#c82333!important;box-shadow:0 2px 4px rgba(220,53,69,.3);transform:scale(1.05)}.clickable-badge[data-v-6362b7f3]:active{transform:scale(.95)}.insufficient-stock-input[data-v-6362b7f3]{background-color:#fff5f5!important;border:2px solid #dc3545!important;color:#dc3545!important}.insufficient-stock-input[data-v-6362b7f3]:focus{border-color:#dc3545!important;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)!important}.table-custom table .badge.badge-danger[data-v-6362b7f3]{background:#fef4f4!important;color:#dc3545!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.table-custom table td.auto-width[data-v-6362b7f3]{min-width:0;white-space:nowrap;width:auto}.table-custom table td.fixed-qty-column[data-v-6362b7f3]{min-width:200px;width:auto}.table-custom table td.fixed-discount-column[data-v-6362b7f3]{min-width:180px;width:auto}.table-custom table td.fixed-vat-column[data-v-6362b7f3]{min-width:150px;width:auto}@media (max-width:768px){.table-custom[data-v-6362b7f3]{-webkit-overflow-scrolling:touch;display:block;overflow-x:auto;width:100%}.table-custom table[data-v-6362b7f3]{display:block;min-width:-moz-fit-content;min-width:fit-content;width:100%}.table-custom table thead[data-v-6362b7f3]{display:table-header-group}.table-custom table tbody[data-v-6362b7f3]{display:table-row-group}.table-custom table tr[data-v-6362b7f3]{display:table-row}.table-custom table td[data-v-6362b7f3],.table-custom table th[data-v-6362b7f3]{display:table-cell;white-space:nowrap}.table-custom table td.fixed-qty-column[data-v-6362b7f3]{min-width:200px}.table-custom table td.fixed-discount-column[data-v-6362b7f3]{min-width:180px}.table-custom table td.fixed-vat-column[data-v-6362b7f3]{min-width:150px}}@media (max-width:576px){.table-custom table[data-v-6362b7f3]{min-width:-moz-fit-content;min-width:fit-content}.table-custom table tbody td[data-v-6362b7f3],.table-custom table thead th[data-v-6362b7f3]{font-size:12px;padding:6px 4px}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 54383
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76798);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-card[data-v-387d6191]{background:#fff;border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-bottom:1.25rem;margin-top:20px;transition:all .2s ease}.form-card[data-v-387d6191]:hover{box-shadow:0 .1rem .5rem 0 rgba(58,59,69,.15)}.form-card .card-header[data-v-387d6191]{background-color:#33a0d9;border-bottom:none;border-radius:20px 20px 0 0;color:#fff;padding:12px 16px}.form-card .card-header .section-title[data-v-387d6191]{border:none;color:#fff;font-size:14px;font-weight:600;margin:0;padding:0}.form-card .card-header .section-title[data-v-387d6191]:after{display:none}.form-card .card-header .section-title i[data-v-387d6191]{color:hsla(0,0%,100%,.8)}.form-card .card-body[data-v-387d6191]{padding:16px}.section-title[data-v-387d6191]{border-bottom:1px solid #e9ecef;color:#495057;font-weight:600;margin-bottom:15px;padding-bottom:8px}.form-group[data-v-387d6191]{margin-bottom:1rem}.form-group label[data-v-387d6191]{color:#495057;font-size:.95rem;font-weight:500;margin-bottom:.5rem}.required[data-v-387d6191]{color:#dc3545;font-weight:700}.row[data-v-387d6191]{margin-bottom:1rem}.row[data-v-387d6191]:last-child{margin-bottom:0}.auto-assign-btn[data-v-387d6191]{min-width:40px;padding:.375rem .5rem;white-space:nowrap}.auto-assign-btn[data-v-387d6191]:disabled{cursor:not-allowed;opacity:.6}.form-text[data-v-387d6191]{color:#6c757d;font-size:.8rem;margin-top:3px}.image-preview[data-v-387d6191]{text-align:center}.image-preview img[data-v-387d6191]{border:1px solid #dee2e6;border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.1)}.custom-file-label[data-v-387d6191]{background-color:#f8f9fa;border:1px dashed #dee2e6;cursor:pointer;font-size:.85rem;transition:all .2s ease}.custom-file-label[data-v-387d6191]:hover{background-color:#e3f2fd;border-color:#007bff}.custom-file-label i[data-v-387d6191]{color:#6c757d}.create-button[data-v-387d6191]{cursor:pointer;text-decoration:none}.create-btn[data-v-387d6191]{border-left:none;border-radius:0 .25rem .25rem 0;cursor:pointer;padding:11px;transition:background-color .2s ease}.create-btn[data-v-387d6191]:hover{background-color:#e9ecef}.category-select[data-v-387d6191]{margin-right:0!important}.category-select .vs__dropdown-toggle[data-v-387d6191]{border-radius:.25rem 0 0 .25rem!important;border-right:none!important}[dir=rtl] .category-select .vs__dropdown-toggle[data-v-387d6191]{border-left:none!important;border-radius:0 .25rem .25rem 0!important;border-right:1px solid #ced4da!important}[dir=rtl] .create-btn[data-v-387d6191]{border-left:none;border-radius:.25rem 0 0 .25rem;border-right:1px solid #ced4da}[dir=ltr] .create-btn[data-v-387d6191]{border-left:1px solid #ced4da;border-radius:0 .25rem .25rem 0;border-right:none}.unit-select[data-v-387d6191]{margin-right:0!important}.unit-select .vs__dropdown-toggle[data-v-387d6191]{border-radius:.25rem 0 0 .25rem!important;border-right:none!important}[dir=rtl] .unit-select .vs__dropdown-toggle[data-v-387d6191]{border-left:none!important;border-radius:0 .25rem .25rem 0!important;border-right:1px solid #ced4da!important}@media (max-width:768px){.section-title[data-v-387d6191]{font-size:.95rem;margin-bottom:12px}.form-card .card-body[data-v-387d6191]{padding:.75rem}.auto-assign-btn[data-v-387d6191]{font-size:.75rem;min-width:35px}}.input-group-prepend .input-group-text[data-v-387d6191]{background-color:#f8f9fa;border-color:#ced4da;color:#495057;font-size:.85rem}.v-select[data-v-387d6191]{margin-bottom:0}.is-invalid[data-v-387d6191]{border-color:#dc3545!important}.invalid-feedback[data-v-387d6191]{color:#dc3545;display:block;font-size:75%;margin-top:.2rem;width:100%}.item-type-selector[data-v-387d6191]{display:flex;gap:.5rem;margin-top:.5rem}.item-type-option[data-v-387d6191]{cursor:pointer;flex:1;position:relative;transition:all .2s ease}.item-type-option input[type=radio][data-v-387d6191]{opacity:0;pointer-events:none;position:absolute}.option-content[data-v-387d6191]{align-items:center;background:#fff;border:2px solid #e3e6f0;border-radius:6px;display:flex;flex-direction:column;justify-content:center;min-height:55px;padding:.6rem .5rem;text-align:center;transition:all .2s ease}.item-type-option:hover .option-content[data-v-387d6191]{border-color:#33a0d9;box-shadow:0 2px 6px rgba(51,160,217,.15);transform:translateY(-1px)}.item-type-option.active .option-content[data-v-387d6191]{background:#33a0d9;border-color:#33a0d9;box-shadow:0 3px 10px rgba(51,160,217,.25);color:#fff;transform:translateY(-1px)}.option-content i[data-v-387d6191]{color:#6c757d;font-size:1.1rem;margin-bottom:.3rem;transition:all .2s ease}.item-type-option.active .option-content i[data-v-387d6191]{color:hsla(0,0%,100%,.9)}.option-content span[data-v-387d6191]{color:#495057;font-size:.85rem;font-weight:600;transition:all .2s ease}.item-type-option.active .option-content span[data-v-387d6191]{color:#fff}@media (max-width:768px){.item-type-selector[data-v-387d6191]{flex-direction:column;gap:.4rem}.option-content[data-v-387d6191]{min-height:50px;padding:.5rem .4rem}.option-content i[data-v-387d6191]{font-size:1rem;margin-bottom:.25rem}.option-content span[data-v-387d6191]{font-size:.8rem}.override-checkbox-container .form-check-label[data-v-387d6191]{min-height:44px;padding:.6rem .8rem}.checkbox-text[data-v-387d6191]{font-size:.9rem}.form-check-input[data-v-387d6191]{height:16px;width:16px}}.account-label-row[data-v-387d6191]{align-items:flex-start;display:flex;flex-direction:column;gap:1rem;justify-content:space-between;margin-bottom:.5rem}.account-label[data-v-387d6191]{color:#495057;flex:1;font-size:.95rem;font-weight:500;margin-bottom:0}.toggle-switch-container[data-v-387d6191]{align-items:center;display:flex;flex-shrink:0}.toggle-switch-label[data-v-387d6191]{align-items:center;cursor:pointer;display:inline-flex;gap:.75rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}.toggle-switch-wrapper[data-v-387d6191]{display:inline-block;flex-shrink:0;height:26px;position:relative;width:50px}.toggle-switch-input[data-v-387d6191]{appearance:none;-webkit-appearance:none;-moz-appearance:none;background-color:#ced4da;border-radius:26px;cursor:pointer;height:26px;left:0;margin:0;outline:none;padding:0;position:absolute;top:0;transition:background-color .3s ease;width:50px}.toggle-switch-input[data-v-387d6191]:checked{background-color:#33a0d9}.toggle-switch-input[data-v-387d6191]:focus{box-shadow:0 0 0 .2rem rgba(51,160,217,.25)}.toggle-switch-slider[data-v-387d6191]{background-color:#fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2);height:20px;left:3px;pointer-events:none;position:absolute;top:50%;transform:translateY(-50%);transition:transform .3s ease;width:20px}.toggle-switch-input:checked+.toggle-switch-slider[data-v-387d6191]{transform:translate(24px,-50%)}.toggle-switch-text[data-v-387d6191]{color:#495057;font-size:.9rem;font-weight:500;transition:color .2s ease;white-space:nowrap}.toggle-switch-label:has(.toggle-switch-input:checked) .toggle-switch-text[data-v-387d6191]{color:#33a0d9;font-weight:600}.alert-info[data-v-387d6191]{background-color:#d1ecf1;border-color:#bee5eb;border-radius:.375rem;font-size:.9rem;padding:.75rem 1rem}.alert-info[data-v-387d6191],.alert-info i[data-v-387d6191]{color:#0c5460}.col-form-6[data-v-387d6191]{flex:0 0 50%;max-width:50%}.col-form-6 .form-card[data-v-387d6191],.col-form-6 .form-card .card-body[data-v-387d6191]{width:100%}@media (max-width:1300px){.col-form-6[data-v-387d6191]{flex:0 0 100%;max-width:100%}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 66110
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76798);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-card[data-v-7f6cc384]{background:#fff;border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-bottom:1.25rem;margin-top:20px;transition:all .2s ease}.form-card[data-v-7f6cc384]:hover{box-shadow:0 .1rem .5rem 0 rgba(58,59,69,.15)}.form-card .card-header[data-v-7f6cc384]{background-color:#33a0d9;border-bottom:none;border-radius:20px 20px 0 0;color:#fff;padding:12px 16px}.form-card .card-header .section-title[data-v-7f6cc384]{border:none;color:#fff;font-size:14px;font-weight:600;margin:0;padding:0}.form-card .card-header .section-title[data-v-7f6cc384]:after{display:none}.form-card .card-header .section-title i[data-v-7f6cc384]{color:hsla(0,0%,100%,.8)}.form-card .card-body[data-v-7f6cc384]{padding:16px}.section-title[data-v-7f6cc384]{border-bottom:1px solid #e9ecef;color:#495057;font-weight:600;margin-bottom:15px;padding-bottom:8px}.form-group[data-v-7f6cc384]{margin-bottom:1rem}.form-group label[data-v-7f6cc384]{color:#495057;font-size:.95rem;font-weight:500;margin-bottom:.5rem}.required[data-v-7f6cc384]{color:#dc3545;font-weight:700}.row[data-v-7f6cc384]{margin-bottom:1rem}.row[data-v-7f6cc384]:last-child{margin-bottom:0}.form-text[data-v-7f6cc384]{color:#6c757d;font-size:.8rem;margin-top:3px}.image-preview[data-v-7f6cc384]{text-align:center}.image-preview img[data-v-7f6cc384]{border:1px solid #dee2e6;border-radius:4px;box-shadow:0 1px 3px rgba(0,0,0,.1)}.custom-file-label[data-v-7f6cc384]{background-color:#f8f9fa;border:1px dashed #dee2e6;cursor:pointer;font-size:.85rem;transition:all .2s ease}.custom-file-label[data-v-7f6cc384]:hover{background-color:#e3f2fd;border-color:#007bff}.custom-file-label i[data-v-7f6cc384]{color:#6c757d}@media (max-width:768px){.section-title[data-v-7f6cc384]{font-size:.95rem;margin-bottom:12px}.form-card .card-body[data-v-7f6cc384]{padding:.75rem}}.input-group-prepend .input-group-text[data-v-7f6cc384]{background-color:#f8f9fa;border-color:#ced4da;color:#495057;font-size:.85rem}.v-select[data-v-7f6cc384]{margin-bottom:0}.is-invalid[data-v-7f6cc384]{border-color:#dc3545!important}.invalid-feedback[data-v-7f6cc384]{color:#dc3545;display:block;font-size:75%;margin-top:.2rem;width:100%}.item-type-selector[data-v-7f6cc384]{display:flex;gap:.75rem;margin-top:.5rem}.item-type-option[data-v-7f6cc384]{cursor:pointer;flex:1;position:relative;transition:all .2s ease}.item-type-option input[type=radio][data-v-7f6cc384]{opacity:0;pointer-events:none;position:absolute}.option-content[data-v-7f6cc384]{align-items:center;background:#fff;border:2px solid #e3e6f0;border-radius:8px;display:flex;flex-direction:column;justify-content:center;min-height:70px;padding:1rem .75rem;text-align:center;transition:all .2s ease}.item-type-option:hover .option-content[data-v-7f6cc384]{border-color:#33a0d9;box-shadow:0 2px 6px rgba(51,160,217,.15);transform:translateY(-1px)}.item-type-option.active .option-content[data-v-7f6cc384]{background:#33a0d9;border-color:#33a0d9;box-shadow:0 3px 10px rgba(51,160,217,.25);color:#fff;transform:translateY(-1px)}.option-content i[data-v-7f6cc384]{color:#6c757d;font-size:1.4rem;margin-bottom:.5rem;transition:all .2s ease}.item-type-option.active .option-content i[data-v-7f6cc384]{color:hsla(0,0%,100%,.9)}.option-content span[data-v-7f6cc384]{color:#495057;font-size:.9rem;font-weight:600;transition:all .2s ease}.item-type-option.active .option-content span[data-v-7f6cc384]{color:#fff}@media (max-width:768px){.item-type-selector[data-v-7f6cc384]{flex-direction:column;gap:.5rem}.option-content[data-v-7f6cc384]{min-height:60px;padding:.75rem .5rem}.option-content i[data-v-7f6cc384]{font-size:1.25rem;margin-bottom:.4rem}.option-content span[data-v-7f6cc384]{font-size:.85rem}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 94129
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76798);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal-overlay[data-v-651d741c]{align-items:center;background-color:rgba(0,0,0,.5);display:flex;height:100%;justify-content:center;left:0;position:fixed;top:0;width:100%;z-index:1050}.modal-content[data-v-651d741c]{background:#fff;border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,.3);max-height:90vh;max-width:800px;overflow-y:auto;width:90%}.modal-header[data-v-651d741c]{align-items:center;background-color:#f8f9fa;border-bottom:1px solid #dee2e6;border-radius:10px 10px 0 0;display:flex;justify-content:space-between;padding:20px}.modal-title[data-v-651d741c]{font-size:1.25rem;font-weight:600;margin:0}.close[data-v-651d741c]{background:none;border:none;color:#6c757d;cursor:pointer;font-size:1.5rem}.close[data-v-651d741c]:hover{color:#000}.modal-body[data-v-651d741c]{padding:20px}.modal-footer[data-v-651d741c]{background-color:#f8f9fa;border-radius:0 0 10px 10px;border-top:1px solid #dee2e6;display:flex;gap:10px;justify-content:flex-end;padding:20px}.option-card[data-v-651d741c]{align-items:center;border:2px solid #e9ecef;border-radius:8px;cursor:pointer;display:flex;margin-bottom:15px;padding:15px;transition:all .3s ease}.option-card[data-v-651d741c]:hover{background-color:#f8f9fa;border-color:#007bff;box-shadow:0 4px 8px rgba(0,0,0,.1);transform:translateY(-2px)}.option-icon[data-v-651d741c]{font-size:2rem;margin-right:15px;min-width:50px;text-align:center}.option-content h6[data-v-651d741c]{font-weight:600;margin:0 0 5px}.option-content p[data-v-651d741c]{font-size:.9rem;margin:0}.product-info[data-v-651d741c]{background-color:#f8f9fa;border-left:4px solid #007bff;border-radius:8px;padding:15px}.quick-adjustment .card[data-v-651d741c]{border:1px solid #dee2e6;border-radius:8px}.quick-adjustment .card-header[data-v-651d741c]{background-color:#e9ecef;border-bottom:1px solid #dee2e6;padding:15px}.form-actions[data-v-651d741c]{display:flex;gap:10px;justify-content:flex-end;margin-top:20px}.required[data-v-651d741c]{color:#dc3545}.badge[data-v-651d741c]{font-size:.875em;padding:.375rem .75rem}.alert[data-v-651d741c]{border:none;border-radius:8px}.alert-warning[data-v-651d741c]{background-color:#fff3cd;border-left:4px solid #ffc107;color:#856404}[dir=rtl] .option-card[data-v-651d741c]{flex-direction:row-reverse}[dir=rtl] .option-icon[data-v-651d741c]{margin-left:15px;margin-right:0}[dir=rtl] .product-info[data-v-651d741c]{border-left:none;border-right:4px solid #007bff}[dir=rtl] .alert-warning[data-v-651d741c]{border-left:none;border-right:4px solid #ffc107}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 23711
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76798);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".form-group[data-v-3d82b5ae]{margin-bottom:1rem}.form-group label[data-v-3d82b5ae]{color:#495057;font-size:.95rem;font-weight:500;margin-bottom:.5rem}.required[data-v-3d82b5ae]{color:#dc3545;font-weight:700}.form-control[data-v-3d82b5ae]{background:#fff!important;border:1px solid #e5e7eb;font-size:14px;padding:10px 16px}.form-control[data-v-3d82b5ae]:focus{border-color:#33a0d9;box-shadow:0 0 0 .2rem rgba(51,160,217,.25)}.is-invalid[data-v-3d82b5ae]{border-color:#dc3545!important}textarea.form-control[data-v-3d82b5ae]{min-height:100px;resize:vertical}.btn-success[data-v-3d82b5ae]{background:#2ab930!important;border:none!important;color:#fff!important;font-weight:500;padding:10px 20px!important}.btn-success[data-v-3d82b5ae]:hover{background:#229a26!important;box-shadow:0 4px 8px rgba(42,185,48,.3);transform:translateY(-1px)}.btn-secondary[data-v-3d82b5ae]{background:#6c757d!important;border:none!important;color:#fff!important;font-weight:500;padding:10px 20px!important}.btn-secondary[data-v-3d82b5ae]:hover{background:#5a6268!important;box-shadow:0 4px 8px hsla(208,7%,46%,.3);transform:translateY(-1px)}.create-button[data-v-3d82b5ae]{cursor:pointer;text-decoration:none}.unit-code-tooltip[data-v-3d82b5ae]{transition:all .2s ease}.unit-code-tooltip[data-v-3d82b5ae]:hover{color:#33a0d9!important;transform:scale(1.1)}.form-text[data-v-3d82b5ae]{color:#6c757d;font-size:.85rem;margin-top:.25rem}@media (max-width:768px){.form-group[data-v-3d82b5ae]{margin-bottom:.75rem}.form-text[data-v-3d82b5ae]{font-size:.8rem}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 88481
(module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76798);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header-buttons[data-v-5f535d2c]{margin-bottom:15px}.footer-buttons[data-v-5f535d2c]{display:flex;gap:10px}.footer-buttons .btn[data-v-5f535d2c]{margin-right:10px}.footer-buttons .btn[data-v-5f535d2c]:last-child{margin-right:0}.create-btn[data-v-5f535d2c]{padding:11px}.chart-account-success[data-v-5f535d2c],.chart-account-warning[data-v-5f535d2c]{border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:16px}.chart-account-warning[data-v-5f535d2c]{background:linear-gradient(135deg,#fff3cd,#ffeaa7);border:1px solid #ffc107}.chart-account-success[data-v-5f535d2c]{background:linear-gradient(135deg,#d4edda,#c3e6cb);border:1px solid #28a745}.success-content[data-v-5f535d2c],.warning-content[data-v-5f535d2c]{align-items:center;display:flex;gap:16px}.success-icon[data-v-5f535d2c],.warning-icon[data-v-5f535d2c]{flex-shrink:0;font-size:24px}.warning-icon[data-v-5f535d2c]{color:#856404}.success-icon[data-v-5f535d2c]{color:#155724}.success-text[data-v-5f535d2c],.warning-text[data-v-5f535d2c]{flex-grow:1}.success-title[data-v-5f535d2c],.warning-title[data-v-5f535d2c]{font-size:14px;font-weight:600;margin:0 0 4px}.warning-title[data-v-5f535d2c]{color:#856404}.success-title[data-v-5f535d2c]{color:#155724}.success-description[data-v-5f535d2c],.warning-description[data-v-5f535d2c]{font-size:13px;margin:0;opacity:.8}.warning-description[data-v-5f535d2c]{color:#856404}.success-description[data-v-5f535d2c]{color:#155724}.warning-action[data-v-5f535d2c]{flex-shrink:0}.button-plus.icon-shape.icon-sm.btn-primary[data-v-5f535d2c]{padding:0}.btn-primary[data-v-5f535d2c]:hover{background:#229a26!important;box-shadow:0 4px 8px rgba(42,185,48,.3);transform:translateY(-1px)}.btn-primary[data-v-5f535d2c]:disabled{box-shadow:none;cursor:not-allowed;opacity:.6;transform:none}@media (max-width:768px){.success-content[data-v-5f535d2c],.warning-content[data-v-5f535d2c]{flex-direction:column;gap:12px;text-align:center}.btn-primary[data-v-5f535d2c],.warning-action[data-v-5f535d2c]{width:100%}}.client-status[data-v-5f535d2c]{font-size:13px}.client-success[data-v-5f535d2c],.client-warning[data-v-5f535d2c]{align-items:center;border-radius:6px;display:flex;font-weight:500;padding:8px 12px}.client-warning[data-v-5f535d2c]{background-color:#fff3cd;border:1px solid #ffeaa7;color:#856404}.client-success[data-v-5f535d2c]{background-color:#d4edda;border:1px solid #c3e6cb;color:#155724}.btn-outline-warning[data-v-5f535d2c]{border-color:#ffc107;color:#856404;font-size:12px;padding:4px 8px}.debug-panel[data-v-5f535d2c]{border:2px solid #ffc107;border-radius:10px;box-shadow:0 4px 8px rgba(255,193,7,.2);display:none}.debug-panel .card-header[data-v-5f535d2c]{background:linear-gradient(45deg,#ffc107,#ffeb3b)!important;border-bottom:2px solid #ffc107;border-radius:8px 8px 0 0!important}.debug-item[data-v-5f535d2c]{background-color:#f8f9fa;border-left:4px solid #007bff!important;transition:all .3s ease}.debug-item[data-v-5f535d2c]:hover{background-color:#e9ecef;box-shadow:0 2px 4px rgba(0,0,0,.1);transform:translateY(-2px)}.debug-step[data-v-5f535d2c]{background-color:#fff;border:1px solid #dee2e6;border-radius:4px;font-family:Courier New,monospace;font-size:.9em;margin-bottom:8px;padding:4px 8px}.debug-summary[data-v-5f535d2c]{background-color:#f8f9fa;border:1px solid #dee2e6;border-radius:8px;padding:15px}.debug-summary ul li[data-v-5f535d2c]{border-bottom:1px solid #e9ecef;padding:4px 0}.debug-summary ul li[data-v-5f535d2c]:last-child{border-bottom:none}.debug-display[data-v-5f535d2c]{background:linear-gradient(135deg,#e3f2fd,#f3e5f5)!important;border:1px solid #bbdefb;font-family:Courier New,monospace}.debug-steps .step[data-v-5f535d2c]{background-color:#fff3cd;border:1px solid #ffeaa7;border-radius:6px;font-family:Courier New,monospace;font-size:.9em;margin-bottom:8px;padding:8px 12px}.debug-state[data-v-5f535d2c]{background-color:#f8f9fa;border:1px solid #dee2e6;border-radius:8px;padding:15px}.debug-state div[data-v-5f535d2c]{border-bottom:1px solid #e9ecef;padding:4px 0}.debug-state div[data-v-5f535d2c]:last-child{border-bottom:none}.debug-panel .table th[data-v-5f535d2c]{background-color:#f8f9fa;font-size:.85em;font-weight:600}.debug-panel .table td[data-v-5f535d2c]{font-size:.85em;vertical-align:middle}.debug-panel .table tbody tr[data-v-5f535d2c]:hover{background-color:#f8f9fa}@media (max-width:768px){.debug-panel .card-body[data-v-5f535d2c]{padding:15px}.debug-item .row[data-v-5f535d2c]{margin:0}.debug-item .col-md-6[data-v-5f535d2c]{padding:0 5px}.debug-step[data-v-5f535d2c]{font-size:.8em;padding:3px 6px}.debug-panel .table[data-v-5f535d2c]{font-size:.75em}}.btn-outline-warning[data-v-5f535d2c]:hover{background-color:#ffc107;border-color:#ffc107;color:#212529}.btn-outline-warning[data-v-5f535d2c]:disabled{cursor:not-allowed;opacity:.6}.product-status[data-v-5f535d2c]{font-size:13px}.product-success[data-v-5f535d2c],.product-warning[data-v-5f535d2c]{align-items:center;border-radius:6px;display:flex;font-weight:500;padding:8px 12px}.product-warning[data-v-5f535d2c]{background-color:#fff3cd;border:1px solid #ffeaa7;color:#856404}.product-success[data-v-5f535d2c]{background-color:#d4edda;border:1px solid #c3e6cb;color:#155724}.account-status[data-v-5f535d2c]{font-size:13px}.account-success[data-v-5f535d2c],.account-warning[data-v-5f535d2c]{align-items:center;border-radius:6px;display:flex;font-weight:500;padding:8px 12px}.account-warning[data-v-5f535d2c]{background-color:#fff3cd;border:1px solid #ffeaa7;color:#856404}.account-success[data-v-5f535d2c]{background-color:#d4edda;border:1px solid #c3e6cb;color:#155724}.radio-group-horizontal[data-v-5f535d2c]{align-items:center;display:flex;flex-direction:row;gap:20px}.radio-group-horizontal .form-check[data-v-5f535d2c]{align-items:center;display:flex;margin-bottom:0}.radio-group-horizontal .form-check-input[data-v-5f535d2c]{margin-right:8px}.radio-group-horizontal .form-check-label[data-v-5f535d2c]{cursor:pointer;margin-bottom:0}.text-warning[data-v-5f535d2c]{color:#856404!important}.text-warning small[data-v-5f535d2c]{font-size:12px;font-weight:500}.text-warning i[data-v-5f535d2c]{margin-right:4px}.table-custom[data-v-5f535d2c]{border:none!important}.invoices-create-table[data-v-5f535d2c]{border-collapse:separate;border-spacing:0}.invoices-create-table thead th[data-v-5f535d2c]{background-color:#33a0d9;border:none!important;border-color:inherit!important;color:#fff;font-weight:400;padding:8px}.invoices-create-table thead tr[data-v-5f535d2c]{border:none!important}.invoices-create-table thead th[data-v-5f535d2c]:first-child{border-top-left-radius:10px}.invoices-create-table thead th[data-v-5f535d2c]:last-child{border-top-right-radius:10px}[dir=rtl] .invoices-create-table thead th[data-v-5f535d2c]:first-child{border-top-left-radius:0;border-top-right-radius:10px}[dir=rtl] .invoices-create-table thead th[data-v-5f535d2c]:last-child{border-top-left-radius:10px;border-top-right-radius:0}.summary-footer-wrapper[data-v-5f535d2c]{margin-top:10px}.summary-card-horizontal[data-v-5f535d2c]{padding:12px 15px}.summary-row-horizontal[data-v-5f535d2c]{align-items:center;display:flex;flex-wrap:wrap;gap:8px;justify-content:space-between}.summary-item[data-v-5f535d2c]{align-items:center;display:flex;flex:1;flex-direction:column;min-width:100px;padding:0 12px}.summary-item-label[data-v-5f535d2c]{color:#6b7280;font-size:11px;font-weight:500;letter-spacing:.5px;margin-bottom:4px;text-transform:uppercase}.summary-item-value[data-v-5f535d2c]{color:#111827;font-size:14px;font-weight:600;text-align:center}.summary-item-discount .summary-item-value[data-v-5f535d2c]{color:#dc2626}.summary-item-total[data-v-5f535d2c]{background:linear-gradient(135deg,#f0f9ff,#e0f2fe);border-radius:6px;margin:0 -5px;padding:8px 15px}.summary-item-total .summary-item-label[data-v-5f535d2c]{color:#1e40af;font-size:12px;font-weight:600}.summary-item-total .summary-item-value[data-v-5f535d2c]{color:#33a0d9;font-size:16px;font-weight:700}.summary-divider[data-v-5f535d2c]{background-color:#e5e7eb;flex-shrink:0;height:40px;width:1px}.summary-divider-bold[data-v-5f535d2c]{background-color:#33a0d9;height:50px;width:2px}[dir=rtl] .summary-item[data-v-5f535d2c]{direction:rtl}@media (max-width:992px){.summary-row-horizontal[data-v-5f535d2c]{flex-wrap:wrap;justify-content:center}.summary-item[data-v-5f535d2c]{min-width:80px;padding:0 8px}.summary-divider[data-v-5f535d2c]{display:none}}@media (max-width:768px){.summary-card-horizontal[data-v-5f535d2c]{padding:10px 12px}.summary-item[data-v-5f535d2c]{min-width:70px;padding:0 6px}.summary-item-label[data-v-5f535d2c]{font-size:10px}.summary-item-value[data-v-5f535d2c]{font-size:13px}.summary-item-total[data-v-5f535d2c]{margin:8px 0 0;padding:10px;width:100%}.summary-item-total .summary-item-value[data-v-5f535d2c]{font-size:18px}}@media (max-width:576px){.summary-card-horizontal[data-v-5f535d2c]{border-radius:6px}.summary-item[data-v-5f535d2c]{min-width:60px;padding:0 4px}.summary-item-label[data-v-5f535d2c]{font-size:9px}.summary-item-value[data-v-5f535d2c]{font-size:12px}}.summary-footer-row[data-v-5f535d2c]{background-color:#f8f9fa;border-top:2px solid #dee2e6}.summary-footer-row[data-v-5f535d2c]:last-child{border-bottom:2px solid #dee2e6}.summary-label[data-v-5f535d2c]{color:#495057;padding:12px 16px}.summary-value[data-v-5f535d2c]{color:#212529;padding:12px 16px;text-align:left}.grand-total-row[data-v-5f535d2c]{background-color:#e9ecef;border-top:3px solid #33a0d9}.grand-total-value[data-v-5f535d2c]{color:#33a0d9;font-size:16px}[dir=rtl] .summary-label[data-v-5f535d2c]{text-align:left}[dir=rtl] .summary-value[data-v-5f535d2c]{text-align:right}@media (max-width:768px){.summary-label[data-v-5f535d2c],.summary-value[data-v-5f535d2c]{font-size:12px;padding:8px 12px}.grand-total-value[data-v-5f535d2c]{font-size:14px}}.btn-group.c-w-100[data-v-5f535d2c]{gap:10px}.card[data-v-5f535d2c]{border:1px solid #ced4da;border-radius:20px;box-shadow:0 8px 20px 0 #00000014;margin-top:30px}.card-footer[data-v-5f535d2c]{background-color:#fff;border-radius:0 0 20px 20px;border-top:1px solid #ced4da;padding:0 1.25rem .625rem}.invoices-create-table .badge.badge-danger[data-v-5f535d2c]{background:#fef4f4!important;color:#dc3545!important;font-size:12px!important;font-weight:500!important;padding:10px 16px}.form-control[data-v-5f535d2c]{background:#fff!important}.quantity-field[data-v-5f535d2c]{border-radius:0!important;margin:0!important;min-height:50px!important;text-align:center}.btn-primary[data-v-5f535d2c]{background:#2ab930!important}.btn-secondary[data-v-5f535d2c]{background:#33a0d9!important;border:none!important;color:#fff!important;padding:10px 20px!important}.stock-warning-alert[data-v-5f535d2c]{background:linear-gradient(135deg,#fff3cd,#ffeaa7);border:1px solid #ffc107;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);margin-bottom:20px;padding:16px}.stock-warning-content[data-v-5f535d2c]{align-items:flex-start;display:flex;gap:16px}.stock-warning-icon[data-v-5f535d2c]{color:#856404;flex-shrink:0;font-size:24px;margin-top:2px}.stock-warning-text[data-v-5f535d2c]{flex-grow:1}.stock-warning-title[data-v-5f535d2c]{color:#856404;font-size:16px;font-weight:600;margin:0 0 8px}.stock-warning-description[data-v-5f535d2c]{color:#856404;font-size:14px;margin:0 0 12px;opacity:.9}.stock-warning-list[data-v-5f535d2c]{list-style:none;margin:0;padding-left:20px}.stock-warning-item[data-v-5f535d2c]{background-color:hsla(0,0%,100%,.5);border-left:3px solid #ffc107;border-radius:6px;color:#856404;font-size:14px;margin-bottom:8px;padding:8px 12px}.stock-warning-item[data-v-5f535d2c]:last-child{margin-bottom:0}.product-name[data-v-5f535d2c]{color:#856404;font-weight:600;margin-right:8px}.stock-details[data-v-5f535d2c]{color:#856404;opacity:.8}.stock-details strong[data-v-5f535d2c]{color:#856404;font-weight:600}[dir=rtl] .stock-warning-list[data-v-5f535d2c]{padding-left:0;padding-right:20px}[dir=rtl] .stock-warning-item[data-v-5f535d2c]{border-left:none;border-right:3px solid #ffc107}[dir=rtl] .product-name[data-v-5f535d2c]{margin-left:8px;margin-right:0}@media (max-width:768px){.stock-warning-content[data-v-5f535d2c]{flex-direction:column;gap:12px;text-align:center}.stock-warning-icon[data-v-5f535d2c]{align-self:center}.stock-warning-list[data-v-5f535d2c]{padding-left:0;text-align:left}[dir=rtl] .stock-warning-list[data-v-5f535d2c]{text-align:right}}.clickable-badge[data-v-5f535d2c]{cursor:pointer;transition:all .3s ease;-webkit-user-select:none;-moz-user-select:none;user-select:none}.clickable-badge[data-v-5f535d2c]:hover{background-color:#c82333!important;box-shadow:0 2px 4px rgba(220,53,69,.3);transform:scale(1.05)}.clickable-badge[data-v-5f535d2c]:active{transform:scale(.95)}.insufficient-stock-input[data-v-5f535d2c]{background-color:#fff5f5!important;border:2px solid #dc3545!important;color:#dc3545!important;margin:0 5px}.insufficient-stock-input[data-v-5f535d2c]:focus{border-color:#dc3545!important;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)!important}.custom-qty-input[data-v-5f535d2c]{align-items:center;display:flex;justify-content:center}.custom-qty-input input.button-minus[data-v-5f535d2c],.custom-qty-input input.button-plus[data-v-5f535d2c]{margin:0 5px}.fixed-qty-column[data-v-5f535d2c]{text-align:center}.product-option[data-v-5f535d2c]{border-bottom:1px solid #e9ecef;padding:8px 12px}.product-option[data-v-5f535d2c]:last-child{border-bottom:none}.product-option-header[data-v-5f535d2c]{align-items:center;display:flex;flex-wrap:wrap;gap:6px;margin-bottom:6px}.product-option-header strong[data-v-5f535d2c]{color:#333;font-size:14px;font-weight:600}.product-code[data-v-5f535d2c]{color:#6c757d;font-size:12px;font-weight:500}.product-option-details[data-v-5f535d2c]{color:#6c757d;display:flex;flex-wrap:wrap;font-size:12px;gap:12px;margin-top:4px}.product-detail-item[data-v-5f535d2c]{align-items:center;display:inline-flex;gap:4px}.product-detail-item i[data-v-5f535d2c]{color:#33a0d9;font-size:11px}.badge-sm[data-v-5f535d2c]{font-size:10px;font-weight:500;padding:2px 6px}.badge-warning[data-v-5f535d2c]{background-color:#fff3cd;border:1px solid #ffeaa7;color:#856404}.v-select .vs__dropdown-option:hover .product-option[data-v-5f535d2c]{background-color:#f8f9fa}.v-select .vs__dropdown-option--selected .product-option[data-v-5f535d2c]{background-color:#e3f2fd}.summary-card[data-v-5f535d2c]{background:#fff;border:1px solid #e5e7eb;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,.05);overflow:hidden}.summary-header[data-v-5f535d2c]{background:linear-gradient(135deg,#33a0d9,#2a8bc7);border-bottom:2px solid #2a8bc7;padding:16px 20px}.summary-title[data-v-5f535d2c]{align-items:center;color:#fff;display:flex;font-size:16px;font-weight:600;margin:0}.summary-title i[data-v-5f535d2c]{font-size:18px}.summary-body[data-v-5f535d2c]{padding:16px 20px}.summary-row[data-v-5f535d2c]{align-items:center;border-bottom:1px solid #f3f4f6;display:flex;justify-content:space-between;padding:12px 0;transition:background-color .2s ease}.summary-row[data-v-5f535d2c]:last-child{border-bottom:none}.summary-row[data-v-5f535d2c]:hover{background-color:#f9fafb;border-radius:4px;margin:0 -20px;padding-left:20px;padding-right:20px}.summary-row-net[data-v-5f535d2c]{font-weight:500}.summary-row-discount[data-v-5f535d2c]{background-color:#fef2f2}.summary-row-discount[data-v-5f535d2c]:hover{background-color:#fee2e2}.summary-row-total[data-v-5f535d2c]{background:linear-gradient(135deg,#f0f9ff,#e0f2fe);border-bottom:none;border-radius:8px;font-size:18px;margin-top:12px;padding:16px 20px}.summary-row-total[data-v-5f535d2c]:hover{background:linear-gradient(135deg,#e0f2fe,#dbeafe);margin:12px -20px 0;padding:16px 20px}.summary-label[data-v-5f535d2c]{align-items:center;color:#374151;display:flex;flex:1;font-size:14px;font-weight:500}.summary-label i[data-v-5f535d2c]{color:#6b7280;font-size:14px;text-align:center;width:20px}.summary-value[data-v-5f535d2c]{color:#111827;font-size:14px;font-weight:600;min-width:120px;text-align:right}.summary-total[data-v-5f535d2c]{color:#33a0d9;font-size:20px;font-weight:700}[dir=rtl] .summary-label i[data-v-5f535d2c]{margin-left:8px;margin-right:0}[dir=rtl] .summary-value[data-v-5f535d2c]{text-align:left}@media (max-width:768px){.summary-header[data-v-5f535d2c]{padding:12px 16px}.summary-title[data-v-5f535d2c]{font-size:14px}.summary-body[data-v-5f535d2c]{padding:12px 16px}.summary-row[data-v-5f535d2c]{flex-wrap:wrap;padding:10px 0}.summary-row[data-v-5f535d2c]:hover{margin:0 -16px;padding-left:16px;padding-right:16px}.summary-label[data-v-5f535d2c]{font-size:13px;margin-bottom:4px;width:100%}.summary-value[data-v-5f535d2c]{font-size:13px;min-width:auto;text-align:left;width:100%}.summary-row-total[data-v-5f535d2c]{font-size:16px;padding:12px 16px}.summary-row-total[data-v-5f535d2c]:hover{margin:12px -16px 0;padding:12px 16px}.summary-total[data-v-5f535d2c]{font-size:18px}[dir=rtl] .summary-value[data-v-5f535d2c]{text-align:right}}@media (max-width:576px){.summary-card[data-v-5f535d2c]{border-radius:8px}.summary-body[data-v-5f535d2c],.summary-header[data-v-5f535d2c],.summary-row-total[data-v-5f535d2c]{padding:10px 12px}.summary-row-total[data-v-5f535d2c]:hover{margin:12px -12px 0;padding:10px 12px}}.transport-taxability-card[data-v-5f535d2c]{background:#fff;border:2px solid #e5e7eb;border-radius:10px;box-shadow:0 2px 4px rgba(0,0,0,.05);margin-top:1rem;padding:16px;transition:all .3s ease}.transport-taxability-card[data-v-5f535d2c]:hover{border-color:#33a0d9;box-shadow:0 4px 8px rgba(51,160,217,.1)}.transport-taxability-header[data-v-5f535d2c]{align-items:center;border-bottom:1px solid #f3f4f6;display:flex;margin-bottom:12px;padding-bottom:10px}.transport-taxability-header i[data-v-5f535d2c]{font-size:20px;margin-right:8px}.transport-taxability-title[data-v-5f535d2c]{color:#374151;font-size:14px;font-weight:600}.transport-taxability-body[data-v-5f535d2c]{padding-top:8px}.custom-checkbox-wrapper[data-v-5f535d2c]{margin-bottom:12px;position:relative}.custom-checkbox-input[data-v-5f535d2c]{cursor:pointer;height:0;opacity:0;position:absolute;width:0}.custom-checkbox-label[data-v-5f535d2c]{align-items:center;cursor:pointer;display:flex;padding:8px 0;transition:all .2s ease;-webkit-user-select:none;-moz-user-select:none;user-select:none}.custom-checkbox-label[data-v-5f535d2c]:hover{color:#33a0d9}.checkbox-indicator[data-v-5f535d2c]{background-color:#fff;border:2px solid #d1d5db;border-radius:6px;display:inline-block;flex-shrink:0;height:24px;margin-right:12px;position:relative;transition:all .2s ease;width:24px}.custom-checkbox-input:checked~.custom-checkbox-label .checkbox-indicator[data-v-5f535d2c]{background-color:#33a0d9;border-color:#33a0d9}.custom-checkbox-input:checked~.custom-checkbox-label .checkbox-indicator[data-v-5f535d2c]:after{border:solid #fff;border-width:0 2px 2px 0;content:\"\";height:12px;left:7px;position:absolute;top:3px;transform:rotate(45deg);width:6px}.custom-checkbox-input:focus~.custom-checkbox-label .checkbox-indicator[data-v-5f535d2c]{box-shadow:0 0 0 3px rgba(51,160,217,.1)}.checkbox-text[data-v-5f535d2c]{color:#374151;font-size:14px;font-weight:500;line-height:1.5}.custom-checkbox-input:checked~.custom-checkbox-label .checkbox-text[data-v-5f535d2c]{color:#33a0d9;font-weight:600}.transport-taxability-description[data-v-5f535d2c]{align-items:flex-start;border-radius:6px;display:flex;font-size:13px;line-height:1.5;margin-top:8px;padding:10px 12px;transition:all .2s ease}.transport-taxability-description i[data-v-5f535d2c]{flex-shrink:0;margin-top:2px}.description-taxable[data-v-5f535d2c]{background-color:#ecfdf5;border:1px solid #a7f3d0;color:#065f46}.description-taxable i[data-v-5f535d2c]{color:#10b981}.description-non-taxable[data-v-5f535d2c]{background-color:#fef3c7;border:1px solid #fde68a;color:#92400e}.description-non-taxable i[data-v-5f535d2c]{color:#f59e0b}[dir=rtl] .transport-taxability-header i[data-v-5f535d2c]{margin-left:8px;margin-right:0}[dir=rtl] .checkbox-indicator[data-v-5f535d2c]{margin-left:12px;margin-right:0}[dir=rtl] .transport-taxability-description i[data-v-5f535d2c]{margin-left:8px;margin-right:0}@media (max-width:768px){.transport-taxability-card[data-v-5f535d2c]{margin-top:.5rem;padding:12px}.transport-taxability-header[data-v-5f535d2c]{margin-bottom:10px;padding-bottom:8px}.transport-taxability-title[data-v-5f535d2c]{font-size:13px}.checkbox-indicator[data-v-5f535d2c]{height:22px;width:22px}.custom-checkbox-input:checked~.custom-checkbox-label .checkbox-indicator[data-v-5f535d2c]:after{height:10px;left:6px;top:2px;width:5px}.checkbox-text[data-v-5f535d2c]{font-size:13px}.transport-taxability-description[data-v-5f535d2c]{font-size:12px;padding:8px 10px}}.readonly-field[data-v-5f535d2c]{color:#6c757d!important;cursor:not-allowed!important;font-weight:500}.readonly-field[data-v-5f535d2c],.readonly-field[data-v-5f535d2c]:focus{background-color:#f8f9fa!important;border-color:#dee2e6!important}.readonly-field[data-v-5f535d2c]:focus{box-shadow:none!important;outline:none!important}#total_amount[data-v-5f535d2c]{max-width:200px}@media (max-width:768px){#total_amount[data-v-5f535d2c]{max-width:100%}}.form-group.col-md-4[data-v-5f535d2c]{margin-bottom:1rem}@media (min-width:768px){.form-group.col-md-4[data-v-5f535d2c]{margin-bottom:0}.form-group.col-md-4[data-v-5f535d2c]:first-child{padding-right:15px}.form-group.col-md-4[data-v-5f535d2c]:nth-child(2){padding-left:7.5px;padding-right:7.5px}.form-group.col-md-4[data-v-5f535d2c]:last-child{padding-left:15px}}@media (max-width:991px){.form-group.col-md-4[data-v-5f535d2c]{margin-bottom:1rem}.form-group.col-md-4[data-v-5f535d2c]:first-child,.form-group.col-md-4[data-v-5f535d2c]:last-child,.form-group.col-md-4[data-v-5f535d2c]:nth-child(2){padding-left:15px;padding-right:15px}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 54923
(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ToWords = exports.DefaultToWordsOptions = exports.DefaultConverterOptions = exports.LOCALES = void 0;
const locales_1 = __importDefault(__webpack_require__(71545));
exports.LOCALES = locales_1.default;
exports.DefaultConverterOptions = {
    currency: false,
    ignoreDecimal: false,
    ignoreZeroCurrency: false,
    doNotAddOnly: false,
};
exports.DefaultToWordsOptions = {
    localeCode: 'en-IN',
    converterOptions: exports.DefaultConverterOptions,
};
class ToWords {
    constructor(options = {}) {
        this.options = {};
        this.locale = undefined;
        this.options = Object.assign({}, exports.DefaultToWordsOptions, options);
    }
    getLocaleClass() {
        if (!(this.options.localeCode in locales_1.default)) {
            throw new Error(`Unknown Locale "${this.options.localeCode}"`);
        }
        return locales_1.default[this.options.localeCode];
    }
    getLocale() {
        if (this.locale === undefined) {
            const LocaleClass = this.getLocaleClass();
            this.locale = new LocaleClass();
        }
        return this.locale;
    }
    convert(number, options = {}) {
        var _a;
        options = Object.assign({}, this.options.converterOptions, options);
        if (!this.isValidNumber(number)) {
            throw new Error(`Invalid Number "${number}"`);
        }
        if (options.ignoreDecimal) {
            number = Number.parseInt(number.toString());
        }
        let words = [];
        if (options.currency) {
            words = this.convertCurrency(number, options);
        }
        else {
            words = this.convertNumber(number);
        }
        if ((_a = this.locale) === null || _a === void 0 ? void 0 : _a.config.trim) {
            return words.join('');
        }
        return words.join(' ');
    }
    convertNumber(number) {
        var _a, _b;
        const locale = this.getLocale();
        const localeConfig = locale.config;
        const isNegativeNumber = number < 0;
        if (isNegativeNumber) {
            number = Math.abs(number);
        }
        const isFloat = this.isFloat(number);
        let integerPart = Math.trunc(number);
        let fractionalPart = '';
        if (isFloat) {
            const segments = number.toString().split('.');
            integerPart = Number(segments[0]);
            fractionalPart = (_a = segments[1]) !== null && _a !== void 0 ? _a : '';
        }
        const ignoreZero = this.isNumberZero(number) && localeConfig.ignoreZeroInDecimals;
        let words = this.convertInternal(integerPart, true, undefined, locale);
        if (isFloat && ignoreZero) {
            words = [];
        }
        const wordsWithDecimal = [];
        if (isFloat) {
            if (!ignoreZero) {
                wordsWithDecimal.push(localeConfig.texts.point);
            }
            if (fractionalPart.startsWith('0') && !(localeConfig === null || localeConfig === void 0 ? void 0 : localeConfig.decimalLengthWordMapping)) {
                const zeroWords = [];
                for (const num of fractionalPart) {
                    zeroWords.push(...this.convertInternal(Number(num), true, undefined, locale));
                }
                wordsWithDecimal.push(...zeroWords);
            }
            else if (fractionalPart.length) {
                wordsWithDecimal.push(...this.convertInternal(Number(fractionalPart), true, undefined, locale));
                const decimalLengthWord = (_b = localeConfig === null || localeConfig === void 0 ? void 0 : localeConfig.decimalLengthWordMapping) === null || _b === void 0 ? void 0 : _b[fractionalPart.length];
                if (decimalLengthWord) {
                    wordsWithDecimal.push(decimalLengthWord);
                }
            }
        }
        const isEmpty = words.length <= 0;
        if (!isEmpty && isNegativeNumber) {
            words.unshift(localeConfig.texts.minus);
        }
        words.push(...wordsWithDecimal);
        return words;
    }
    convertCurrency(number, options = {}) {
        var _a, _b, _c, _d, _e;
        const locale = this.getLocale();
        const localeConfig = locale.config;
        const currencyOptions = (_a = options.currencyOptions) !== null && _a !== void 0 ? _a : localeConfig.currency;
        const isNegativeNumber = number < 0;
        if (isNegativeNumber) {
            number = Math.abs(number);
        }
        number = this.toFixed(number);
        // Extra check for isFloat to overcome 1.999 rounding off to 2
        const isFloat = this.isFloat(number);
        let mainAmount = Math.trunc(number);
        let fractionalPart = '';
        if (isFloat) {
            const segments = number.toString().split('.');
            mainAmount = Number(segments[0]);
            fractionalPart = (_b = segments[1]) !== null && _b !== void 0 ? _b : '';
        }
        let words = [];
        if ((_c = currencyOptions.numberSpecificForms) === null || _c === void 0 ? void 0 : _c[mainAmount]) {
            words = [currencyOptions.numberSpecificForms[mainAmount]];
        }
        else {
            // Determine if the main currency should be in singular form
            // e.g. 1 Dollar Only instead of 1 Dollars Only
            words = [...this.convertInternal(mainAmount, false, undefined, locale)];
            if (mainAmount === 1 && currencyOptions.singular) {
                words.push(currencyOptions.singular);
            }
            else if (currencyOptions.plural) {
                words.push(currencyOptions.plural);
            }
        }
        const ignoreZero = this.isNumberZero(number) && (options.ignoreZeroCurrency || ((localeConfig === null || localeConfig === void 0 ? void 0 : localeConfig.ignoreZeroInDecimals) && number !== 0));
        if (ignoreZero) {
            words = [];
        }
        const wordsWithDecimal = [];
        if (isFloat) {
            if (!ignoreZero) {
                wordsWithDecimal.push(localeConfig.texts.and);
            }
            const decimalBase = !localeConfig.decimalLengthWordMapping && fractionalPart.length
                ? Math.pow(10, Math.max(0, 2 - fractionalPart.length))
                : 1;
            const decimalPart = Number(fractionalPart || '0') * decimalBase;
            const decimalLengthWord = (_d = localeConfig === null || localeConfig === void 0 ? void 0 : localeConfig.decimalLengthWordMapping) === null || _d === void 0 ? void 0 : _d[fractionalPart.length];
            if ((_e = currencyOptions.fractionalUnit.numberSpecificForms) === null || _e === void 0 ? void 0 : _e[decimalPart]) {
                wordsWithDecimal.push(currencyOptions.fractionalUnit.numberSpecificForms[decimalPart]);
            }
            else {
                wordsWithDecimal.push(...this.convertInternal(decimalPart, false, undefined, locale));
                if (decimalLengthWord === null || decimalLengthWord === void 0 ? void 0 : decimalLengthWord.length) {
                    wordsWithDecimal.push(decimalLengthWord);
                }
                if (decimalPart === 1 && currencyOptions.fractionalUnit.singular) {
                    wordsWithDecimal.push(currencyOptions.fractionalUnit.singular);
                }
                else {
                    wordsWithDecimal.push(currencyOptions.fractionalUnit.plural);
                }
            }
        }
        else if (localeConfig.decimalLengthWordMapping && words.length) {
            wordsWithDecimal.push(currencyOptions.fractionalUnit.plural);
        }
        const isEmpty = words.length <= 0 && wordsWithDecimal.length <= 0;
        if (!isEmpty && isNegativeNumber) {
            words.unshift(localeConfig.texts.minus);
        }
        if (!isEmpty && localeConfig.texts.only && !options.doNotAddOnly && !localeConfig.onlyInFront) {
            wordsWithDecimal.push(localeConfig.texts.only);
        }
        if (wordsWithDecimal.length) {
            words.push(...wordsWithDecimal);
        }
        if (!isEmpty && !options.doNotAddOnly && localeConfig.onlyInFront) {
            words.splice(0, 0, localeConfig.texts.only);
        }
        return words;
    }
    convertInternal(number, trailing = false, overrides = {}, localeInstance) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const locale = localeInstance !== null && localeInstance !== void 0 ? localeInstance : this.getLocale();
        const localeConfig = locale.config;
        if (overrides[number]) {
            return [overrides[number]];
        }
        if (localeConfig.exactWordsMapping) {
            const exactMatch = (_a = localeConfig === null || localeConfig === void 0 ? void 0 : localeConfig.exactWordsMapping) === null || _a === void 0 ? void 0 : _a.find((elem) => {
                return number === elem.number;
            });
            if (exactMatch) {
                return [Array.isArray(exactMatch.value) ? exactMatch.value[+trailing] : exactMatch.value];
            }
        }
        const match = localeConfig.numberWordsMapping.find((elem) => {
            return number >= elem.number;
        });
        const words = [];
        if (number <= 100 || (number < 1000 && localeConfig.namedLessThan1000)) {
            words.push(Array.isArray(match.value) ? match.value[0] : match.value);
            number -= match.number;
            if (number > 0) {
                if ((_b = localeConfig === null || localeConfig === void 0 ? void 0 : localeConfig.splitWord) === null || _b === void 0 ? void 0 : _b.length) {
                    words.push(localeConfig.splitWord);
                }
                words.push(...this.convertInternal(number, trailing, overrides, locale));
            }
            return words;
        }
        const quotient = Math.floor(number / match.number);
        const remainder = number % match.number;
        let matchValue = Array.isArray(match.value) ? match.value[0] : match.value;
        const pluralForms = (_c = localeConfig === null || localeConfig === void 0 ? void 0 : localeConfig.pluralForms) === null || _c === void 0 ? void 0 : _c[match.number];
        let usedPluralForm = false;
        if (pluralForms) {
            const lastTwoDigits = quotient % 100;
            const useLastDigits = quotient >= 11 && lastTwoDigits >= 3 && lastTwoDigits <= 10;
            if (quotient === 2 && pluralForms.dual) {
                matchValue = pluralForms.dual;
                usedPluralForm = true;
            }
            else if ((quotient >= ((_e = (_d = localeConfig === null || localeConfig === void 0 ? void 0 : localeConfig.paucalConfig) === null || _d === void 0 ? void 0 : _d.min) !== null && _e !== void 0 ? _e : 3) && quotient <= ((_g = (_f = localeConfig === null || localeConfig === void 0 ? void 0 : localeConfig.paucalConfig) === null || _f === void 0 ? void 0 : _f.max) !== null && _g !== void 0 ? _g : 10)) ||
                useLastDigits) {
                if (pluralForms.paucal) {
                    matchValue = pluralForms.paucal;
                }
            }
            else if (quotient >= 11 && pluralForms.plural) {
                matchValue = pluralForms.plural;
            }
        }
        else {
            if (quotient > 1 && ((_h = localeConfig === null || localeConfig === void 0 ? void 0 : localeConfig.pluralWords) === null || _h === void 0 ? void 0 : _h.find((word) => word === match.value)) && (localeConfig === null || localeConfig === void 0 ? void 0 : localeConfig.pluralMark)) {
                matchValue += localeConfig.pluralMark;
            }
            if (quotient % 10 === 1) {
                matchValue = match.singularValue || (Array.isArray(matchValue) ? matchValue[0] : matchValue);
            }
        }
        if ((quotient === 1 && ((_j = localeConfig === null || localeConfig === void 0 ? void 0 : localeConfig.ignoreOneForWords) === null || _j === void 0 ? void 0 : _j.includes(matchValue))) || usedPluralForm) {
            words.push(matchValue);
        }
        else {
            words.push(...this.convertInternal(quotient, false, overrides, locale), matchValue);
        }
        if (remainder > 0) {
            if ((_k = localeConfig === null || localeConfig === void 0 ? void 0 : localeConfig.splitWord) === null || _k === void 0 ? void 0 : _k.length) {
                if (!((_l = localeConfig === null || localeConfig === void 0 ? void 0 : localeConfig.noSplitWordAfter) === null || _l === void 0 ? void 0 : _l.find((word) => word === match.value))) {
                    words.push(localeConfig.splitWord);
                }
            }
            words.push(...this.convertInternal(remainder, trailing, overrides, locale));
        }
        return words;
    }
    toFixed(number, precision = 2) {
        return Number(Number(number).toFixed(precision));
    }
    isFloat(number) {
        return Number(number) === number && number % 1 !== 0;
    }
    isValidNumber(number) {
        return !isNaN(parseFloat(number)) && isFinite(number);
    }
    isNumberZero(number) {
        return number >= 0 && number < 1;
    }
}
exports.ToWords = ToWords;


/***/ },

/***/ 44537
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'درهم',
                plural: 'درهم',
                singular: 'درهم',
                symbol: 'د.إ',
                numberSpecificForms: {
                    1: 'درهم واحد',
                    2: 'درهمان',
                    3: 'ثلاثة دراهم',
                    4: 'أربعة دراهم',
                    5: 'خمسة دراهم',
                    6: 'ستة دراهم',
                    7: 'سبعة دراهم',
                    8: 'ثمانية دراهم',
                    9: 'تسعة دراهم',
                    10: 'عشرة دراهم',
                },
                fractionalUnit: {
                    name: 'فلس',
                    plural: 'فلس',
                    singular: 'فلس',
                    numberSpecificForms: {
                        1: 'فلس واحد',
                        2: 'فلسان',
                        3: 'ثلاثة فلوس',
                        4: 'أربعة فلوس',
                        5: 'خمسة فلوس',
                        6: 'ستة فلوس',
                        7: 'سبعة فلوس',
                        8: 'ثمانية فلوس',
                        9: 'تسعة فلوس',
                        10: 'عشرة فلوس',
                    },
                    symbol: '',
                },
            },
            texts: {
                and: 'و',
                minus: 'سالب',
                only: 'فقط لا غير',
                point: 'فاصلة',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'كوادريليون' },
                { number: 1000000000000, value: 'تريليون' },
                { number: 1000000000, value: 'مليار' },
                { number: 1000000, value: 'مليون' },
                { number: 1000, value: 'ألف' },
                { number: 900, value: 'تسعمائة' },
                { number: 800, value: 'ثمانمائة' },
                { number: 700, value: 'سبعمائة' },
                { number: 600, value: 'ستمائة' },
                { number: 500, value: 'خمسمائة' },
                { number: 400, value: 'أربعمائة' },
                { number: 300, value: 'ثلاثمائة' },
                { number: 200, value: 'مائتان' },
                { number: 100, value: 'مائة' },
                { number: 99, value: 'تسعة و تسعون' },
                { number: 98, value: 'ثمانية و تسعون' },
                { number: 97, value: 'سبعة و تسعون' },
                { number: 96, value: 'ستة و تسعون' },
                { number: 95, value: 'خمسة و تسعون' },
                { number: 94, value: 'أربعة و تسعون' },
                { number: 93, value: 'ثلاثة و تسعون' },
                { number: 92, value: 'اثنان و تسعون' },
                { number: 91, value: 'واحد و تسعون' },
                { number: 90, value: 'تسعون' },
                { number: 89, value: 'تسعة و ثمانون' },
                { number: 88, value: 'ثمانية و ثمانون' },
                { number: 87, value: 'سبعة و ثمانون' },
                { number: 86, value: 'ستة و ثمانون' },
                { number: 85, value: 'خمسة و ثمانون' },
                { number: 84, value: 'أربعة و ثمانون' },
                { number: 83, value: 'ثلاثة و ثمانون' },
                { number: 82, value: 'اثنان و ثمانون' },
                { number: 81, value: 'واحد و ثمانون' },
                { number: 80, value: 'ثمانون' },
                { number: 79, value: 'تسعة و سبعون' },
                { number: 78, value: 'ثمانية و سبعون' },
                { number: 77, value: 'سبعة و سبعون' },
                { number: 76, value: 'ستة و سبعون' },
                { number: 75, value: 'خمسة و سبعون' },
                { number: 74, value: 'أربعة و سبعون' },
                { number: 73, value: 'ثلاثة و سبعون' },
                { number: 72, value: 'اثنان و سبعون' },
                { number: 71, value: 'واحد و سبعون' },
                { number: 70, value: 'سبعون' },
                { number: 69, value: 'تسعة و ستون' },
                { number: 68, value: 'ثمانية و ستون' },
                { number: 67, value: 'سبعة و ستون' },
                { number: 66, value: 'ستة و ستون' },
                { number: 65, value: 'خمسة و ستون' },
                { number: 64, value: 'أربعة و ستون' },
                { number: 63, value: 'ثلاثة و ستون' },
                { number: 62, value: 'اثنان و ستون' },
                { number: 61, value: 'واحد و ستون' },
                { number: 60, value: 'ستون' },
                { number: 59, value: 'تسعة و خمسون' },
                { number: 58, value: 'ثمانية و خمسون' },
                { number: 57, value: 'سبعة و خمسون' },
                { number: 56, value: 'ستة و خمسون' },
                { number: 55, value: 'خمسة و خمسون' },
                { number: 54, value: 'أربعة و خمسون' },
                { number: 53, value: 'ثلاثة و خمسون' },
                { number: 52, value: 'اثنان و خمسون' },
                { number: 51, value: 'واحد و خمسون' },
                { number: 50, value: 'خمسون' },
                { number: 49, value: 'تسعة و أربعون' },
                { number: 48, value: 'ثمانية و أربعون' },
                { number: 47, value: 'سبعة و أربعون' },
                { number: 46, value: 'ستة و أربعون' },
                { number: 45, value: 'خمسة و أربعون' },
                { number: 44, value: 'أربعة و أربعون' },
                { number: 43, value: 'ثلاثة و أربعون' },
                { number: 42, value: 'اثنان و أربعون' },
                { number: 41, value: 'واحد و أربعون' },
                { number: 40, value: 'أربعون' },
                { number: 39, value: 'تسعة و ثلاثون' },
                { number: 38, value: 'ثمانية و ثلاثون' },
                { number: 37, value: 'سبعة و ثلاثون' },
                { number: 36, value: 'ستة و ثلاثون' },
                { number: 35, value: 'خمسة و ثلاثون' },
                { number: 34, value: 'أربعة و ثلاثون' },
                { number: 33, value: 'ثلاثة و ثلاثون' },
                { number: 32, value: 'اثنان و ثلاثون' },
                { number: 31, value: 'واحد و ثلاثون' },
                { number: 30, value: 'ثلاثون' },
                { number: 29, value: 'تسعة و عشرون' },
                { number: 28, value: 'ثمانية و عشرون' },
                { number: 27, value: 'سبعة و عشرون' },
                { number: 26, value: 'ستة و عشرون' },
                { number: 25, value: 'خمسة و عشرون' },
                { number: 24, value: 'أربعة و عشرون' },
                { number: 23, value: 'ثلاثة و عشرون' },
                { number: 22, value: 'اثنان و عشرون' },
                { number: 21, value: 'واحد و عشرون' },
                { number: 20, value: 'عشرون' },
                { number: 19, value: 'تسعة عشر' },
                { number: 18, value: 'ثمانية عشر' },
                { number: 17, value: 'سبعة عشر' },
                { number: 16, value: 'ستة عشر' },
                { number: 15, value: 'خمسة عشر' },
                { number: 14, value: 'أربعة عشر' },
                { number: 13, value: 'ثلاثة عشر' },
                { number: 12, value: 'اثنا عشر' },
                { number: 11, value: 'أحد عشر' },
                { number: 10, value: 'عشرة' },
                { number: 9, value: 'تسعة' },
                { number: 8, value: 'ثمانية' },
                { number: 7, value: 'سبعة' },
                { number: 6, value: 'ستة' },
                { number: 5, value: 'خمسة' },
                { number: 4, value: 'أربعة' },
                { number: 3, value: 'ثلاثة' },
                { number: 2, value: 'اثنان' },
                { number: 1, value: 'واحد' },
                { number: 0, value: 'صفر' },
            ],
            pluralForms: {
                1000: {
                    dual: 'ألفان',
                    paucal: 'آلاف',
                    plural: 'ألف',
                },
                1000000: {
                    dual: 'مليونان',
                    paucal: 'ملايين',
                    plural: 'مليون',
                },
                1000000000: {
                    dual: 'ملياران',
                    paucal: 'مليارات',
                    plural: 'مليار',
                },
                1000000000000: {
                    dual: 'تريليونان',
                    paucal: 'تريليونات',
                    plural: 'تريليون',
                },
            },
            paucalConfig: {
                min: 3,
                max: 10,
            },
            ignoreOneForWords: ['ألف', 'مائة', 'مليون', 'مليار', 'تريليون', 'كوادريليون'],
            namedLessThan1000: true,
            splitWord: 'و',
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 44585
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'درهم',
                plural: 'درهم',
                singular: 'درهم',
                symbol: 'د.م.',
                numberSpecificForms: {
                    1: 'درهم واحد',
                    2: 'درهمان',
                    3: 'ثلاثة دراهم',
                    4: 'أربعة دراهم',
                    5: 'خمسة دراهم',
                    6: 'ستة دراهم',
                    7: 'سبعة دراهم',
                    8: 'ثمانية دراهم',
                    9: 'تسعة دراهم',
                    10: 'عشرة دراهم',
                },
                fractionalUnit: {
                    name: 'سنتيم',
                    plural: 'سنتيم',
                    singular: 'سنتيم',
                    numberSpecificForms: {
                        1: 'سنتيم واحد',
                        2: 'سنتيمان',
                        3: 'ثلاثة سنتيمات',
                        4: 'أربعة سنتيمات',
                        5: 'خمسة سنتيمات',
                        6: 'ستة سنتيمات',
                        7: 'سبعة سنتيمات',
                        8: 'ثمانية سنتيمات',
                        9: 'تسعة سنتيمات',
                        10: 'عشرة سنتيمات',
                    },
                    symbol: '',
                },
            },
            texts: {
                and: 'و',
                minus: 'سالب',
                only: 'فقط لا غير',
                point: 'فاصلة',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'كوادريليون' },
                { number: 1000000000000, value: 'تريليون' },
                { number: 1000000000, value: 'مليار' },
                { number: 1000000, value: 'مليون' },
                { number: 1000, value: 'ألف' },
                { number: 900, value: 'تسعمائة' },
                { number: 800, value: 'ثمانمائة' },
                { number: 700, value: 'سبعمائة' },
                { number: 600, value: 'ستمائة' },
                { number: 500, value: 'خمسمائة' },
                { number: 400, value: 'أربعمائة' },
                { number: 300, value: 'ثلاثمائة' },
                { number: 200, value: 'مائتان' },
                { number: 100, value: 'مائة' },
                { number: 99, value: 'تسعة و تسعون' },
                { number: 98, value: 'ثمانية و تسعون' },
                { number: 97, value: 'سبعة و تسعون' },
                { number: 96, value: 'ستة و تسعون' },
                { number: 95, value: 'خمسة و تسعون' },
                { number: 94, value: 'أربعة و تسعون' },
                { number: 93, value: 'ثلاثة و تسعون' },
                { number: 92, value: 'اثنان و تسعون' },
                { number: 91, value: 'واحد و تسعون' },
                { number: 90, value: 'تسعون' },
                { number: 89, value: 'تسعة و ثمانون' },
                { number: 88, value: 'ثمانية و ثمانون' },
                { number: 87, value: 'سبعة و ثمانون' },
                { number: 86, value: 'ستة و ثمانون' },
                { number: 85, value: 'خمسة و ثمانون' },
                { number: 84, value: 'أربعة و ثمانون' },
                { number: 83, value: 'ثلاثة و ثمانون' },
                { number: 82, value: 'اثنان و ثمانون' },
                { number: 81, value: 'واحد و ثمانون' },
                { number: 80, value: 'ثمانون' },
                { number: 79, value: 'تسعة و سبعون' },
                { number: 78, value: 'ثمانية و سبعون' },
                { number: 77, value: 'سبعة و سبعون' },
                { number: 76, value: 'ستة و سبعون' },
                { number: 75, value: 'خمسة و سبعون' },
                { number: 74, value: 'أربعة و سبعون' },
                { number: 73, value: 'ثلاثة و سبعون' },
                { number: 72, value: 'اثنان و سبعون' },
                { number: 71, value: 'واحد و سبعون' },
                { number: 70, value: 'سبعون' },
                { number: 69, value: 'تسعة و ستون' },
                { number: 68, value: 'ثمانية و ستون' },
                { number: 67, value: 'سبعة و ستون' },
                { number: 66, value: 'ستة و ستون' },
                { number: 65, value: 'خمسة و ستون' },
                { number: 64, value: 'أربعة و ستون' },
                { number: 63, value: 'ثلاثة و ستون' },
                { number: 62, value: 'اثنان و ستون' },
                { number: 61, value: 'واحد و ستون' },
                { number: 60, value: 'ستون' },
                { number: 59, value: 'تسعة و خمسون' },
                { number: 58, value: 'ثمانية و خمسون' },
                { number: 57, value: 'سبعة و خمسون' },
                { number: 56, value: 'ستة و خمسون' },
                { number: 55, value: 'خمسة و خمسون' },
                { number: 54, value: 'أربعة و خمسون' },
                { number: 53, value: 'ثلاثة و خمسون' },
                { number: 52, value: 'اثنان و خمسون' },
                { number: 51, value: 'واحد و خمسون' },
                { number: 50, value: 'خمسون' },
                { number: 49, value: 'تسعة و أربعون' },
                { number: 48, value: 'ثمانية و أربعون' },
                { number: 47, value: 'سبعة و أربعون' },
                { number: 46, value: 'ستة و أربعون' },
                { number: 45, value: 'خمسة و أربعون' },
                { number: 44, value: 'أربعة و أربعون' },
                { number: 43, value: 'ثلاثة و أربعون' },
                { number: 42, value: 'اثنان و أربعون' },
                { number: 41, value: 'واحد و أربعون' },
                { number: 40, value: 'أربعون' },
                { number: 39, value: 'تسعة و ثلاثون' },
                { number: 38, value: 'ثمانية و ثلاثون' },
                { number: 37, value: 'سبعة و ثلاثون' },
                { number: 36, value: 'ستة و ثلاثون' },
                { number: 35, value: 'خمسة و ثلاثون' },
                { number: 34, value: 'أربعة و ثلاثون' },
                { number: 33, value: 'ثلاثة و ثلاثون' },
                { number: 32, value: 'اثنان و ثلاثون' },
                { number: 31, value: 'واحد و ثلاثون' },
                { number: 30, value: 'ثلاثون' },
                { number: 29, value: 'تسعة و عشرون' },
                { number: 28, value: 'ثمانية و عشرون' },
                { number: 27, value: 'سبعة و عشرون' },
                { number: 26, value: 'ستة و عشرون' },
                { number: 25, value: 'خمسة و عشرون' },
                { number: 24, value: 'أربعة و عشرون' },
                { number: 23, value: 'ثلاثة و عشرون' },
                { number: 22, value: 'اثنان و عشرون' },
                { number: 21, value: 'واحد و عشرون' },
                { number: 20, value: 'عشرون' },
                { number: 19, value: 'تسعة عشر' },
                { number: 18, value: 'ثمانية عشر' },
                { number: 17, value: 'سبعة عشر' },
                { number: 16, value: 'ستة عشر' },
                { number: 15, value: 'خمسة عشر' },
                { number: 14, value: 'أربعة عشر' },
                { number: 13, value: 'ثلاثة عشر' },
                { number: 12, value: 'اثنا عشر' },
                { number: 11, value: 'أحد عشر' },
                { number: 10, value: 'عشرة' },
                { number: 9, value: 'تسعة' },
                { number: 8, value: 'ثمانية' },
                { number: 7, value: 'سبعة' },
                { number: 6, value: 'ستة' },
                { number: 5, value: 'خمسة' },
                { number: 4, value: 'أربعة' },
                { number: 3, value: 'ثلاثة' },
                { number: 2, value: 'اثنان' },
                { number: 1, value: 'واحد' },
                { number: 0, value: 'صفر' },
            ],
            pluralForms: {
                1000: {
                    dual: 'ألفان',
                    paucal: 'آلاف',
                    plural: 'ألف',
                },
                1000000: {
                    dual: 'مليونان',
                    paucal: 'ملايين',
                    plural: 'مليون',
                },
                1000000000: {
                    dual: 'ملياران',
                    paucal: 'مليارات',
                    plural: 'مليار',
                },
                1000000000000: {
                    dual: 'تريليونان',
                    paucal: 'تريليونات',
                    plural: 'تريليون',
                },
            },
            paucalConfig: {
                min: 3,
                max: 10,
            },
            ignoreOneForWords: ['ألف', 'مائة', 'مليون', 'مليار', 'تريليون', 'كوادريليون'],
            namedLessThan1000: true,
            splitWord: 'و',
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 38523
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'ريال',
                plural: 'ريال',
                singular: 'ريال',
                symbol: 'ر.س',
                numberSpecificForms: {
                    1: 'ريال واحد',
                    2: 'ريالان',
                    3: 'ثلاثة ريالات',
                    4: 'أربعة ريالات',
                    5: 'خمسة ريالات',
                    6: 'ستة ريالات',
                    7: 'سبعة ريالات',
                    8: 'ثمانية ريالات',
                    9: 'تسعة ريالات',
                    10: 'عشرة ريالات',
                },
                fractionalUnit: {
                    name: 'هللة',
                    plural: 'هللة',
                    singular: 'هللة',
                    numberSpecificForms: {
                        1: 'هللة واحدة',
                        2: 'هللتان',
                        3: 'ثلاث هللات',
                        4: 'أربع هللات',
                        5: 'خمس هللات',
                        6: 'ست هللات',
                        7: 'سبع هللات',
                        8: 'ثماني هللات',
                        9: 'تسع هللات',
                        10: 'عشر هللات',
                    },
                    symbol: '',
                },
            },
            texts: {
                and: 'و',
                minus: 'سالب',
                only: 'فقط لا غير',
                point: 'فاصلة',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'كوادريليون' },
                { number: 1000000000000, value: 'تريليون' },
                { number: 1000000000, value: 'مليار' },
                { number: 1000000, value: 'مليون' },
                { number: 1000, value: 'ألف' },
                { number: 900, value: 'تسعمائة' },
                { number: 800, value: 'ثمانمائة' },
                { number: 700, value: 'سبعمائة' },
                { number: 600, value: 'ستمائة' },
                { number: 500, value: 'خمسمائة' },
                { number: 400, value: 'أربعمائة' },
                { number: 300, value: 'ثلاثمائة' },
                { number: 200, value: 'مائتان' },
                { number: 100, value: 'مائة' },
                { number: 99, value: 'تسعة و تسعون' },
                { number: 98, value: 'ثمانية و تسعون' },
                { number: 97, value: 'سبعة و تسعون' },
                { number: 96, value: 'ستة و تسعون' },
                { number: 95, value: 'خمسة و تسعون' },
                { number: 94, value: 'أربعة و تسعون' },
                { number: 93, value: 'ثلاثة و تسعون' },
                { number: 92, value: 'اثنان و تسعون' },
                { number: 91, value: 'واحد و تسعون' },
                { number: 90, value: 'تسعون' },
                { number: 89, value: 'تسعة و ثمانون' },
                { number: 88, value: 'ثمانية و ثمانون' },
                { number: 87, value: 'سبعة و ثمانون' },
                { number: 86, value: 'ستة و ثمانون' },
                { number: 85, value: 'خمسة و ثمانون' },
                { number: 84, value: 'أربعة و ثمانون' },
                { number: 83, value: 'ثلاثة و ثمانون' },
                { number: 82, value: 'اثنان و ثمانون' },
                { number: 81, value: 'واحد و ثمانون' },
                { number: 80, value: 'ثمانون' },
                { number: 79, value: 'تسعة و سبعون' },
                { number: 78, value: 'ثمانية و سبعون' },
                { number: 77, value: 'سبعة و سبعون' },
                { number: 76, value: 'ستة و سبعون' },
                { number: 75, value: 'خمسة و سبعون' },
                { number: 74, value: 'أربعة و سبعون' },
                { number: 73, value: 'ثلاثة و سبعون' },
                { number: 72, value: 'اثنان و سبعون' },
                { number: 71, value: 'واحد و سبعون' },
                { number: 70, value: 'سبعون' },
                { number: 69, value: 'تسعة و ستون' },
                { number: 68, value: 'ثمانية و ستون' },
                { number: 67, value: 'سبعة و ستون' },
                { number: 66, value: 'ستة و ستون' },
                { number: 65, value: 'خمسة و ستون' },
                { number: 64, value: 'أربعة و ستون' },
                { number: 63, value: 'ثلاثة و ستون' },
                { number: 62, value: 'اثنان و ستون' },
                { number: 61, value: 'واحد و ستون' },
                { number: 60, value: 'ستون' },
                { number: 59, value: 'تسعة و خمسون' },
                { number: 58, value: 'ثمانية و خمسون' },
                { number: 57, value: 'سبعة و خمسون' },
                { number: 56, value: 'ستة و خمسون' },
                { number: 55, value: 'خمسة و خمسون' },
                { number: 54, value: 'أربعة و خمسون' },
                { number: 53, value: 'ثلاثة و خمسون' },
                { number: 52, value: 'اثنان و خمسون' },
                { number: 51, value: 'واحد و خمسون' },
                { number: 50, value: 'خمسون' },
                { number: 49, value: 'تسعة و أربعون' },
                { number: 48, value: 'ثمانية و أربعون' },
                { number: 47, value: 'سبعة و أربعون' },
                { number: 46, value: 'ستة و أربعون' },
                { number: 45, value: 'خمسة و أربعون' },
                { number: 44, value: 'أربعة و أربعون' },
                { number: 43, value: 'ثلاثة و أربعون' },
                { number: 42, value: 'اثنان و أربعون' },
                { number: 41, value: 'واحد و أربعون' },
                { number: 40, value: 'أربعون' },
                { number: 39, value: 'تسعة و ثلاثون' },
                { number: 38, value: 'ثمانية و ثلاثون' },
                { number: 37, value: 'سبعة و ثلاثون' },
                { number: 36, value: 'ستة و ثلاثون' },
                { number: 35, value: 'خمسة و ثلاثون' },
                { number: 34, value: 'أربعة و ثلاثون' },
                { number: 33, value: 'ثلاثة و ثلاثون' },
                { number: 32, value: 'اثنان و ثلاثون' },
                { number: 31, value: 'واحد و ثلاثون' },
                { number: 30, value: 'ثلاثون' },
                { number: 29, value: 'تسعة و عشرون' },
                { number: 28, value: 'ثمانية و عشرون' },
                { number: 27, value: 'سبعة و عشرون' },
                { number: 26, value: 'ستة و عشرون' },
                { number: 25, value: 'خمسة و عشرون' },
                { number: 24, value: 'أربعة و عشرون' },
                { number: 23, value: 'ثلاثة و عشرون' },
                { number: 22, value: 'اثنان و عشرون' },
                { number: 21, value: 'واحد و عشرون' },
                { number: 20, value: 'عشرون' },
                { number: 19, value: 'تسعة عشر' },
                { number: 18, value: 'ثمانية عشر' },
                { number: 17, value: 'سبعة عشر' },
                { number: 16, value: 'ستة عشر' },
                { number: 15, value: 'خمسة عشر' },
                { number: 14, value: 'أربعة عشر' },
                { number: 13, value: 'ثلاثة عشر' },
                { number: 12, value: 'اثنا عشر' },
                { number: 11, value: 'أحد عشر' },
                { number: 10, value: 'عشرة' },
                { number: 9, value: 'تسعة' },
                { number: 8, value: 'ثمانية' },
                { number: 7, value: 'سبعة' },
                { number: 6, value: 'ستة' },
                { number: 5, value: 'خمسة' },
                { number: 4, value: 'أربعة' },
                { number: 3, value: 'ثلاثة' },
                { number: 2, value: 'اثنان' },
                { number: 1, value: 'واحد' },
                { number: 0, value: 'صفر' },
            ],
            pluralForms: {
                1000: {
                    dual: 'ألفان',
                    paucal: 'آلاف',
                    plural: 'ألف',
                },
                1000000: {
                    dual: 'مليونان',
                    paucal: 'ملايين',
                    plural: 'مليون',
                },
                1000000000: {
                    dual: 'ملياران',
                    paucal: 'مليارات',
                    plural: 'مليار',
                },
                1000000000000: {
                    dual: 'تريليونان',
                    paucal: 'تريليونات',
                    plural: 'تريليون',
                },
            },
            paucalConfig: {
                min: 3,
                max: 10,
            },
            ignoreOneForWords: ['ألف', 'مائة', 'مليون', 'مليار', 'تريليون', 'كوادريليون'],
            namedLessThan1000: true,
            splitWord: 'و',
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 82689
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'টাকা',
                plural: 'টাকা',
                singular: 'টাকা',
                symbol: '৳',
                fractionalUnit: {
                    name: 'পয়সা',
                    singular: 'পয়সা',
                    plural: 'পয়সা',
                    symbol: '',
                },
            },
            texts: {
                and: 'এবং',
                minus: 'ঋণ',
                only: '',
                point: 'দশমিক',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'কোটি' },
                { number: 100000, value: 'লাখ' },
                { number: 1000, value: 'হাজার' },
                { number: 100, value: 'শত' },
                { number: 99, value: 'নিরানব্বই' },
                { number: 98, value: 'আটানব্বই' },
                { number: 97, value: 'সাতানব্বই' },
                { number: 96, value: 'ছিয়ানব্বই' },
                { number: 95, value: 'পঁচানব্বই' },
                { number: 94, value: 'চুরানব্বই' },
                { number: 93, value: 'তিরানব্বই' },
                { number: 92, value: 'বিরানব্বই' },
                { number: 91, value: 'একানব্বই' },
                { number: 90, value: 'নব্বই' },
                { number: 89, value: 'ঊননব্বই' },
                { number: 88, value: 'অষ্টআশি' },
                { number: 87, value: 'সাতআশি' },
                { number: 86, value: 'ছিয়াশী' },
                { number: 85, value: 'পঁচাশী' },
                { number: 84, value: 'চুরাশী' },
                { number: 83, value: 'তিরাশী' },
                { number: 82, value: 'বিরাশী' },
                { number: 81, value: 'একাশী' },
                { number: 80, value: 'আশি' },
                { number: 79, value: 'ঊনআশি' },
                { number: 78, value: 'অষ্টাত্তর' },
                { number: 77, value: 'সাতাত্তর' },
                { number: 76, value: 'ছিয়াত্তর' },
                { number: 75, value: 'পঁচাত্তর' },
                { number: 74, value: 'চুয়াত্তর' },
                { number: 73, value: 'তিয়াত্তর' },
                { number: 72, value: 'বাহাত্তর' },
                { number: 71, value: 'একাত্তর' },
                { number: 70, value: 'সত্তর' },
                { number: 69, value: 'ঊনসত্তর' },
                { number: 68, value: 'অষ্টষষ্টি' },
                { number: 67, value: 'সাতষষ্টি' },
                { number: 66, value: 'ছেষষ্টি' },
                { number: 65, value: 'পঁয়ষট্টি' },
                { number: 64, value: 'চৌষট্টি' },
                { number: 63, value: 'তেষট্টি' },
                { number: 62, value: 'বাষট্টি' },
                { number: 61, value: 'একষট্টি' },
                { number: 60, value: 'ষাট' },
                { number: 59, value: 'ঊনষাট' },
                { number: 58, value: 'আটান্ন' },
                { number: 57, value: 'সাতান্ন' },
                { number: 56, value: 'ছাপ্পান্ন' },
                { number: 55, value: 'পঞ্চান্ন' },
                { number: 54, value: 'চুয়ান্ন' },
                { number: 53, value: 'তিপ্পান্ন' },
                { number: 52, value: 'বায়ান্ন' },
                { number: 51, value: 'একান্ন' },
                { number: 50, value: 'পঞ্চাশ' },
                { number: 49, value: 'ঊনপঞ্চাশ' },
                { number: 48, value: 'আটচল্লিশ' },
                { number: 47, value: 'সাতচল্লিশ' },
                { number: 46, value: 'ছেচল্লিশ' },
                { number: 45, value: 'পঁইঁতাল্লিশ' },
                { number: 44, value: 'চুয়াল্লিশ' },
                { number: 43, value: 'তেতাল্লিশ' },
                { number: 42, value: 'বিয়াল্লিশ' },
                { number: 41, value: 'একচল্লিশ' },
                { number: 40, value: 'চল্লিশ' },
                { number: 39, value: 'ঊনচল্লিশ' },
                { number: 38, value: 'আটত্রিশ' },
                { number: 37, value: 'সাঁইত্রিশ' },
                { number: 36, value: 'ছত্রিশ' },
                { number: 35, value: 'পঁইত্রিশ' },
                { number: 34, value: 'চৌত্রিশ' },
                { number: 33, value: 'তেত্রিশ' },
                { number: 32, value: 'বত্রিশ' },
                { number: 31, value: 'একত্রিশ' },
                { number: 30, value: 'ত্রিশ' },
                { number: 29, value: 'ঊনত্রিশ' },
                { number: 28, value: 'আঠাশ' },
                { number: 27, value: 'সাতাশ' },
                { number: 26, value: 'ছাব্বিশ' },
                { number: 25, value: 'পঁচিশ' },
                { number: 24, value: 'চব্বিশ' },
                { number: 23, value: 'তেইশ' },
                { number: 22, value: 'বাইশ' },
                { number: 21, value: 'একুশ' },
                { number: 20, value: 'বিশ' },
                { number: 19, value: 'ঊনিশ' },
                { number: 18, value: 'আঠারো' },
                { number: 17, value: 'সতেরো' },
                { number: 16, value: 'ষোলো' },
                { number: 15, value: 'পনেরো' },
                { number: 14, value: 'চৌদ্দ' },
                { number: 13, value: 'তেরো' },
                { number: 12, value: 'বারো' },
                { number: 11, value: 'এগারো' },
                { number: 10, value: 'দশ' },
                { number: 9, value: 'নয়' },
                { number: 8, value: 'আট' },
                { number: 7, value: 'সাত' },
                { number: 6, value: 'ছয়' },
                { number: 5, value: 'পাঁচ' },
                { number: 4, value: 'চার' },
                { number: 3, value: 'তিন' },
                { number: 2, value: 'দুই' },
                { number: 1, value: 'এক' },
                { number: 0, value: 'শূন্য' },
            ],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 74938
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Euro',
                plural: 'Eurot',
                singular: 'Euro',
                symbol: '€',
                fractionalUnit: {
                    name: 'Sent',
                    singular: 'Sent',
                    plural: 'Senti',
                    symbol: '¢',
                },
            },
            texts: {
                and: 'Ja',
                minus: 'Miinus',
                only: 'Ainult',
                point: 'Koma',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Kvadriljon' },
                { number: 1000000000000, value: 'Triljon' },
                { number: 1000000000, value: 'Miljard' },
                { number: 1000000, value: 'Miljon' },
                { number: 1000, value: 'Tuhat' },
                { number: 900, value: 'Üheksasada' },
                { number: 800, value: 'Kaheksasada' },
                { number: 700, value: 'Seitsesada' },
                { number: 600, value: 'Kuussada' },
                { number: 500, value: 'Viissada' },
                { number: 400, value: 'Nelisada' },
                { number: 300, value: 'Kolmsada' },
                { number: 200, value: 'Kakssada' },
                { number: 100, value: 'Sada' },
                { number: 90, value: 'Üheksakümmend' },
                { number: 80, value: 'Kaheksakümmend' },
                { number: 70, value: 'Seitsekümmend' },
                { number: 60, value: 'Kuuskümmend' },
                { number: 50, value: 'Viiskümmend' },
                { number: 40, value: 'Nelikümmend' },
                { number: 30, value: 'Kolmkümmend' },
                { number: 20, value: 'Kakskümmend' },
                { number: 19, value: 'Üheksateist' },
                { number: 18, value: 'Kaheksateist' },
                { number: 17, value: 'Seitseteist' },
                { number: 16, value: 'Kuusteist' },
                { number: 15, value: 'Viisteist' },
                { number: 14, value: 'Neliteist' },
                { number: 13, value: 'Kolmteist' },
                { number: 12, value: 'Kaksteist' },
                { number: 11, value: 'Üksteist' },
                { number: 10, value: 'Kümme' },
                { number: 9, value: 'Üheksa' },
                { number: 8, value: 'Kaheksa' },
                { number: 7, value: 'Seitse' },
                { number: 6, value: 'Kuus' },
                { number: 5, value: 'Viis' },
                { number: 4, value: 'Neli' },
                { number: 3, value: 'Kolm' },
                { number: 2, value: 'Kaks' },
                { number: 1, value: 'Üks' },
                { number: 0, value: 'Null' },
            ],
            ignoreOneForWords: [
                'Sada',
                'Kakssada',
                'Kolmsada',
                'Nelisada',
                'Viissada',
                'Kuussada',
                'Seitsesada',
                'Kaheksasada',
                'Üheksasada',
            ],
            exactWordsMapping: [
                {
                    number: 100,
                    value: 'Ükssada',
                },
            ],
            pluralWords: ['Miljon', 'Miljard', 'Trillion', 'Kvadriljon'],
            pluralMark: 'it',
            onlyInFront: true,
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 8550
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Dirham',
                plural: 'Dirhams',
                singular: 'Dirham',
                symbol: '',
                fractionalUnit: {
                    name: 'Fil',
                    singular: 'Fil',
                    plural: 'Fils',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 98025
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class LocaleEnAU {
    constructor() {
        this.config = {
            currency: {
                name: 'Australian Dollar',
                plural: 'Australian Dollars',
                singular: 'Australian Dollar',
                symbol: '$',
                fractionalUnit: {
                    name: 'Cent',
                    plural: 'Cents',
                    singular: 'Cent',
                    symbol: '¢',
                },
            },
            texts: {
                and: 'and',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One hundred' }],
        };
    }
}
exports["default"] = LocaleEnAU;


/***/ },

/***/ 41061
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Taka',
                plural: 'Taka',
                singular: 'Taka',
                symbol: '৳',
                fractionalUnit: {
                    name: 'Poysha',
                    singular: 'Poysha',
                    plural: 'Poysha',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'Crore' },
                { number: 100000, value: 'Lakh' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 54330
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Pound',
                plural: 'Pounds',
                singular: 'Pound',
                symbol: '£',
                fractionalUnit: {
                    name: 'Pence',
                    plural: 'Pence',
                    singular: 'Penny',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 59096
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Cedi',
                plural: 'Cedis',
                singular: 'Cedi',
                symbol: 'GH¢',
                fractionalUnit: {
                    name: 'Pesewa',
                    singular: 'Pesewa',
                    plural: 'Pesewas',
                    symbol: 'Gp',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 99089
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Euro',
                plural: 'Euros',
                singular: 'Euro',
                symbol: '€',
                fractionalUnit: {
                    name: 'Eurocent',
                    plural: 'Eurocents',
                    singular: 'Eurocent',
                    symbol: '¢',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 144
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Rupee',
                plural: 'Rupees',
                singular: 'Rupee',
                symbol: '₹',
                fractionalUnit: {
                    name: 'Paisa',
                    plural: 'Paise',
                    singular: 'Paisa',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'Crore' },
                { number: 100000, value: 'Lakh' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 88777
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Dirham',
                plural: 'Dirhams',
                singular: 'Dirham',
                symbol: 'MAD',
                fractionalUnit: {
                    name: 'Centime',
                    singular: 'Centime',
                    plural: 'Centimes',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 38765
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Kyat',
                plural: 'Kyats',
                singular: 'Kyat',
                symbol: 'K',
                fractionalUnit: {
                    name: 'Pya',
                    singular: 'Pya',
                    plural: 'Pyas',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 74261
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Rupee',
                plural: 'Rupees',
                singular: 'Rupee',
                symbol: 'Rs',
                fractionalUnit: {
                    name: 'Cent',
                    singular: 'Cent',
                    plural: 'Cents',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'Crore' },
                { number: 100000, value: 'Lakh' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 92952
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Naira',
                plural: 'Naira',
                singular: 'Naira',
                symbol: '₦',
                fractionalUnit: {
                    name: 'Kobo',
                    singular: 'Kobo',
                    plural: 'Kobo',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 26365
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Rupee',
                plural: 'Rupees',
                singular: 'Rupee',
                symbol: '₹',
                fractionalUnit: {
                    name: 'Paisa',
                    singular: 'Paisa',
                    plural: 'Paisa',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 100000000000, value: 'Kharab' },
                { number: 1000000000, value: 'Arab' },
                { number: 10000000, value: 'Crore' },
                { number: 100000, value: 'Lakh' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 28787
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Omani Rial',
                plural: 'Omani Rials',
                singular: 'Omani Rial',
                symbol: 'OMR',
                fractionalUnit: {
                    name: 'Baisa',
                    singular: 'Baisa',
                    plural: 'Baisa',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 82779
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Peso',
                plural: 'Pesos',
                singular: 'Peso',
                symbol: '₱',
                fractionalUnit: {
                    name: 'Cent',
                    singular: 'Cent',
                    plural: 'Cents',
                    symbol: '¢',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 31675
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Riyal',
                plural: 'Riyals',
                singular: 'Riyal',
                symbol: 'SAR',
                fractionalUnit: {
                    name: 'Halalah',
                    singular: 'Halalah',
                    plural: 'Halalahs',
                    symbol: '',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 84463
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Dollar',
                plural: 'Dollars',
                singular: 'Dollar',
                symbol: '$',
                fractionalUnit: {
                    name: 'Cent',
                    plural: 'Cents',
                    singular: 'Cent',
                    symbol: '¢',
                },
            },
            texts: {
                and: 'And',
                minus: 'Minus',
                only: 'Only',
                point: 'Point',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrillion' },
                { number: 1000000000000, value: 'Trillion' },
                { number: 1000000000, value: 'Billion' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Thousand' },
                { number: 100, value: 'Hundred' },
                { number: 90, value: 'Ninety' },
                { number: 80, value: 'Eighty' },
                { number: 70, value: 'Seventy' },
                { number: 60, value: 'Sixty' },
                { number: 50, value: 'Fifty' },
                { number: 40, value: 'Forty' },
                { number: 30, value: 'Thirty' },
                { number: 20, value: 'Twenty' },
                { number: 19, value: 'Nineteen' },
                { number: 18, value: 'Eighteen' },
                { number: 17, value: 'Seventeen' },
                { number: 16, value: 'Sixteen' },
                { number: 15, value: 'Fifteen' },
                { number: 14, value: 'Fourteen' },
                { number: 13, value: 'Thirteen' },
                { number: 12, value: 'Twelve' },
                { number: 11, value: 'Eleven' },
                { number: 10, value: 'Ten' },
                { number: 9, value: 'Nine' },
                { number: 8, value: 'Eight' },
                { number: 7, value: 'Seven' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Five' },
                { number: 4, value: 'Four' },
                { number: 3, value: 'Three' },
                { number: 2, value: 'Two' },
                { number: 1, value: 'One' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [{ number: 100, value: 'One Hundred' }],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 46709
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Peso Argentino',
                plural: 'Pesos Argentinos',
                singular: 'Peso Argentino',
                symbol: '$',
                fractionalUnit: {
                    name: 'Centavo',
                    plural: 'Centavos',
                    singular: 'Centavo',
                    symbol: '¢',
                },
            },
            texts: {
                and: 'Y',
                minus: 'Menos',
                only: '',
                point: 'Coma',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Trillon' },
                { number: 1000000000000, value: 'Billon' },
                { number: 1000000, value: 'Millon' },
                { number: 1000, value: 'Mil' },
                { number: 900, value: 'Novecientos' },
                { number: 800, value: 'Ochocientos' },
                { number: 700, value: 'Setecientos' },
                { number: 600, value: 'Seiscientos' },
                { number: 500, value: 'Quinientos' },
                { number: 400, value: 'Cuatrocientos' },
                { number: 300, value: 'Trescientos' },
                { number: 200, value: 'Doscientos' },
                { number: 100, value: 'Ciento' },
                { number: 90, value: 'Noventa Y' },
                { number: 80, value: 'Ochenta Y' },
                { number: 70, value: 'Setenta Y' },
                { number: 60, value: 'Sesenta Y' },
                { number: 50, value: 'Cincuenta Y' },
                { number: 40, value: 'Cuarenta Y' },
                { number: 30, value: 'Treinta Y' },
                { number: 29, value: 'Veintinueve' },
                { number: 28, value: 'Veintiocho' },
                { number: 27, value: 'Veintisiete' },
                { number: 26, value: 'Veintiseis' },
                { number: 25, value: 'Veinticinco' },
                { number: 24, value: 'Veinticuatro' },
                { number: 23, value: 'Veintitrés' },
                { number: 22, value: 'Veintidos' },
                { number: 21, value: 'Veintiuno' },
                { number: 20, value: 'Veinte' },
                { number: 19, value: 'Diecinueve' },
                { number: 18, value: 'Dieciocho' },
                { number: 17, value: 'Dieciciete' },
                { number: 16, value: 'Dieciseis' },
                { number: 15, value: 'Quince' },
                { number: 14, value: 'Catorce' },
                { number: 13, value: 'Trece' },
                { number: 12, value: 'Doce' },
                { number: 11, value: 'Once' },
                { number: 10, value: 'Diez' },
                { number: 9, value: 'Nueve' },
                { number: 8, value: 'Ocho' },
                { number: 7, value: 'Siete' },
                { number: 6, value: 'Seis' },
                { number: 5, value: 'Cinco' },
                { number: 4, value: 'Cuatro' },
                { number: 3, value: 'Tres' },
                { number: 2, value: 'Dos' },
                { number: 1, value: 'Uno' },
                { number: 0, value: 'Cero' },
            ],
            ignoreOneForWords: [
                'Cien',
                'Ciento',
                'Doscientos',
                'Trescientos',
                'Cuatrocientos',
                'Quinientos',
                'Seiscientos',
                'Setecientos',
                'Ochocientos',
                'Novecientos',
                'Mil',
            ],
            pluralMark: 'es',
            pluralWords: ['Millon', 'Billon', 'Trillon'],
            exactWordsMapping: [
                { number: 100, value: 'Cien' },
                { number: 90, value: 'Noventa' },
                { number: 80, value: 'Ochenta' },
                { number: 70, value: 'Setenta' },
                { number: 60, value: 'Sesenta' },
                { number: 50, value: 'Cincuenta' },
                { number: 40, value: 'Cuarenta' },
                { number: 30, value: 'Treinta' },
                { number: 1, value: ['Un', 'Uno'] },
            ],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 60130
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Euro',
                plural: 'Euros',
                singular: 'Euro',
                symbol: '€',
                fractionalUnit: {
                    name: 'Centimo',
                    plural: 'Centimos',
                    singular: 'Centimo',
                    symbol: '¢',
                },
            },
            texts: {
                and: 'Y',
                minus: 'Menos',
                only: '',
                point: 'Punto',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Trillon' },
                { number: 1000000000000, value: 'Billon' },
                { number: 1000000, value: 'Millon' },
                { number: 1000, value: 'Mil' },
                { number: 900, value: 'Novecientos' },
                { number: 800, value: 'Ochocientos' },
                { number: 700, value: 'Setecientos' },
                { number: 600, value: 'Seiscientos' },
                { number: 500, value: 'Quinientos' },
                { number: 400, value: 'Cuatrocientos' },
                { number: 300, value: 'Trescientos' },
                { number: 200, value: 'Doscientos' },
                { number: 100, value: 'Ciento' },
                { number: 90, value: 'Noventa Y' },
                { number: 80, value: 'Ochenta Y' },
                { number: 70, value: 'Setenta Y' },
                { number: 60, value: 'Sesenta Y' },
                { number: 50, value: 'Cincuenta Y' },
                { number: 40, value: 'Cuarenta Y' },
                { number: 30, value: 'Treinta Y' },
                { number: 29, value: 'Veintinueve' },
                { number: 28, value: 'Veintiocho' },
                { number: 27, value: 'Veintisiete' },
                { number: 26, value: 'Veintiseis' },
                { number: 25, value: 'Veinticinco' },
                { number: 24, value: 'Veinticuatro' },
                { number: 23, value: 'Veintitrés' },
                { number: 22, value: 'Veintidos' },
                { number: 21, value: 'Veintiuno' },
                { number: 20, value: 'Veinte' },
                { number: 19, value: 'Diecinueve' },
                { number: 18, value: 'Dieciocho' },
                { number: 17, value: 'Dieciciete' },
                { number: 16, value: 'Dieciseis' },
                { number: 15, value: 'Quince' },
                { number: 14, value: 'Catorce' },
                { number: 13, value: 'Trece' },
                { number: 12, value: 'Doce' },
                { number: 11, value: 'Once' },
                { number: 10, value: 'Diez' },
                { number: 9, value: 'Nueve' },
                { number: 8, value: 'Ocho' },
                { number: 7, value: 'Siete' },
                { number: 6, value: 'Seis' },
                { number: 5, value: 'Cinco' },
                { number: 4, value: 'Cuatro' },
                { number: 3, value: 'Tres' },
                { number: 2, value: 'Dos' },
                { number: 1, value: 'Uno' },
                { number: 0, value: 'Cero' },
            ],
            ignoreOneForWords: [
                'Cien',
                'Ciento',
                'Doscientos',
                'Trescientos',
                'Cuatrocientos',
                'Quinientos',
                'Seiscientos',
                'Setecientos',
                'Ochocientos',
                'Novecientos',
                'Mil',
            ],
            pluralMark: 'es',
            pluralWords: ['Millon', 'Billon', 'Trillon'],
            exactWordsMapping: [
                { number: 100, value: 'Cien' },
                { number: 90, value: 'Noventa' },
                { number: 80, value: 'Ochenta' },
                { number: 70, value: 'Setenta' },
                { number: 60, value: 'Sesenta' },
                { number: 50, value: 'Cincuenta' },
                { number: 40, value: 'Cuarenta' },
                { number: 30, value: 'Treinta' },
                { number: 1, value: ['Un', 'Uno'] },
            ],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 65903
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Peso Mexicano',
                plural: 'Pesos Mexicanos',
                singular: 'Peso Mexicano',
                symbol: '$',
                fractionalUnit: {
                    name: 'Centavo',
                    plural: 'Centavos',
                    singular: 'Centavo',
                    symbol: '¢',
                },
            },
            texts: {
                and: 'Y',
                minus: 'Menos',
                only: '',
                point: 'Punto',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Trillon' },
                { number: 1000000000000, value: 'Billon' },
                { number: 1000000, value: 'Millon' },
                { number: 1000, value: 'Mil' },
                { number: 900, value: 'Novecientos' },
                { number: 800, value: 'Ochocientos' },
                { number: 700, value: 'Setecientos' },
                { number: 600, value: 'Seiscientos' },
                { number: 500, value: 'Quinientos' },
                { number: 400, value: 'Cuatrocientos' },
                { number: 300, value: 'Trescientos' },
                { number: 200, value: 'Doscientos' },
                { number: 100, value: 'Ciento' },
                { number: 90, value: 'Noventa Y' },
                { number: 80, value: 'Ochenta Y' },
                { number: 70, value: 'Setenta Y' },
                { number: 60, value: 'Sesenta Y' },
                { number: 50, value: 'Cincuenta Y' },
                { number: 40, value: 'Cuarenta Y' },
                { number: 30, value: 'Treinta Y' },
                { number: 29, value: 'Veintinueve' },
                { number: 28, value: 'Veintiocho' },
                { number: 27, value: 'Veintisiete' },
                { number: 26, value: 'Veintiseis' },
                { number: 25, value: 'Veinticinco' },
                { number: 24, value: 'Veinticuatro' },
                { number: 23, value: 'Veintitrés' },
                { number: 22, value: 'Veintidos' },
                { number: 21, value: 'Veintiuno' },
                { number: 20, value: 'Veinte' },
                { number: 19, value: 'Diecinueve' },
                { number: 18, value: 'Dieciocho' },
                { number: 17, value: 'Dieciciete' },
                { number: 16, value: 'Dieciseis' },
                { number: 15, value: 'Quince' },
                { number: 14, value: 'Catorce' },
                { number: 13, value: 'Trece' },
                { number: 12, value: 'Doce' },
                { number: 11, value: 'Once' },
                { number: 10, value: 'Diez' },
                { number: 9, value: 'Nueve' },
                { number: 8, value: 'Ocho' },
                { number: 7, value: 'Siete' },
                { number: 6, value: 'Seis' },
                { number: 5, value: 'Cinco' },
                { number: 4, value: 'Cuatro' },
                { number: 3, value: 'Tres' },
                { number: 2, value: 'Dos' },
                { number: 1, value: 'Uno' },
                { number: 0, value: 'Cero' },
            ],
            ignoreOneForWords: [
                'Cien',
                'Ciento',
                'Doscientos',
                'Trescientos',
                'Cuatrocientos',
                'Quinientos',
                'Seiscientos',
                'Setecientos',
                'Ochocientos',
                'Novecientos',
                'Mil',
            ],
            pluralMark: 'es',
            pluralWords: ['Millon', 'Billon', 'Trillon'],
            exactWordsMapping: [
                { number: 100, value: 'Cien' },
                { number: 90, value: 'Noventa' },
                { number: 80, value: 'Ochenta' },
                { number: 70, value: 'Setenta' },
                { number: 60, value: 'Sesenta' },
                { number: 50, value: 'Cincuenta' },
                { number: 40, value: 'Cuarenta' },
                { number: 30, value: 'Treinta' },
                { number: 1, value: ['Un', 'Uno'] },
            ],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 68224
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Bolivar',
                plural: 'Bolivares',
                singular: 'Bolivar',
                symbol: '',
                fractionalUnit: {
                    name: 'Centimo',
                    plural: 'Centimos',
                    singular: 'Centimo',
                    symbol: '',
                },
            },
            texts: {
                and: 'Con',
                minus: 'Menos',
                only: '',
                point: 'Coma',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Trillon' },
                { number: 1000000000000, value: 'Billon' },
                { number: 1000000, value: 'Millon' },
                { number: 1000, value: 'Mil' },
                { number: 900, value: 'Novecientos' },
                { number: 800, value: 'Ochocientos' },
                { number: 700, value: 'Setecientos' },
                { number: 600, value: 'Seiscientos' },
                { number: 500, value: 'Quinientos' },
                { number: 400, value: 'Cuatrocientos' },
                { number: 300, value: 'Trescientos' },
                { number: 200, value: 'Doscientos' },
                { number: 100, value: 'Ciento' },
                { number: 90, value: 'Noventa Y' },
                { number: 80, value: 'Ochenta Y' },
                { number: 70, value: 'Setenta Y' },
                { number: 60, value: 'Sesenta Y' },
                { number: 50, value: 'Cincuenta Y' },
                { number: 40, value: 'Cuarenta Y' },
                { number: 30, value: 'Treinta Y' },
                { number: 29, value: 'Veintinueve' },
                { number: 28, value: 'Veintiocho' },
                { number: 27, value: 'Veintisiete' },
                { number: 26, value: 'Veintiseis' },
                { number: 25, value: 'Veinticinco' },
                { number: 24, value: 'Veinticuatro' },
                { number: 23, value: 'Veintitrés' },
                { number: 22, value: 'Veintidos' },
                { number: 21, value: 'Veintiuno' },
                { number: 20, value: 'Veinte' },
                { number: 19, value: 'Diecinueve' },
                { number: 18, value: 'Dieciocho' },
                { number: 17, value: 'Dieciciete' },
                { number: 16, value: 'Dieciseis' },
                { number: 15, value: 'Quince' },
                { number: 14, value: 'Catorce' },
                { number: 13, value: 'Trece' },
                { number: 12, value: 'Doce' },
                { number: 11, value: 'Once' },
                { number: 10, value: 'Diez' },
                { number: 9, value: 'Nueve' },
                { number: 8, value: 'Ocho' },
                { number: 7, value: 'Siete' },
                { number: 6, value: 'Seis' },
                { number: 5, value: 'Cinco' },
                { number: 4, value: 'Cuatro' },
                { number: 3, value: 'Tres' },
                { number: 2, value: 'Dos' },
                { number: 1, value: 'Uno' },
                { number: 0, value: 'Cero' },
            ],
            ignoreOneForWords: [
                'Cien',
                'Ciento',
                'Doscientos',
                'Trescientos',
                'Cuatrocientos',
                'Quinientos',
                'Seiscientos',
                'Setecientos',
                'Ochocientos',
                'Novecientos',
                'Mil',
            ],
            pluralMark: 'es',
            pluralWords: ['Millon', 'Billon', 'Trillon'],
            exactWordsMapping: [
                { number: 100, value: 'Cien' },
                { number: 90, value: 'Noventa' },
                { number: 80, value: 'Ochenta' },
                { number: 70, value: 'Setenta' },
                { number: 60, value: 'Sesenta' },
                { number: 50, value: 'Cincuenta' },
                { number: 40, value: 'Cuarenta' },
                { number: 30, value: 'Treinta' },
                { number: 1, value: ['Un', 'Uno'] },
            ],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 10982
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'تومان',
                plural: '',
                singular: '',
                symbol: 'تومان',
                fractionalUnit: {
                    name: '',
                    singular: 'ریال',
                    plural: 'تومان',
                    symbol: '',
                },
            },
            texts: {
                and: 'و',
                minus: 'منفی',
                only: '',
                point: 'و',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'کوادریلیون' },
                { number: 1000000000000, value: 'تیلیارد' },
                { number: 1000000000, value: 'میلیارد' },
                { number: 1000000, value: 'میلیون' },
                { number: 1000, value: 'هزار' },
                { number: 900, value: 'نهصد' },
                { number: 800, value: 'هشتصد' },
                { number: 700, value: 'هفتصد' },
                { number: 600, value: 'ششصد' },
                { number: 500, value: 'پانصد' },
                { number: 400, value: 'چهارصد' },
                { number: 300, value: 'سیصد' },
                { number: 200, value: 'دویست' },
                { number: 100, value: 'صد' },
                { number: 90, value: 'نود' },
                { number: 80, value: 'هشتاد' },
                { number: 70, value: 'هفتاد' },
                { number: 60, value: 'شصت' },
                { number: 50, value: 'پنجاه' },
                { number: 40, value: 'چهل' },
                { number: 30, value: 'سی' },
                { number: 20, value: 'بیست' },
                { number: 19, value: 'نوزده' },
                { number: 18, value: 'هجده' },
                { number: 17, value: 'هفده' },
                { number: 16, value: 'شانزده' },
                { number: 15, value: 'پانزده' },
                { number: 14, value: 'چهارده' },
                { number: 13, value: 'سیزده' },
                { number: 12, value: 'دوازده' },
                { number: 11, value: 'یازده' },
                { number: 10, value: 'ده' },
                { number: 9, value: 'نه' },
                { number: 8, value: 'هشت' },
                { number: 7, value: 'هفت' },
                { number: 6, value: 'شش' },
                { number: 5, value: 'پنج' },
                { number: 4, value: 'چهار' },
                { number: 3, value: 'سه' },
                { number: 2, value: 'دو' },
                { number: 1, value: 'یک' },
                { number: 0, value: 'صفر' },
            ],
            namedLessThan1000: true,
            splitWord: 'و',
            ignoreZeroInDecimals: true,
            decimalLengthWordMapping: {
                1: 'دهم',
                2: 'صدم',
                3: 'هزارم',
                4: 'ده‌هزارم',
                5: 'صد‌هزارم',
                6: 'میلیونیوم',
                7: 'ده‌میلیونیوم',
                8: 'صد‌میلیونیوم',
                9: 'میلیاردیوم',
            },
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 69543
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Euro',
                plural: 'Euros',
                singular: 'Euro',
                symbol: '€',
                fractionalUnit: {
                    name: 'Centime',
                    singular: 'Centime',
                    plural: 'Centimes',
                    symbol: 'Cts',
                },
            },
            texts: {
                and: 'Et',
                minus: 'Moins',
                only: '',
                point: 'Virgule',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Billiard' },
                { number: 1000000000000, value: 'Billion' },
                { number: 1000000000, value: 'Milliard' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Mille' },
                { number: 100, value: 'Cent' },
                { number: 99, value: 'Nonante-Neuf' },
                { number: 98, value: 'Nonante-Huit' },
                { number: 97, value: 'Nonante-Sept' },
                { number: 96, value: 'Nonante-Six' },
                { number: 95, value: 'Nonante-Cinq' },
                { number: 94, value: 'Nonante-Quatre' },
                { number: 93, value: 'Nonante-Trois' },
                { number: 92, value: 'Nonante-Deux' },
                { number: 91, value: 'Nonante-Et-Un' },
                { number: 90, value: 'Nonante' },
                { number: 89, value: 'Quatre-Vingt-Neuf' },
                { number: 88, value: 'Quatre-Vingt-Huit' },
                { number: 87, value: 'Quatre-Vingt-Sept' },
                { number: 86, value: 'Quatre-Vingt-Six' },
                { number: 85, value: 'Quatre-Vingt-Cinq' },
                { number: 84, value: 'Quatre-Vingt-Quatre' },
                { number: 83, value: 'Quatre-Vingt-Trois' },
                { number: 82, value: 'Quatre-Vingt-Deux' },
                { number: 81, value: 'Quatre-Vingt-Un' },
                { number: 80, value: 'Quatre-Vingt' },
                { number: 79, value: 'Septante-Neuf' },
                { number: 78, value: 'Septante-Huit' },
                { number: 77, value: 'Septante-Sept' },
                { number: 76, value: 'Septante-Six' },
                { number: 75, value: 'Septante-Cinq' },
                { number: 74, value: 'Septante-Quatre' },
                { number: 73, value: 'Septante-Trois' },
                { number: 72, value: 'Septante-Deux' },
                { number: 71, value: 'Septante-Et-Un' },
                { number: 70, value: 'Septante' },
                { number: 69, value: 'Soixante-Neuf' },
                { number: 68, value: 'Soixante-Huit' },
                { number: 67, value: 'Soixante-Sept' },
                { number: 66, value: 'Soixante-Six' },
                { number: 65, value: 'Soixante-Cinq' },
                { number: 64, value: 'Soixante-Quatre' },
                { number: 63, value: 'Soixante-Trois' },
                { number: 62, value: 'Soixante-Deux' },
                { number: 61, value: 'Soixante-Et-Un' },
                { number: 60, value: 'Soixante' },
                { number: 59, value: 'Cinquante-Neuf' },
                { number: 58, value: 'Cinquante-Huit' },
                { number: 57, value: 'Cinquante-Sept' },
                { number: 56, value: 'Cinquante-Six' },
                { number: 55, value: 'Cinquante-Cinq' },
                { number: 54, value: 'Cinquante-Quatre' },
                { number: 53, value: 'Cinquante-Trois' },
                { number: 52, value: 'Cinquante-Deux' },
                { number: 51, value: 'Cinquante-Et-Un' },
                { number: 50, value: 'Cinquante' },
                { number: 49, value: 'Quarante-Neuf' },
                { number: 48, value: 'Quarante-Huit' },
                { number: 47, value: 'Quarante-Sept' },
                { number: 46, value: 'Quarante-Six' },
                { number: 45, value: 'Quarante-Cinq' },
                { number: 44, value: 'Quarante-Quatre' },
                { number: 43, value: 'Quarante-Trois' },
                { number: 42, value: 'Quarante-Deux' },
                { number: 41, value: 'Quarante-Et-Un' },
                { number: 40, value: 'Quarante' },
                { number: 39, value: 'Trente-Neuf' },
                { number: 38, value: 'Trente-Huit' },
                { number: 37, value: 'Trente-Sept' },
                { number: 36, value: 'Trente-Six' },
                { number: 35, value: 'Trente-Cinq' },
                { number: 34, value: 'Trente-Quatre' },
                { number: 33, value: 'Trente-Trois' },
                { number: 32, value: 'Trente-Deux' },
                { number: 31, value: 'Trente-Et-Un' },
                { number: 30, value: 'Trente' },
                { number: 29, value: 'Vingt-Neuf' },
                { number: 28, value: 'Vingt-Huit' },
                { number: 27, value: 'Vingt-Sept' },
                { number: 26, value: 'Vingt-Six' },
                { number: 25, value: 'Vingt-Cinq' },
                { number: 24, value: 'Vingt-Quatre' },
                { number: 23, value: 'Vingt-Trois' },
                { number: 22, value: 'Vingt-Deux' },
                { number: 21, value: 'Vingt-Et-Un' },
                { number: 20, value: 'Vingt' },
                { number: 19, value: 'Dix-Neuf' },
                { number: 18, value: 'Dix-Huit' },
                { number: 17, value: 'Dix-Sept' },
                { number: 16, value: 'Seize' },
                { number: 15, value: 'Quinze' },
                { number: 14, value: 'Quatorze' },
                { number: 13, value: 'Treize' },
                { number: 12, value: 'Douze' },
                { number: 11, value: 'Onze' },
                { number: 10, value: 'Dix' },
                { number: 9, value: 'Neuf' },
                { number: 8, value: 'Huit' },
                { number: 7, value: 'Sept' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Cinq' },
                { number: 4, value: 'Quatre' },
                { number: 3, value: 'Trois' },
                { number: 2, value: 'Deux' },
                { number: 1, value: 'Un' },
                { number: 0, value: 'Zéro' },
            ],
            ignoreOneForWords: ['Cent', 'Mille'],
            pluralMark: 's',
            pluralWords: ['Billiard', 'Billion', 'Milliard', 'Million'],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 28834
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Euro',
                plural: 'Euros',
                singular: 'Euro',
                symbol: '€',
                fractionalUnit: {
                    name: 'Centime',
                    singular: 'Centime',
                    plural: 'Centimes',
                    symbol: 'Cts',
                },
            },
            texts: {
                and: 'Et',
                minus: 'Moins',
                only: '',
                point: 'Virgule',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Billiard' },
                { number: 1000000000000, value: 'Billion' },
                { number: 1000000000, value: 'Milliard' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Mille' },
                { number: 100, value: 'Cent' },
                { number: 99, value: 'Quatre-Vingt-Dix-Neuf' },
                { number: 98, value: 'Quatre-Vingt-Dix-Huit' },
                { number: 97, value: 'Quatre-Vingt-Dix-Sept' },
                { number: 96, value: 'Quatre-Vingt-Seize' },
                { number: 95, value: 'Quatre-Vingt-Quinze' },
                { number: 94, value: 'Quatre-Vingt-Quatorze' },
                { number: 93, value: 'Quatre-Vingt-Treize' },
                { number: 92, value: 'Quatre-Vingt-Douze' },
                { number: 91, value: 'Quatre-Vingt-Onze' },
                { number: 90, value: 'Quatre-Vingt-Dix' },
                { number: 89, value: 'Quatre-Vingt-Neuf' },
                { number: 88, value: 'Quatre-Vingt-Huit' },
                { number: 87, value: 'Quatre-Vingt-Sept' },
                { number: 86, value: 'Quatre-Vingt-Six' },
                { number: 85, value: 'Quatre-Vingt-Cinq' },
                { number: 84, value: 'Quatre-Vingt-Quatre' },
                { number: 83, value: 'Quatre-Vingt-Trois' },
                { number: 82, value: 'Quatre-Vingt-Deux' },
                { number: 81, value: 'Quatre-Vingt-Un' },
                { number: 80, value: 'Quatre-Vingt' },
                { number: 79, value: 'Soixante-Dix-Neuf' },
                { number: 78, value: 'Soixante-Dix-Huit' },
                { number: 77, value: 'Soixante-Dix-Sept' },
                { number: 76, value: 'Soixante-Seize' },
                { number: 75, value: 'Soixante-Quinze' },
                { number: 74, value: 'Soixante-Quatorze' },
                { number: 73, value: 'Soixante-Treize' },
                { number: 72, value: 'Soixante-Douze' },
                { number: 71, value: 'Soixante Et Onze' },
                { number: 70, value: 'Soixante-dix' },
                { number: 69, value: 'Soixante-Neuf' },
                { number: 68, value: 'Soixante-Huit' },
                { number: 67, value: 'Soixante-Sept' },
                { number: 66, value: 'Soixante-Six' },
                { number: 65, value: 'Soixante-Cinq' },
                { number: 64, value: 'Soixante-Quatre' },
                { number: 63, value: 'Soixante-Trois' },
                { number: 62, value: 'Soixante-Deux' },
                { number: 61, value: 'Soixante Et Un' },
                { number: 60, value: 'Soixante' },
                { number: 59, value: 'Cinquante-Neuf' },
                { number: 58, value: 'Cinquante-Huit' },
                { number: 57, value: 'Cinquante-Sept' },
                { number: 56, value: 'Cinquante-Six' },
                { number: 55, value: 'Cinquante-Cinq' },
                { number: 54, value: 'Cinquante-Quatre' },
                { number: 53, value: 'Cinquante-Trois' },
                { number: 52, value: 'Cinquante-Deux' },
                { number: 51, value: 'Cinquante Et Un' },
                { number: 50, value: 'Cinquante' },
                { number: 49, value: 'Quarante-Neuf' },
                { number: 48, value: 'Quarante-Huit' },
                { number: 47, value: 'Quarante-Sept' },
                { number: 46, value: 'Quarante-Six' },
                { number: 45, value: 'Quarante-Cinq' },
                { number: 44, value: 'Quarante-Quatre' },
                { number: 43, value: 'Quarante-Trois' },
                { number: 42, value: 'Quarante-Deux' },
                { number: 41, value: 'Quarante Et Un' },
                { number: 40, value: 'Quarante' },
                { number: 39, value: 'Trente-Neuf' },
                { number: 38, value: 'Trente-Huit' },
                { number: 37, value: 'Trente-Sept' },
                { number: 36, value: 'Trente-Six' },
                { number: 35, value: 'Trente-Cinq' },
                { number: 34, value: 'Trente-Quatre' },
                { number: 33, value: 'Trente-Trois' },
                { number: 32, value: 'Trente-Deux' },
                { number: 31, value: 'Trente Et Un' },
                { number: 30, value: 'Trente' },
                { number: 29, value: 'Vingt-Neuf' },
                { number: 28, value: 'Vingt-Huit' },
                { number: 27, value: 'Vingt-Sept' },
                { number: 26, value: 'Vingt-Six' },
                { number: 25, value: 'Vingt-Cinq' },
                { number: 24, value: 'Vingt-Quatre' },
                { number: 23, value: 'Vingt-Trois' },
                { number: 22, value: 'Vingt-Deux' },
                { number: 21, value: 'Vingt Et Un' },
                { number: 20, value: 'Vingt' },
                { number: 19, value: 'Dix-Neuf' },
                { number: 18, value: 'Dix-Huit' },
                { number: 17, value: 'Dix-Sept' },
                { number: 16, value: 'Seize' },
                { number: 15, value: 'Quinze' },
                { number: 14, value: 'Quatorze' },
                { number: 13, value: 'Treize' },
                { number: 12, value: 'Douze' },
                { number: 11, value: 'Onze' },
                { number: 10, value: 'Dix' },
                { number: 9, value: 'Neuf' },
                { number: 8, value: 'Huit' },
                { number: 7, value: 'Sept' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Cinq' },
                { number: 4, value: 'Quatre' },
                { number: 3, value: 'Trois' },
                { number: 2, value: 'Deux' },
                { number: 1, value: 'Un' },
                { number: 0, value: 'Zéro' },
            ],
            ignoreOneForWords: ['Cent', 'Mille'],
            pluralMark: 's',
            pluralWords: ['Billiard', 'Billion', 'Milliard', 'Million'],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 35400
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Dirham',
                plural: 'Dirhams',
                singular: 'Dirham',
                symbol: 'MAD',
                fractionalUnit: {
                    name: 'Centime',
                    singular: 'Centime',
                    plural: 'Centimes',
                    symbol: 'Cts',
                },
            },
            texts: {
                and: 'Et',
                minus: 'Moins',
                only: '',
                point: 'Virgule',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Billiard' },
                { number: 1000000000000, value: 'Billion' },
                { number: 1000000000, value: 'Milliard' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Mille' },
                { number: 100, value: 'Cent' },
                { number: 99, value: 'Quatre-Vingt-Dix-Neuf' },
                { number: 98, value: 'Quatre-Vingt-Dix-Huit' },
                { number: 97, value: 'Quatre-Vingt-Dix-Sept' },
                { number: 96, value: 'Quatre-Vingt-Seize' },
                { number: 95, value: 'Quatre-Vingt-Quinze' },
                { number: 94, value: 'Quatre-Vingt-Quatorze' },
                { number: 93, value: 'Quatre-Vingt-Treize' },
                { number: 92, value: 'Quatre-Vingt-Douze' },
                { number: 91, value: 'Quatre-Vingt-Onze' },
                { number: 90, value: 'Quatre-Vingt-Dix' },
                { number: 89, value: 'Quatre-Vingt-Neuf' },
                { number: 88, value: 'Quatre-Vingt-Huit' },
                { number: 87, value: 'Quatre-Vingt-Sept' },
                { number: 86, value: 'Quatre-Vingt-Six' },
                { number: 85, value: 'Quatre-Vingt-Cinq' },
                { number: 84, value: 'Quatre-Vingt-Quatre' },
                { number: 83, value: 'Quatre-Vingt-Trois' },
                { number: 82, value: 'Quatre-Vingt-Deux' },
                { number: 81, value: 'Quatre-Vingt-Un' },
                { number: 80, value: 'Quatre-Vingt' },
                { number: 79, value: 'Soixante-Dix-Neuf' },
                { number: 78, value: 'Soixante-Dix-Huit' },
                { number: 77, value: 'Soixante-Dix-Sept' },
                { number: 76, value: 'Soixante-Seize' },
                { number: 75, value: 'Soixante-Quinze' },
                { number: 74, value: 'Soixante-Quatorze' },
                { number: 73, value: 'Soixante-Treize' },
                { number: 72, value: 'Soixante-Douze' },
                { number: 71, value: 'Soixante Et Onze' },
                { number: 70, value: 'Soixante-dix' },
                { number: 69, value: 'Soixante-Neuf' },
                { number: 68, value: 'Soixante-Huit' },
                { number: 67, value: 'Soixante-Sept' },
                { number: 66, value: 'Soixante-Six' },
                { number: 65, value: 'Soixante-Cinq' },
                { number: 64, value: 'Soixante-Quatre' },
                { number: 63, value: 'Soixante-Trois' },
                { number: 62, value: 'Soixante-Deux' },
                { number: 61, value: 'Soixante Et Un' },
                { number: 60, value: 'Soixante' },
                { number: 59, value: 'Cinquante-Neuf' },
                { number: 58, value: 'Cinquante-Huit' },
                { number: 57, value: 'Cinquante-Sept' },
                { number: 56, value: 'Cinquante-Six' },
                { number: 55, value: 'Cinquante-Cinq' },
                { number: 54, value: 'Cinquante-Quatre' },
                { number: 53, value: 'Cinquante-Trois' },
                { number: 52, value: 'Cinquante-Deux' },
                { number: 51, value: 'Cinquante Et Un' },
                { number: 50, value: 'Cinquante' },
                { number: 49, value: 'Quarante-Neuf' },
                { number: 48, value: 'Quarante-Huit' },
                { number: 47, value: 'Quarante-Sept' },
                { number: 46, value: 'Quarante-Six' },
                { number: 45, value: 'Quarante-Cinq' },
                { number: 44, value: 'Quarante-Quatre' },
                { number: 43, value: 'Quarante-Trois' },
                { number: 42, value: 'Quarante-Deux' },
                { number: 41, value: 'Quarante Et Un' },
                { number: 40, value: 'Quarante' },
                { number: 39, value: 'Trente-Neuf' },
                { number: 38, value: 'Trente-Huit' },
                { number: 37, value: 'Trente-Sept' },
                { number: 36, value: 'Trente-Six' },
                { number: 35, value: 'Trente-Cinq' },
                { number: 34, value: 'Trente-Quatre' },
                { number: 33, value: 'Trente-Trois' },
                { number: 32, value: 'Trente-Deux' },
                { number: 31, value: 'Trente Et Un' },
                { number: 30, value: 'Trente' },
                { number: 29, value: 'Vingt-Neuf' },
                { number: 28, value: 'Vingt-Huit' },
                { number: 27, value: 'Vingt-Sept' },
                { number: 26, value: 'Vingt-Six' },
                { number: 25, value: 'Vingt-Cinq' },
                { number: 24, value: 'Vingt-Quatre' },
                { number: 23, value: 'Vingt-Trois' },
                { number: 22, value: 'Vingt-Deux' },
                { number: 21, value: 'Vingt Et Un' },
                { number: 20, value: 'Vingt' },
                { number: 19, value: 'Dix-Neuf' },
                { number: 18, value: 'Dix-Huit' },
                { number: 17, value: 'Dix-Sept' },
                { number: 16, value: 'Seize' },
                { number: 15, value: 'Quinze' },
                { number: 14, value: 'Quatorze' },
                { number: 13, value: 'Treize' },
                { number: 12, value: 'Douze' },
                { number: 11, value: 'Onze' },
                { number: 10, value: 'Dix' },
                { number: 9, value: 'Neuf' },
                { number: 8, value: 'Huit' },
                { number: 7, value: 'Sept' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Cinq' },
                { number: 4, value: 'Quatre' },
                { number: 3, value: 'Trois' },
                { number: 2, value: 'Deux' },
                { number: 1, value: 'Un' },
                { number: 0, value: 'Zéro' },
            ],
            ignoreOneForWords: ['Cent', 'Mille'],
            pluralMark: 's',
            pluralWords: ['Billiard', 'Billion', 'Milliard', 'Million'],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 68674
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Riyal',
                plural: 'Riyals',
                singular: 'Riyal',
                symbol: 'SAR',
                fractionalUnit: {
                    name: 'Halala',
                    singular: 'Halala',
                    plural: 'Halalas',
                    symbol: 'Cts',
                },
            },
            texts: {
                and: 'Et',
                minus: 'Moins',
                only: '',
                point: 'Virgule',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Billiard' },
                { number: 1000000000000, value: 'Billion' },
                { number: 1000000000, value: 'Milliard' },
                { number: 1000000, value: 'Million' },
                { number: 1000, value: 'Mille' },
                { number: 100, value: 'Cent' },
                { number: 99, value: 'Quatre-Vingt-Dix-Neuf' },
                { number: 98, value: 'Quatre-Vingt-Dix-Huit' },
                { number: 97, value: 'Quatre-Vingt-Dix-Sept' },
                { number: 96, value: 'Quatre-Vingt-Seize' },
                { number: 95, value: 'Quatre-Vingt-Quinze' },
                { number: 94, value: 'Quatre-Vingt-Quatorze' },
                { number: 93, value: 'Quatre-Vingt-Treize' },
                { number: 92, value: 'Quatre-Vingt-Douze' },
                { number: 91, value: 'Quatre-Vingt-Onze' },
                { number: 90, value: 'Quatre-Vingt-Dix' },
                { number: 89, value: 'Quatre-Vingt-Neuf' },
                { number: 88, value: 'Quatre-Vingt-Huit' },
                { number: 87, value: 'Quatre-Vingt-Sept' },
                { number: 86, value: 'Quatre-Vingt-Six' },
                { number: 85, value: 'Quatre-Vingt-Cinq' },
                { number: 84, value: 'Quatre-Vingt-Quatre' },
                { number: 83, value: 'Quatre-Vingt-Trois' },
                { number: 82, value: 'Quatre-Vingt-Deux' },
                { number: 81, value: 'Quatre-Vingt-Un' },
                { number: 80, value: 'Quatre-Vingt' },
                { number: 79, value: 'Soixante-Dix-Neuf' },
                { number: 78, value: 'Soixante-Dix-Huit' },
                { number: 77, value: 'Soixante-Dix-Sept' },
                { number: 76, value: 'Soixante-Seize' },
                { number: 75, value: 'Soixante-Quinze' },
                { number: 74, value: 'Soixante-Quatorze' },
                { number: 73, value: 'Soixante-Treize' },
                { number: 72, value: 'Soixante-Douze' },
                { number: 71, value: 'Soixante Et Onze' },
                { number: 70, value: 'Soixante-dix' },
                { number: 69, value: 'Soixante-Neuf' },
                { number: 68, value: 'Soixante-Huit' },
                { number: 67, value: 'Soixante-Sept' },
                { number: 66, value: 'Soixante-Six' },
                { number: 65, value: 'Soixante-Cinq' },
                { number: 64, value: 'Soixante-Quatre' },
                { number: 63, value: 'Soixante-Trois' },
                { number: 62, value: 'Soixante-Deux' },
                { number: 61, value: 'Soixante Et Un' },
                { number: 60, value: 'Soixante' },
                { number: 59, value: 'Cinquante-Neuf' },
                { number: 58, value: 'Cinquante-Huit' },
                { number: 57, value: 'Cinquante-Sept' },
                { number: 56, value: 'Cinquante-Six' },
                { number: 55, value: 'Cinquante-Cinq' },
                { number: 54, value: 'Cinquante-Quatre' },
                { number: 53, value: 'Cinquante-Trois' },
                { number: 52, value: 'Cinquante-Deux' },
                { number: 51, value: 'Cinquante Et Un' },
                { number: 50, value: 'Cinquante' },
                { number: 49, value: 'Quarante-Neuf' },
                { number: 48, value: 'Quarante-Huit' },
                { number: 47, value: 'Quarante-Sept' },
                { number: 46, value: 'Quarante-Six' },
                { number: 45, value: 'Quarante-Cinq' },
                { number: 44, value: 'Quarante-Quatre' },
                { number: 43, value: 'Quarante-Trois' },
                { number: 42, value: 'Quarante-Deux' },
                { number: 41, value: 'Quarante Et Un' },
                { number: 40, value: 'Quarante' },
                { number: 39, value: 'Trente-Neuf' },
                { number: 38, value: 'Trente-Huit' },
                { number: 37, value: 'Trente-Sept' },
                { number: 36, value: 'Trente-Six' },
                { number: 35, value: 'Trente-Cinq' },
                { number: 34, value: 'Trente-Quatre' },
                { number: 33, value: 'Trente-Trois' },
                { number: 32, value: 'Trente-Deux' },
                { number: 31, value: 'Trente Et Un' },
                { number: 30, value: 'Trente' },
                { number: 29, value: 'Vingt-Neuf' },
                { number: 28, value: 'Vingt-Huit' },
                { number: 27, value: 'Vingt-Sept' },
                { number: 26, value: 'Vingt-Six' },
                { number: 25, value: 'Vingt-Cinq' },
                { number: 24, value: 'Vingt-Quatre' },
                { number: 23, value: 'Vingt-Trois' },
                { number: 22, value: 'Vingt-Deux' },
                { number: 21, value: 'Vingt Et Un' },
                { number: 20, value: 'Vingt' },
                { number: 19, value: 'Dix-Neuf' },
                { number: 18, value: 'Dix-Huit' },
                { number: 17, value: 'Dix-Sept' },
                { number: 16, value: 'Seize' },
                { number: 15, value: 'Quinze' },
                { number: 14, value: 'Quatorze' },
                { number: 13, value: 'Treize' },
                { number: 12, value: 'Douze' },
                { number: 11, value: 'Onze' },
                { number: 10, value: 'Dix' },
                { number: 9, value: 'Neuf' },
                { number: 8, value: 'Huit' },
                { number: 7, value: 'Sept' },
                { number: 6, value: 'Six' },
                { number: 5, value: 'Cinq' },
                { number: 4, value: 'Quatre' },
                { number: 3, value: 'Trois' },
                { number: 2, value: 'Deux' },
                { number: 1, value: 'Un' },
                { number: 0, value: 'Zéro' },
            ],
            ignoreOneForWords: ['Cent', 'Mille'],
            pluralMark: 's',
            pluralWords: ['Billiard', 'Billion', 'Milliard', 'Million'],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 47229
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'રૂપિયો',
                plural: 'રૂપિયા',
                singular: 'રૂપિયો',
                symbol: '₹',
                fractionalUnit: {
                    name: 'પૈસા',
                    singular: 'પૈસા',
                    plural: 'પૈસા',
                    symbol: '',
                },
            },
            texts: {
                and: 'અને',
                minus: 'ઋણ',
                // only: 'માત્ર',
                only: '',
                point: 'દશાંશ',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'કરોડ' },
                { number: 100000, value: 'લાખ' },
                { number: 1000, value: 'હજાર' },
                { number: 100, value: 'સો' },
                { number: 99, value: 'નવ્વાણું' },
                { number: 98, value: 'અઠ્ઠાણું' },
                { number: 97, value: 'સત્તાણું' },
                { number: 96, value: 'છન્નું' },
                { number: 95, value: 'પંચાણું' },
                { number: 94, value: 'ચોરાણું' },
                { number: 93, value: 'ત્રાણું' },
                { number: 92, value: 'બાણું' },
                { number: 91, value: 'એકાણું' },
                { number: 90, value: 'નેવું' },
                { number: 89, value: 'નેવ્યાસી' },
                { number: 88, value: 'ઈઠ્યાસી' },
                { number: 87, value: 'સિત્યાસી' },
                { number: 86, value: 'છ્યાસી' },
                { number: 85, value: 'પંચ્યાસી' },
                { number: 84, value: 'ચોર્યાસી' },
                { number: 83, value: 'ત્યાસી' },
                { number: 82, value: 'બ્યાસી' },
                { number: 81, value: 'એક્યાસી' },
                { number: 80, value: 'એંસી' },
                { number: 79, value: 'ઓગણાએંસી' },
                { number: 78, value: 'ઇઠ્યોતેર' },
                { number: 77, value: 'સિત્યોતેર' },
                { number: 76, value: 'છોતેર' },
                { number: 75, value: 'પંચોતેર' },
                { number: 74, value: 'ચુમોતેર' },
                { number: 73, value: 'તોતેર' },
                { number: 72, value: 'બોતેર' },
                { number: 71, value: 'એકોતેર' },
                { number: 70, value: 'સિત્તેર' },
                { number: 69, value: 'ઓગણોસિત્તેર' },
                { number: 68, value: 'અડસઠ' },
                { number: 67, value: 'સડસઠ' },
                { number: 66, value: 'છાસઠ' },
                { number: 65, value: 'પાંસઠ' },
                { number: 64, value: 'ચોસઠ' },
                { number: 63, value: 'ત્રેસઠ' },
                { number: 62, value: 'બાસઠ' },
                { number: 61, value: 'એકસઠ' },
                { number: 60, value: 'સાઈઠ' },
                { number: 59, value: 'ઓગણસાઠ' },
                { number: 58, value: 'અઠ્ઠાવન' },
                { number: 57, value: 'સત્તાવન' },
                { number: 56, value: 'છપ્પન' },
                { number: 55, value: 'પંચાવન' },
                { number: 54, value: 'ચોપન' },
                { number: 53, value: 'ત્રેપન' },
                { number: 52, value: 'બાવન' },
                { number: 51, value: 'એકાવન' },
                { number: 50, value: 'પચાસ' },
                { number: 49, value: 'ઓગણપચાસ' },
                { number: 48, value: 'સુડતાલીસ' },
                { number: 47, value: 'સુડતાલીસ' },
                { number: 46, value: 'છેતાલીસ' },
                { number: 45, value: 'પિસ્તાલીસ' },
                { number: 44, value: 'ચુંમાલીસ' },
                { number: 43, value: 'ત્રેતાલીસ' },
                { number: 42, value: 'એકતાલીસ' },
                { number: 41, value: 'એકતાલીસ' },
                { number: 40, value: 'ચાલીસ' },
                { number: 39, value: 'ઓગણચાલીસ' },
                { number: 38, value: 'આડત્રીસ' },
                { number: 37, value: 'સાડત્રીસ' },
                { number: 36, value: 'છત્રીસ' },
                { number: 35, value: 'પાંત્રીસ' },
                { number: 34, value: 'ચોત્રીસ' },
                { number: 33, value: 'તેત્રીસ' },
                { number: 32, value: 'બત્રીસ' },
                { number: 31, value: 'એકત્રીસ' },
                { number: 30, value: 'ત્રીસ' },
                { number: 29, value: 'ઓગણત્રીસ' },
                { number: 28, value: 'અઠ્ઠાવીસ' },
                { number: 27, value: 'સત્તાવીસ' },
                { number: 26, value: 'છવીસ' },
                { number: 25, value: 'પચ્ચીસ' },
                { number: 24, value: 'ચોવીસ' },
                { number: 23, value: 'તેવીસ' },
                { number: 22, value: 'બાવીસ' },
                { number: 21, value: 'એકવીસ' },
                { number: 20, value: 'વીસ' },
                { number: 19, value: 'ઓગણિસ' },
                { number: 18, value: 'અઢાર' },
                { number: 17, value: 'સત્તર' },
                { number: 16, value: 'સોળ' },
                { number: 15, value: 'પંદર' },
                { number: 14, value: 'ચૌદ' },
                { number: 13, value: 'તેર' },
                { number: 12, value: 'બાર' },
                { number: 11, value: 'અગિયાર' },
                { number: 10, value: 'દસ' },
                { number: 9, value: 'નવ' },
                { number: 8, value: 'આઠ' },
                { number: 7, value: 'સાત' },
                { number: 6, value: 'છ' },
                { number: 5, value: 'પાંચ' },
                { number: 4, value: 'ચાર' },
                { number: 3, value: 'ત્રણ' },
                { number: 2, value: 'બે' },
                { number: 1, value: 'એક' },
                { number: 0, value: 'શૂન્ય' },
            ],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 37460
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'रुपया',
                plural: 'रुपये',
                singular: 'रुपया',
                symbol: '₹',
                fractionalUnit: {
                    name: 'पैसा',
                    singular: 'पैसा',
                    plural: 'पैसे',
                    symbol: '',
                },
            },
            texts: {
                and: 'और',
                minus: 'ऋण',
                only: '',
                point: 'दशांश',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'करोड़' },
                { number: 100000, value: 'लाख' },
                { number: 1000, value: 'हज़ार' },
                { number: 100, value: 'सौ' },
                { number: 99, value: 'निन्यानवे' },
                { number: 98, value: 'अट्ठानवे' },
                { number: 97, value: 'सत्तानवे' },
                { number: 96, value: 'छियानवे' },
                { number: 95, value: 'पचानवे' },
                { number: 94, value: 'चौरानवे' },
                { number: 93, value: 'तिरानवे' },
                { number: 92, value: 'बानवे' },
                { number: 91, value: 'इक्यानबे' },
                { number: 90, value: 'नब्बे' },
                { number: 89, value: 'नवासी' },
                { number: 88, value: 'अठासी' },
                { number: 87, value: 'सतासी' },
                { number: 86, value: 'छियासी' },
                { number: 85, value: 'पचासी' },
                { number: 84, value: 'चौरासी' },
                { number: 83, value: 'तिरासी' },
                { number: 82, value: 'बयासी' },
                { number: 81, value: 'इक्यासी' },
                { number: 80, value: 'अस्सी' },
                { number: 79, value: 'उनासी' },
                { number: 78, value: 'अठहत्तर' },
                { number: 77, value: 'सतहत्तर' },
                { number: 76, value: 'छिहत्तर' },
                { number: 75, value: 'पचहत्तर' },
                { number: 74, value: 'चौहत्तर' },
                { number: 73, value: 'तिहत्तर' },
                { number: 72, value: 'बहत्तर' },
                { number: 71, value: 'इकहत्तर' },
                { number: 70, value: 'सत्तर' },
                { number: 69, value: 'उनहत्तर' },
                { number: 68, value: 'अड़सठ' },
                { number: 67, value: 'सड़सठ' },
                { number: 66, value: 'छियासठ' },
                { number: 65, value: 'पैंसठ' },
                { number: 64, value: 'चौंसठ' },
                { number: 63, value: 'तिरसठ' },
                { number: 62, value: 'बासठ' },
                { number: 61, value: 'इकसठ' },
                { number: 60, value: 'साठ' },
                { number: 59, value: 'उनसठ' },
                { number: 58, value: 'अट्ठावन' },
                { number: 57, value: 'सत्तावन' },
                { number: 56, value: 'छप्पन' },
                { number: 55, value: 'पचपन' },
                { number: 54, value: 'चौबन' },
                { number: 53, value: 'तिरेपन' },
                { number: 52, value: 'बावन' },
                { number: 51, value: 'इक्याबन' },
                { number: 50, value: 'पचास' },
                { number: 49, value: 'उनचास' },
                { number: 48, value: 'अड़तालीस' },
                { number: 47, value: 'सैंतालीस' },
                { number: 46, value: 'छियालीस' },
                { number: 45, value: 'पैंतालीस' },
                { number: 44, value: 'चौंतालीस' },
                { number: 43, value: 'तैंतालीस' },
                { number: 42, value: 'बयालीस' },
                { number: 41, value: 'इकतालीस' },
                { number: 40, value: 'चालीस' },
                { number: 39, value: 'उनतालीस' },
                { number: 38, value: 'अड़तीस' },
                { number: 37, value: 'सैंतीस' },
                { number: 36, value: 'छत्तीस' },
                { number: 35, value: 'पैंतीस' },
                { number: 34, value: 'चौंतीस' },
                { number: 33, value: 'तैंतीस' },
                { number: 32, value: 'बत्तीस' },
                { number: 31, value: 'इकतीस' },
                { number: 30, value: 'तीस' },
                { number: 29, value: 'उनतीस' },
                { number: 28, value: 'अट्ठाईस' },
                { number: 27, value: 'सत्ताईस' },
                { number: 26, value: 'छब्बीस' },
                { number: 25, value: 'पच्चीस' },
                { number: 24, value: 'चौबीस' },
                { number: 23, value: 'तेईस' },
                { number: 22, value: 'बाईस' },
                { number: 21, value: 'इक्कीस' },
                { number: 20, value: 'बीस' },
                { number: 19, value: 'उन्नीस' },
                { number: 18, value: 'अठारह' },
                { number: 17, value: 'सत्रह' },
                { number: 16, value: 'सोलह' },
                { number: 15, value: 'पंद्रह' },
                { number: 14, value: 'चौदह' },
                { number: 13, value: 'तेरह' },
                { number: 12, value: 'बारह' },
                { number: 11, value: 'ग्यारह' },
                { number: 10, value: 'दस' },
                { number: 9, value: 'नौ' },
                { number: 8, value: 'आठ' },
                { number: 7, value: 'सात' },
                { number: 6, value: 'छह' },
                { number: 5, value: 'पांच' },
                { number: 4, value: 'चार' },
                { number: 3, value: 'तीन' },
                { number: 2, value: 'दो' },
                { number: 1, value: 'एक' },
                { number: 0, value: 'शून्य' },
            ],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 71545
(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const ar_AE_1 = __importDefault(__webpack_require__(44537));
const ar_MA_1 = __importDefault(__webpack_require__(44585));
const ar_SA_1 = __importDefault(__webpack_require__(38523));
const bn_IN_1 = __importDefault(__webpack_require__(82689));
const ee_EE_1 = __importDefault(__webpack_require__(74938));
const en_AE_1 = __importDefault(__webpack_require__(8550));
const en_AU_1 = __importDefault(__webpack_require__(98025));
const en_BD_1 = __importDefault(__webpack_require__(41061));
const en_GB_1 = __importDefault(__webpack_require__(54330));
const en_GH_1 = __importDefault(__webpack_require__(59096));
const en_IE_1 = __importDefault(__webpack_require__(99089));
const en_IN_1 = __importDefault(__webpack_require__(144));
const en_MA_1 = __importDefault(__webpack_require__(88777));
const en_MM_1 = __importDefault(__webpack_require__(38765));
const en_MU_1 = __importDefault(__webpack_require__(74261));
const en_NG_1 = __importDefault(__webpack_require__(92952));
const en_NP_1 = __importDefault(__webpack_require__(26365));
const en_OM_1 = __importDefault(__webpack_require__(28787));
const en_PH_1 = __importDefault(__webpack_require__(82779));
const en_SA_1 = __importDefault(__webpack_require__(31675));
const en_US_1 = __importDefault(__webpack_require__(84463));
const es_AR_1 = __importDefault(__webpack_require__(46709));
const es_ES_1 = __importDefault(__webpack_require__(60130));
const es_MX_1 = __importDefault(__webpack_require__(65903));
const fa_IR_1 = __importDefault(__webpack_require__(10982));
const fr_BE_1 = __importDefault(__webpack_require__(69543));
const fr_FR_1 = __importDefault(__webpack_require__(28834));
const fr_MA_1 = __importDefault(__webpack_require__(35400));
const fr_SA_1 = __importDefault(__webpack_require__(68674));
const gu_IN_1 = __importDefault(__webpack_require__(47229));
const hi_IN_1 = __importDefault(__webpack_require__(37460));
const kn_IN_1 = __importDefault(__webpack_require__(27002));
const ko_KR_1 = __importDefault(__webpack_require__(58041));
const lv_LV_1 = __importDefault(__webpack_require__(34922));
const mr_IN_1 = __importDefault(__webpack_require__(33972));
const nl_SR_1 = __importDefault(__webpack_require__(55101));
const np_NP_1 = __importDefault(__webpack_require__(35262));
const pt_BR_1 = __importDefault(__webpack_require__(21722));
const tr_TR_1 = __importDefault(__webpack_require__(44130));
const ur_PK_1 = __importDefault(__webpack_require__(56386));
const es_VE_1 = __importDefault(__webpack_require__(68224));
const LOCALES = {
    'ar-AE': ar_AE_1.default,
    'ar-MA': ar_MA_1.default,
    'ar-SA': ar_SA_1.default,
    'bn-IN': bn_IN_1.default,
    'ee-EE': ee_EE_1.default,
    'en-AE': en_AE_1.default,
    'en-AU': en_AU_1.default,
    'en-BD': en_BD_1.default,
    'en-GB': en_GB_1.default,
    'en-GH': en_GH_1.default,
    'en-IE': en_IE_1.default,
    'en-IN': en_IN_1.default,
    'en-MA': en_MA_1.default,
    'en-MM': en_MM_1.default,
    'en-MU': en_MU_1.default,
    'en-NG': en_NG_1.default,
    'en-NP': en_NP_1.default,
    'en-OM': en_OM_1.default,
    'en-PH': en_PH_1.default,
    'en-SA': en_SA_1.default,
    'en-US': en_US_1.default,
    'es-AR': es_AR_1.default,
    'es-ES': es_ES_1.default,
    'es-MX': es_MX_1.default,
    'fa-IR': fa_IR_1.default,
    'fr-BE': fr_BE_1.default,
    'fr-FR': fr_FR_1.default,
    'fr-MA': fr_MA_1.default,
    'fr-SA': fr_SA_1.default,
    'gu-IN': gu_IN_1.default,
    'hi-IN': hi_IN_1.default,
    'kn-IN': kn_IN_1.default,
    'ko-KR': ko_KR_1.default,
    'lv-LV': lv_LV_1.default,
    'mr-IN': mr_IN_1.default,
    'nl-SR': nl_SR_1.default,
    'np-NP': np_NP_1.default,
    'pt-BR': pt_BR_1.default,
    'tr-TR': tr_TR_1.default,
    'ur-PK': ur_PK_1.default,
    'es-VE': es_VE_1.default,
};
exports["default"] = LOCALES;


/***/ },

/***/ 27002
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'ರೂಪಾಯಿ',
                plural: 'ರೂಪಾಯಿಗಳು',
                singular: 'ರೂಪಾಯಿ',
                symbol: '₹',
                fractionalUnit: {
                    name: 'ಪೈಸೆ',
                    singular: 'ಪೈಸೆ',
                    plural: 'ಪೈಸೆಗಳು',
                    symbol: '',
                },
            },
            texts: {
                and: 'ಮತ್ತು',
                minus: 'ಋಣ',
                only: '',
                point: 'ದಶಾಂಶ',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'ಕೋಟಿ' },
                { number: 100000, value: 'ಲಕ್ಷ' },
                { number: 1000, value: 'ಸಾವಿರ' },
                { number: 100, value: 'ನೂರು' },
                { number: 99, value: 'ತೊಂಬತ್ತೊಂಬತ್ತು' },
                { number: 98, value: 'ತೊಂಬತ್ತೆಂಟು' },
                { number: 97, value: 'ತೊಂಬತ್ತೇಳು' },
                { number: 96, value: 'ತೊಂಬತ್ತಾರು' },
                { number: 95, value: 'ತೊಂಬತ್ತೈದು' },
                { number: 94, value: 'ತೊಂಬತ್ತನಾಲ್ಕು' },
                { number: 93, value: 'ತೊಂಬತ್ತಮೂರು' },
                { number: 92, value: 'ತೊಂಬತ್ತೆರಡು' },
                { number: 91, value: 'ತೊಂಬತ್ತೊಂದು' },
                { number: 90, value: 'ತೊಂಬತ್ತು' },
                { number: 89, value: 'ಎಂಭತ್ತೊಂಬತ್ತು' },
                { number: 88, value: 'ಎಂಭತ್ತೆಂಟು' },
                { number: 87, value: 'ಎಂಭತ್ತೇಳು' },
                { number: 86, value: 'ಎಂಭತ್ತಾರು' },
                { number: 85, value: 'ಎಂಭತ್ತೈದು' },
                { number: 84, value: 'ಎಂಭತ್ತನಾಲ್ಕು' },
                { number: 83, value: 'ಎಂಭತ್ತಮೂರು' },
                { number: 82, value: 'ಎಂಭತ್ತೆರಡು' },
                { number: 81, value: 'ಎಂಭತ್ತೊಂದು' },
                { number: 80, value: 'ಎಂಭತ್ತು' },
                { number: 79, value: 'ಎಪ್ಪತ್ತೊಂಬತ್ತು' },
                { number: 78, value: 'ಎಪ್ಪತ್ತೆಂಟು' },
                { number: 77, value: 'ಎಪ್ಪತ್ತೇಳು' },
                { number: 76, value: 'ಎಪ್ಪತ್ತಾರು' },
                { number: 75, value: 'ಎಪ್ಪತ್ತೈದು' },
                { number: 74, value: 'ಎಪ್ಪತ್ತನಾಲ್ಕು' },
                { number: 73, value: 'ಎಪ್ಪತ್ತಮೂರು' },
                { number: 72, value: 'ಎಪ್ಪತ್ತೆರಡು' },
                { number: 71, value: 'ಎಪ್ಪತ್ತೊಂದು' },
                { number: 70, value: 'ಎಪ್ಪತ್ತು' },
                { number: 69, value: 'ಅರುವತ್ತೊಂಬತ್ತು' },
                { number: 68, value: 'ಅರುವತ್ತೆಂಟು' },
                { number: 67, value: 'ಅರುವತ್ತೇಳು' },
                { number: 66, value: 'ಅರುವತ್ತಾರು' },
                { number: 65, value: 'ಅರುವತ್ತೈದು' },
                { number: 64, value: 'ಅರುವತ್ತನಾಲ್ಕು' },
                { number: 63, value: 'ಅರುವತ್ತಮೂರು' },
                { number: 62, value: 'ಅರುವತ್ತೆರಡು' },
                { number: 61, value: 'ಅರುವತ್ತೊಂದು' },
                { number: 60, value: 'ಅರುವತ್ತು' },
                { number: 59, value: 'ಐವತ್ತೊಂಬತ್ತು' },
                { number: 58, value: 'ಐವತ್ತೆಂಟು' },
                { number: 57, value: 'ಐವತ್ತೇಳು' },
                { number: 56, value: 'ಐವತ್ತಾರು' },
                { number: 55, value: 'ಐವತ್ತೈದು' },
                { number: 54, value: 'ಐವತ್ತನಾಲ್ಕು' },
                { number: 53, value: 'ಐವತ್ತಮೂರು' },
                { number: 52, value: 'ಐವತ್ತೆರಡು' },
                { number: 51, value: 'ಐವತ್ತೊಂದು' },
                { number: 50, value: 'ಐವತ್ತು' },
                { number: 49, value: 'ನಲವತ್ತೊಂಬತ್ತು' },
                { number: 48, value: 'ನಲವತ್ತೆಂಟು' },
                { number: 47, value: 'ನಲವತ್ತೇಳು' },
                { number: 46, value: 'ನಲವತ್ತಾರು' },
                { number: 45, value: 'ನಲವತ್ತೈದು' },
                { number: 44, value: 'ನಲವತ್ತನಾಲ್ಕು' },
                { number: 43, value: 'ನಲವತ್ತಮೂರು' },
                { number: 42, value: 'ನಲವತ್ತೆರಡು' },
                { number: 41, value: 'ನಲವತ್ತೊಂದು' },
                { number: 40, value: 'ನಲವತ್ತು' },
                { number: 39, value: 'ಮೂವತ್ತೊಂಬತ್ತು' },
                { number: 38, value: 'ಮೂವತ್ತೆಂಟು' },
                { number: 37, value: 'ಮೂವತ್ತೇಳು' },
                { number: 36, value: 'ಮೂವತ್ತಾರು' },
                { number: 35, value: 'ಮೂವತ್ತೈದು' },
                { number: 34, value: 'ಮೂವತ್ತನಾಲ್ಕು' },
                { number: 33, value: 'ಮೂವತ್ತಮೂರು' },
                { number: 32, value: 'ಮೂವತ್ತೆರಡು' },
                { number: 31, value: 'ಮೂವತ್ತೊಂದು' },
                { number: 30, value: 'ಮೂವತ್ತು' },
                { number: 29, value: 'ಇಪ್ಪತ್ತೊಂಬತ್ತು' },
                { number: 28, value: 'ಇಪ್ಪತ್ತೆಂಟು' },
                { number: 27, value: 'ಇಪ್ಪತ್ತೇಳು' },
                { number: 26, value: 'ಇಪ್ಪತ್ತಾರು' },
                { number: 25, value: 'ಇಪ್ಪತ್ತೈದು' },
                { number: 24, value: 'ಇಪ್ಪತ್ತನಾಲ್ಕು' },
                { number: 23, value: 'ಇಪ್ಪತ್ತಮೂರು' },
                { number: 22, value: 'ಇಪ್ಪತ್ತೆರಡು' },
                { number: 21, value: 'ಇಪ್ಪತ್ತೊಂದು' },
                { number: 20, value: 'ಇಪ್ಪತ್ತು' },
                { number: 19, value: 'ಹತ್ತೊಂಬತ್ತು' },
                { number: 18, value: 'ಹದಿನೆಂಟು' },
                { number: 17, value: 'ಹದಿನೇಳು' },
                { number: 16, value: 'ಹದಿನಾರು' },
                { number: 15, value: 'ಹದಿನೈದು' },
                { number: 14, value: 'ಹದಿನಾಲ್ಕು' },
                { number: 13, value: 'ಹದಿಮೂರು' },
                { number: 12, value: 'ಹನ್ನೆರಡು' },
                { number: 11, value: 'ಹನ್ನೊಂದು' },
                { number: 10, value: 'ಹತ್ತು' },
                { number: 9, value: 'ಒಂಬತ್ತು' },
                { number: 8, value: 'ಎಂಟು' },
                { number: 7, value: 'ಏಳು' },
                { number: 6, value: 'ಆರು' },
                { number: 5, value: 'ಐದು' },
                { number: 4, value: 'ನಾಲ್ಕು' },
                { number: 3, value: 'ಮೂರು' },
                { number: 2, value: 'ಎರಡು' },
                { number: 1, value: 'ಒಂದು' },
                { number: 0, value: 'ಶೂನ್ಯ' },
            ],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 58041
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: '원',
                plural: '원',
                symbol: '',
                fractionalUnit: {
                    name: '',
                    plural: '',
                    symbol: '',
                },
            },
            texts: {
                and: '하고 ',
                minus: '마이너스',
                only: '',
                point: '점',
            },
            trim: true,
            numberWordsMapping: [
                { number: 1000000000000, value: '조' },
                { number: 100000000, value: '억' },
                { number: 10000, value: '만' },
                { number: 1000, value: '천' },
                { number: 100, value: '백' },
                { number: 90, value: '구십' },
                { number: 80, value: '팔십' },
                { number: 70, value: '칠십' },
                { number: 60, value: '육십' },
                { number: 50, value: '오십' },
                { number: 40, value: '사십' },
                { number: 30, value: '삼십' },
                { number: 20, value: '이십' },
                { number: 19, value: '십구' },
                { number: 18, value: '십팔' },
                { number: 17, value: '십칠' },
                { number: 16, value: '십육' },
                { number: 15, value: '십오' },
                { number: 14, value: '십사' },
                { number: 13, value: '십삼' },
                { number: 12, value: '십이' },
                { number: 11, value: '십일' },
                { number: 10, value: '십' },
                { number: 9, value: '구' },
                { number: 8, value: '팔' },
                { number: 7, value: '칠' },
                { number: 6, value: '육' },
                { number: 5, value: '오' },
                { number: 4, value: '사' },
                { number: 3, value: '삼' },
                { number: 2, value: '이' },
                { number: 1, value: '일' },
                { number: 0, value: '영' },
            ],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 34922
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'eiro',
                plural: 'eiro',
                symbol: '€',
                fractionalUnit: {
                    name: 'cents',
                    plural: 'centi',
                    symbol: '',
                },
            },
            texts: {
                and: 'un',
                minus: 'mīnus',
                only: '',
                point: 'komats',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'kvadriljon' },
                { number: 1000000000000, value: 'triljon' },
                { number: 1000000000, value: 'miljard' },
                { number: 1000000, value: 'miljoni', singularValue: 'miljons' },
                { number: 1000, value: 'tūkstoši', singularValue: 'tūkstotis' },
                { number: 900, value: 'deviņi simti' },
                { number: 800, value: 'astoņi simti' },
                { number: 700, value: 'septiņi simti' },
                { number: 600, value: 'seši simti' },
                { number: 500, value: 'pieci simti' },
                { number: 400, value: 'četri simti' },
                { number: 300, value: 'trīs simti' },
                { number: 200, value: 'divi simti' },
                { number: 100, value: 'simtu' },
                { number: 90, value: 'deviņdesmit' },
                { number: 80, value: 'astoņdesmit' },
                { number: 70, value: 'septiņdesmit' },
                { number: 60, value: 'sešdesmit' },
                { number: 50, value: 'piecdesmit' },
                { number: 40, value: 'četrdesmit' },
                { number: 30, value: 'trīsdesmit' },
                { number: 20, value: 'divdesmit' },
                { number: 19, value: 'deviņpadsmit' },
                { number: 18, value: 'astoņpadsmit' },
                { number: 17, value: 'septiņpadsmit' },
                { number: 16, value: 'sešpadsmit' },
                { number: 15, value: 'piecpadsmit' },
                { number: 14, value: 'četrdpadsmit' },
                { number: 13, value: 'trīspadsmit' },
                { number: 12, value: 'divpadsmit' },
                { number: 11, value: 'vienpadsmit' },
                { number: 10, value: 'desmit' },
                { number: 9, value: 'deviņi' },
                { number: 8, value: 'astoņi' },
                { number: 7, value: 'septiņi' },
                { number: 6, value: 'seši' },
                { number: 5, value: 'pieci' },
                { number: 4, value: 'četri' },
                { number: 3, value: 'trīs' },
                { number: 2, value: 'divi' },
                { number: 1, value: 'viens' },
                { number: 0, value: 'nulle' },
            ],
            ignoreOneForWords: [
                'simtu',
                'divi simti',
                'trīs simti',
                'četri simti',
                'pieci simti',
                'seši simti',
                'septiņi simti',
                'astoņi simti',
                'deviņi simti',
            ],
            exactWordsMapping: [{ number: 100, value: 'Simtu' }],
            pluralMark: 'i',
            pluralWords: ['kvadriljon', 'triljon', 'miljard'],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 33972
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'रुपया',
                plural: 'रुपये',
                singular: 'रुपया',
                symbol: '₹',
                fractionalUnit: {
                    name: 'पैसा',
                    singular: 'पैसा',
                    plural: 'पैसे',
                    symbol: '',
                },
            },
            texts: {
                and: 'आणि',
                minus: 'वजा',
                only: '',
                point: 'पूर्णांक',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'कोटी' },
                { number: 100000, value: 'लाख' },
                { number: 1000, value: 'हजार' },
                { number: 900, value: 'नऊशे' },
                { number: 800, value: 'आठशे' },
                { number: 700, value: 'सातशे' },
                { number: 600, value: 'सहाशे' },
                { number: 500, value: 'पाचशे' },
                { number: 400, value: 'चारशे' },
                { number: 300, value: 'तीनशे' },
                { number: 200, value: 'दोनशे' },
                { number: 100, value: 'एकशे' },
                { number: 99, value: 'नव्व्याण्णव' },
                { number: 98, value: 'अठ्ठ्याण्णव' },
                { number: 97, value: 'सत्त्याण्णव' },
                { number: 96, value: 'शहाण्णव' },
                { number: 95, value: 'पंच्याण्णव' },
                { number: 94, value: 'चौऱ्याण्णव' },
                { number: 93, value: 'त्र्याण्णव' },
                { number: 92, value: 'ब्याण्णव' },
                { number: 91, value: 'एक्क्याण्णव' },
                { number: 90, value: 'नव्वद' },
                { number: 89, value: 'एकोणनव्वद' },
                { number: 88, value: 'अठ्ठ्याऐंशी' },
                { number: 87, value: 'सत्त्याऐंशी' },
                { number: 86, value: 'शहाऐंशी' },
                { number: 85, value: 'पंच्याऐंशी' },
                { number: 84, value: 'चौऱ्याऐंशी' },
                { number: 83, value: 'त्र्याऐंशी' },
                { number: 82, value: 'ब्याऐंशी' },
                { number: 81, value: 'एक्क्याऐंशी' },
                { number: 80, value: 'ऐंशी' },
                { number: 79, value: 'एकोणऐंशी' },
                { number: 78, value: 'अठ्ठ्याहत्तर' },
                { number: 77, value: 'सत्याहत्तर' },
                { number: 76, value: 'शहात्तर' },
                { number: 75, value: 'पंच्याहत्तर' },
                { number: 74, value: 'चौर्‍याहत्तर' },
                { number: 73, value: 'त्र्याहत्तर' },
                { number: 72, value: 'बाहत्तर' },
                { number: 71, value: 'एक्काहत्तर' },
                { number: 70, value: 'सत्तर' },
                { number: 69, value: 'एकोणसत्तर' },
                { number: 68, value: 'अडुसष्ठ' },
                { number: 67, value: 'सदुसष्ठ' },
                { number: 66, value: 'सहासष्ठ' },
                { number: 65, value: 'पासष्ठ' },
                { number: 64, value: 'चौसष्ठ' },
                { number: 63, value: 'त्रेसष्ठ' },
                { number: 62, value: 'बासष्ठ' },
                { number: 61, value: 'एकसष्ठ' },
                { number: 60, value: 'साठ' },
                { number: 59, value: 'एकोणसाठ' },
                { number: 58, value: 'अठ्ठावन्न' },
                { number: 57, value: 'सत्तावन्न' },
                { number: 56, value: 'छप्पन्न' },
                { number: 55, value: 'पंचावन्न' },
                { number: 54, value: 'चोपन्न' },
                { number: 53, value: 'त्रेपन्न' },
                { number: 52, value: 'बावन्न' },
                { number: 51, value: 'एक्कावन्न' },
                { number: 50, value: 'पन्नास' },
                { number: 49, value: 'एकोणपन्नास' },
                { number: 48, value: 'अठ्ठेचाळीस' },
                { number: 47, value: 'सत्तेचाळीस' },
                { number: 46, value: 'सेहेचाळीस' },
                { number: 45, value: 'पंचेचाळीस' },
                { number: 44, value: 'चव्वेचाळीस' },
                { number: 43, value: 'त्रेचाळीस' },
                { number: 42, value: 'बेचाळीस' },
                { number: 41, value: 'एक्केचाळीस' },
                { number: 40, value: 'चाळीस' },
                { number: 39, value: 'एकोणचाळीस' },
                { number: 38, value: 'अडतीस' },
                { number: 37, value: 'सदतीस' },
                { number: 36, value: 'छत्तीस' },
                { number: 35, value: 'पस्तीस' },
                { number: 34, value: 'चौतीस' },
                { number: 33, value: 'तेहेतीस' },
                { number: 32, value: 'बत्तीस' },
                { number: 31, value: 'एकतीस' },
                { number: 30, value: 'तीस' },
                { number: 29, value: 'एकोणतीस' },
                { number: 28, value: 'अठ्ठावीस' },
                { number: 27, value: 'सत्तावीस' },
                { number: 26, value: 'सव्वीस' },
                { number: 25, value: 'पंचवीस' },
                { number: 24, value: 'चोवीस' },
                { number: 23, value: 'तेवीस' },
                { number: 22, value: 'बावीस' },
                { number: 21, value: 'एकवीस' },
                { number: 20, value: 'वीस' },
                { number: 19, value: 'एकोणीस' },
                { number: 18, value: 'अठरा' },
                { number: 17, value: 'सतरा' },
                { number: 16, value: 'सोळा' },
                { number: 15, value: 'पंधरा' },
                { number: 14, value: 'चौदा' },
                { number: 13, value: 'तेरा' },
                { number: 12, value: 'बारा' },
                { number: 11, value: 'अकरा' },
                { number: 10, value: 'दहा' },
                { number: 9, value: 'नऊ' },
                { number: 8, value: 'आठ' },
                { number: 7, value: 'सात' },
                { number: 6, value: 'सहा' },
                { number: 5, value: 'पाच' },
                { number: 4, value: 'चार' },
                { number: 3, value: 'तीन' },
                { number: 2, value: 'दोन' },
                { number: 1, value: 'एक' },
                { number: 0, value: 'शून्य' },
            ],
            namedLessThan1000: true,
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 55101
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Surinaamse dollar',
                plural: 'Surinaamse dollars',
                singular: 'Surinaamse dollar',
                symbol: 'SRD',
                fractionalUnit: {
                    name: 'Cent',
                    singular: 'Cent',
                    plural: 'Centen',
                    symbol: 'SRD',
                },
            },
            texts: {
                and: 'En',
                minus: 'Negatief',
                only: '',
                point: 'Punt',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Biljard' },
                { number: 1000000000000, value: 'Biljoen' },
                { number: 1000000000, value: 'Miljard' },
                { number: 1000000, value: 'Miljoen' },
                { number: 1000, value: 'Duizend' },
                { number: 100, value: 'Honderd' },
                { number: 99, value: 'Negenennegentig' },
                { number: 98, value: 'Achtennegentig' },
                { number: 97, value: 'Zevenennegentig' },
                { number: 96, value: 'Zesennegentig' },
                { number: 95, value: 'Vijfennegentig' },
                { number: 94, value: 'Vierennegentig' },
                { number: 93, value: 'Drieënnegentig' },
                { number: 92, value: 'Tweeënnegentig' },
                { number: 91, value: 'Eenennegentig' },
                { number: 90, value: 'Negentig' },
                { number: 89, value: 'Negenentachtig' },
                { number: 88, value: 'Achtentachtig' },
                { number: 87, value: 'Zevenentachtig' },
                { number: 86, value: 'Zesentachtig' },
                { number: 85, value: 'Vijfentachtig' },
                { number: 84, value: 'Vierentachtig' },
                { number: 83, value: 'Drieëntachtig' },
                { number: 82, value: 'Tweeëntachtig' },
                { number: 81, value: 'Eenentachtig' },
                { number: 80, value: 'Tachtig' },
                { number: 79, value: 'Negenenzeventig' },
                { number: 78, value: 'Achtenzeventig' },
                { number: 77, value: 'Zevenenzeventig' },
                { number: 76, value: 'Zesenzeventig' },
                { number: 75, value: 'Vijfenzeventig' },
                { number: 74, value: 'Vierenzeventig' },
                { number: 73, value: 'Drieënzeventig' },
                { number: 72, value: 'Tweeënzeventig' },
                { number: 71, value: 'Eenenzeventig' },
                { number: 70, value: 'Zeventig' },
                { number: 69, value: 'Negenenzestig' },
                { number: 68, value: 'Achtenzestig' },
                { number: 67, value: 'Zevenenzestig' },
                { number: 66, value: 'Zesenzestig' },
                { number: 65, value: 'Vijfenzestig' },
                { number: 64, value: 'Vierenzestig' },
                { number: 63, value: 'Drieënzestig' },
                { number: 62, value: 'Tweeënzestig' },
                { number: 61, value: 'Eenenzestig' },
                { number: 60, value: 'Zestig' },
                { number: 59, value: 'Negenenvijftig' },
                { number: 58, value: 'Achtenvijftig' },
                { number: 57, value: 'Zevenenvijftig' },
                { number: 56, value: 'Zesenvijftig' },
                { number: 55, value: 'Vijfenvijftig' },
                { number: 54, value: 'Vierenvijftig' },
                { number: 53, value: 'Drieënvijftig' },
                { number: 52, value: 'Tweeënvijftig' },
                { number: 51, value: 'Eenenvijftig' },
                { number: 50, value: 'Vijftig' },
                { number: 49, value: 'Negenenveertig' },
                { number: 48, value: 'Achtenveertig' },
                { number: 47, value: 'Zevenenveertig' },
                { number: 46, value: 'Zesenveertig' },
                { number: 45, value: 'Vijfenveertig' },
                { number: 44, value: 'Vierenveertig' },
                { number: 43, value: 'Drieënveertig' },
                { number: 42, value: 'Tweeënveertig' },
                { number: 41, value: 'Eenenveertig' },
                { number: 40, value: 'Veertig' },
                { number: 39, value: 'Negenendertig' },
                { number: 38, value: 'Achtendertig' },
                { number: 37, value: 'Zevenendertig' },
                { number: 36, value: 'Zesendertig' },
                { number: 35, value: 'Vijfendertig' },
                { number: 34, value: 'Vierendertig' },
                { number: 33, value: 'Drieëndertig' },
                { number: 32, value: 'Tweeëndertig' },
                { number: 31, value: 'Eenendertig' },
                { number: 30, value: 'Dertig' },
                { number: 29, value: 'Negenentwintig' },
                { number: 28, value: 'Achtentwintig' },
                { number: 27, value: 'Zevenentwintig' },
                { number: 26, value: 'Zesentwintig' },
                { number: 25, value: 'Vijfentwintig' },
                { number: 24, value: 'Vierentwintig' },
                { number: 23, value: 'Drieëntwintig' },
                { number: 22, value: 'Tweeëntwintig' },
                { number: 21, value: 'Eenentwintig' },
                { number: 20, value: 'Twintig' },
                { number: 19, value: 'Negentien' },
                { number: 18, value: 'Achttien' },
                { number: 17, value: 'Zeventien' },
                { number: 16, value: 'Zestien' },
                { number: 15, value: 'Vijftien' },
                { number: 14, value: 'Veertien' },
                { number: 13, value: 'Dertien' },
                { number: 12, value: 'Twaalf' },
                { number: 11, value: 'Elf' },
                { number: 10, value: 'Tien' },
                { number: 9, value: 'Negen' },
                { number: 8, value: 'Acht' },
                { number: 7, value: 'Zeven' },
                { number: 6, value: 'Zes' },
                { number: 5, value: 'Vijf' },
                { number: 4, value: 'Vier' },
                { number: 3, value: 'Drie' },
                { number: 2, value: 'Twee' },
                { number: 1, value: 'Een' },
                { number: 0, value: 'Nul' },
            ],
            exactWordsMapping: [{ number: 100, value: 'Honderd' }],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 35262
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'रुपैयाँ',
                plural: 'रुपैयाँ',
                singular: 'रुपैयाँ',
                symbol: 'रु',
                fractionalUnit: {
                    name: 'पैसा',
                    singular: 'पैसा',
                    plural: 'पैसा',
                    symbol: '',
                },
            },
            texts: {
                and: 'र',
                minus: 'माइनस',
                only: 'मात्र',
                point: 'दशमलब',
            },
            numberWordsMapping: [
                { number: 100000000000, value: 'खर्ब' },
                { number: 1000000000, value: 'अर्ब' },
                { number: 10000000, value: 'करोड' },
                { number: 100000, value: 'लाख' },
                { number: 1000, value: 'हजार' },
                { number: 100, value: 'सय' },
                { number: 99, value: 'उनान्सय' },
                { number: 98, value: 'अन्ठानब्बे' },
                { number: 97, value: 'सन्तानब्बे' },
                { number: 96, value: 'छयानब्बे' },
                { number: 95, value: 'पन्चानब्बे' },
                { number: 94, value: 'चौरानब्बे' },
                { number: 93, value: 'त्रियानब्बे' },
                { number: 92, value: 'बयान्नब्बे' },
                { number: 91, value: 'एकानब्बे' },
                { number: 90, value: 'नब्बे' },
                { number: 89, value: 'उनान्नब्बे' },
                { number: 88, value: 'अठासी' },
                { number: 87, value: 'सतासी' },
                { number: 86, value: 'छयासी' },
                { number: 85, value: 'पचासी' },
                { number: 84, value: 'चौरासी' },
                { number: 83, value: 'त्रियासी' },
                { number: 82, value: 'बयासी' },
                { number: 81, value: 'एकासी' },
                { number: 80, value: 'अस्सी' },
                { number: 79, value: 'उनासी' },
                { number: 78, value: 'अठहत्तर' },
                { number: 77, value: 'सतहत्तर' },
                { number: 76, value: 'छयहत्तर' },
                { number: 75, value: 'पचहत्तर' },
                { number: 74, value: 'चौहत्तर' },
                { number: 73, value: 'त्रिहत्तर' },
                { number: 72, value: 'बहत्तर' },
                { number: 71, value: 'एकहत्तर' },
                { number: 70, value: 'सत्तरी' },
                { number: 69, value: 'उनन्सत्तरी' },
                { number: 68, value: 'अठसट्ठी' },
                { number: 67, value: 'सड्सट्ठी' },
                { number: 66, value: 'छैंसट्ठी' },
                { number: 65, value: 'पैंसट्ठी' },
                { number: 64, value: 'चौंसट्ठी' },
                { number: 63, value: 'त्रिसट्ठी' },
                { number: 62, value: 'बइसट्ठी' },
                { number: 61, value: 'एकसट्ठी' },
                { number: 60, value: 'साठी' },
                { number: 59, value: 'उनन्साठी' },
                { number: 58, value: 'अन्ठाउन्न' },
                { number: 57, value: 'सन्ताउन्न' },
                { number: 56, value: 'छपन्न' },
                { number: 55, value: 'पचपन्न' },
                { number: 54, value: 'चवन्न' },
                { number: 53, value: 'त्रिपन्न' },
                { number: 52, value: 'बाउन्न' },
                { number: 51, value: 'एकाउन्न' },
                { number: 50, value: 'पचास' },
                { number: 49, value: 'उनन्चास' },
                { number: 48, value: 'अठचालीस' },
                { number: 47, value: 'सट्चालीस' },
                { number: 46, value: 'छयालीस' },
                { number: 45, value: 'पैंतालीस' },
                { number: 44, value: 'चवालीस' },
                { number: 43, value: 'त्रिचालीस' },
                { number: 42, value: 'बयालीस' },
                { number: 41, value: 'एकचालीस' },
                { number: 40, value: 'चालीस' },
                { number: 39, value: 'उनन्चालीस' },
                { number: 38, value: 'अठतीस' },
                { number: 37, value: 'सैंतीस' },
                { number: 36, value: 'छत्तीस' },
                { number: 35, value: 'पैंतीस' },
                { number: 34, value: 'चौँतीस' },
                { number: 33, value: 'तेत्तीस' },
                { number: 32, value: 'बत्तीस' },
                { number: 31, value: 'एकतीस' },
                { number: 30, value: 'तीस' },
                { number: 29, value: 'उनन्तिस' },
                { number: 28, value: 'अठ्ठाइस' },
                { number: 27, value: 'सत्ताइस' },
                { number: 26, value: 'छब्बिस' },
                { number: 25, value: 'पच्चिस' },
                { number: 24, value: 'चौबीस' },
                { number: 23, value: 'तेइस' },
                { number: 22, value: 'बाइस' },
                { number: 21, value: 'एक्काइस' },
                { number: 20, value: 'बीस' },
                { number: 19, value: 'उन्नाइस' },
                { number: 18, value: 'अठार' },
                { number: 17, value: 'सत्र' },
                { number: 16, value: 'सोह्र' },
                { number: 15, value: 'पन्ध्र' },
                { number: 14, value: 'चौध' },
                { number: 13, value: 'तेह्र' },
                { number: 12, value: 'बाह्र' },
                { number: 11, value: 'एघार' },
                { number: 10, value: 'दश' },
                { number: 9, value: 'नौ' },
                { number: 8, value: 'आठ' },
                { number: 7, value: 'सात' },
                { number: 6, value: 'छ' },
                { number: 5, value: 'पाँच' },
                { number: 4, value: 'चार' },
                { number: 3, value: 'तीन' },
                { number: 2, value: 'दुई' },
                { number: 1, value: 'एक' },
                { number: 0, value: 'शून्य' },
            ],
            exactWordsMapping: [{ number: 100, value: 'एक सय' }],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 21722
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'Real',
                plural: 'Reais',
                singular: 'Real',
                symbol: 'R$',
                fractionalUnit: {
                    name: 'Centavo',
                    singular: 'Centavo',
                    plural: 'Centavos',
                    symbol: '',
                },
            },
            texts: {
                and: 'E',
                minus: 'Menos',
                only: '',
                point: 'Vírgula',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'Quadrilhões' },
                { number: 1000000000000, value: 'Trilhões' },
                { number: 1000000000, value: 'Bilhões' },
                { number: 1000000, value: 'Milhões' },
                { number: 1000, value: 'Mil' },
                { number: 900, value: 'Novecentos' },
                { number: 800, value: 'Oitocentos' },
                { number: 700, value: 'Setecentos' },
                { number: 600, value: 'Seiscentos' },
                { number: 500, value: 'Quinhentos' },
                { number: 400, value: 'Quatrocentos' },
                { number: 300, value: 'Trezentos' },
                { number: 200, value: 'Duzentos' },
                { number: 100, value: 'Cento' },
                { number: 90, value: 'Noventa' },
                { number: 80, value: 'Oitenta' },
                { number: 70, value: 'Setenta' },
                { number: 60, value: 'Sessenta' },
                { number: 50, value: 'Cinquenta' },
                { number: 40, value: 'Quarenta' },
                { number: 30, value: 'Trinta' },
                { number: 20, value: 'Vinte' },
                { number: 19, value: 'Dezenove' },
                { number: 18, value: 'Dezoito' },
                { number: 17, value: 'Dezesete' },
                { number: 16, value: 'Dezesseis' },
                { number: 15, value: 'Quinze' },
                { number: 14, value: 'Quatorze' },
                { number: 13, value: 'Treze' },
                { number: 12, value: 'Doze' },
                { number: 11, value: 'Onze' },
                { number: 10, value: 'Dez' },
                { number: 9, value: 'Nove' },
                { number: 8, value: 'Oito' },
                { number: 7, value: 'Sete' },
                { number: 6, value: 'Seis' },
                { number: 5, value: 'Cinco' },
                { number: 4, value: 'Quatro' },
                { number: 3, value: 'Três' },
                { number: 2, value: 'Dois' },
                { number: 1, value: 'Um' },
                { number: 0, value: 'Zero' },
            ],
            exactWordsMapping: [
                { number: 100, value: 'Cem' },
                { number: 1000000000000000, value: 'Um Quadrilhão' },
                { number: 1000000000000, value: 'Um Trilhão' },
                { number: 1000000000, value: 'Um Bilhão' },
                { number: 1000000, value: 'Um Milhão' },
            ],
            ignoreOneForWords: [
                'Mil',
                'Novecentos',
                'Oitocentos',
                'Setecentos',
                'Seiscentos',
                'Quinhentos',
                'Quatrocentos',
                'Trezentos',
                'Duzentos',
                'Cento',
            ],
            splitWord: 'E',
            noSplitWordAfter: ['Mil', 'Milhões', 'Bilhões', 'Trilhões', 'Quadrilhões'],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 44130
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'lira',
                plural: '',
                singular: '',
                symbol: '₺',
                fractionalUnit: {
                    name: '',
                    singular: 'lira',
                    plural: 'lira',
                    symbol: '',
                },
            },
            texts: {
                and: 'virgül',
                minus: 'eksi',
                only: '',
                point: 'virgül',
            },
            numberWordsMapping: [
                { number: 1000000000000000, value: 'katrilyon' },
                { number: 1000000000000, value: 'trilyon' },
                { number: 1000000000, value: 'milyar' },
                { number: 1000000, value: 'milyon' },
                { number: 1000, value: 'bin' },
                { number: 900, value: 'dokuz yüz' },
                { number: 800, value: 'sekiz yüz' },
                { number: 700, value: 'yedi yüz' },
                { number: 600, value: 'altı yüz' },
                { number: 500, value: 'beş yüz' },
                { number: 400, value: 'dört yüz' },
                { number: 300, value: 'üç yüz' },
                { number: 200, value: 'iki yüz' },
                { number: 100, value: 'yüz' },
                { number: 90, value: 'doksan' },
                { number: 80, value: 'seksen' },
                { number: 70, value: 'yetmiş' },
                { number: 60, value: 'altmış' },
                { number: 50, value: 'elli' },
                { number: 40, value: 'kırk' },
                { number: 30, value: 'otuz' },
                { number: 20, value: 'yirmi' },
                { number: 19, value: 'on dokuz' },
                { number: 18, value: 'on sekiz' },
                { number: 17, value: 'on yedi' },
                { number: 16, value: 'on altı' },
                { number: 15, value: 'on beş' },
                { number: 14, value: 'on dört' },
                { number: 13, value: 'on üç' },
                { number: 12, value: 'on iki' },
                { number: 11, value: 'on bir' },
                { number: 10, value: 'on' },
                { number: 9, value: 'dokuz' },
                { number: 8, value: 'sekiz' },
                { number: 7, value: 'yedi' },
                { number: 6, value: 'altı' },
                { number: 5, value: 'beş' },
                { number: 4, value: 'dört' },
                { number: 3, value: 'üç' },
                { number: 2, value: 'iki' },
                { number: 1, value: 'bir' },
                { number: 0, value: 'sıfır' },
            ],
            namedLessThan1000: true,
            ignoreZeroInDecimals: true,
            decimalLengthWordMapping: {
                1: 'onuncu',
                2: 'yüzüncü',
                3: 'bininci',
                4: 'on bininci',
                5: 'yüz bininci',
                6: 'on milyonuncu',
                7: 'milyonuncu',
                8: 'yüz milyonuncu',
            },
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 56386
(__unused_webpack_module, exports) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Locale {
    constructor() {
        this.config = {
            currency: {
                name: 'روپیہ',
                plural: 'روپے',
                singular: 'روپے',
                symbol: '₨',
                fractionalUnit: {
                    name: 'پیسہ',
                    plural: 'پیسے',
                    singular: 'پیسہ',
                    symbol: '',
                },
            },
            texts: {
                and: 'اور',
                minus: 'منفی',
                only: 'صرف',
                point: 'اعشاریہ',
            },
            numberWordsMapping: [
                { number: 10000000, value: 'کروڑ' },
                { number: 100000, value: 'لاکھ' },
                { number: 1000, value: 'ہزار' },
                { number: 100, value: 'سو' },
                { number: 99, value: 'نناوے' },
                { number: 98, value: 'اٹھانوے' },
                { number: 97, value: 'ستانوے' },
                { number: 96, value: 'چھیانوے' },
                { number: 95, value: 'پچانوے' },
                { number: 94, value: 'چورانوے' },
                { number: 93, value: 'ترانوے' },
                { number: 92, value: 'بانوے' },
                { number: 91, value: 'اکانوے' },
                { number: 90, value: 'نوے' },
                { number: 89, value: 'نواسی' },
                { number: 88, value: 'اٹھاسی' },
                { number: 87, value: 'ستاسی' },
                { number: 86, value: 'چھیاسی' },
                { number: 85, value: 'پچاسی' },
                { number: 84, value: 'چوراسی' },
                { number: 83, value: 'تراسی' },
                { number: 82, value: 'بیاسی' },
                { number: 81, value: 'اکیاسی' },
                { number: 80, value: 'اسی' },
                { number: 79, value: 'انہتر' },
                { number: 78, value: 'اٹھہتر' },
                { number: 77, value: 'ستتر' },
                { number: 76, value: 'چھہتر' },
                { number: 75, value: 'پچھتر' },
                { number: 74, value: 'چوہتر' },
                { number: 73, value: 'تہتر' },
                { number: 72, value: 'بہتر' },
                { number: 71, value: 'اکہتر' },
                { number: 70, value: 'ستر' },
                { number: 69, value: 'انہتر' },
                { number: 68, value: 'اڑسٹھ' },
                { number: 67, value: 'سڑسٹھ' },
                { number: 66, value: 'چھیاسٹھ' },
                { number: 65, value: 'پینسٹھ' },
                { number: 64, value: 'چونسٹھ' },
                { number: 63, value: 'تریسٹھ' },
                { number: 62, value: 'باسٹھ' },
                { number: 61, value: 'اکسٹھ' },
                { number: 60, value: 'ساٹھ' },
                { number: 59, value: 'انسٹھ' },
                { number: 58, value: 'اٹھاون' },
                { number: 57, value: 'ستاون' },
                { number: 56, value: 'چھپن' },
                { number: 55, value: 'پچپن' },
                { number: 54, value: 'چون' },
                { number: 53, value: 'ترپن' },
                { number: 52, value: 'باون' },
                { number: 51, value: 'اکیاون' },
                { number: 50, value: 'پچاس' },
                { number: 49, value: 'انچاس' },
                { number: 48, value: 'اڑتالیس' },
                { number: 47, value: 'سینتالیس' },
                { number: 46, value: 'چھیالیس' },
                { number: 45, value: 'پینتالیس' },
                { number: 44, value: 'چوالیس' },
                { number: 43, value: 'تینتالیس' },
                { number: 42, value: 'بیالیس' },
                { number: 41, value: 'اکتالیس' },
                { number: 40, value: 'چالیس' },
                { number: 39, value: 'انتالیس' },
                { number: 38, value: 'اڑتیس' },
                { number: 37, value: 'سینتیس' },
                { number: 36, value: 'چھتیس' },
                { number: 35, value: 'پینتیس' },
                { number: 34, value: 'چونتیس' },
                { number: 33, value: 'تینتیس' },
                { number: 32, value: 'بتیس' },
                { number: 31, value: 'اکتیس' },
                { number: 30, value: 'تیس' },
                { number: 29, value: 'انتیس' },
                { number: 28, value: 'اٹھائیس' },
                { number: 27, value: 'ستائیس' },
                { number: 26, value: 'چھبیس' },
                { number: 25, value: 'پچیس' },
                { number: 24, value: 'چوبیس' },
                { number: 23, value: 'تئیس' },
                { number: 22, value: 'بائیس' },
                { number: 21, value: 'اکیس' },
                { number: 20, value: 'بیس' },
                { number: 19, value: 'انیس' },
                { number: 18, value: 'اٹھارہ' },
                { number: 17, value: 'سترہ' },
                { number: 16, value: 'سولہ' },
                { number: 15, value: 'پندرہ' },
                { number: 14, value: 'چودہ' },
                { number: 13, value: 'تیرہ' },
                { number: 12, value: 'بارہ' },
                { number: 11, value: 'گیارہ' },
                { number: 10, value: 'دس' },
                { number: 9, value: 'نو' },
                { number: 8, value: 'آٹھ' },
                { number: 7, value: 'سات' },
                { number: 6, value: 'چھ' },
                { number: 5, value: 'پانچ' },
                { number: 4, value: 'چار' },
                { number: 3, value: 'تین' },
                { number: 2, value: 'دو' },
                { number: 1, value: 'ایک' },
                { number: 0, value: 'صفر' },
            ],
            exactWordsMapping: [{ number: 100, value: 'ایک سو' }],
        };
    }
}
exports["default"] = Locale;


/***/ },

/***/ 55558
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AccountCreateModal)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AccountCreateModal.vue?vue&type=template&id=1def6f66&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('VModal', {
    on: {
      "close": _vm.closeModal
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(_vm._s(_vm.$t("Create Bank Account")))];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showModal,
      callback: function callback($$v) {
        _vm.showModal = $$v;
      },
      expression: "showModal"
    }
  }, [_vm._v(" "), _c('div', {
    staticClass: "w-100",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      },
      "submit": function submit($event) {
        $event.preventDefault();
        $event.stopPropagation();
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-12"
  }, [_c('label', {
    attrs: {
      "for": "bankName"
    }
  }, [_vm._v(_vm._s(_vm.$t('Bank Name')) + "\n              "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.bankName,
      expression: "form.bankName"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('bankName')
    },
    attrs: {
      "id": "bankName",
      "type": "text",
      "name": "bankName",
      "placeholder": _vm.$t('Enter a bank name')
    },
    domProps: {
      "value": _vm.form.bankName
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "bankName", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "bankName"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "branchName"
    }
  }, [_vm._v(_vm._s(_vm.$t('Branch Name')))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.branchName,
      expression: "form.branchName"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('branchName')
    },
    attrs: {
      "id": "branchName",
      "type": "text",
      "name": "branchName",
      "placeholder": _vm.$t('Enter a branch name')
    },
    domProps: {
      "value": _vm.form.branchName
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "branchName", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "branchName"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "accountNumber"
    }
  }, [_vm._v(_vm._s(_vm.$t('Account Number')) + "\n              "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.accountNumber,
      expression: "form.accountNumber"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('accountNumber')
    },
    attrs: {
      "id": "accountNumber",
      "type": "text",
      "name": "accountNumber",
      "placeholder": _vm.$t('Enter an account number')
    },
    domProps: {
      "value": _vm.form.accountNumber
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "accountNumber", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "accountNumber"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "chartOfAccountId"
    }
  }, [_vm._v(_vm._s(_vm.$t('Chart of Account')) + "\n              "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('chartOfAccountId')
    },
    attrs: {
      "options": _vm.chartOfAccounts,
      "label": "name",
      "reduce": function reduce(option) {
        return option.id;
      },
      "track-by": "id",
      "name": "chartOfAccountId",
      "placeholder": _vm.$t('Select a Chart of Account')
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
      value: _vm.form.chartOfAccountId,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "chartOfAccountId", $$v);
      },
      expression: "form.chartOfAccountId"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "chartOfAccountId"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
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
      "placeholder": _vm.$t('Write your note here!'),
      "rows": "3"
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
  })], 1)])]), _vm._v(" "), _c('div', {
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
        $event.stopPropagation();
        return _vm.saveAccount.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n      ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary ml-2",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        return _vm.closeModal.apply(null, arguments);
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Cancel")) + "\n      ")])])]), _vm._v(" "), _c('a', {
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
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AccountCreateModal.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const AccountCreateModalvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  data: function data() {
    return {
      showModal: false,
      form: new vform_es/* default */.Ay({
        bankName: '',
        branchName: '',
        accountNumber: '',
        date: new Date().toISOString().slice(0, 10),
        note: '',
        status: 1,
        chartOfAccountId: ''
      }),
      chartOfAccounts: []
    };
  },
  created: function created() {
    this.loadChartOfAccounts();
  },
  methods: {
    toggleModal: function toggleModal() {
      this.showModal = !this.showModal;
      if (this.showModal) {
        // Reset form when opening modal
        this.resetForm();
        // Refresh chart of accounts list
        this.loadChartOfAccounts();
      }
    },
    closeModal: function closeModal(event) {
      // Stop event propagation to prevent closing parent modals
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      this.showModal = false;
      this.resetForm();
    },
    resetForm: function resetForm() {
      this.form.reset();
      this.form.status = 1;
      this.form.date = new Date().toISOString().slice(0, 10);
      this.form.chartOfAccountId = '';
    },
    // Load chart of accounts
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return axios_default().get('/api/accounts/chart-of-accounts');
            case 1:
              response = _context.v;
              _this.chartOfAccounts = response.data.data || [];
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error('Error loading chart of accounts:', _t);
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    // Save account
    saveAccount: function saveAccount(event) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              // Stop event propagation to prevent closing parent modals
              if (event) {
                event.stopPropagation();
                event.preventDefault();
              }
              _context2.n = 1;
              return _this2.form.post(window.location.origin + '/api/accounts').then(function (response) {
                toast.fire({
                  type: 'success',
                  title: _this2.$t('Account added successfully')
                });

                // Get the created account data from response
                // AccountResource returns data in response.data.data
                var accountData = response.data.data || response.data;

                // Format account for the select dropdown (matching the format used in getAccounts)
                // AccountResource already provides bankName, accountNumber, label, etc.
                var newAccount = {
                  id: accountData.id,
                  slug: accountData.slug,
                  label: accountData.label || "".concat(accountData.bankName, " [").concat(accountData.accountNumber, "]"),
                  bankName: accountData.bankName,
                  accountNumber: accountData.accountNumber,
                  availableBalance: accountData.availableBalance || 0,
                  image: accountData.image || null
                };

                // Emit event with created account data to refresh and select in parent
                _this2.$emit('accountCreated', newAccount);

                // Reset form
                _this2.resetForm();
                // Close only this modal, not parent modals
                _this2.showModal = false;
              })["catch"](function (error) {
                if (error.response && error.response.status === 422 && error.response.data && error.response.data.errors) {
                  var errors = error.response.data.errors;
                  if (_this2.form && _this2.form.errors && typeof _this2.form.errors.set === 'function') {
                    _this2.form.errors.set(errors);
                  }
                  var messages = Object.values(errors).flat();
                  var firstMessage = messages && messages.length ? messages[0] : _this2.$t('Validation Error');
                  toast.fire({
                    type: 'error',
                    title: firstMessage
                  });
                } else {
                  var _error$response;
                  toast.fire({
                    type: 'error',
                    title: ((_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this2.$t('Please check your input and try again.')
                  });
                }
              });
            case 1:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    }
  }
});
;// ./resources/js/components/AccountCreateModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_AccountCreateModalvue_type_script_lang_js = (AccountCreateModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AccountCreateModal.vue?vue&type=style&index=0&id=1def6f66&prod&scoped=true&lang=css
var AccountCreateModalvue_type_style_index_0_id_1def6f66_prod_scoped_true_lang_css = __webpack_require__(51900);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/AccountCreateModal.vue?vue&type=style&index=0&id=1def6f66&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(AccountCreateModalvue_type_style_index_0_id_1def6f66_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_AccountCreateModalvue_type_style_index_0_id_1def6f66_prod_scoped_true_lang_css = (AccountCreateModalvue_type_style_index_0_id_1def6f66_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/AccountCreateModal.vue?vue&type=style&index=0&id=1def6f66&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/AccountCreateModal.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_AccountCreateModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "1def6f66",
  null
  
)

/* harmony default export */ const AccountCreateModal = (component.exports);

/***/ },

/***/ 95779
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ClientCreateModal)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientCreateModal.vue?vue&type=template&id=43595425&scoped=true
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
var ClientForm = __webpack_require__(89824);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientCreateModal.vue?vue&type=script&lang=js
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
      isSubmitting: false,
      validationErrors: {}
    };
  },
  methods: {
    // Validate required fields before submission
    validateRequiredFields: function validateRequiredFields(formData) {
      this.validationErrors = {};
      var isValid = true;

      // Validate phoneNumber (required)
      if (!formData.phoneNumber || formData.phoneNumber.trim() === '') {
        this.validationErrors.phoneNumber = this.$t('Client phone number is required');
        isValid = false;
      }

      // Validate name field - derive from fullName or businessName based on type
      var clientType = formData.type || 'Individual';
      var clientName = null;
      if (clientType === 'Individual') {
        if (!formData.fullName || formData.fullName.trim() === '') {
          this.validationErrors.fullName = this.$t('Client name is required');
          isValid = false;
        } else {
          clientName = formData.fullName.trim();
        }
      } else if (clientType === 'Company') {
        if (!formData.businessName || formData.businessName.trim() === '') {
          this.validationErrors.businessName = this.$t('Business name is required');
          isValid = false;
        } else {
          clientName = formData.businessName.trim();
        }
      }

      // Validate email format if provided
      if (formData.email && formData.email.trim() !== '') {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email.trim())) {
          this.validationErrors.email = this.$t('Invalid email format');
          isValid = false;
        }
      }

      // Validate numeric fields
      if (formData.additionalNumber && formData.additionalNumber.trim() !== '') {
        if (!/^\d+$/.test(formData.additionalNumber.trim())) {
          this.validationErrors.additionalNumber = this.$t('Additional Number must be numeric');
          isValid = false;
        }
      }
      if (formData.commercialRegister && formData.commercialRegister.trim() !== '') {
        if (!/^\d+$/.test(formData.commercialRegister.trim())) {
          this.validationErrors.commercialRegister = this.$t('Commercial Register must be numeric');
          isValid = false;
        }
      }
      if (formData.taxCard && formData.taxCard.trim() !== '') {
        if (!/^\d+$/.test(formData.taxCard.trim())) {
          this.validationErrors.taxCard = this.$t('Tax Number must be numeric');
          isValid = false;
        }
      }
      if (formData.taxRegistrationNumber && formData.taxRegistrationNumber.trim() !== '') {
        if (!/^\d+$/.test(formData.taxRegistrationNumber.trim())) {
          this.validationErrors.taxRegistrationNumber = this.$t('Tax Number must be numeric');
          isValid = false;
        }
      }
      return {
        isValid: isValid,
        clientName: clientName
      };
    },
    // save client
    saveClient: function saveClient() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _this$$refs$clientFor, formData, validation, fd, appendIfDefined, taxStatusValue, taxStatusToSend, clientType, clientName, response, _error$response, status, serverErrors, errorMessage, form, errorMessages, errorsObject, mapped, errorTitle, _error$response2, _errorMessage, rawMessage, _t;
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
              formData = _this.$refs.clientForm.getFormData(); // Validate required fields
              validation = _this.validateRequiredFields(formData);
              if (validation.isValid) {
                _context.n = 4;
                break;
              }
              _this.isSubmitting = false;
              // Show validation errors
              _this.showValidationErrors();
              return _context.a(2);
            case 4:
              // Build multipart/form-data to properly send files and handle boolean conversion
              fd = new FormData();
              appendIfDefined = function appendIfDefined(key, value) {
                if (value !== undefined && value !== null && value !== '') {
                  fd.append(key, value);
                }
              }; // Debug: Log formData before building FormData - CRITICAL
              console.log('ClientCreateModal - formData received:', {
                taxStatus: formData.taxStatus,
                tax_status: formData.tax_status,
                allFormData: formData
              });
              console.log('ClientCreateModal - formData keys:', Object.keys(formData || {}));
              console.log('ClientCreateModal - formData.taxStatus type:', _typeof(formData.taxStatus));
              console.log('ClientCreateModal - formData.taxStatus value:', formData.taxStatus);
              console.log('ClientCreateModal - formData.tax_status value:', formData.tax_status);
              console.log('ClientCreateModal - $refs.clientForm exists:', !!_this.$refs.clientForm);
              console.log('ClientCreateModal - $refs.clientForm.form exists:', !!(_this.$refs.clientForm && _this.$refs.clientForm.form));
              if (_this.$refs.clientForm && _this.$refs.clientForm.form) {
                console.log('ClientCreateModal - form.taxStatus:', _this.$refs.clientForm.form.taxStatus);
                console.log('ClientCreateModal - form.data() taxStatus:', _this.$refs.clientForm.form.data ? _this.$refs.clientForm.form.data().taxStatus : 'N/A');
              }

              // Simple scalar fields
              appendIfDefined('codeNumber', formData.codeNumber);
              appendIfDefined('notes', formData.notes);
              appendIfDefined('displayLanguage', formData.displayLanguage);
              appendIfDefined('type', formData.type);

              // CRITICAL: Always append taxStatus - don't use appendIfDefined to ensure it's always sent
              // Get taxStatus from formData, or try to get it from form object if available
              taxStatusValue = formData.taxStatus || formData.tax_status;
              console.log('ClientCreateModal - Initial taxStatus check:', {
                formDataTaxStatus: formData.taxStatus,
                formDataTax_status: formData.tax_status,
                currentTaxStatusValue: taxStatusValue
              });

              // If still not found, try to get it from the form component
              if (!taxStatusValue && _this.$refs.clientForm && _this.$refs.clientForm.form) {
                taxStatusValue = _this.$refs.clientForm.form.taxStatus;
                console.log('ClientCreateModal - Got taxStatus from form object:', taxStatusValue);
              }

              // Default to non_taxable if still not found
              taxStatusValue = taxStatusValue || 'non_taxable';
              console.log('ClientCreateModal - Final taxStatusValue before appending:', taxStatusValue);

              // Always append taxStatus - never skip it, even if it's the default value
              // CRITICAL: Use explicit string conversion and ensure it's never null/undefined
              taxStatusToSend = String(taxStatusValue || 'non_taxable');
              fd.append('taxStatus', taxStatusToSend);
              fd.append('tax_status', taxStatusToSend);
              console.log('=== CLIENT CREATE MODAL - APPENDING TAX STATUS ===');
              console.log('ClientCreateModal - taxStatusValue:', taxStatusValue);
              console.log('ClientCreateModal - taxStatusToSend:', taxStatusToSend);
              console.log('ClientCreateModal - Appended taxStatus to FormData:', taxStatusToSend);
              console.log('ClientCreateModal - formData.taxStatus:', formData.taxStatus);
              console.log('ClientCreateModal - formData.tax_status:', formData.tax_status);
              console.log('ClientCreateModal - form.taxStatus:', (_this$$refs$clientFor = _this.$refs.clientForm) === null || _this$$refs$clientFor === void 0 || (_this$$refs$clientFor = _this$$refs$clientFor.form) === null || _this$$refs$clientFor === void 0 ? void 0 : _this$$refs$clientFor.taxStatus);

              // Verify it was added
              console.log('ClientCreateModal - FormData has taxStatus:', fd.has('taxStatus'));
              console.log('ClientCreateModal - FormData has tax_status:', fd.has('tax_status'));

              // CRITICAL: Append name field - required by database
              // Derive name from fullName (Individual) or businessName (Company)
              clientType = formData.type || 'Individual';
              clientName = validation.clientName || (clientType === 'Individual' ? formData.fullName : formData.businessName);
              if (clientName && clientName.trim() !== '') {
                fd.append('name', clientName.trim());
              }
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
              _context.n = 5;
              return _this.$http.post("/api/clients", fd, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
            case 5:
              response = _context.v;
              if (!response.data.success) {
                _context.n = 6;
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
              _context.n = 7;
              break;
            case 6:
              throw new Error(response.data.message || 'Failed to create client');
            case 7:
              _context.n = 10;
              break;
            case 8:
              _context.p = 8;
              _t = _context.v;
              console.error("Error creating client:", _t);
              status = _t && _t.response && _t.response.status;
              serverErrors = _t && _t.response && _t.response.data && _t.response.data.errors;
              errorMessage = ((_error$response = _t.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _t.message; // Handle SQL integrity constraint violations (e.g., Column 'name' cannot be null)
              if (!(errorMessage && (errorMessage.includes('Column \'name\' cannot be null') || errorMessage.includes('Integrity constraint violation') || errorMessage.includes('cannot be null')))) {
                _context.n = 9;
                break;
              }
              toast.fire({
                type: "error",
                title: _this.$t("Validation Error"),
                text: _this.$t("Please fill in all required fields. Client name is required."),
                timer: 5000,
                timerProgressBar: true
              });
              _this.isSubmitting = false;
              return _context.a(2);
            case 9:
              if (status === 422 && serverErrors && _this.$refs.clientForm) {
                // Get form object directly from ClientForm component
                form = _this.$refs.clientForm.form;
                errorMessages = []; // Prepare errors object for vform
                errorsObject = {};
                Object.keys(serverErrors).forEach(function (key) {
                  var messages = serverErrors[key];
                  if (Array.isArray(messages) && messages.length > 0) {
                    // Translate messages before adding to errorsObject
                    var translatedMessages = messages.map(function (msg) {
                      return _this.translateValidationMessage(msg, key);
                    });
                    errorsObject[key] = translatedMessages;

                    // Collect error messages for toast notification
                    var fieldLabel = _this.getFieldLabel(key);
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
                  console.log('ClientCreateModal - Set errors on form:', errorsObject);
                } else if (form && form.errors && typeof form.errors.record === 'function') {
                  // Fallback to record method if set is not available
                  mapped = {};
                  Object.keys(errorsObject).forEach(function (key) {
                    mapped[key] = Array.isArray(errorsObject[key]) ? errorsObject[key][0] : errorsObject[key];
                  });
                  form.errors.record(mapped);
                  console.log('ClientCreateModal - Recorded errors on form (fallback):', mapped);
                } else {
                  console.warn('ClientCreateModal - Form errors object not available or invalid');
                }

                // Show detailed error messages in toast
                errorTitle = errorMessages.length > 0 ? errorMessages.slice(0, 3).join(' | ') + (errorMessages.length > 3 ? " (+".concat(errorMessages.length - 3, " more)") : '') : _this.$t("Please check the form for errors and try again.");
                toast.fire({
                  type: "error",
                  title: _this.$t("Validation Error"),
                  text: errorTitle,
                  html: errorMessages.length > 0 ? "<div style=\"text-align: left; max-height: 200px; overflow-y: auto;\">".concat(errorMessages.map(function (msg) {
                    return "<div>\u2022 ".concat(msg, "</div>");
                  }).join(''), "</div>") : undefined
                });
              } else {
                // Handle other server errors (500, network errors, etc.)
                _errorMessage = _this.$t("An error occurred while creating the client. Please try again.");
                if ((_error$response2 = _t.response) !== null && _error$response2 !== void 0 && (_error$response2 = _error$response2.data) !== null && _error$response2 !== void 0 && _error$response2.message) {
                  // Try to translate common error messages
                  rawMessage = _t.response.data.message;
                  if (rawMessage.includes('cannot be null') || rawMessage.includes('required')) {
                    _errorMessage = _this.$t("Please fill in all required fields.");
                  } else {
                    _errorMessage = rawMessage;
                  }
                } else if (_t.message) {
                  _errorMessage = _t.message;
                }
                toast.fire({
                  type: "error",
                  title: _this.$t("Error"),
                  text: _errorMessage,
                  timer: 5000,
                  timerProgressBar: true
                });
              }
            case 10:
              _context.p = 10;
              _this.isSubmitting = false;
              return _context.f(10);
            case 11:
              return _context.a(2);
          }
        }, _callee, null, [[2, 8, 10, 11]]);
      }))();
    },
    // Show validation errors as inline alerts
    showValidationErrors: function showValidationErrors() {
      var _this2 = this;
      // Clear previous errors
      if (this.$refs.clientForm && this.$refs.clientForm.form) {
        var form = this.$refs.clientForm.form;
        if (form.errors && typeof form.errors.clear === 'function') {
          form.errors.clear();
        }
      }

      // Set new validation errors
      if (this.$refs.clientForm && this.$refs.clientForm.form) {
        var _form = this.$refs.clientForm.form;
        if (_form.errors && typeof _form.errors.set === 'function') {
          var errorsObject = {};
          Object.keys(this.validationErrors).forEach(function (key) {
            errorsObject[key] = [_this2.validationErrors[key]];
          });
          _form.errors.set(errorsObject);
        }
      }

      // Show toast with validation errors
      var errorMessages = Object.values(this.validationErrors);
      if (errorMessages.length > 0) {
        toast.fire({
          type: "error",
          title: this.$t("Validation Error"),
          text: errorMessages[0],
          html: errorMessages.length > 1 ? "<div style=\"text-align: left;\">".concat(errorMessages.map(function (msg) {
            return "<div>\u2022 ".concat(msg, "</div>");
          }).join(''), "</div>") : undefined,
          timer: 5000,
          timerProgressBar: true
        });
      }
    },
    toggleModal: function toggleModal() {
      var _this3 = this;
      this.showClientCreateModal = !this.showClientCreateModal;
      // Reset form when opening modal
      if (this.showClientCreateModal) {
        this.form = null;
        this.isSubmitting = false;
        this.validationErrors = {};

        // Ensure a fresh client code is loaded every time the modal opens
        // ClientForm.resetForm() will internally call loadNextCodeNumber()
        this.$nextTick(function () {
          if (_this3.$refs.clientForm && typeof _this3.$refs.clientForm.resetForm === 'function') {
            _this3.$refs.clientForm.resetForm();
          }
        });
      } else {
        // Clear validation errors when closing modal
        this.validationErrors = {};
      }
    },
    submitItem: function submitItem(evt) {
      evt.preventDefault();
      this.saveClient();
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
        streetNumber: this.$t('Street Name'),
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
        streetNumber: this.$t('Street Name'),
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
    }
  }
});
;// ./resources/js/components/ClientCreateModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_ClientCreateModalvue_type_script_lang_js = (ClientCreateModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientCreateModal.vue?vue&type=style&index=0&id=43595425&prod&scoped=true&lang=css
var ClientCreateModalvue_type_style_index_0_id_43595425_prod_scoped_true_lang_css = __webpack_require__(45371);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ClientCreateModal.vue?vue&type=style&index=0&id=43595425&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(ClientCreateModalvue_type_style_index_0_id_43595425_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_ClientCreateModalvue_type_style_index_0_id_43595425_prod_scoped_true_lang_css = (ClientCreateModalvue_type_style_index_0_id_43595425_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/ClientCreateModal.vue?vue&type=style&index=0&id=43595425&prod&scoped=true&lang=css

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
  "43595425",
  null
  
)

/* harmony default export */ const ClientCreateModal = (component.exports);

/***/ },

/***/ 22367
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ InvoicePaymentModal)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InvoicePaymentModal.vue?vue&type=template&id=65c2e2a1&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('Modal', {
    on: {
      "close": _vm.handleClose
    }
  }, [_c('h5', {
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_vm._v("\n    " + _vm._s(_vm.type === 'purchase' ? _vm.$t("Create purchase payment") : _vm.$t("Create invoice payment")) + " :\n    "), _vm.invoiceNo ? _c('span', [_vm._v(_vm._s(_vm.invoicePrefix) + _vm._s(_vm.invoiceNo))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "row",
    attrs: {
      "slot": "body"
    },
    slot: "body"
  }, [_c('form', {
    staticClass: "w-100",
    attrs: {
      "role": "form"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.savePayment.apply(null, arguments);
      },
      "keydown": function keydown($event) {
        return _vm.paymentForm.onKeydown($event);
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "clientInvoiceTotal"
    }
  }, [_vm._v(_vm._s(_vm.type === 'purchase' ? _vm.$t("Purchase Total") : _vm.$t("Invoice Total")))]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "readonly": ""
    },
    domProps: {
      "value": _vm.formatNumber(_vm.invoiceTotal)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "clientInvoiceDue"
    }
  }, [_vm._v(_vm._s(_vm.type === 'purchase' ? _vm.$t("Purchase Due") : _vm.$t("Invoice Due")))]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "readonly": ""
    },
    domProps: {
      "value": _vm.formatNumber(_vm.dueAmount)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "paidAmount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Paid Amount")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.paymentForm.paidAmount,
      expression: "paymentForm.paidAmount"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "number",
      "step": "any",
      "placeholder": _vm.$t('Enter an amount'),
      "required": "",
      "min": "1",
      "max": _vm.dueAmount
    },
    domProps: {
      "value": _vm.paymentForm.paidAmount
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.paymentForm, "paidAmount", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-8"
  }, [_c('label', {
    attrs: {
      "for": "account"
    }
  }, [_vm._v(_vm._s(_vm.$t("Account")) + "\n            "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex w-100"
  }, [_c('v-select', {
    staticClass: "flex-grow-1",
    "class": {
      'is-invalid': _vm.paymentForm.errors.has('account')
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
        }), _vm._v("\n                " + _vm._s(option.label) + "\n              ")];
      }
    }], null, false, 25305259),
    model: {
      value: _vm.paymentForm.account,
      callback: function callback($$v) {
        _vm.$set(_vm.paymentForm, "account", $$v);
      },
      expression: "paymentForm.account"
    }
  }), _vm._v(" "), _c('AccountCreateModal', {
    on: {
      "accountCreated": _vm.handleAccountCreated
    }
  }, [_c('div', {
    staticClass: "input-group-text create-btn"
  }, [_c('i', {
    staticClass: "fas fa-solid fa-plus-circle"
  })])])], 1), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.paymentForm,
      "field": "account"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "paymentMethod"
    }
  }, [_vm._v(_vm._s(_vm.$t("Payment Method")))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.paymentForm.payment_method_id,
      expression: "paymentForm.payment_method_id"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.paymentForm.errors.has('payment_method_id')
    },
    attrs: {
      "id": "paymentMethod",
      "disabled": _vm.loadingPaymentMethods,
      "name": "payment_method_id"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.paymentForm, "payment_method_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v(_vm._s(_vm.loadingPaymentMethods ? _vm.$t("Loading...") : _vm.$t("Select")))]), _vm._v(" "), !_vm.loadingPaymentMethods && _vm.paymentMethods.length === 0 ? _c('option', {
    attrs: {
      "value": "",
      "disabled": ""
    }
  }, [_vm._v("\n              " + _vm._s(_vm.$t("No payment methods available")) + "\n            ")]) : _vm._e(), _vm._v(" "), _vm._l(_vm.paymentMethods, function (method) {
    return _c('option', {
      key: method.id,
      domProps: {
        "value": method.id
      }
    }, [_vm._v("\n              " + _vm._s(method.name) + "\n            ")]);
  })], 2), _vm._v(" "), _vm.loadingPaymentMethods ? _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Loading payment methods...")) + "\n          ")]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.paymentForm,
      "field": "payment_method_id"
    }
  })], 1), _vm._v(" "), _vm.selectedPaymentMethodAnalyticalAccount ? _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "analyticalAccount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Analytical Account")))]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "readonly": ""
    },
    domProps: {
      "value": _vm.selectedPaymentMethodAnalyticalAccount.name || '-'
    }
  }), _vm._v(" "), _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Automatically set based on payment method")) + "\n          ")])]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "receiptNo"
    }
  }, [_vm._v(_vm._s(_vm.$t("Receipt No")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.paymentForm.receiptNo,
      expression: "paymentForm.receiptNo"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.paymentForm.errors.has('receiptNo')
    },
    attrs: {
      "type": "text",
      "id": "receiptNo",
      "placeholder": _vm.$t('Enter a receipt no')
    },
    domProps: {
      "value": _vm.paymentForm.receiptNo
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.paymentForm, "receiptNo", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.paymentForm,
      "field": "receiptNo"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "paymentDate"
    }
  }, [_vm._v(_vm._s(_vm.$t("Payment Date")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.paymentForm.paymentDate,
      expression: "paymentForm.paymentDate"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.paymentForm.errors.has('paymentDate')
    },
    attrs: {
      "id": "paymentDate",
      "type": "date",
      "name": "paymentDate"
    },
    domProps: {
      "value": _vm.paymentForm.paymentDate
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.paymentForm, "paymentDate", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.paymentForm,
      "field": "paymentDate"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "status"
    }
  }, [_vm._v(_vm._s(_vm.$t("Status")))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.paymentForm.status,
      expression: "paymentForm.status"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.paymentForm.errors.has('status')
    },
    attrs: {
      "id": "status",
      "disabled": _vm.invoiceStatus === 0
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.paymentForm, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_vm.invoiceStatus === 1 ? _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v(_vm._s(_vm.$t("Active")))]) : _vm._e(), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t("Inactive")))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.paymentForm,
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
      value: _vm.paymentForm.note,
      expression: "paymentForm.note"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.paymentForm.errors.has('note')
    },
    attrs: {
      "id": "note",
      "placeholder": _vm.$t('Write your note here!')
    },
    domProps: {
      "value": _vm.paymentForm.note
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.paymentForm, "note", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.paymentForm,
      "field": "note"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12 d-flex flex-wrap"
  }, [_c('div', {
    staticClass: "pr-5 d-flex align-items-center"
  }, [_c('toggle-button', {
    attrs: {
      "disabled": _vm.isDemoMode || _vm.communicationConfig.loading || !_vm.communicationConfig.email_configured
    },
    model: {
      value: _vm.paymentForm.isSendEmail,
      callback: function callback($$v) {
        _vm.$set(_vm.paymentForm, "isSendEmail", $$v);
      },
      expression: "paymentForm.isSendEmail"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-3"
  }, [_vm._v(_vm._s(_vm.$t("Send Email Notification")))]), _vm._v(" "), !_vm.communicationConfig.loading && !_vm.communicationConfig.email_configured ? _c('span', {
    staticClass: "ml-2 text-muted small"
  }, [_vm._v("\n            (" + _vm._s(_vm.$t("Email not configured")) + ")\n          ")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12 d-flex flex-wrap"
  }, [_c('div', {
    staticClass: "pr-5 d-flex align-items-center"
  }, [_c('toggle-button', {
    attrs: {
      "disabled": _vm.isDemoMode || _vm.communicationConfig.loading || !_vm.communicationConfig.sms_configured
    },
    model: {
      value: _vm.paymentForm.isSendSMS,
      callback: function callback($$v) {
        _vm.$set(_vm.paymentForm, "isSendSMS", $$v);
      },
      expression: "paymentForm.isSendSMS"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-3"
  }, [_vm._v(_vm._s(_vm.$t("Send SMS Notification")))]), _vm._v(" "), !_vm.communicationConfig.loading && !_vm.communicationConfig.sms_configured ? _c('span', {
    staticClass: "ml-2 text-muted small"
  }, [_vm._v("\n            (" + _vm._s(_vm.$t("SMS not configured")) + ")\n          ")]) : _vm._e()], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex justify-content-end w-100",
    attrs: {
      "slot": "modal-footer"
    },
    slot: "modal-footer"
  }, [_c('v-button', {
    staticClass: "btn btn-success mr-2",
    attrs: {
      "loading": _vm.paymentForm.busy
    },
    on: {
      "click": _vm.savePayment
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n    ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.handleClose
    }
  }, [_vm._v("\n      " + _vm._s(_vm.$t("Close")) + "\n    ")])], 1)]) : _vm._e();
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
// EXTERNAL MODULE: ./resources/js/components/AccountCreateModal.vue + 5 modules
var AccountCreateModal = __webpack_require__(55558);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InvoicePaymentModal.vue?vue&type=script&lang=js
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





/* harmony default export */ const InvoicePaymentModalvue_type_script_lang_js = ({
  name: "InvoicePaymentModal",
  components: {
    ToggleButton: dist.ToggleButton,
    AccountCreateModal: AccountCreateModal/* default */.A
  },
  props: {
    show: {
      type: Boolean,
      "default": false
    },
    type: {
      type: String,
      "default": 'invoice',
      // 'invoice' or 'purchase'
      validator: function validator(value) {
        return ['invoice', 'purchase'].includes(value);
      }
    },
    invoiceId: {
      type: [Number, String],
      required: true
    },
    invoiceNo: {
      type: String,
      required: true
    },
    invoicePrefix: {
      type: String,
      "default": ""
    },
    invoiceTotal: {
      type: Number,
      required: true
    },
    dueAmount: {
      type: Number,
      required: true
    },
    invoiceStatus: {
      type: Number,
      "default": 1
    },
    purchaseSlug: {
      type: String,
      "default": null
    }
  },
  data: function data() {
    return {
      accounts: [],
      paymentMethods: [],
      loadingPaymentMethods: false,
      isDemoMode: window.config.isDemoMode,
      communicationConfig: {
        email_configured: false,
        sms_configured: false,
        loading: true
      },
      paymentForm: new vform_es/* default */.Ay({
        invoice_id: "",
        paidAmount: 1,
        paymentDate: new Date().toISOString().slice(0, 10),
        account: "",
        receiptNo: "",
        note: "",
        status: 1,
        isSendEmail: false,
        isSendSMS: false,
        payment_method_id: null
      })
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["appInfo"])), {}, {
    // Get analytical account for selected payment method
    selectedPaymentMethodAnalyticalAccount: function selectedPaymentMethodAnalyticalAccount() {
      var _this = this;
      if (!this.paymentForm.payment_method_id || !this.paymentMethods || this.paymentMethods.length === 0) {
        return null;
      }
      var selectedMethod = this.paymentMethods.find(function (method) {
        return method.id == _this.paymentForm.payment_method_id;
      });
      if (selectedMethod && selectedMethod.analytical_account) {
        return selectedMethod.analytical_account;
      }
      return null;
    }
  }),
  watch: {
    show: {
      handler: function handler(newVal) {
        if (newVal) {
          this.initializeForm();
        }
      },
      immediate: true
    },
    dueAmount: {
      handler: function handler(newVal) {
        if (newVal && this.show) {
          this.paymentForm.paidAmount = newVal > 0 ? newVal : 1;
        }
      },
      immediate: true
    },
    invoiceId: {
      handler: function handler(newVal) {
        if (newVal && this.show) {
          console.log('Update form invoice_id from prop:', newVal);
          this.paymentForm.invoice_id = newVal;
        }
      },
      immediate: true
    }
  },
  created: function created() {
    this.loadCommunicationConfigStatus();
    this.getAccounts();
    this.getPaymentMethods();
  },
  methods: {
    // Format number to 2 decimal places
    formatNumber: function formatNumber(value) {
      if (value === null || value === undefined || isNaN(value)) return '0.00';
      return parseFloat(value).toFixed(2);
    },
    // Load communication configuration status
    loadCommunicationConfigStatus: function loadCommunicationConfigStatus() {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _this2.communicationConfig.loading = true;
              _context.n = 1;
              return axios_default().get('/api/communication-config-status');
            case 1:
              response = _context.v;
              _this2.communicationConfig.email_configured = response.data.email_configured;
              _this2.communicationConfig.sms_configured = response.data.sms_configured;
              _this2.communicationConfig.loading = false;
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error('Error loading communication config status:', _t);
              // Default to false if there's an error
              _this2.communicationConfig.email_configured = false;
              _this2.communicationConfig.sms_configured = false;
              _this2.communicationConfig.loading = false;
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    // Initialize form when modal opens
    initializeForm: function initializeForm() {
      if (this.type === 'purchase') {
        // For purchases, we don't set invoice_id
        this.paymentForm.invoice_id = null;
      } else {
        this.paymentForm.invoice_id = this.invoiceId;
      }
      var dueAmount = this.dueAmount;
      // Set paid amount to total due amount as default
      this.paymentForm.paidAmount = dueAmount > 0 ? dueAmount : 1;
      this.paymentForm.status = this.invoiceStatus === 0 ? 0 : 1;
      this.paymentForm.payment_method_id = null; // Reset payment method

      // Set default account if available
      if (this.accounts && this.accounts.length > 0 && !this.paymentForm.account) {
        var _this$appInfo;
        var defaultAccountSlug = (_this$appInfo = this.appInfo) === null || _this$appInfo === void 0 ? void 0 : _this$appInfo.defaultAccountSlug;
        this.paymentForm.account = this.accounts.find(function (account) {
          return account.slug == defaultAccountSlug;
        }) || this.accounts[0];
      }
    },
    // Get accounts
    getAccounts: function getAccounts() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var _yield$axios$get, data, _this3$appInfo, defaultAccountSlug;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              _context2.n = 1;
              return axios_default().get(window.location.origin + "/api/all-accounts");
            case 1:
              _yield$axios$get = _context2.v;
              data = _yield$axios$get.data;
              _this3.accounts = data.data;

              // assign default account
              if (_this3.accounts && _this3.accounts.length > 0) {
                defaultAccountSlug = (_this3$appInfo = _this3.appInfo) === null || _this3$appInfo === void 0 ? void 0 : _this3$appInfo.defaultAccountSlug;
                _this3.paymentForm.account = _this3.accounts.find(function (account) {
                  return account.slug == defaultAccountSlug;
                });
              }
            case 2:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // Get payment methods
    getPaymentMethods: function getPaymentMethods() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var response, _t2;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _this4.loadingPaymentMethods = true;
              _context3.p = 1;
              _context3.n = 2;
              return axios_default().get(window.location.origin + '/api/payment-methods', {
                params: {
                  perPage: 1000
                } // Get all payment methods
              });
            case 2:
              response = _context3.v;
              // Handle both paginated and non-paginated responses
              if (response.data) {
                if (Array.isArray(response.data)) {
                  _this4.paymentMethods = response.data;
                } else if (response.data.data && Array.isArray(response.data.data)) {
                  _this4.paymentMethods = response.data.data;
                } else {
                  _this4.paymentMethods = [];
                }
              } else {
                _this4.paymentMethods = [];
              }
              _context3.n = 4;
              break;
            case 3:
              _context3.p = 3;
              _t2 = _context3.v;
              console.error('Error loading payment methods:', _t2);
              _this4.paymentMethods = [];
              _this4.$toast.error(_this4.$t('Error'), _this4.$t('Failed to load payment methods'));
            case 4:
              _context3.p = 4;
              _this4.loadingPaymentMethods = false;
              return _context3.f(4);
            case 5:
              return _context3.a(2);
          }
        }, _callee3, null, [[1, 3, 4, 5]]);
      }))();
    },
    // Handle account created event
    handleAccountCreated: function handleAccountCreated(newAccount) {
      var _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var account, accountById;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return _this5.getAccounts();
            case 1:
              if (!(newAccount && newAccount.id)) {
                _context4.n = 3;
                break;
              }
              _context4.n = 2;
              return _this5.$nextTick();
            case 2:
              // Find the account by id, slug, or label
              account = _this5.accounts.find(function (acc) {
                return acc.id === newAccount.id || acc.slug === newAccount.slug || acc.label === newAccount.label || acc.bankName === newAccount.bankName && acc.accountNumber === newAccount.accountNumber;
              });
              if (account) {
                _this5.paymentForm.account = account;
              } else if (newAccount.id) {
                // If not found by matching, try to find by id directly
                accountById = _this5.accounts.find(function (acc) {
                  return acc.id === newAccount.id;
                });
                if (accountById) {
                  _this5.paymentForm.account = accountById;
                }
              }
            case 3:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // Save payment
    savePayment: function savePayment() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var formData, apiEndpoint, successMessage, effectiveInvoiceId;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              // Ensure invoice_id is set from props
              if (_this6.type !== 'purchase' && _this6.invoiceId) {
                // Always update from prop to ensure we have the latest ID
                _this6.paymentForm.invoice_id = _this6.invoiceId;
              } else if (!_this6.paymentForm.invoice_id && _this6.type !== 'purchase' && _this6.invoiceId) {
                console.log('Fallback: Setting invoice_id from prop:', _this6.invoiceId);
                _this6.paymentForm.invoice_id = _this6.invoiceId;
              }
              if (!(!_this6.paymentForm.account || !_this6.paymentForm.account.id)) {
                _context5.n = 1;
                break;
              }
              _this6.$toast.error(_this6.$t("Error"), _this6.$t("Please select an account"));
              return _context5.a(2);
            case 1:
              if (!(_this6.type === 'purchase')) {
                _context5.n = 2;
                break;
              }
              // Prepare form data for purchase payment
              formData = {
                selectedPurchase: {
                  slug: _this6.purchaseSlug,
                  due: _this6.dueAmount
                },
                paidAmount: parseFloat(_this6.paymentForm.paidAmount),
                account: _this6.paymentForm.account,
                receiptNo: _this6.paymentForm.receiptNo || '',
                paymentDate: _this6.paymentForm.paymentDate || new Date().toISOString().slice(0, 10),
                note: _this6.paymentForm.note || '',
                status: _this6.paymentForm.status,
                isSendEmail: _this6.paymentForm.isSendEmail || false,
                isSendSMS: _this6.paymentForm.isSendSMS || false,
                payment_method_id: _this6.paymentForm.payment_method_id || null
              };
              apiEndpoint = '/api/purchase-pay';
              successMessage = _this6.$t("Purchase payment added successfully");
              _context5.n = 4;
              break;
            case 2:
              // Determine effective Invoice ID
              // Try prop first (most reliable), then form data
              effectiveInvoiceId = _this6.invoiceId;
              if (!effectiveInvoiceId && _this6.paymentForm.invoice_id) {
                console.log('Using invoice_id from paymentForm fallback:', _this6.paymentForm.invoice_id);
                effectiveInvoiceId = _this6.paymentForm.invoice_id;
              }

              // Validation: Check if we have an ID
              if (effectiveInvoiceId) {
                _context5.n = 3;
                break;
              }
              console.error('CRITICAL: Invoice ID missing in both prop and form');
              _this6.$toast.error(_this6.$t("Error"), "System Error: Invoice ID not found. Please try refreshing or checking the invoice details.");
              return _context5.a(2);
            case 3:
              // Prepare form data for invoice payment
              formData = {
                invoice_id: effectiveInvoiceId,
                paidAmount: parseFloat(_this6.paymentForm.paidAmount),
                account: _this6.paymentForm.account,
                receiptNo: _this6.paymentForm.receiptNo || '',
                date: _this6.paymentForm.paymentDate || new Date().toISOString().slice(0, 10),
                note: _this6.paymentForm.note || '',
                netTotal: _this6.dueAmount,
                isSendEmail: _this6.paymentForm.isSendEmail || false,
                isSendSMS: _this6.paymentForm.isSendSMS || false,
                payment_method_id: _this6.paymentForm.payment_method_id || null
              };
              apiEndpoint = '/api/invoices-pay';
              successMessage = _this6.$t("Invoice payment added successfully");
            case 4:
              _context5.n = 5;
              return axios_default().post(window.location.origin + apiEndpoint, formData).then(function () {
                _this6.$toast.success(_this6.$t("Success!"), successMessage);
                _this6.paymentForm.reset();
                _this6.paymentForm.paymentDate = new Date().toISOString().slice(0, 10);
                _this6.paymentForm.status = 1;
                _this6.paymentForm.payment_method_id = null;
                // Emit payment saved event
                _this6.$emit('payment-saved');
                // Close modal
                _this6.handleClose();
              })["catch"](function (error) {
                if (error.response && error.response.status === 422 && error.response.data && error.response.data.errors) {
                  var errors = error.response.data.errors;
                  _this6.paymentForm.errors.set(errors);
                  var messages = Object.values(errors).flat();
                  _this6.$toast.error(_this6.$t('Validation Error'), messages.join('\n'));
                } else {
                  var _error$response;
                  _this6.$toast.error(_this6.$t("Error"), ((_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this6.$t("Please check your input and try again."));
                }
              });
            case 5:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    // Handle close
    handleClose: function handleClose() {
      this.$emit('close');
    }
  }
});
;// ./resources/js/components/InvoicePaymentModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_InvoicePaymentModalvue_type_script_lang_js = (InvoicePaymentModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InvoicePaymentModal.vue?vue&type=style&index=0&id=65c2e2a1&prod&scoped=true&lang=css
var InvoicePaymentModalvue_type_style_index_0_id_65c2e2a1_prod_scoped_true_lang_css = __webpack_require__(12825);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/InvoicePaymentModal.vue?vue&type=style&index=0&id=65c2e2a1&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(InvoicePaymentModalvue_type_style_index_0_id_65c2e2a1_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_InvoicePaymentModalvue_type_style_index_0_id_65c2e2a1_prod_scoped_true_lang_css = (InvoicePaymentModalvue_type_style_index_0_id_65c2e2a1_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/InvoicePaymentModal.vue?vue&type=style&index=0&id=65c2e2a1&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/InvoicePaymentModal.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_InvoicePaymentModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "65c2e2a1",
  null
  
)

/* harmony default export */ const InvoicePaymentModal = (component.exports);

/***/ },

/***/ 41600
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ItemsTable)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ItemsTable.vue?vue&type=template&id=6362b7f3&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.items && _vm.items.length > 0 ? _c('div', {
    staticClass: "items-table-wrapper mt-3 mb-4"
  }, [_c('div', {
    staticClass: "table-responsive table-custom w-100 m-auto",
    staticStyle: {
      "max-width": "100%"
    }
  }, [_c('table', {
    "class": ['table', 'table-hover', 'table-sm', 'text-center', _vm.tableClass]
  }, [_c('thead', [_c('th', [_vm._v(_vm._s(_vm.$t("#")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Code")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Item Name")))]), _vm._v(" "), _vm.showInvoiceQtyColumn ? _c('th', [_vm._v(_vm._s(_vm.$t("Invoice Qty")))]) : _vm._e(), _vm._v(" "), _vm.showCurrentQtyColumn ? _c('th', [_vm._v(_vm._s(_vm.$t("Current Qty")))]) : _vm._e(), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Qty")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Price")))]), _vm._v(" "), _c('th', [_vm._v(_vm._s(_vm.$t("Total")))]), _vm._v(" "), !_vm.hideDiscountColumn ? _c('th', [_vm._v(_vm._s(_vm.$t("Discount")))]) : _vm._e(), _vm._v(" "), !_vm.hideDiscountColumn ? _c('th', [_vm._v(_vm._s(_vm.$t("Total After Discount")))]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('th', [_vm._v(_vm._s(_vm.$t("VAT Type")))]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('th', [_vm._v(_vm._s(_vm.$t("VAT")))]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('th', [_vm._v(_vm._s(_vm.$t("Total with VAT")))]) : _vm._e(), _vm._v(" "), _vm.showReturnPriceColumn ? _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t("Return Price")))]) : _vm._e(), _vm._v(" "), !_vm.showReturnPriceColumn ? _c('th', {
    staticClass: "text-right"
  }, [_vm._v(_vm._s(_vm.$t("Action")))]) : _vm._e()]), _vm._v(" "), _c('tbody', [_vm._l(_vm.items, function (item, i) {
    return _c('tr', {
      key: i
    }, [_c('td', {
      staticClass: "auto-width"
    }, [_vm._v(_vm._s(++i))]), _vm._v(" "), _c('td', {
      staticClass: "auto-width"
    }, [_vm._v(_vm._s(_vm._f("withPrefix")(item.code, _vm.prefix)))]), _vm._v(" "), _c('td', {
      staticClass: "auto-width"
    }, [_c('div', {
      staticClass: "d-flex align-items-center"
    }, [Number(item.inventoryCount) < Number(_vm.getItemField(item, _vm.qtyFieldName)) && item.itemType == 'product' ? _c('span', {
      directives: [{
        name: "tooltip",
        rawName: "v-tooltip",
        value: _vm.$t('Click to manage stock'),
        expression: "$t('Click to manage stock')"
      }],
      staticClass: "badge badge-danger p-2 mr-2 clickable-badge",
      on: {
        "click": function click($event) {
          return _vm.$emit('open-stock-modal', item);
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
    }, [_vm._v("\n                                    " + _vm._s(item.name) + "\n                                ")]) : _c('span', [_vm._v(_vm._s(item.name))])], 1), _vm._v(" "), _vm.showEditButton ? _c('button', {
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
          return _vm.$emit('edit-product', item);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-edit"
    })]) : _vm._e()])]), _vm._v(" "), _vm.showInvoiceQtyColumn ? _c('td', {
      staticClass: "auto-width"
    }, [_vm._v("\n                        " + _vm._s(item.invoiceQty || item.qty) + " " + _vm._s(item.unit || '') + "\n                    ")]) : _vm._e(), _vm._v(" "), _vm.showCurrentQtyColumn ? _c('td', {
      staticClass: "auto-width"
    }, [_vm._v("\n                        " + _vm._s(item.returnQty !== undefined ? item.returnQty : (item.invoiceQty || item.qty) - (item.oldQty || 0)) + " " + _vm._s(item.unit || '') + "\n                    ")]) : _vm._e(), _vm._v(" "), _c('td', {
      staticClass: "fixed-qty-column"
    }, [_c('div', {
      staticClass: "input-group custom-qty-input"
    }, [_c('input', {
      staticClass: "button-minus icon-shape icon-sm btn-danger",
      attrs: {
        "type": "button",
        "value": "-",
        "data-field": "quantity",
        "disabled": item.isFromQuotation
      },
      on: {
        "click": function click($event) {
          _vm.handleItemChange(_vm.getItemField(item, _vm.qtyFieldName), 'qty', i - 1, 'decrement');
        }
      }
    }), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: item[_vm.qtyFieldName],
        expression: "item[qtyFieldName]",
        modifiers: {
          "number": true
        }
      }],
      staticClass: "quantity-field border-0 incrementor",
      "class": {
        'is-invalid': _vm.getFieldError("selectedProducts.".concat(i - 1, ".").concat(_vm.qtyFieldName)),
        'insufficient-stock-input': Number(item.inventoryCount) < Number(_vm.getItemField(item, _vm.qtyFieldName)) && item.itemType == 'product'
      },
      attrs: {
        "type": "number",
        "step": "any",
        "id": "Qty-".concat(i),
        "name": "quantity",
        "required": "",
        "min": "1",
        "max": _vm.disableInventoryMaxRestriction ? null : item.itemType == 'product' ? item.inventoryCount : item.maxQty || null,
        "readonly": item.isFromQuotation,
        "placeholder": _vm.$t('Quantity')
      },
      domProps: {
        "value": item[_vm.qtyFieldName]
      },
      on: {
        "change": function change($event) {
          return _vm.handleItemChange($event.target.value, 'qty', i - 1, '');
        },
        "keyup": function keyup($event) {
          return _vm.handleItemChange($event.target.value, 'qty', i - 1, '');
        },
        "input": [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, _vm.qtyFieldName, _vm._n($event.target.value));
        }, function ($event) {
          return _vm.handleItemChange($event.target.value, 'qty', i - 1, '');
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
        "data-field": "quantity",
        "disabled": item.isFromQuotation
      },
      on: {
        "click": function click($event) {
          _vm.handleItemChange(_vm.getItemField(item, _vm.qtyFieldName), 'qty', i - 1, 'increment');
        }
      }
    })])]), _vm._v(" "), _c('td', {
      staticClass: "auto-width"
    }, [!_vm.priceReadonly ? _c('div', {
      staticClass: "input-group custom-qty-input"
    }, [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: item[_vm.unitPriceFieldName],
        expression: "item[unitPriceFieldName]",
        modifiers: {
          "number": true
        }
      }],
      staticClass: "quantity-field border-0",
      attrs: {
        "type": "number",
        "step": "any",
        "min": "0",
        "id": "unitPrice-".concat(i),
        "name": "unitPrice",
        "required": "",
        "readonly": item.isFromQuotation
      },
      domProps: {
        "value": item[_vm.unitPriceFieldName]
      },
      on: {
        "input": [function ($event) {
          if ($event.target.composing) return;
          _vm.$set(item, _vm.unitPriceFieldName, _vm._n($event.target.value));
        }, function ($event) {
          return _vm.handleItemChange(item[_vm.unitPriceFieldName], 'price', i - 1, '');
        }],
        "blur": function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    })]) : _c('div', [_vm._v("\n                            " + _vm._s(_vm.formatToTwoDecimals(_vm.getItemField(item, _vm.unitPriceFieldName))) + "\n                        ")])]), _vm._v(" "), _c('td', {
      staticClass: "no-currency auto-width"
    }, [_vm._v(_vm._s(_vm.formatToTwoDecimals((item.originalPrice || _vm.getItemField(item, _vm.unitPriceFieldName)) * (item.invoiceQty || _vm.getItemField(item, _vm.qtyFieldName) || 1))) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]), _vm._v(" "), !_vm.hideDiscountColumn ? _c('td', {
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
        'is-invalid': _vm.getFieldError("selectedProducts.".concat(i - 1, ".discountType"))
      },
      staticStyle: {
        "width": "85px"
      },
      attrs: {
        "disabled": item.isFromQuotation || _vm.discountReadonly
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
          return _vm.handleDiscountChange(i - 1);
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
        'is-invalid': _vm.getFieldError("selectedProducts.".concat(i - 1, ".discount"))
      },
      staticStyle: {
        "width": "80px"
      },
      attrs: {
        "type": "number",
        "step": "any",
        "min": "0",
        "max": item.discountType == 'percentage' ? 100 : _vm.getItemField(item, _vm.unitPriceFieldName) * _vm.getItemField(item, _vm.qtyFieldName),
        "readonly": item.isFromQuotation || _vm.discountReadonly,
        "placeholder": "0"
      },
      domProps: {
        "value": item.discount
      },
      on: {
        "change": function change($event) {
          return _vm.handleDiscountChange(i - 1);
        },
        "keyup": function keyup($event) {
          return _vm.handleDiscountChange(i - 1);
        },
        "input": function input($event) {
          if ($event.target.composing) return;
          _vm.$set(item, "discount", $event.target.value);
        }
      }
    })]), _vm._v(" "), _vm.getFieldError("selectedProducts.".concat(i - 1, ".discount")) || _vm.getFieldError("selectedProducts.".concat(i - 1, ".discountType")) ? _c('div', {
      staticClass: "invalid-feedback d-block"
    }, [_vm.getFieldError("selectedProducts.".concat(i - 1, ".discount")) ? _c('span', {
      staticClass: "d-block"
    }, [_vm._v(_vm._s(_vm.getFieldErrorMessage("selectedProducts.".concat(i - 1, ".discount"))))]) : _vm._e(), _vm._v(" "), _vm.getFieldError("selectedProducts.".concat(i - 1, ".discountType")) ? _c('span', {
      staticClass: "d-block"
    }, [_vm._v(_vm._s(_vm.getFieldErrorMessage("selectedProducts.".concat(i - 1, ".discountType"))))]) : _vm._e()]) : _vm._e()]) : _vm._e(), _vm._v(" "), !_vm.hideDiscountColumn ? _c('td', {
      staticClass: "no-currency auto-width"
    }, [_vm._v(_vm._s(_vm.formatToTwoDecimals(item.totalAfterDiscount !== undefined ? item.totalAfterDiscount : _vm.getItemField(item, _vm.unitPriceFieldName) * _vm.getItemField(item, _vm.qtyFieldName) - (item.discountAmount || 0))) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('td', {
      staticClass: "fixed-vat-column"
    }, [_vm.useVatRateId ? _c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.vat_rate_id,
        expression: "item.vat_rate_id"
      }],
      staticClass: "form-control form-control-sm",
      "class": {
        'is-invalid': _vm.getFieldError("selectedProducts.".concat(i - 1, ".vat_rate_id"))
      },
      staticStyle: {
        "min-width": "120px"
      },
      attrs: {
        "disabled": item.isFromQuotation || _vm.vatReadonly
      },
      on: {
        "change": [function ($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
            return o.selected;
          }).map(function (o) {
            var val = "_value" in o ? o._value : o.value;
            return val;
          });
          _vm.$set(item, "vat_rate_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
        }, function ($event) {
          return _vm.handleVatChange(i - 1);
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
          "value": tax.id
        }
      }, [_vm._v("\n                                " + _vm._s(tax.code) + " (" + _vm._s(tax.rate) + "%)\n                            ")]);
    })], 2) : _c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: item.selectedVatRate,
        expression: "item.selectedVatRate"
      }],
      staticClass: "form-control form-control-sm",
      "class": {
        'is-invalid': _vm.getFieldError("selectedProducts.".concat(i - 1, ".selectedVatRate"))
      },
      staticStyle: {
        "min-width": "120px"
      },
      attrs: {
        "disabled": item.isFromQuotation || _vm.vatReadonly
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
          return _vm.handleVatChange(i - 1);
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
      }, [_vm._v("\n                                " + _vm._s(tax.code) + " (" + _vm._s(tax.rate) + "%)\n                            ")]);
    })], 2), _vm._v(" "), _vm.useVatRateId && _vm.getFieldError("selectedProducts.".concat(i - 1, ".vat_rate_id")) ? _c('div', {
      staticClass: "invalid-feedback d-block"
    }, [_vm._v("\n                            " + _vm._s(_vm.getFieldErrorMessage("selectedProducts.".concat(i - 1, ".vat_rate_id"))) + "\n                        ")]) : _vm._e(), _vm._v(" "), !_vm.useVatRateId && _vm.getFieldError("selectedProducts.".concat(i - 1, ".selectedVatRate")) ? _c('div', {
      staticClass: "invalid-feedback d-block"
    }, [_vm._v("\n                            " + _vm._s(_vm.getFieldErrorMessage("selectedProducts.".concat(i - 1, ".selectedVatRate"))) + "\n                        ")]) : _vm._e()]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('td', {
      staticClass: "no-currency fixed-vat-column"
    }, [_c('div', [_vm._v("\n                            " + _vm._s(_vm.formatToTwoDecimals(item.totalTax || 0)) + "\n                            "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])])]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('td', {
      staticClass: "no-currency auto-width"
    }, [_vm._v(_vm._s(_vm.formatToTwoDecimals(item.totalPrice)) + "\n                        "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), _vm.showReturnPriceColumn ? _c('td', {
      staticClass: "text-right auto-width"
    }, [_vm._v("\n                        " + _vm._s(_vm.formatToTwoDecimals(item.returnTotal !== undefined ? item.returnTotal : item.totalReturn || 0)) + " "), _c('span', {
      staticClass: "saudi-riyal"
    }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), !_vm.showReturnPriceColumn ? _c('td', {
      staticClass: "text-right auto-width"
    }, [_c('button', {
      staticClass: "btn btn-danger",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.$emit('remove-item', item);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-times"
    })])]) : _vm._e()]);
  }), _vm._v(" "), _c('tr', [_c('td', {
    staticClass: "text-right",
    attrs: {
      "colspan": _vm.totalsColspan + (_vm.showInvoiceQtyColumn ? 1 : 0) + (_vm.showCurrentQtyColumn ? 1 : 0)
    }
  }, [!_vm.hideDiscountColumn && !_vm.hideVatColumn ? _c('strong', [_vm._v(" " + _vm._s(_vm.$t("Total")) + " : " + _vm._s(_vm.amountInWords) + " ")]) : _c('strong', [_vm._v(_vm._s(_vm.$t("Subtotal")))])]), _vm._v(" "), _vm.totalsColspan === 4 && !_vm.hideDiscountColumn && !_vm.hideVatColumn ? _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalUnitPrice)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), !_vm.hideDiscountColumn && !_vm.hideVatColumn ? _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.customTotalValue !== null ? _vm.customTotalValue : _vm.totalUnitPrice)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), !_vm.hideDiscountColumn && !_vm.hideVatColumn ? _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalProductDiscount)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), !_vm.hideDiscountColumn && !_vm.hideVatColumn ? _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalAfterDiscount)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('td', [_c('strong')]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalProductTax)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), !_vm.hideVatColumn ? _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.calculatedSubTotal)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), _vm.showReturnPriceColumn && !_vm.hideDiscountColumn && !_vm.hideVatColumn ? _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.customTotalValue !== null ? _vm.customTotalValue : 0)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), _vm.hideDiscountColumn && _vm.hideVatColumn ? _c('td', {
    staticClass: "no-currency"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalUnitPrice)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), _vm.showReturnPriceColumn && _vm.hideDiscountColumn && _vm.hideVatColumn ? _c('td', {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.customTotalValue !== null ? _vm.customTotalValue : _vm.calculatedSubTotal)))]), _vm._v(" "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])]) : _vm._e(), _vm._v(" "), !_vm.showReturnPriceColumn && !_vm.hideDiscountColumn && !_vm.hideVatColumn ? _c('td') : _vm._e()])], 2)])])]) : _vm._e();
};
var staticRenderFns = [];

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ItemsTable.vue?vue&type=script&lang=js
/* harmony default export */ const ItemsTablevue_type_script_lang_js = ({
  name: 'ItemsTable',
  props: {
    items: {
      type: Array,
      required: true,
      "default": function _default() {
        return [];
      }
    },
    prefix: {
      type: String,
      "default": ''
    },
    taxes: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    formErrors: {
      type: Object,
      "default": function _default() {
        return {};
      }
    },
    totalUnitPrice: {
      type: Number,
      "default": 0
    },
    totalProductDiscount: {
      type: Number,
      "default": 0
    },
    totalAfterDiscount: {
      type: Number,
      "default": 0
    },
    totalProductTax: {
      type: Number,
      "default": 0
    },
    subtotal: {
      type: Number,
      "default": 0
    },
    amountInWords: {
      type: String,
      "default": ''
    },
    showEditButton: {
      type: Boolean,
      "default": true
    },
    useVatRateId: {
      type: Boolean,
      "default": false
    },
    tableClass: {
      type: String,
      "default": 'quotations-create-table'
    },
    qtyFieldName: {
      type: String,
      "default": 'qty'
    },
    unitPriceFieldName: {
      type: String,
      "default": 'unitPrice'
    },
    priceReadonly: {
      type: Boolean,
      "default": false
    },
    customTotalValue: {
      type: Number,
      "default": null
    },
    totalsColspan: {
      type: Number,
      "default": 5
    },
    hideDiscountColumn: {
      type: Boolean,
      "default": false
    },
    hideVatColumn: {
      type: Boolean,
      "default": false
    },
    showInvoiceQtyColumn: {
      type: Boolean,
      "default": false
    },
    showCurrentQtyColumn: {
      type: Boolean,
      "default": false
    },
    showReturnPriceColumn: {
      type: Boolean,
      "default": false
    },
    disableInventoryMaxRestriction: {
      type: Boolean,
      "default": false
    },
    discountReadonly: {
      type: Boolean,
      "default": false
    },
    vatReadonly: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    calculatedSubTotal: function calculatedSubTotal() {
      var _this = this;
      if (!this.items || this.items.length === 0) return 0;
      return this.items.reduce(function (sum, item) {
        // Use totalPrice directly if available to ensure it matches the row display
        var itemTotal = item.totalPrice;
        if (itemTotal !== undefined && itemTotal !== null) {
          return sum + Number(itemTotal);
        }

        // Fallback logic
        var unitPrice = item[_this.unitPriceFieldName] || 0;
        var qty = item[_this.qtyFieldName] || 0;
        var net = item.totalAfterDiscount;
        if (net === undefined || net === null) {
          net = unitPrice * qty - (item.discountAmount || 0);
        }
        net = Number(net);
        var tax = Number(item.totalTax) || 0;
        return sum + net + tax;
      }, 0);
    }
  },
  methods: {
    getItemField: function getItemField(item, fieldName) {
      // Helper to handle dynamic field names safely
      return item[fieldName] !== undefined ? item[fieldName] : 0;
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
    getFieldError: function getFieldError(field) {
      if (!this.formErrors || typeof this.formErrors.has !== 'function') {
        return false;
      }
      return this.formErrors.has(field);
    },
    getFieldErrorMessage: function getFieldErrorMessage(field) {
      if (!this.formErrors || typeof this.formErrors.get !== 'function') {
        return '';
      }
      return this.formErrors.get(field);
    },
    handleItemChange: function handleItemChange(value, type, index, action) {
      this.$emit('item-change', {
        value: value,
        type: type,
        index: index,
        action: action
      });
    },
    handleDiscountChange: function handleDiscountChange(index) {
      this.$emit('discount-change', index);
    },
    handleVatChange: function handleVatChange(index) {
      this.$emit('vat-change', index);
    }
  }
});
;// ./resources/js/components/ItemsTable.vue?vue&type=script&lang=js
 /* harmony default export */ const components_ItemsTablevue_type_script_lang_js = (ItemsTablevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ItemsTable.vue?vue&type=style&index=0&id=6362b7f3&prod&scoped=true&lang=css
var ItemsTablevue_type_style_index_0_id_6362b7f3_prod_scoped_true_lang_css = __webpack_require__(55031);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ItemsTable.vue?vue&type=style&index=0&id=6362b7f3&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(ItemsTablevue_type_style_index_0_id_6362b7f3_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_ItemsTablevue_type_style_index_0_id_6362b7f3_prod_scoped_true_lang_css = (ItemsTablevue_type_style_index_0_id_6362b7f3_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/ItemsTable.vue?vue&type=style&index=0&id=6362b7f3&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/ItemsTable.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_ItemsTablevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "6362b7f3",
  null
  
)

/* harmony default export */ const ItemsTable = (component.exports);

/***/ },

/***/ 72781
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ProductCreateModal)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCreateModal.vue?vue&type=template&id=387d6191&scoped=true
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
    staticClass: "col-form-6"
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
      "for": "barcodeSymbology"
    }
  }, [_vm._v(_vm._s(_vm.$t("Barcode Symbology")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.barcodeSymbology,
      expression: "form.barcodeSymbology"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('barcodeSymbology')
    },
    attrs: {
      "id": "barcodeSymbology",
      "name": "barcodeSymbology"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "barcodeSymbology", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.barcodeSymbologyOptions, function (opt) {
    return _c('option', {
      key: opt,
      domProps: {
        "value": opt
      }
    }, [_vm._v(_vm._s(opt))]);
  }), 0), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "barcodeSymbology"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "subCategory"
    }
  }, [_vm._v(_vm._s(_vm.$t("Category")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex w-100"
  }, [_c('v-select', {
    staticClass: "flex-grow-1",
    "class": {
      'is-invalid': _vm.form.errors.has('subCategory'),
      'category-select': true
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
  }), _vm._v(" "), _c('CategorySubcategoryCreateModal', {
    on: {
      "categoryCreated": _vm.handleCategoryCreated,
      "subcategoryCreated": _vm.handleSubcategoryCreated
    }
  }, [_c('div', {
    staticClass: "input-group-text create-btn"
  }, [_c('i', {
    staticClass: "fas fa-solid fa-plus-circle"
  })])])], 1), _vm._v(" "), _c('has-error', {
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
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex w-100"
  }, [_c('v-select', {
    staticClass: "flex-grow-1",
    "class": {
      'is-invalid': _vm.form.errors.has('itemUnit'),
      'unit-select': true
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
  }), _vm._v(" "), _c('UnitCreateModal', {
    on: {
      "unitCreated": _vm.handleUnitCreated
    }
  }, [_c('div', {
    staticClass: "input-group-text create-btn"
  }, [_c('i', {
    staticClass: "fas fa-solid fa-plus-circle"
  })])])], 1), _vm._v(" "), _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Base unit (conversion factor = 1)")))]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemUnit"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group mt-3"
  }, [_c('label', {
    staticClass: "d-block"
  }, [_vm._v(_vm._s(_vm.$t("Unit conversions")))]), _vm._v(" "), _c('small', {
    staticClass: "form-text text-muted mb-2"
  }, [_vm._v(_vm._s(_vm.$t("Link additional units with conversion factor relative to base unit (e.g. 1 Carton = 12 Pieces)")))]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-sm table-bordered"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Unit")))]), _vm._v(" "), _c('th', {
    staticStyle: {
      "width": "180px"
    }
  }, [_vm._v(_vm._s(_vm.$t("Conversion factor")))]), _vm._v(" "), _c('th', {
    staticStyle: {
      "width": "80px"
    }
  })])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm.form.itemUnit ? _c('span', [_vm._v(_vm._s(_vm.form.itemUnit.name || _vm.form.itemUnit))]) : _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("—")])]), _vm._v(" "), _c('td', [_vm._v("1 "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(" + _vm._s(_vm.$t("base")) + ")")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _vm._l(_vm.form.unitConversions, function (row, index) {
    return _c('tr', {
      key: 'uc-' + index
    }, [_c('td', [_c('v-select', {
      staticClass: "form-control form-control-sm",
      "class": {
        'is-invalid': row.unit && !_vm.isValidConversionFactor(row.conversion_factor)
      },
      attrs: {
        "options": _vm.additionalUnitOptions(index),
        "label": "name",
        "placeholder": _vm.$t('Select a unit')
      },
      model: {
        value: row.unit,
        callback: function callback($$v) {
          _vm.$set(row, "unit", $$v);
        },
        expression: "row.unit"
      }
    })], 1), _vm._v(" "), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: row.conversion_factor,
        expression: "row.conversion_factor",
        modifiers: {
          "number": true
        }
      }],
      staticClass: "form-control form-control-sm",
      "class": {
        'is-invalid': !_vm.isValidConversionFactor(row.conversion_factor) && row.conversion_factor !== ''
      },
      attrs: {
        "type": "number",
        "step": "any",
        "min": "0.0001",
        "placeholder": _vm.$t('e.g. 12')
      },
      domProps: {
        "value": row.conversion_factor
      },
      on: {
        "input": function input($event) {
          if ($event.target.composing) return;
          _vm.$set(row, "conversion_factor", _vm._n($event.target.value));
        },
        "blur": function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    }), _vm._v(" "), row.unit ? _c('small', {
      staticClass: "form-text text-muted"
    }, [_vm._v("1 " + _vm._s(row.unit.name) + " = " + _vm._s(row.conversion_factor || '?') + " " + _vm._s(_vm.baseUnitName))]) : _vm._e()]), _vm._v(" "), _c('td', [_c('button', {
      staticClass: "btn btn-sm btn-outline-danger",
      attrs: {
        "type": "button",
        "title": _vm.$t('Remove')
      },
      on: {
        "click": function click($event) {
          return _vm.removeUnitConversion(index);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-trash-alt"
    })])])]);
  })], 2)])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-outline-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.addUnitConversion
    }
  }, [_c('i', {
    staticClass: "fas fa-plus mr-1"
  }), _vm._v(_vm._s(_vm.$t("Add unit")) + "\n                  ")])]), _vm._v(" "), _c('div', {
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
    staticClass: "col-form-6"
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
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "regularPrice", $event.target.value);
      }, _vm.checkPurchasePriceWarning],
      "blur": _vm.checkPurchasePriceWarning
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "regularPrice"
    }
  }), _vm._v(" "), _vm.showPurchasePriceWarning ? _c('small', {
    staticClass: "text-warning d-block mt-1"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle"
  }), _vm._v("\n                    " + _vm._s(_vm.$t("Warning: Purchase price is greater than selling price")) + "\n                  ")]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group",
    staticStyle: {
      "display": "none"
    }
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
    staticClass: "col-form-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "openingStockEntryUnit"
    }
  }, [_vm._v(_vm._s(_vm.$t("Opening Stock")))]), _vm._v(" "), _c('div', {
    staticClass: "row no-gutters"
  }, [_c('div', {
    staticClass: "col-5 pr-1"
  }, [_c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('openingStockCount') || _vm.openingStockEntryUnitError
    },
    attrs: {
      "id": "openingStockEntryUnit",
      "options": _vm.openingStockUnitOptions,
      "label": "name",
      "placeholder": _vm.$t('Select unit')
    },
    on: {
      "input": _vm.updateOpeningStockFromEntry
    },
    model: {
      value: _vm.form.openingStockEntryUnit,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "openingStockEntryUnit", $$v);
      },
      expression: "form.openingStockEntryUnit"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-7 pl-1"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.openingStockEntryQuantity,
      expression: "form.openingStockEntryQuantity"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('openingStockCount') || _vm.openingStockEntryUnitError
    },
    attrs: {
      "id": "openingStockEntryQuantity",
      "type": "number",
      "step": "any",
      "min": "0",
      "placeholder": _vm.$t('Quantity')
    },
    domProps: {
      "value": _vm.form.openingStockEntryQuantity
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "openingStockEntryQuantity", $event.target.value);
      }, _vm.updateOpeningStockFromEntry],
      "change": _vm.updateOpeningStockFromEntry
    }
  })])]), _vm._v(" "), _vm.form.openingStockCount !== '' && _vm.form.openingStockCount !== null && _vm.baseUnitName ? _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Stored as")) + " " + _vm._s(_vm.form.openingStockCount) + " " + _vm._s(_vm.baseUnitName) + "\n                  ")]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "openingStockCount"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-form-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "openingStockUnitPrice"
    }
  }, [_vm._v(_vm._s(_vm.$t("Purchase Price")))]), _vm._v(" "), _c('input', {
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
      "placeholder": _vm.$t('Enter purchase price')
    },
    domProps: {
      "value": _vm.form.openingStockUnitPrice
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "openingStockUnitPrice", $event.target.value);
      }, _vm.checkPurchasePriceWarning],
      "change": _vm.checkPurchasePriceWarning,
      "blur": _vm.checkPurchasePriceWarning
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "openingStockUnitPrice"
    }
  }), _vm._v(" "), _vm.showPurchasePriceWarning ? _c('small', {
    staticClass: "text-warning d-block mt-1"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle"
  }), _vm._v("\n                    " + _vm._s(_vm.$t("Warning: Purchase price is greater than selling price")) + "\n                  ")]) : _vm._e()], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-form-6"
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
    staticClass: "fas fa-cogs mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Service Information")) + "\n            ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-form-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "servicePurchasePrice"
    }
  }, [_vm._v(_vm._s(_vm.$t("Service Purchase Price")) + " "), _c('span', {
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
      "placeholder": _vm.$t('Enter service purchase price')
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
  })], 1)])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-form-6"
  }, [_c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-chart-line mr-2"
  }), _vm._v("\n                  " + _vm._s(_vm.$t("Chart of Accounts")) + "\n                ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_vm.isSalesAccountAutomatic || _vm.isPurchaseAccountAutomatic ? _c('div', {
    staticClass: "row mb-3"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "alert alert-info d-flex align-items-center"
  }, [_c('i', {
    staticClass: "fas fa-info-circle mr-2"
  }), _vm._v(" "), _c('span', [_vm._v("\n                        " + _vm._s(_vm.$t("Automatic account assignment is enabled")) + "\n                      ")])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "account-label-row"
  }, [_c('label', {
    staticClass: "account-label",
    attrs: {
      "for": "salesAccountId"
    }
  }, [_vm._v("\n                          " + _vm._s(_vm.$t("Sales Account")) + "\n                          "), !_vm.isSalesAccountAutomatic || _vm.form.overrideSalesAccount ? _c('span', {
    staticClass: "required"
  }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _vm.isSalesAccountAutomatic ? _c('div', {
    staticClass: "toggle-switch-container"
  }, [_c('label', {
    staticClass: "toggle-switch-label"
  }, [_c('span', {
    staticClass: "toggle-switch-wrapper"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.overrideSalesAccount,
      expression: "form.overrideSalesAccount"
    }],
    staticClass: "toggle-switch-input",
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
    staticClass: "toggle-switch-slider"
  })]), _vm._v(" "), _c('span', {
    staticClass: "toggle-switch-text"
  }, [_vm._v("\n                              " + _vm._s(_vm.form.overrideSalesAccount ? _vm.$t("Manual") : _vm.$t("Automatic")) + "\n                            ")])])]) : _vm._e()]), _vm._v(" "), !_vm.isSalesAccountAutomatic || _vm.form.overrideSalesAccount ? _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
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
  })], 1) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "account-label-row"
  }, [_c('label', {
    staticClass: "account-label",
    attrs: {
      "for": "purchaseAccountId"
    }
  }, [_vm._v("\n                          " + _vm._s(_vm.$t("Purchase Account")) + "\n                          "), !_vm.isPurchaseAccountAutomatic || _vm.form.overridePurchaseAccount ? _c('span', {
    staticClass: "required"
  }, [_vm._v("*")]) : _vm._e()]), _vm._v(" "), _vm.isPurchaseAccountAutomatic ? _c('div', {
    staticClass: "toggle-switch-container"
  }, [_c('label', {
    staticClass: "toggle-switch-label"
  }, [_c('span', {
    staticClass: "toggle-switch-wrapper"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.overridePurchaseAccount,
      expression: "form.overridePurchaseAccount"
    }],
    staticClass: "toggle-switch-input",
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
    staticClass: "toggle-switch-slider"
  })]), _vm._v(" "), _c('span', {
    staticClass: "toggle-switch-text"
  }, [_vm._v("\n                              " + _vm._s(_vm.form.overridePurchaseAccount ? _vm.$t("Manual") : _vm.$t("Automatic")) + "\n                            ")])])]) : _vm._e()]), _vm._v(" "), !_vm.isPurchaseAccountAutomatic || _vm.form.overridePurchaseAccount ? _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
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
  })], 1) : _vm._e()])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-form-6"
  }, [_c('div', {
    staticClass: "form-card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_c('h5', {
    staticClass: "section-title"
  }, [_c('i', {
    staticClass: "fas fa-plus-circle mr-2"
  }), _vm._v("\n                  " + _vm._s(_vm.$t("Additional Details")) + "\n                ")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-12"
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
    staticClass: "col-12"
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
  }), _vm._v(" " + _vm._s(_vm.$t("Upload")) + "\n                        ")])]), _vm._v(" "), _c('has-error', {
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
    staticClass: "col-12"
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
  })], 1)])])])])])])])]), _vm._v(" "), _c('div', {
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
// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(78465);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CategorySubcategoryCreateModal.vue?vue&type=template&id=cd890c6e&scoped=true
var CategorySubcategoryCreateModalvue_type_template_id_cd890c6e_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('VModal', {
    on: {
      "close": _vm.closeModal
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(_vm._s(_vm.$t("Create Category / Subcategory")))];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showModal,
      callback: function callback($$v) {
        _vm.showModal = $$v;
      },
      expression: "showModal"
    }
  }, [_vm._v(" "), _c('div', {
    staticClass: "w-100",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('ul', {
    staticClass: "nav nav-tabs mb-3",
    attrs: {
      "role": "tablist"
    }
  }, [_c('li', {
    staticClass: "nav-item"
  }, [_c('a', {
    staticClass: "nav-link",
    "class": {
      active: _vm.activeTab === 'subcategory'
    },
    attrs: {
      "href": "#"
    },
    on: {
      "click": [function ($event) {
        _vm.activeTab = 'subcategory';
      }, function ($event) {
        $event.preventDefault();
      }]
    }
  }, [_c('i', {
    staticClass: "fas fa-folder-open mr-2"
  }), _vm._v("\n              " + _vm._s(_vm.$t("Subcategory")) + "\n            ")])]), _vm._v(" "), _c('li', {
    staticClass: "nav-item"
  }, [_c('a', {
    staticClass: "nav-link",
    "class": {
      active: _vm.activeTab === 'category'
    },
    attrs: {
      "href": "#"
    },
    on: {
      "click": [function ($event) {
        _vm.activeTab = 'category';
      }, function ($event) {
        $event.preventDefault();
      }]
    }
  }, [_c('i', {
    staticClass: "fas fa-folder mr-2"
  }), _vm._v("\n            " + _vm._s(_vm.$t("Main Category")) + "\n          ")])])]), _vm._v(" "), _c('div', {
    staticClass: "tab-content"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.activeTab === 'category',
      expression: "activeTab === 'category'"
    }],
    staticClass: "tab-pane fade",
    "class": {
      'show active': _vm.activeTab === 'category'
    }
  }, [_c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "keydown": function keydown($event) {
        return _vm.categoryForm.onKeydown($event);
      },
      "submit": function submit($event) {
        $event.preventDefault();
        $event.stopPropagation();
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "categoryName"
    }
  }, [_vm._v(_vm._s(_vm.$t('Name')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.categoryForm.name,
      expression: "categoryForm.name"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.categoryForm.errors.has('name')
    },
    attrs: {
      "id": "categoryName",
      "type": "text",
      "name": "name",
      "placeholder": _vm.$t('Enter a name')
    },
    domProps: {
      "value": _vm.categoryForm.name
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.categoryForm, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.categoryForm,
      "field": "name"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "categoryStatus"
    }
  }, [_vm._v(_vm._s(_vm.$t('Status')))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.categoryForm.status,
      expression: "categoryForm.status"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.categoryForm.errors.has('status')
    },
    attrs: {
      "id": "categoryStatus"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.categoryForm, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
      "form": _vm.categoryForm,
      "field": "status"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "categoryNote"
    }
  }, [_vm._v(_vm._s(_vm.$t('Note')))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.categoryForm.note,
      expression: "categoryForm.note"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.categoryForm.errors.has('note')
    },
    attrs: {
      "id": "categoryNote",
      "placeholder": _vm.$t('Write your note here!'),
      "rows": "3"
    },
    domProps: {
      "value": _vm.categoryForm.note
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.categoryForm, "note", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.categoryForm,
      "field": "note"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.activeTab === 'subcategory',
      expression: "activeTab === 'subcategory'"
    }],
    staticClass: "tab-pane fade",
    "class": {
      'show active': _vm.activeTab === 'subcategory'
    }
  }, [_c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "keydown": function keydown($event) {
        return _vm.subcategoryForm.onKeydown($event);
      },
      "submit": function submit($event) {
        $event.preventDefault();
        $event.stopPropagation();
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "subcategoryName"
    }
  }, [_vm._v(_vm._s(_vm.$t('Name')) + "\n                "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.subcategoryForm.name,
      expression: "subcategoryForm.name"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.subcategoryForm.errors.has('name')
    },
    attrs: {
      "id": "subcategoryName",
      "type": "text",
      "name": "name",
      "placeholder": _vm.$t('Enter a name')
    },
    domProps: {
      "value": _vm.subcategoryForm.name
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.subcategoryForm, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.subcategoryForm,
      "field": "name"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm.categories ? _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "subcategoryCategory"
    }
  }, [_vm._v(_vm._s(_vm.$t('Category Name')) + "\n                  "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex w-100"
  }, [_c('v-select', {
    staticClass: "flex-grow-1 category-select",
    "class": {
      'is-invalid': _vm.subcategoryForm.errors.has('category')
    },
    attrs: {
      "options": _vm.categories,
      "label": "name",
      "name": "category",
      "placeholder": _vm.$t('Select a category')
    },
    model: {
      value: _vm.subcategoryForm.category,
      callback: function callback($$v) {
        _vm.$set(_vm.subcategoryForm, "category", $$v);
      },
      expression: "subcategoryForm.category"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "input-group-text create-btn",
    staticStyle: {
      "cursor": "pointer"
    },
    on: {
      "click": function click($event) {
        _vm.activeTab = 'category';
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-solid fa-plus-circle"
  })])], 1), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.subcategoryForm,
      "field": "category"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "subcategoryStatus"
    }
  }, [_vm._v(_vm._s(_vm.$t('Status')))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.subcategoryForm.status,
      expression: "subcategoryForm.status"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.subcategoryForm.errors.has('status')
    },
    attrs: {
      "id": "subcategoryStatus"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.subcategoryForm, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
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
      "form": _vm.subcategoryForm,
      "field": "status"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "subcategoryNote"
    }
  }, [_vm._v(_vm._s(_vm.$t('Note')))]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.subcategoryForm.note,
      expression: "subcategoryForm.note"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.subcategoryForm.errors.has('note')
    },
    attrs: {
      "id": "subcategoryNote",
      "placeholder": _vm.$t('Write your note here!'),
      "rows": "3"
    },
    domProps: {
      "value": _vm.subcategoryForm.note
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.subcategoryForm, "note", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.subcategoryForm,
      "field": "note"
    }
  })], 1)])])])]), _vm._v(" "), _c('div', {
    attrs: {
      "slot": "modal-footer"
    },
    slot: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "loading": _vm.categoryForm.busy || _vm.subcategoryForm.busy
    },
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        return _vm.saveCurrent.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n      ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary ml-2",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        return _vm.closeModal.apply(null, arguments);
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Cancel")) + "\n      ")])])]), _vm._v(" "), _c('a', {
    staticClass: "create-button",
    on: {
      "click": _vm.toggleModal
    }
  }, [_vm._t("default")], 2)], 1);
};
var CategorySubcategoryCreateModalvue_type_template_id_cd890c6e_scoped_true_staticRenderFns = [];

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CategorySubcategoryCreateModal.vue?vue&type=script&lang=js
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ const CategorySubcategoryCreateModalvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  computed: {
    // Use local categories state instead of shared Vuex items
    // This prevents overwriting clients/other data in the store
  },
  data: function data() {
    return {
      showModal: false,
      activeTab: 'subcategory',
      categories: [],
      // Local state for categories instead of Vuex
      categoryForm: new vform_es/* default */.Ay({
        name: '',
        note: '',
        status: 1
      }),
      subcategoryForm: new vform_es/* default */.Ay({
        name: '',
        note: '',
        status: 1,
        category: null
      })
    };
  },
  created: function created() {
    this.getCategories();
  },
  methods: {
    toggleModal: function toggleModal() {
      this.showModal = !this.showModal;
      if (this.showModal) {
        // Reset forms when opening modal
        this.resetForms();
        this.activeTab = 'subcategory';
        // Refresh categories list
        this.getCategories();
      }
    },
    closeModal: function closeModal(event) {
      // Stop event propagation to prevent closing parent modals
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      this.showModal = false;
      this.resetForms();
    },
    resetForms: function resetForms() {
      this.categoryForm.reset();
      this.subcategoryForm.reset();
      this.categoryForm.status = 1;
      this.subcategoryForm.status = 1;
      this.subcategoryForm.category = null;
    },
    // Get all product categories for subcategory form
    // Uses local state instead of Vuex to avoid overwriting other data (like clients)
    getCategories: function getCategories() {
      var _this = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _yield$axios$get, data, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return axios_default().get(window.location.origin + '/api/all-product-categories');
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this.categories = data.data || [];
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error('Error loading categories:', _t);
              _this.categories = [];
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    // Save based on active tab
    saveCurrent: function saveCurrent(event) {
      var _this2 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              // Stop event propagation to prevent closing parent modals
              if (event) {
                event.stopPropagation();
                event.preventDefault();
              }
              if (!(_this2.activeTab === 'category')) {
                _context2.n = 2;
                break;
              }
              _context2.n = 1;
              return _this2.saveCategory();
            case 1:
              _context2.n = 3;
              break;
            case 2:
              _context2.n = 3;
              return _this2.saveSubCategory();
            case 3:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    },
    // Save category
    saveCategory: function saveCategory() {
      var _this3 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var categoryName;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              // Store the category name before saving
              categoryName = _this3.categoryForm.name;
              _context4.n = 1;
              return _this3.categoryForm.post(window.location.origin + '/api/product-categories').then(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
                var createdCategory, newCategory;
                return _regenerator().w(function (_context3) {
                  while (1) switch (_context3.n) {
                    case 0:
                      toast.fire({
                        type: 'success',
                        title: _this3.$t('Category added successfully')
                      });
                      // Refresh categories list for subcategory form
                      _context3.n = 1;
                      return _this3.getCategories();
                    case 1:
                      // Create a simple object with the name for parent to find it
                      createdCategory = {
                        name: categoryName
                      }; // Emit event with created category data to refresh in parent
                      _this3.$emit('categoryCreated', createdCategory);
                      // Reset category form
                      _this3.categoryForm.reset();
                      _this3.categoryForm.status = 1;
                      // Navigate to subcategory tab instead of closing modal
                      _this3.activeTab = 'subcategory';
                      // Auto-select the newly created category in subcategory form
                      _context3.n = 2;
                      return _this3.$nextTick();
                    case 2:
                      newCategory = _this3.categories.find(function (cat) {
                        return cat.name === categoryName;
                      });
                      if (newCategory) {
                        _this3.subcategoryForm.category = newCategory;
                      }
                    case 3:
                      return _context3.a(2);
                  }
                }, _callee3);
              })))["catch"](function (error) {
                // Check if this is a validation error (status 422)
                var status = error && error.response && error.response.status;
                var serverErrors = error && error.response && error.response.data && error.response.data.errors;
                if (status === 422 && serverErrors) {
                  // Show toast notification for validation errors
                  toast.fire({
                    type: 'error',
                    title: _this3.$t('Validation Error'),
                    text: _this3.$t('Please check the form for errors and try again.')
                  });

                  // Scroll to the first invalid input in the modal after DOM updates
                  _this3.$nextTick(function () {
                    // Wait a bit more to ensure vform has added the is-invalid class
                    setTimeout(function () {
                      var invalid = _this3.$el.querySelector('.is-invalid');
                      if (invalid && typeof invalid.scrollIntoView === 'function') {
                        invalid.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center'
                        });
                      }
                    }, 100);
                  });
                } else {
                  // For other errors, show generic error message
                  toast.fire({
                    type: 'error',
                    title: _this3.$t('Please check your input and try again.')
                  });
                }
              });
            case 1:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // Save subcategory
    saveSubCategory: function saveSubCategory() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var subcategoryName;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              // Store the subcategory name before saving
              subcategoryName = _this4.subcategoryForm.name;
              _context6.n = 1;
              return _this4.subcategoryForm.post(window.location.origin + '/api/product-sub-categories').then(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
                var createdSubcategory;
                return _regenerator().w(function (_context5) {
                  while (1) switch (_context5.n) {
                    case 0:
                      toast.fire({
                        type: 'success',
                        title: _this4.$t('Sub category added successfully')
                      });
                      // Create a simple object with the name for parent to find it
                      createdSubcategory = {
                        name: subcategoryName
                      }; // Emit event with created subcategory data to refresh and select in parent
                      _this4.$emit('subcategoryCreated', createdSubcategory);
                      // Reset form
                      _this4.subcategoryForm.reset();
                      _this4.subcategoryForm.status = 1;
                      _this4.subcategoryForm.category = null;
                      // Close only this modal, not parent modals
                      _this4.showModal = false;
                      _this4.resetForms();
                    case 1:
                      return _context5.a(2);
                  }
                }, _callee5);
              })))["catch"](function (error) {
                // Check if this is a validation error (status 422)
                var status = error && error.response && error.response.status;
                var serverErrors = error && error.response && error.response.data && error.response.data.errors;
                if (status === 422 && serverErrors) {
                  // Show toast notification for validation errors
                  toast.fire({
                    type: 'error',
                    title: _this4.$t('Validation Error'),
                    text: _this4.$t('Please check the form for errors and try again.')
                  });

                  // Scroll to the first invalid input in the modal after DOM updates
                  _this4.$nextTick(function () {
                    // Wait a bit more to ensure vform has added the is-invalid class
                    setTimeout(function () {
                      var invalid = _this4.$el.querySelector('.is-invalid');
                      if (invalid && typeof invalid.scrollIntoView === 'function') {
                        invalid.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center'
                        });
                      }
                    }, 100);
                  });
                } else {
                  // For other errors, show generic error message
                  toast.fire({
                    type: 'error',
                    title: _this4.$t('Please check your input and try again.')
                  });
                }
              });
            case 1:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    }
  }
});
;// ./resources/js/components/CategorySubcategoryCreateModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_CategorySubcategoryCreateModalvue_type_script_lang_js = (CategorySubcategoryCreateModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CategorySubcategoryCreateModal.vue?vue&type=style&index=0&id=cd890c6e&prod&scoped=true&lang=css
var CategorySubcategoryCreateModalvue_type_style_index_0_id_cd890c6e_prod_scoped_true_lang_css = __webpack_require__(50797);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CategorySubcategoryCreateModal.vue?vue&type=style&index=0&id=cd890c6e&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(CategorySubcategoryCreateModalvue_type_style_index_0_id_cd890c6e_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_CategorySubcategoryCreateModalvue_type_style_index_0_id_cd890c6e_prod_scoped_true_lang_css = (CategorySubcategoryCreateModalvue_type_style_index_0_id_cd890c6e_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/CategorySubcategoryCreateModal.vue?vue&type=style&index=0&id=cd890c6e&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/components/CategorySubcategoryCreateModal.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_CategorySubcategoryCreateModalvue_type_script_lang_js,
  CategorySubcategoryCreateModalvue_type_template_id_cd890c6e_scoped_true_render,
  CategorySubcategoryCreateModalvue_type_template_id_cd890c6e_scoped_true_staticRenderFns,
  false,
  null,
  "cd890c6e",
  null
  
)

/* harmony default export */ const CategorySubcategoryCreateModal = (component.exports);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UnitCreateModal.vue?vue&type=template&id=3d82b5ae&scoped=true
var UnitCreateModalvue_type_template_id_3d82b5ae_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c('VModal', {
    on: {
      "close": _vm.closeModal
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(_vm._s(_vm.$t("Create Unit")))];
      },
      proxy: true
    }]),
    model: {
      value: _vm.showModal,
      callback: function callback($$v) {
        _vm.showModal = $$v;
      },
      expression: "showModal"
    }
  }, [_vm._v(" "), _c('div', {
    staticClass: "w-100",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('form', {
    attrs: {
      "role": "form"
    },
    on: {
      "keydown": function keydown($event) {
        return _vm.form.onKeydown($event);
      },
      "submit": function submit($event) {
        $event.preventDefault();
        $event.stopPropagation();
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "unitName"
    }
  }, [_vm._v(_vm._s(_vm.$t("Name")) + "\n            "), _c('span', {
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
      "id": "unitName",
      "type": "text",
      "name": "name",
      "placeholder": _vm.$t('Enter a name')
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
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "unitCode"
    }
  }, [_vm._v("\n            " + _vm._s(_vm.$t("Code")) + "\n            "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")]), _vm._v(" "), _c('i', {
    directives: [{
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Unit Code Tooltip'),
      expression: "$t('Unit Code Tooltip')"
    }],
    staticClass: "fas fa-info-circle ml-2 text-info unit-code-tooltip",
    staticStyle: {
      "cursor": "help",
      "font-size": "0.9rem"
    }
  })]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.code,
      expression: "form.code"
    }, {
      name: "tooltip",
      rawName: "v-tooltip",
      value: _vm.$t('Unit Code Tooltip'),
      expression: "$t('Unit Code Tooltip')"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('code')
    },
    attrs: {
      "id": "unitCode",
      "type": "text",
      "name": "code",
      "placeholder": _vm.$t('Enter unit code (1-5 characters)'),
      "maxlength": "5"
    },
    domProps: {
      "value": _vm.form.code
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "code", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Unit Code Helper")))]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "code"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "unitStatus"
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
      "id": "unitStatus"
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "unitNote"
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
      "id": "unitNote",
      "placeholder": _vm.$t('Write your note here!'),
      "rows": "3"
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
  })], 1)])]), _vm._v(" "), _c('div', {
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
        $event.stopPropagation();
        return _vm.saveUnit.apply(null, arguments);
      }
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  }), _vm._v(" " + _vm._s(_vm.$t("Save")) + "\n      ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary ml-2",
    on: {
      "click": function click($event) {
        $event.stopPropagation();
        return _vm.closeModal.apply(null, arguments);
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.$t("Cancel")) + "\n      ")])])]), _vm._v(" "), _c('a', {
    staticClass: "create-button",
    on: {
      "click": _vm.toggleModal
    }
  }, [_vm._t("default")], 2)], 1);
};
var UnitCreateModalvue_type_template_id_3d82b5ae_scoped_true_staticRenderFns = [];

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UnitCreateModal.vue?vue&type=script&lang=js
function UnitCreateModalvue_type_script_lang_js_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(u), UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(u, o, "Generator"), UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(u, n, function () { return this; }), UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (UnitCreateModalvue_type_script_lang_js_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } UnitCreateModalvue_type_script_lang_js_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, UnitCreateModalvue_type_script_lang_js_regeneratorDefine2(e, r, n, t); }
function UnitCreateModalvue_type_script_lang_js_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function UnitCreateModalvue_type_script_lang_js_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { UnitCreateModalvue_type_script_lang_js_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { UnitCreateModalvue_type_script_lang_js_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ const UnitCreateModalvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  data: function data() {
    return {
      showModal: false,
      form: new vform_es/* default */.Ay({
        name: '',
        code: '',
        note: '',
        status: 1
      })
    };
  },
  methods: {
    toggleModal: function toggleModal() {
      this.showModal = !this.showModal;
      if (this.showModal) {
        // Reset form when opening modal
        this.resetForm();
      }
    },
    closeModal: function closeModal(event) {
      // Stop event propagation to prevent closing parent modals
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      this.showModal = false;
      this.resetForm();
    },
    resetForm: function resetForm() {
      this.form.reset();
      this.form.status = 1;
    },
    // Save unit
    saveUnit: function saveUnit(event) {
      var _this = this;
      return UnitCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/UnitCreateModalvue_type_script_lang_js_regenerator().m(function _callee2() {
        var unitName, unitCode;
        return UnitCreateModalvue_type_script_lang_js_regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              // Stop event propagation to prevent closing parent modals
              if (event) {
                event.stopPropagation();
                event.preventDefault();
              }

              // Store the unit name before saving
              unitName = _this.form.name;
              unitCode = _this.form.code;
              _context2.n = 1;
              return _this.form.post(window.location.origin + '/api/units').then(/*#__PURE__*/UnitCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/UnitCreateModalvue_type_script_lang_js_regenerator().m(function _callee() {
                var createdUnit;
                return UnitCreateModalvue_type_script_lang_js_regenerator().w(function (_context) {
                  while (1) switch (_context.n) {
                    case 0:
                      toast.fire({
                        type: 'success',
                        title: _this.$t('Unit added successfully')
                      });
                      // Create a simple object with the name and code for parent to find it
                      createdUnit = {
                        name: unitName,
                        code: unitCode
                      }; // Emit event with created unit data to refresh and select in parent
                      _this.$emit('unitCreated', createdUnit);
                      // Reset form
                      _this.form.reset();
                      _this.form.status = 1;
                      // Close only this modal, not parent modals
                      _this.showModal = false;
                      _this.resetForm();
                    case 1:
                      return _context.a(2);
                  }
                }, _callee);
              })))["catch"](function () {
                toast.fire({
                  type: 'error',
                  title: _this.$t('Please check your input and try again.')
                });
              });
            case 1:
              return _context2.a(2);
          }
        }, _callee2);
      }))();
    }
  }
});
;// ./resources/js/components/UnitCreateModal.vue?vue&type=script&lang=js
 /* harmony default export */ const components_UnitCreateModalvue_type_script_lang_js = (UnitCreateModalvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UnitCreateModal.vue?vue&type=style&index=0&id=3d82b5ae&prod&scoped=true&lang=css
var UnitCreateModalvue_type_style_index_0_id_3d82b5ae_prod_scoped_true_lang_css = __webpack_require__(23711);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/UnitCreateModal.vue?vue&type=style&index=0&id=3d82b5ae&prod&scoped=true&lang=css

            

var UnitCreateModalvue_type_style_index_0_id_3d82b5ae_prod_scoped_true_lang_css_options = {};

UnitCreateModalvue_type_style_index_0_id_3d82b5ae_prod_scoped_true_lang_css_options.insert = "head";
UnitCreateModalvue_type_style_index_0_id_3d82b5ae_prod_scoped_true_lang_css_options.singleton = false;

var UnitCreateModalvue_type_style_index_0_id_3d82b5ae_prod_scoped_true_lang_css_update = injectStylesIntoStyleTag_default()(UnitCreateModalvue_type_style_index_0_id_3d82b5ae_prod_scoped_true_lang_css/* default */.A, UnitCreateModalvue_type_style_index_0_id_3d82b5ae_prod_scoped_true_lang_css_options);



/* harmony default export */ const components_UnitCreateModalvue_type_style_index_0_id_3d82b5ae_prod_scoped_true_lang_css = (UnitCreateModalvue_type_style_index_0_id_3d82b5ae_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/UnitCreateModal.vue?vue&type=style&index=0&id=3d82b5ae&prod&scoped=true&lang=css

;// ./resources/js/components/UnitCreateModal.vue



;


/* normalize component */

var UnitCreateModal_component = (0,componentNormalizer/* default */.A)(
  components_UnitCreateModalvue_type_script_lang_js,
  UnitCreateModalvue_type_template_id_3d82b5ae_scoped_true_render,
  UnitCreateModalvue_type_template_id_3d82b5ae_scoped_true_staticRenderFns,
  false,
  null,
  "3d82b5ae",
  null
  
)

/* harmony default export */ const UnitCreateModal = (UnitCreateModal_component.exports);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCreateModal.vue?vue&type=script&lang=js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ProductCreateModalvue_type_script_lang_js_regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(u), ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(u, o, "Generator"), ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(u, n, function () { return this; }), ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (ProductCreateModalvue_type_script_lang_js_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } ProductCreateModalvue_type_script_lang_js_regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, ProductCreateModalvue_type_script_lang_js_regeneratorDefine2(e, r, n, t); }
function ProductCreateModalvue_type_script_lang_js_asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function ProductCreateModalvue_type_script_lang_js_asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { ProductCreateModalvue_type_script_lang_js_asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { ProductCreateModalvue_type_script_lang_js_asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






var ProductCreateModalvue_type_script_lang_js_toast = sweetalert2_all_default().mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true
});
/* harmony default export */ const ProductCreateModalvue_type_script_lang_js = ({
  components: {
    CategorySubcategoryCreateModal: CategorySubcategoryCreateModal,
    UnitCreateModal: UnitCreateModal
  },
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
        openingStockEntryUnit: null,
        openingStockEntryQuantity: "",
        openingStockUnitPrice: "",
        purchasePrice: "",
        isOpeningStock: false,
        discount: "",
        sellingPrice: "",
        taxAmount: "",
        note: "",
        alertQuantity: 1,
        status: 1,
        image: "",
        salesAccountId: "",
        purchaseAccountId: "",
        overrideSalesAccount: false,
        overridePurchaseAccount: false,
        unitConversions: []
      }),
      categories: [],
      options: [],
      barcodeSymbologyOptions: ['CODE128', 'EAN13', 'EAN8', 'UPC', 'CODE39', 'ITF-14'],
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
      isPurchaseAccountAutomatic: false,
      showPurchasePriceWarning: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items", "appInfo"])), {}, {
    baseUnitName: function baseUnitName() {
      var u = this.form.itemUnit;
      return u && u.name ? u.name : u ? String(u) : '';
    },
    openingStockUnitOptions: function openingStockUnitOptions() {
      var base = this.form.itemUnit;
      if (!base) return [];
      return [base].concat(_toConsumableArray((this.form.unitConversions || []).filter(function (r) {
        return r.unit;
      }).map(function (r) {
        return r.unit;
      })));
    },
    openingStockEntryUnitError: function openingStockEntryUnitError() {
      if (this.form.itemType !== 'product') return false;
      var q = parseFloat(this.form.openingStockEntryQuantity);
      if (isNaN(q) || q <= 0) return false;
      var factor = this.getConversionFactor(this.form.openingStockEntryUnit);
      return factor <= 0;
    }
  }),
  watch: {
    'form.openingStockUnitPrice': {
      handler: function handler() {
        var _this = this;
        if (this.form.itemType === 'product') {
          // Use setTimeout to ensure value is updated in form
          setTimeout(function () {
            _this.checkPurchasePriceWarning();
          }, 200);
        }
      },
      immediate: false
    },
    'form.regularPrice': {
      handler: function handler() {
        var _this2 = this;
        if (this.form.itemType === 'product') {
          // Use setTimeout to ensure value is updated in form
          setTimeout(function () {
            _this2.checkPurchasePriceWarning();
          }, 200);
        }
      },
      immediate: false
    },
    'form.itemType': {
      handler: function handler(newType) {
        var _this3 = this;
        // Check when item type changes to product
        if (newType === 'product') {
          setTimeout(function () {
            _this3.checkPurchasePriceWarning();
          }, 200);
        }
      },
      immediate: false
    },
    'form.itemUnit': {
      handler: function handler(newUnit) {
        if (newUnit && this.form.itemType === 'product') {
          this.form.openingStockEntryUnit = newUnit;
        }
      },
      immediate: false
    }
  },
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
    addUnitConversion: function addUnitConversion() {
      if (!Array.isArray(this.form.unitConversions)) {
        this.$set(this.form, 'unitConversions', []);
      }
      this.form.unitConversions.push({
        unit: null,
        conversion_factor: ''
      });
    },
    removeUnitConversion: function removeUnitConversion(index) {
      this.form.unitConversions.splice(index, 1);
    },
    additionalUnitOptions: function additionalUnitOptions(excludeIndex) {
      var baseId = this.form.itemUnit && (this.form.itemUnit.id || this.form.itemUnit);
      var selectedIds = (this.form.unitConversions || []).map(function (row, i) {
        return i === excludeIndex ? null : row.unit && (row.unit.id || row.unit);
      }).filter(Boolean);
      return (this.units || []).filter(function (u) {
        var id = u.id || u;
        return id != baseId && !selectedIds.includes(id);
      });
    },
    isValidConversionFactor: function isValidConversionFactor(value) {
      var n = parseFloat(value);
      return !isNaN(n) && n > 0;
    },
    getConversionFactor: function getConversionFactor(unit) {
      if (!unit) return 0;
      var baseId = this.form.itemUnit && (this.form.itemUnit.id || this.form.itemUnit);
      var id = unit.id || unit;
      if (id == baseId) return 1;
      var row = (this.form.unitConversions || []).find(function (r) {
        return (r.unit && (r.unit.id || r.unit)) == id;
      });
      return row ? parseFloat(row.conversion_factor) || 0 : 0;
    },
    updateOpeningStockFromEntry: function updateOpeningStockFromEntry() {
      var q = parseFloat(this.form.openingStockEntryQuantity);
      var factor = this.getConversionFactor(this.form.openingStockEntryUnit);
      if (isNaN(q) || q < 0) {
        this.form.openingStockCount = '';
        return;
      }
      if (!this.form.openingStockEntryUnit || factor <= 0) {
        this.form.openingStockCount = '';
        return;
      }
      this.form.openingStockCount = q * factor;
    },
    validateUnitConversions: function validateUnitConversions() {
      var baseUnitId = this.form.itemUnit && (this.form.itemUnit.id || this.form.itemUnit);
      if (!baseUnitId) {
        return {
          valid: false,
          message: this.$t("Unit is required (base unit).")
        };
      }
      var additional = (this.form.unitConversions || []).filter(function (r) {
        return r.unit || r.conversion_factor !== '' && r.conversion_factor !== null;
      });
      for (var i = 0; i < additional.length; i++) {
        var r = additional[i];
        if (!r.unit) {
          return {
            valid: false,
            message: this.$t("Please select a unit for all conversion rows or remove empty rows.")
          };
        }
        var factor = parseFloat(r.conversion_factor);
        if (isNaN(factor) || factor <= 0) {
          return {
            valid: false,
            message: this.$t("Conversion factor must be a number greater than 0.")
          };
        }
      }
      if (this.form.itemType === 'product') {
        var q = parseFloat(this.form.openingStockEntryQuantity);
        if (!isNaN(q) && q > 0) {
          if (!this.form.openingStockEntryUnit) {
            return {
              valid: false,
              message: this.$t("Please select a unit for opening stock.")
            };
          }
          var _factor = this.getConversionFactor(this.form.openingStockEntryUnit);
          if (_factor <= 0) {
            return {
              valid: false,
              message: this.$t("Opening stock unit must have a valid conversion factor.")
            };
          }
          if (q < 0) {
            return {
              valid: false,
              message: this.$t("Opening stock quantity must be zero or greater.")
            };
          }
        }
      }
      return {
        valid: true,
        message: ''
      };
    },
    buildUnitConversionsPayload: function buildUnitConversionsPayload() {
      var baseUnitId = this.form.itemUnit && (this.form.itemUnit.id || this.form.itemUnit);
      if (!baseUnitId) return [];
      return [{
        unit_id: baseUnitId,
        conversion_factor: 1
      }].concat(_toConsumableArray((this.form.unitConversions || []).filter(function (r) {
        return r.unit;
      }).map(function (r) {
        return {
          unit_id: r.unit && (r.unit.id || r.unit),
          conversion_factor: parseFloat(r.conversion_factor) || 0
        };
      }).filter(function (r) {
        return r.unit_id && r.conversion_factor > 0;
      })));
    },
    toggleModal: function toggleModal() {
      this.showProductCreateModal = !this.showProductCreateModal;

      // When opening the modal, ensure account routing settings are loaded and generate item code
      if (this.showProductCreateModal) {
        this.loadAccountRoutingSettings();
        this.getItemCode(); // Generate product code when modal opens
      }
    },
    submitItem: function submitItem(evt) {
      evt.preventDefault();
      this.saveProduct();
    },
    // Load chart of accounts for sales and purchase account selection
    loadChartOfAccounts: function loadChartOfAccounts() {
      var _this4 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee() {
        var _yield$axios$get, data, _t;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _context.n = 1;
              return axios_default().get(window.location.origin + "/api/products/chart-of-accounts");
            case 1:
              _yield$axios$get = _context.v;
              data = _yield$axios$get.data;
              _this4.chartOfAccounts = data || [];
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error("Error loading chart of accounts:", _t);
              _this4.chartOfAccounts = [];
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    // Load account routing settings
    loadAccountRoutingSettings: function loadAccountRoutingSettings() {
      var _this5 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee2() {
        var _this5$accountRouting, _this5$accountRouting2, _this5$accountRouting3, _this5$accountRouting4, response, _t2;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              _context2.n = 1;
              return axios_default().get(window.location.origin + "/api/account-routing-settings/product-account-routing");
            case 1:
              response = _context2.v;
              _this5.accountRoutingSettings = response.data.data || {};

              // Set flags for automatic routing
              _this5.isSalesAccountAutomatic = _this5.accountRoutingSettings.sales && _this5.accountRoutingSettings.sales.routing_type === 'automatic';
              _this5.isPurchaseAccountAutomatic = _this5.accountRoutingSettings.purchase && _this5.accountRoutingSettings.purchase.routing_type === 'automatic';

              // If automatic routing is enabled, set the account IDs from routing settings
              if (_this5.isSalesAccountAutomatic && _this5.accountRoutingSettings.sales.main_account_id) {
                _this5.form.salesAccountId = _this5.accountRoutingSettings.sales.main_account_id;
              }
              if (_this5.isPurchaseAccountAutomatic && _this5.accountRoutingSettings.purchase.main_account_id) {
                _this5.form.purchaseAccountId = _this5.accountRoutingSettings.purchase.main_account_id;
              }
              console.log('=== ACCOUNT ROUTING DEBUG ===');
              console.log('Full account routing settings:', _this5.accountRoutingSettings);
              console.log('Sales settings:', _this5.accountRoutingSettings.sales);
              console.log('Purchase settings:', _this5.accountRoutingSettings.purchase);
              console.log('Sales routing type:', (_this5$accountRouting = _this5.accountRoutingSettings.sales) === null || _this5$accountRouting === void 0 ? void 0 : _this5$accountRouting.routing_type);
              console.log('Sales main_account_id:', (_this5$accountRouting2 = _this5.accountRoutingSettings.sales) === null || _this5$accountRouting2 === void 0 ? void 0 : _this5$accountRouting2.main_account_id);
              console.log('Purchase routing type:', (_this5$accountRouting3 = _this5.accountRoutingSettings.purchase) === null || _this5$accountRouting3 === void 0 ? void 0 : _this5$accountRouting3.routing_type);
              console.log('Purchase main_account_id:', (_this5$accountRouting4 = _this5.accountRoutingSettings.purchase) === null || _this5$accountRouting4 === void 0 ? void 0 : _this5$accountRouting4.main_account_id);
              console.log('isSalesAccountAutomatic:', _this5.isSalesAccountAutomatic);
              console.log('isPurchaseAccountAutomatic:', _this5.isPurchaseAccountAutomatic);
              console.log('Form salesAccountId after auto-assignment:', _this5.form.salesAccountId);
              console.log('Form purchaseAccountId after auto-assignment:', _this5.form.purchaseAccountId);
              console.log('==============================');
              _context2.n = 3;
              break;
            case 2:
              _context2.p = 2;
              _t2 = _context2.v;
              console.error("Error loading account routing settings:", _t2);
              // Set defaults if API fails
              _this5.isSalesAccountAutomatic = false;
              _this5.isPurchaseAccountAutomatic = false;
            case 3:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 2]]);
      }))();
    },
    // get all product categories
    getSubCategories: function getSubCategories() {
      var _this6 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee3() {
        var _yield$_this6$form$ge, data;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return _this6.form.get(window.location.origin + "/api/all-product-sub-categories");
            case 1:
              _yield$_this6$form$ge = _context3.v;
              data = _yield$_this6$form$ge.data;
              _this6.categories = data.data || [];
            case 2:
              return _context3.a(2);
          }
        }, _callee3);
      }))();
    },
    // Handle category created event
    handleCategoryCreated: function handleCategoryCreated() {
      var _this7 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee4() {
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              _context4.n = 1;
              return _this7.getSubCategories();
            case 1:
              return _context4.a(2);
          }
        }, _callee4);
      }))();
    },
    // Handle subcategory created event
    handleSubcategoryCreated: function handleSubcategoryCreated(createdSubcategory) {
      var _this8 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee5() {
        var newSubcategory;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              _context5.n = 1;
              return _this8.getSubCategories();
            case 1:
              if (!(createdSubcategory && createdSubcategory.name)) {
                _context5.n = 3;
                break;
              }
              _context5.n = 2;
              return _this8.$nextTick();
            case 2:
              // Find the newly created subcategory in the refreshed list by name
              newSubcategory = _this8.categories.find(function (cat) {
                return cat.name === createdSubcategory.name;
              });
              if (newSubcategory) {
                _this8.form.subCategory = newSubcategory;
              }
            case 3:
              return _context5.a(2);
          }
        }, _callee5);
      }))();
    },
    // Handle unit created event
    handleUnitCreated: function handleUnitCreated(createdUnit) {
      var _this9 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee6() {
        var newUnit;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              _context6.n = 1;
              return _this9.getUnits();
            case 1:
              if (!(createdUnit && createdUnit.name)) {
                _context6.n = 3;
                break;
              }
              _context6.n = 2;
              return _this9.$nextTick();
            case 2:
              // Find the newly created unit in the refreshed list by name or code
              newUnit = _this9.units.find(function (unit) {
                return unit.name === createdUnit.name || unit.code === createdUnit.code;
              });
              if (newUnit) {
                _this9.form.itemUnit = newUnit;
              }
            case 3:
              return _context6.a(2);
          }
        }, _callee6);
      }))();
    },
    // get all brands
    getBrands: function getBrands() {
      var _this0 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee7() {
        var _yield$axios$get2, data;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context7) {
          while (1) switch (_context7.n) {
            case 0:
              _context7.n = 1;
              return axios_default().get(window.location.origin + "/api/all-brands");
            case 1:
              _yield$axios$get2 = _context7.v;
              data = _yield$axios$get2.data;
              _this0.brands = data.data || [];
            case 2:
              return _context7.a(2);
          }
        }, _callee7);
      }))();
    },
    // get all units
    getUnits: function getUnits() {
      var _this1 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee8() {
        var _yield$axios$get3, data;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              _context8.n = 1;
              return axios_default().get(window.location.origin + "/api/all-units");
            case 1:
              _yield$axios$get3 = _context8.v;
              data = _yield$axios$get3.data;
              _this1.units = data.data || [];
            case 2:
              return _context8.a(2);
          }
        }, _callee8);
      }))();
    },
    // get all taxes
    getTaxes: function getTaxes() {
      var _this10 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee9() {
        var _yield$axios$get4, data, defaultVatRateSlug;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context9) {
          while (1) switch (_context9.n) {
            case 0:
              _context9.n = 1;
              return axios_default().get(window.location.origin + "/api/all-vat-rates");
            case 1:
              _yield$axios$get4 = _context9.v;
              data = _yield$axios$get4.data;
              _this10.taxes = data.data || [];
              // assign default vat rate
              if (_this10.taxes && _this10.taxes.length > 0) {
                defaultVatRateSlug = _this10.appInfo.defaultVatRateSlug;
                _this10.form.productTax = _this10.taxes.find(function (tax) {
                  return tax.slug === defaultVatRateSlug;
                });
              }
              _this10.calculatePrice();
            case 2:
              return _context9.a(2);
          }
        }, _callee9);
      }))();
    },
    // get item code
    getItemCode: function getItemCode() {
      var _this11 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee0() {
        var _yield$axios$get5, data;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              _context0.n = 1;
              return axios_default().get(window.location.origin + "/api/generate-itemcode");
            case 1:
              _yield$axios$get5 = _context0.v;
              data = _yield$axios$get5.data;
              _this11.form.itemCode = data.code;
              _this11.prefix = data.prefix;
            case 2:
              return _context0.a(2);
          }
        }, _callee0);
      }))();
    },
    // calculate selling price
    calculatePrice: function calculatePrice() {
      // Reset values if required fields are missing
      if (!this.form.regularPrice || !this.form.productTax || !this.form.productTax.rate) {
        this.form.taxAmount = "";
        this.form.sellingPrice = this.form.regularPrice || "";
        return;
      }
      var regularPrice = parseFloat(this.form.regularPrice) || 0;
      var taxRate = parseFloat(this.form.productTax.rate) || 0;

      // Calculate taxAmount = regularPrice * (taxRate / 100)
      var taxAmount = regularPrice * (taxRate / 100);
      this.form.taxAmount = parseFloat(taxAmount.toFixed(2));

      // Calculate sellingPrice = regularPrice + taxAmount
      var sellingPrice = regularPrice + taxAmount;
      this.form.sellingPrice = parseFloat(sellingPrice.toFixed(2));
    },
    // Check if purchase price is greater than regular price
    checkPurchasePriceWarning: function checkPurchasePriceWarning() {
      // Only check for products, not services
      if (this.form.itemType !== 'product') {
        this.showPurchasePriceWarning = false;
        return;
      }

      // Get values directly from form
      var purchasePriceStr = String(this.form.openingStockUnitPrice || '').trim();
      var regularPriceStr = String(this.form.regularPrice || '').trim();

      // Convert to numbers
      var purchasePrice = purchasePriceStr ? parseFloat(purchasePriceStr) : 0;
      var regularPrice = regularPriceStr ? parseFloat(regularPriceStr) : 0;

      // Show warning if both prices are valid numbers and purchase price is greater than regular price
      if (!isNaN(purchasePrice) && !isNaN(regularPrice) && purchasePrice > 0 && regularPrice > 0 && purchasePrice > regularPrice) {
        this.showPurchasePriceWarning = true;
      } else {
        this.showPurchasePriceWarning = false;
      }
    },
    // vue file upload
    onFileChange: function onFileChange(e) {
      var _this12 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif")) {
        reader.onloadend = function () {
          _this12.form.image = reader.result;
        };
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      } else {
        this.$toast.error(this.$t("Error!"), this.$t("Please select a valid thumbnail with size less than 2 MB"));
      }
    },
    // save product
    saveProduct: function saveProduct() {
      var _this13 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee10() {
        var _this13$accountRoutin, _this13$accountRoutin2;
        var openingStockUnitPrice, openingStockCount, servicePurchasePrice, needsSalesAccount, needsPurchaseAccount, unitConvValidation, formData, formToPost;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context10) {
          while (1) switch (_context10.n) {
            case 0:
              if (_this13.form.itemCode) {
                _context10.n = 1;
                break;
              }
              _context10.n = 1;
              return _this13.getItemCode();
            case 1:
              // Ensure price calculation is up-to-date before submission
              _this13.calculatePrice();

              // For products, ensure purchasePrice is set from openingStockUnitPrice
              // This ensures purchase_price is saved correctly in the database
              if (_this13.form.itemType === 'product') {
                openingStockUnitPrice = parseFloat(_this13.form.openingStockUnitPrice) || 0;
                openingStockCount = parseFloat(_this13.form.openingStockCount) || 0; // Set purchasePrice to openingStockUnitPrice for products
                // The backend uses openingStockUnitPrice to set purchase_price, but we also send purchasePrice
                // to ensure it's available in the payload for inventory adjustments
                _this13.form.purchasePrice = openingStockUnitPrice;

                // IMPORTANT: Set isOpeningStock flag to true if there's a purchase price OR opening stock
                // This ensures the backend will use openingStockUnitPrice to set purchase_price
                // The backend only sets purchase_price from openingStockUnitPrice when isOpeningStock is true
                // (See ProductController.php line 147-150 and 218)
                // Note: Backend validation requires openingStockCount >= 1 when isOpeningStock is true
                if (openingStockUnitPrice > 0) {
                  _this13.form.isOpeningStock = true;
                  // Ensure openingStockCount is set to at least 1 when we have a purchase price
                  // (Backend validation requires min:1 when isOpeningStock is true)
                  if (_this13.form.openingStockCount === "" || _this13.form.openingStockCount === null || openingStockCount === 0) {
                    _this13.form.openingStockCount = openingStockCount > 0 ? openingStockCount : 1;
                  }
                } else if (openingStockCount > 0) {
                  _this13.form.isOpeningStock = true;
                  // If there's opening stock but no purchase price, set a default purchase price
                  if (!openingStockUnitPrice || openingStockUnitPrice === 0) {
                    // You might want to set a default or use regularPrice as fallback
                    // For now, we'll leave it as is and let the user enter it
                  }
                } else {
                  _this13.form.isOpeningStock = false;
                }
              }

              // For services, ensure isOpeningStock is false and clear product-specific fields
              if (_this13.form.itemType === 'service') {
                _this13.form.isOpeningStock = false;
                _this13.form.openingStockCount = "";
                _this13.form.openingStockEntryUnit = null;
                _this13.form.openingStockEntryQuantity = "";
                _this13.form.openingStockUnitPrice = "";
                _this13.form.purchasePrice = "";
              }

              // Validate required fields based on item type
              if (!(_this13.form.itemType === 'service')) {
                _context10.n = 2;
                break;
              }
              servicePurchasePrice = parseFloat(_this13.form.servicePurchasePrice) || 0;
              if (!(!_this13.form.servicePurchasePrice || servicePurchasePrice <= 0)) {
                _context10.n = 2;
                break;
              }
              ProductCreateModalvue_type_script_lang_js_toast.fire({
                type: "error",
                title: _this13.$t("Service Purchase Price is required for services")
              });
              return _context10.a(2);
            case 2:
              // Debug: Log validation state
              console.log("Validation state:", {
                isSalesAccountAutomatic: _this13.isSalesAccountAutomatic,
                overrideSalesAccount: _this13.form.overrideSalesAccount,
                salesAccountId: _this13.form.salesAccountId,
                isPurchaseAccountAutomatic: _this13.isPurchaseAccountAutomatic,
                overridePurchaseAccount: _this13.form.overridePurchaseAccount,
                purchaseAccountId: _this13.form.purchaseAccountId
              });

              // Validate sales account - required if not automatic OR if override is checked
              needsSalesAccount = !_this13.isSalesAccountAutomatic || _this13.form.overrideSalesAccount;
              if (!(needsSalesAccount && !_this13.form.salesAccountId)) {
                _context10.n = 3;
                break;
              }
              ProductCreateModalvue_type_script_lang_js_toast.fire({
                type: "error",
                title: _this13.$t("Sales Account is required")
              });
              return _context10.a(2);
            case 3:
              // Validate purchase account - required if not automatic OR if override is checked
              needsPurchaseAccount = !_this13.isPurchaseAccountAutomatic || _this13.form.overridePurchaseAccount;
              if (!(needsPurchaseAccount && !_this13.form.purchaseAccountId)) {
                _context10.n = 4;
                break;
              }
              ProductCreateModalvue_type_script_lang_js_toast.fire({
                type: "error",
                title: _this13.$t("Purchase Account is required")
              });
              return _context10.a(2);
            case 4:
              unitConvValidation = _this13.validateUnitConversions();
              if (unitConvValidation.valid) {
                _context10.n = 5;
                break;
              }
              ProductCreateModalvue_type_script_lang_js_toast.fire({
                type: "error",
                title: unitConvValidation.message
              });
              return _context10.a(2);
            case 5:
              // Debug: Log form data being sent
              console.log("=== FORM SUBMISSION DEBUG ===");
              console.log("Item Type:", _this13.form.itemType);
              console.log("Form data being sent:", _this13.form.data());
              console.log("Purchase Price (openingStockUnitPrice):", _this13.form.openingStockUnitPrice);
              console.log("Purchase Price (purchasePrice):", _this13.form.purchasePrice);
              console.log("Service Purchase Price:", _this13.form.servicePurchasePrice);
              console.log("Is Opening Stock (isOpeningStock):", _this13.form.isOpeningStock);
              console.log("Opening Stock Count:", _this13.form.openingStockCount);
              console.log("Account routing settings:", _this13.accountRoutingSettings);
              console.log("Sales settings:", _this13.accountRoutingSettings.sales);
              console.log("Purchase settings:", _this13.accountRoutingSettings.purchase);
              console.log("Sales routing type:", (_this13$accountRoutin = _this13.accountRoutingSettings.sales) === null || _this13$accountRoutin === void 0 ? void 0 : _this13$accountRoutin.routing_type);
              console.log("Sales main_account_id:", (_this13$accountRoutin2 = _this13.accountRoutingSettings.sales) === null || _this13$accountRoutin2 === void 0 ? void 0 : _this13$accountRoutin2.main_account_id);
              console.log("Form salesAccountId:", _this13.form.salesAccountId);
              console.log("Form purchaseAccountId:", _this13.form.purchaseAccountId);
              console.log("=============================");
              formData = _this13.form.data();
              formData.unit_conversions = _this13.buildUnitConversionsPayload();
              if (formData.itemUnit && _typeof(formData.itemUnit) === 'object') {
                formData.itemUnit = formData.itemUnit.id;
              }
              if (formData.subCategory && _typeof(formData.subCategory) === 'object') {
                formData.subCategory = formData.subCategory.id;
              }
              if (formData.brand && _typeof(formData.brand) === 'object') {
                formData.brand = formData.brand.id;
              }
              if (formData.productTax && _typeof(formData.productTax) === 'object') {
                formData.productTax = formData.productTax.id;
              }
              formToPost = new vform_es/* default */.Ay(formData);
              _context10.n = 6;
              return formToPost.post(window.location.origin + "/api/products").then(/*#__PURE__*/function () {
                var _ref = ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee1(response) {
                  var openingStockCount, openingStockUnitPrice, purchasePrice, newProduct, formattedProduct, adjustmentPurchasePrice, _adjustmentError$resp, autoAssignedSalesAccountId, autoAssignedPurchaseAccountId, _t3;
                  return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context1) {
                    while (1) switch (_context1.p = _context1.n) {
                      case 0:
                        ProductCreateModalvue_type_script_lang_js_toast.fire({
                          type: "success",
                          title: _this13.$t("Product added successfully")
                        });

                        // Store opening stock values before reset
                        openingStockCount = parseFloat(_this13.form.openingStockCount) || 0;
                        openingStockUnitPrice = parseFloat(_this13.form.openingStockUnitPrice) || 0; // Get purchasePrice from form (set before submission) or fallback to openingStockUnitPrice
                        purchasePrice = parseFloat(_this13.form.purchasePrice) || openingStockUnitPrice || 0; // Emit the newly created product data
                        if (!(response.data && response.data.data)) {
                          _context1.n = 4;
                          break;
                        }
                        newProduct = response.data.data; // Format the product data to match the expected structure for v-select
                        formattedProduct = {
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
                        _this13.$emit('productCreated', formattedProduct);

                        // Create inventory adjustment if opening stock exists and item type is product
                        if (!(newProduct.itemType === 'product' && openingStockCount > 0 && newProduct.slug)) {
                          _context1.n = 4;
                          break;
                        }
                        _context1.p = 1;
                        // Use purchasePrice (from form) or openingStockUnitPrice, with fallback to product's avgPurchasePrice
                        adjustmentPurchasePrice = purchasePrice > 0 ? purchasePrice : openingStockUnitPrice > 0 ? openingStockUnitPrice : newProduct.avgPurchasePrice || 0;
                        _context1.n = 2;
                        return _this13.createInventoryAdjustment({
                          productSlug: newProduct.slug,
                          quantity: openingStockCount,
                          purchasePrice: adjustmentPurchasePrice
                        });
                      case 2:
                        _context1.n = 4;
                        break;
                      case 3:
                        _context1.p = 3;
                        _t3 = _context1.v;
                        // Log error but don't block the product creation success
                        console.error("Error creating inventory adjustment:", _t3);
                        ProductCreateModalvue_type_script_lang_js_toast.fire({
                          type: "warning",
                          title: _this13.$t("Product created, but inventory adjustment failed"),
                          text: ((_adjustmentError$resp = _t3.response) === null || _adjustmentError$resp === void 0 || (_adjustmentError$resp = _adjustmentError$resp.data) === null || _adjustmentError$resp === void 0 ? void 0 : _adjustmentError$resp.message) || _this13.$t("Please create the adjustment manually.")
                        });
                      case 4:
                        // Store auto-assigned account IDs before reset
                        autoAssignedSalesAccountId = _this13.isSalesAccountAutomatic ? _this13.form.salesAccountId : null;
                        autoAssignedPurchaseAccountId = _this13.isPurchaseAccountAutomatic ? _this13.form.purchaseAccountId : null;
                        _this13.form.reset();
                        _this13.form.itemType = "product"; // Reset to default
                        _this13.form.overrideSalesAccount = false; // Reset override flags
                        _this13.form.overridePurchaseAccount = false;

                        // Restore auto-assigned account IDs after reset
                        if (autoAssignedSalesAccountId) {
                          _this13.form.salesAccountId = autoAssignedSalesAccountId;
                        }
                        if (autoAssignedPurchaseAccountId) {
                          _this13.form.purchaseAccountId = autoAssignedPurchaseAccountId;
                        }
                        _this13.showProductCreateModal = false;
                        _this13.$emit('reloadProducts');
                      case 5:
                        return _context1.a(2);
                    }
                  }, _callee1, null, [[1, 3]]);
                }));
                return function (_x) {
                  return _ref.apply(this, arguments);
                };
              }())["catch"](function (error) {
                console.error("Error creating product:", error);

                // Check if this is a validation error (status 422)
                var status = error && error.response && error.response.status;
                var serverErrors = error && error.response && error.response.data && error.response.data.errors;
                if (status === 422 && serverErrors) {
                  // Show toast notification for validation errors
                  ProductCreateModalvue_type_script_lang_js_toast.fire({
                    type: 'error',
                    title: _this13.$t('Validation Error'),
                    text: _this13.$t('Please check the form for errors and try again.')
                  });

                  // Scroll to the first invalid input after DOM updates
                  _this13.$nextTick(function () {
                    // Wait a bit more to ensure vform has added the is-invalid class
                    setTimeout(function () {
                      var invalid = _this13.$el.querySelector('.is-invalid');
                      if (invalid && typeof invalid.scrollIntoView === 'function') {
                        invalid.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center'
                        });
                      }
                    }, 100);
                  });
                } else {
                  var _error$response;
                  // For other errors, show generic error message
                  var errorMessage = ((_error$response = error.response) === null || _error$response === void 0 || (_error$response = _error$response.data) === null || _error$response === void 0 ? void 0 : _error$response.message) || _this13.$t("Please check your input and try again.");
                  ProductCreateModalvue_type_script_lang_js_toast.fire({
                    type: "error",
                    title: errorMessage
                  });
                }
              });
            case 6:
              return _context10.a(2);
          }
        }, _callee10);
      }))();
    },
    // Create inventory adjustment for opening stock
    createInventoryAdjustment: function createInventoryAdjustment(_ref2) {
      var _this14 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee11() {
        var productSlug, quantity, purchasePrice, adjustmentForm, response, _t4;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context11) {
          while (1) switch (_context11.p = _context11.n) {
            case 0:
              productSlug = _ref2.productSlug, quantity = _ref2.quantity, purchasePrice = _ref2.purchasePrice;
              adjustmentForm = new vform_es/* default */.Ay({
                adjustmentReason: _this14.$t("Opening Stock"),
                adjustmentDate: new Date().toISOString().slice(0, 10),
                note: _this14.$t("Initial inventory count for new product"),
                status: 1,
                selectedProducts: [{
                  slug: productSlug,
                  adjustType: "Increment",
                  adjustQty: quantity,
                  purchasePrice: purchasePrice
                }]
              });
              _context11.p = 1;
              _context11.n = 2;
              return adjustmentForm.post(window.location.origin + "/api/inventory-adjustments");
            case 2:
              response = _context11.v;
              ProductCreateModalvue_type_script_lang_js_toast.fire({
                type: "success",
                title: _this14.$t("Inventory adjustment created successfully")
              });
              return _context11.a(2, response);
            case 3:
              _context11.p = 3;
              _t4 = _context11.v;
              console.error("Error creating inventory adjustment:", _t4);
              throw _t4;
            case 4:
              return _context11.a(2);
          }
        }, _callee11, null, [[1, 3]]);
      }))();
    },
    // Auto-assign sales account
    autoAssignSalesAccount: function autoAssignSalesAccount() {
      var _this15 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee12() {
        var defaultAccount;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context12) {
          while (1) switch (_context12.n) {
            case 0:
              if (!_this15.isAutoAssigningSales) {
                _context12.n = 1;
                break;
              }
              return _context12.a(2);
            case 1:
              _this15.isAutoAssigningSales = true;
              try {
                // For new products, we need to simulate the auto-assignment logic
                // since the product doesn't exist in the database yet
                defaultAccount = null;
                if (_this15.form.itemType === 'product') {
                  // Look for "Sales of Goods" or similar
                  defaultAccount = _this15.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('sales') && (account.name.toLowerCase().includes('goods') || account.name.toLowerCase().includes('product'));
                  });
                } else if (_this15.form.itemType === 'service') {
                  // Look for "Sales of Services" or similar
                  defaultAccount = _this15.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('sales') && account.name.toLowerCase().includes('service');
                  });
                }

                // Fallback to any Sales account
                if (!defaultAccount) {
                  defaultAccount = _this15.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('sales');
                  });
                }

                // Final fallback to any active account
                if (!defaultAccount && _this15.chartOfAccounts.length > 0) {
                  defaultAccount = _this15.chartOfAccounts[0];
                }
                if (defaultAccount) {
                  _this15.form.salesAccountId = defaultAccount.id;
                  ProductCreateModalvue_type_script_lang_js_toast.fire({
                    type: "success",
                    title: _this15.$t("Sales Account auto-assigned successfully")
                  });
                } else {
                  ProductCreateModalvue_type_script_lang_js_toast.fire({
                    type: "error",
                    title: _this15.$t("No suitable Sales Account found for automatic assignment")
                  });
                }
              } catch (error) {
                console.error("Error auto-assigning sales account:", error);
                ProductCreateModalvue_type_script_lang_js_toast.fire({
                  type: "error",
                  title: _this15.$t("Failed to auto-assign Sales Account")
                });
              } finally {
                _this15.isAutoAssigningSales = false;
              }
            case 2:
              return _context12.a(2);
          }
        }, _callee12);
      }))();
    },
    // Auto-assign purchase account
    autoAssignPurchaseAccount: function autoAssignPurchaseAccount() {
      var _this16 = this;
      return ProductCreateModalvue_type_script_lang_js_asyncToGenerator(/*#__PURE__*/ProductCreateModalvue_type_script_lang_js_regenerator().m(function _callee13() {
        var defaultAccount;
        return ProductCreateModalvue_type_script_lang_js_regenerator().w(function (_context13) {
          while (1) switch (_context13.n) {
            case 0:
              if (!_this16.isAutoAssigningPurchase) {
                _context13.n = 1;
                break;
              }
              return _context13.a(2);
            case 1:
              _this16.isAutoAssigningPurchase = true;
              try {
                // For new products, we need to simulate the auto-assignment logic
                // since the product doesn't exist in the database yet
                defaultAccount = null;
                if (_this16.form.itemType === 'product') {
                  // Look for "Cost of Goods Sold" or similar
                  defaultAccount = _this16.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('cost') && (account.name.toLowerCase().includes('goods') || account.name.toLowerCase().includes('product'));
                  });
                } else if (_this16.form.itemType === 'service') {
                  // Look for "Cost of Services" or similar
                  defaultAccount = _this16.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('cost') && account.name.toLowerCase().includes('service');
                  });
                }

                // Fallback to any Cost account
                if (!defaultAccount) {
                  defaultAccount = _this16.chartOfAccounts.find(function (account) {
                    return account.name.toLowerCase().includes('cost');
                  });
                }

                // Final fallback to any active account
                if (!defaultAccount && _this16.chartOfAccounts.length > 0) {
                  defaultAccount = _this16.chartOfAccounts[0];
                }
                if (defaultAccount) {
                  _this16.form.purchaseAccountId = defaultAccount.id;
                  ProductCreateModalvue_type_script_lang_js_toast.fire({
                    type: "success",
                    title: _this16.$t("Purchase Account auto-assigned successfully")
                  });
                } else {
                  ProductCreateModalvue_type_script_lang_js_toast.fire({
                    type: "error",
                    title: _this16.$t("No suitable Purchase Account found for automatic assignment")
                  });
                }
              } catch (error) {
                console.error("Error auto-assigning purchase account:", error);
                ProductCreateModalvue_type_script_lang_js_toast.fire({
                  type: "error",
                  title: _this16.$t("Failed to auto-assign Purchase Account")
                });
              } finally {
                _this16.isAutoAssigningPurchase = false;
              }
            case 2:
              return _context13.a(2);
          }
        }, _callee13);
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
// EXTERNAL MODULE: ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCreateModal.vue?vue&type=style&index=0&id=387d6191&prod&scoped=true&lang=css
var ProductCreateModalvue_type_style_index_0_id_387d6191_prod_scoped_true_lang_css = __webpack_require__(54383);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductCreateModal.vue?vue&type=style&index=0&id=387d6191&prod&scoped=true&lang=css

            

var ProductCreateModalvue_type_style_index_0_id_387d6191_prod_scoped_true_lang_css_options = {};

ProductCreateModalvue_type_style_index_0_id_387d6191_prod_scoped_true_lang_css_options.insert = "head";
ProductCreateModalvue_type_style_index_0_id_387d6191_prod_scoped_true_lang_css_options.singleton = false;

var ProductCreateModalvue_type_style_index_0_id_387d6191_prod_scoped_true_lang_css_update = injectStylesIntoStyleTag_default()(ProductCreateModalvue_type_style_index_0_id_387d6191_prod_scoped_true_lang_css/* default */.A, ProductCreateModalvue_type_style_index_0_id_387d6191_prod_scoped_true_lang_css_options);



/* harmony default export */ const components_ProductCreateModalvue_type_style_index_0_id_387d6191_prod_scoped_true_lang_css = (ProductCreateModalvue_type_style_index_0_id_387d6191_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/ProductCreateModal.vue?vue&type=style&index=0&id=387d6191&prod&scoped=true&lang=css

;// ./resources/js/components/ProductCreateModal.vue



;


/* normalize component */

var ProductCreateModal_component = (0,componentNormalizer/* default */.A)(
  components_ProductCreateModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "387d6191",
  null
  
)

/* harmony default export */ const ProductCreateModal = (ProductCreateModal_component.exports);

/***/ },

/***/ 28788
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ProductEditModal)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductEditModal.vue?vue&type=template&id=7f6cc384&scoped=true
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
      "for": "barcodeSymbology"
    }
  }, [_vm._v(_vm._s(_vm.$t("Barcode Symbology")) + " "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.barcodeSymbology,
      expression: "form.barcodeSymbology"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('barcodeSymbology')
    },
    attrs: {
      "id": "barcodeSymbology",
      "name": "barcodeSymbology"
    },
    on: {
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "barcodeSymbology", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, _vm._l(_vm.barcodeSymbologyOptions, function (opt) {
    return _c('option', {
      key: opt,
      domProps: {
        "value": opt
      }
    }, [_vm._v(_vm._s(opt))]);
  }), 0), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "barcodeSymbology"
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
  }), _vm._v(" "), _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v(_vm._s(_vm.$t("Base unit (conversion factor = 1)")))]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "itemUnit"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group mt-3"
  }, [_c('label', {
    staticClass: "d-block"
  }, [_vm._v(_vm._s(_vm.$t("Unit conversions")))]), _vm._v(" "), _c('small', {
    staticClass: "form-text text-muted mb-2"
  }, [_vm._v(_vm._s(_vm.$t("Link additional units with conversion factor relative to base unit (e.g. 1 Carton = 12 Pieces)")))]), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-sm table-bordered"
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v(_vm._s(_vm.$t("Unit")))]), _vm._v(" "), _c('th', {
    staticStyle: {
      "width": "180px"
    }
  }, [_vm._v(_vm._s(_vm.$t("Conversion factor")))]), _vm._v(" "), _c('th', {
    staticStyle: {
      "width": "80px"
    }
  })])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm.form.itemUnit ? _c('span', [_vm._v(_vm._s(_vm.form.itemUnit.name || _vm.form.itemUnit))]) : _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("—")])]), _vm._v(" "), _c('td', [_vm._v("1 "), _c('span', {
    staticClass: "text-muted"
  }, [_vm._v("(" + _vm._s(_vm.$t("base")) + ")")])]), _vm._v(" "), _c('td')]), _vm._v(" "), _vm._l(_vm.form.unitConversions, function (row, index) {
    return _c('tr', {
      key: 'uc-' + index
    }, [_c('td', [_c('v-select', {
      staticClass: "form-control form-control-sm",
      "class": {
        'is-invalid': row.unit && !_vm.isValidConversionFactor(row.conversion_factor)
      },
      attrs: {
        "options": _vm.additionalUnitOptions(index),
        "label": "name",
        "placeholder": _vm.$t('Select a unit')
      },
      model: {
        value: row.unit,
        callback: function callback($$v) {
          _vm.$set(row, "unit", $$v);
        },
        expression: "row.unit"
      }
    })], 1), _vm._v(" "), _c('td', [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model.number",
        value: row.conversion_factor,
        expression: "row.conversion_factor",
        modifiers: {
          "number": true
        }
      }],
      staticClass: "form-control form-control-sm",
      "class": {
        'is-invalid': !_vm.isValidConversionFactor(row.conversion_factor) && row.conversion_factor !== ''
      },
      attrs: {
        "type": "number",
        "step": "any",
        "min": "0.0001",
        "placeholder": _vm.$t('e.g. 12')
      },
      domProps: {
        "value": row.conversion_factor
      },
      on: {
        "input": function input($event) {
          if ($event.target.composing) return;
          _vm.$set(row, "conversion_factor", _vm._n($event.target.value));
        },
        "blur": function blur($event) {
          return _vm.$forceUpdate();
        }
      }
    }), _vm._v(" "), row.unit ? _c('small', {
      staticClass: "form-text text-muted"
    }, [_vm._v("1 " + _vm._s(row.unit.name) + " = " + _vm._s(row.conversion_factor || '?') + " " + _vm._s(_vm.baseUnitName))]) : _vm._e()]), _vm._v(" "), _c('td', [_c('button', {
      staticClass: "btn btn-sm btn-outline-danger",
      attrs: {
        "type": "button",
        "title": _vm.$t('Remove')
      },
      on: {
        "click": function click($event) {
          return _vm.removeUnitConversion(index);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-trash-alt"
    })])])]);
  })], 2)])]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-outline-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.addUnitConversion
    }
  }, [_c('i', {
    staticClass: "fas fa-plus mr-1"
  }), _vm._v(_vm._s(_vm.$t("Add unit")) + "\n                  ")])]), _vm._v(" "), _c('div', {
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
      "for": "openingStockEntryUnit"
    }
  }, [_vm._v(_vm._s(_vm.$t("Opening Stock")))]), _vm._v(" "), _c('div', {
    staticClass: "row no-gutters"
  }, [_c('div', {
    staticClass: "col-5 pr-1"
  }, [_c('v-select', {
    "class": {
      'is-invalid': _vm.form.errors.has('openingStockCount') || _vm.openingStockEntryUnitError
    },
    attrs: {
      "id": "openingStockEntryUnit",
      "options": _vm.openingStockUnitOptions,
      "label": "name",
      "placeholder": _vm.$t('Select unit')
    },
    on: {
      "input": _vm.updateOpeningStockFromEntry
    },
    model: {
      value: _vm.form.openingStockEntryUnit,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "openingStockEntryUnit", $$v);
      },
      expression: "form.openingStockEntryUnit"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "col-7 pl-1"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.openingStockEntryQuantity,
      expression: "form.openingStockEntryQuantity"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('openingStockCount') || _vm.openingStockEntryUnitError
    },
    attrs: {
      "id": "openingStockEntryQuantity",
      "type": "number",
      "step": "any",
      "min": "0",
      "placeholder": _vm.$t('Quantity')
    },
    domProps: {
      "value": _vm.form.openingStockEntryQuantity
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "openingStockEntryQuantity", $event.target.value);
      }, _vm.updateOpeningStockFromEntry],
      "change": _vm.updateOpeningStockFromEntry
    }
  })])]), _vm._v(" "), _vm.form.openingStockCount !== '' && _vm.form.openingStockCount !== null && _vm.baseUnitName ? _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v("\n                    " + _vm._s(_vm.$t("Stored as")) + " " + _vm._s(_vm.form.openingStockCount) + " " + _vm._s(_vm.baseUnitName) + "\n                  ")]) : _vm._e(), _vm._v(" "), _c('has-error', {
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
  }, [_vm._v(_vm._s(_vm.$t("Current Stock Unit Price")))]), _vm._v(" "), _c('input', {
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
      "readonly": ""
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
  })], 1)])])])]) : _vm._e(), _vm._v(" "), _c('div', {
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
var VModal = __webpack_require__(77227);
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
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }




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
        openingStockEntryUnit: null,
        openingStockEntryQuantity: "",
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
        purchaseAccountId: "",
        unitConversions: []
      }),
      categories: [],
      barcodeSymbologyOptions: ['CODE128', 'EAN13', 'EAN8', 'UPC', 'CODE39', 'ITF-14'],
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
  computed: {
    baseUnitName: function baseUnitName() {
      var u = this.form.itemUnit;
      return u && u.name ? u.name : u ? String(u) : '';
    },
    openingStockUnitOptions: function openingStockUnitOptions() {
      var base = this.form.itemUnit;
      if (!base) return [];
      return [base].concat(_toConsumableArray((this.form.unitConversions || []).filter(function (r) {
        return r.unit;
      }).map(function (r) {
        return r.unit;
      })));
    },
    openingStockEntryUnitError: function openingStockEntryUnitError() {
      if (this.form.itemType !== 'product') return false;
      var q = parseFloat(this.form.openingStockEntryQuantity);
      if (isNaN(q) || q <= 0) return false;
      var factor = this.getConversionFactor(this.form.openingStockEntryUnit);
      return factor <= 0;
    }
  },
  watch: {
    'form.itemUnit': {
      handler: function handler(newUnit) {
        if (newUnit && this.form.itemType === 'product') {
          this.form.openingStockEntryUnit = newUnit;
        }
      },
      immediate: false
    }
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
    addUnitConversion: function addUnitConversion() {
      if (!Array.isArray(this.form.unitConversions)) {
        this.$set(this.form, 'unitConversions', []);
      }
      this.form.unitConversions.push({
        unit: null,
        conversion_factor: ''
      });
    },
    removeUnitConversion: function removeUnitConversion(index) {
      this.form.unitConversions.splice(index, 1);
    },
    additionalUnitOptions: function additionalUnitOptions(excludeIndex) {
      var baseId = this.form.itemUnit && (this.form.itemUnit.id || this.form.itemUnit);
      var selectedIds = (this.form.unitConversions || []).map(function (row, i) {
        return i === excludeIndex ? null : row.unit && (row.unit.id || row.unit);
      }).filter(Boolean);
      return (this.units || []).filter(function (u) {
        var id = u.id || u;
        return id != baseId && !selectedIds.includes(id);
      });
    },
    isValidConversionFactor: function isValidConversionFactor(value) {
      var n = parseFloat(value);
      return !isNaN(n) && n > 0;
    },
    getConversionFactor: function getConversionFactor(unit) {
      if (!unit) return 0;
      var baseId = this.form.itemUnit && (this.form.itemUnit.id || this.form.itemUnit);
      var id = unit.id || unit;
      if (id == baseId) return 1;
      var row = (this.form.unitConversions || []).find(function (r) {
        return (r.unit && (r.unit.id || r.unit)) == id;
      });
      return row ? parseFloat(row.conversion_factor) || 0 : 0;
    },
    updateOpeningStockFromEntry: function updateOpeningStockFromEntry() {
      var q = parseFloat(this.form.openingStockEntryQuantity);
      var factor = this.getConversionFactor(this.form.openingStockEntryUnit);
      if (isNaN(q) || q < 0) {
        this.form.openingStockCount = '';
        return;
      }
      if (!this.form.openingStockEntryUnit || factor <= 0) {
        this.form.openingStockCount = '';
        return;
      }
      this.form.openingStockCount = q * factor;
    },
    validateUnitConversions: function validateUnitConversions() {
      var baseUnitId = this.form.itemUnit && (this.form.itemUnit.id || this.form.itemUnit);
      if (!baseUnitId) {
        return {
          valid: false,
          message: this.$t("Unit is required (base unit).")
        };
      }
      var additional = (this.form.unitConversions || []).filter(function (r) {
        return r.unit || r.conversion_factor !== '' && r.conversion_factor !== null;
      });
      for (var i = 0; i < additional.length; i++) {
        var r = additional[i];
        if (!r.unit) {
          return {
            valid: false,
            message: this.$t("Please select a unit for all conversion rows or remove empty rows.")
          };
        }
        var factor = parseFloat(r.conversion_factor);
        if (isNaN(factor) || factor <= 0) {
          return {
            valid: false,
            message: this.$t("Conversion factor must be a number greater than 0.")
          };
        }
      }
      if (this.form.itemType === 'product') {
        var q = parseFloat(this.form.openingStockEntryQuantity);
        if (!isNaN(q) && q > 0) {
          if (!this.form.openingStockEntryUnit) {
            return {
              valid: false,
              message: this.$t("Please select a unit for opening stock.")
            };
          }
          var _factor = this.getConversionFactor(this.form.openingStockEntryUnit);
          if (_factor <= 0) {
            return {
              valid: false,
              message: this.$t("Opening stock unit must have a valid conversion factor.")
            };
          }
          if (q < 0) {
            return {
              valid: false,
              message: this.$t("Opening stock quantity must be zero or greater.")
            };
          }
        }
      }
      return {
        valid: true,
        message: ''
      };
    },
    buildUnitConversionsPayload: function buildUnitConversionsPayload() {
      var baseUnitId = this.form.itemUnit && (this.form.itemUnit.id || this.form.itemUnit);
      if (!baseUnitId) return [];
      return [{
        unit_id: baseUnitId,
        conversion_factor: 1
      }].concat(_toConsumableArray((this.form.unitConversions || []).filter(function (r) {
        return r.unit;
      }).map(function (r) {
        return {
          unit_id: r.unit && (r.unit.id || r.unit),
          conversion_factor: parseFloat(r.conversion_factor) || 0
        };
      }).filter(function (r) {
        return r.unit_id && r.conversion_factor > 0;
      })));
    },
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

      // Load unit conversions (additional units only; base unit has factor 1)
      var baseUnitId = this.form.itemUnit && (this.form.itemUnit.id || this.form.itemUnit);
      var conversions = product.unitConversions || [];
      this.form.unitConversions = conversions.filter(function (c) {
        var uid = c.unit_id || c.unit && c.unit.id;
        var factor = parseFloat(c.conversion_factor);
        return uid != baseUnitId && !isNaN(factor) && factor > 0;
      }).map(function (c) {
        var unitObj = _this2.units.find(function (u) {
          return u.id == (c.unit_id || c.unit && c.unit.id);
        });
        return {
          unit: unitObj || null,
          conversion_factor: c.conversion_factor
        };
      });
      if (!Array.isArray(this.form.unitConversions)) {
        this.form.unitConversions = [];
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
      this.form.openingStockEntryUnit = this.form.itemUnit || null;
      this.form.openingStockEntryQuantity = product.opening_stock_count != null && product.opening_stock_count !== '' ? product.opening_stock_count || product.openingStockCount || "" : "";
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
        var currentProduct, productSlug, productId, identifier, unitConvValidation, formData, response, _t2;
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
              unitConvValidation = _this3.validateUnitConversions();
              if (unitConvValidation.valid) {
                _context2.n = 8;
                break;
              }
              toast.fire({
                type: "error",
                title: unitConvValidation.message
              });
              return _context2.a(2);
            case 8:
              console.log('Using identifier for API call:', identifier);

              // Transform object fields to IDs before sending
              formData = _this3.form.data();
              formData.unit_conversions = _this3.buildUnitConversionsPayload();

              // Transform v-select objects to IDs
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
              _context2.n = 9;
              return axios_default().put("/api/products/".concat(identifier), formData);
            case 9:
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
              _context2.n = 11;
              break;
            case 10:
              _context2.p = 10;
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
            case 11:
              return _context2.a(2);
          }
        }, _callee2, null, [[0, 10]]);
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
        var _this9$$store, user, branchId, response, _t8;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              _context8.p = 0;
              // Get current branch ID
              user = ((_this9$$store = _this9.$store) === null || _this9$$store === void 0 || (_this9$$store = _this9$$store.getters) === null || _this9$$store === void 0 ? void 0 : _this9$$store['auth/user']) || {};
              branchId = user.default_branch_id || null;
              if (branchId) {
                _context8.n = 1;
                break;
              }
              console.error('Branch ID is required for account routing settings');
              _this9.accountRoutingSettings = {};
              return _context8.a(2);
            case 1:
              _context8.n = 2;
              return axios_default().get(window.location.origin + "/api/account-routing-settings/product-account-routing", {
                params: {
                  branch_id: branchId
                }
              });
            case 2:
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
              _context8.n = 4;
              break;
            case 3:
              _context8.p = 3;
              _t8 = _context8.v;
              console.error("Error loading account routing settings:", _t8);
              // Set defaults if API fails
              _this9.isSalesAccountAutomatic = false;
              _this9.isPurchaseAccountAutomatic = false;
            case 4:
              return _context8.a(2);
          }
        }, _callee8, null, [[0, 3]]);
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
// EXTERNAL MODULE: ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductEditModal.vue?vue&type=style&index=0&id=7f6cc384&prod&scoped=true&lang=css
var ProductEditModalvue_type_style_index_0_id_7f6cc384_prod_scoped_true_lang_css = __webpack_require__(66110);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ProductEditModal.vue?vue&type=style&index=0&id=7f6cc384&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(ProductEditModalvue_type_style_index_0_id_7f6cc384_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const components_ProductEditModalvue_type_style_index_0_id_7f6cc384_prod_scoped_true_lang_css = (ProductEditModalvue_type_style_index_0_id_7f6cc384_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/components/ProductEditModal.vue?vue&type=style&index=0&id=7f6cc384&prod&scoped=true&lang=css

;// ./resources/js/components/ProductEditModal.vue



;


/* normalize component */

var ProductEditModal_component = (0,componentNormalizer/* default */.A)(
  components_ProductEditModalvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "7f6cc384",
  null
  
)

/* harmony default export */ const ProductEditModal = (ProductEditModal_component.exports);

/***/ },

/***/ 65259
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


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
// EXTERNAL MODULE: ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StockAdjustmentModal.vue?vue&type=style&index=0&id=651d741c&prod&scoped=true&lang=css
var StockAdjustmentModalvue_type_style_index_0_id_651d741c_prod_scoped_true_lang_css = __webpack_require__(94129);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/StockAdjustmentModal.vue?vue&type=style&index=0&id=651d741c&prod&scoped=true&lang=css

            

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

/***/ },

/***/ 10285
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create)
});

;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/invoices/create.vue?vue&type=template&id=5f535d2c&scoped=true
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
    staticClass: "float-right text-right"
  }, [_c('div', {
    staticClass: "btn-group c-w-100 header-buttons d-flex flex-column flex-sm-row"
  }, [_c('router-link', {
    staticClass: "btn btn-sm btn-info mb-2 mb-sm-0",
    attrs: {
      "to": {
        name: 'invoices.index'
      }
    }
  }, [_vm.isRTL ? [_vm._v("\n                  " + _vm._s(_vm.$t("Back")) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n                    " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_vm.$i18n.locale === 'ar' || typeof _vm.document !== 'undefined' && _vm.document.documentElement.getAttribute('dir') === 'rtl' ? [_vm._v("\n\n\n                      " + _vm._s(_vm.$t('Back')) + " "), _c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  })] : [_c('i', {
    staticClass: "fas fa-long-arrow-alt-left"
  }), _vm._v(" " + _vm._s(_vm.$t('Back')) + "\n\n\n                    ")]]]], 2), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-success",
    attrs: {
      "type": "submit",
      "form": 'invoiceCreateForm',
      "title": "Save"
    }
  }, [_c('i', {
    staticClass: "fas fa-save"
  })])], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('form', {
    attrs: {
      "id": "invoiceCreateForm"
    },
    on: {
      "submit": function submit($event) {
        $event.preventDefault();
        return _vm.handleFormSubmit.apply(null, arguments);
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-12 col-sm-6 col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "costCenter"
    }
  }, [_vm._v(_vm._s(_vm.$t("Cost Center")))]), _vm._v(" "), _c('v-select', {
    staticClass: "flex-grow-1",
    "class": {
      'is-invalid': _vm.form.errors.has('cost_center_id')
    },
    attrs: {
      "options": _vm.costCenters,
      "label": "name",
      "name": "costCenter",
      "placeholder": _vm.$t('Select a cost center')
    },
    on: {
      "input": _vm.onCostCenterChange
    },
    model: {
      value: _vm.form.costCenter,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "costCenter", $$v);
      },
      expression: "form.costCenter"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "cost_center_id"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12 col-sm-6 col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "branch"
    }
  }, [_vm._v(_vm._s(_vm.$t("Branch")))]), _vm._v(" "), _c('v-select', {
    staticClass: "flex-grow-1",
    "class": {
      'is-invalid': _vm.form.errors.has('branch_id')
    },
    attrs: {
      "options": _vm.branches,
      "label": "name",
      "name": "branch",
      "placeholder": _vm.$t('Select a branch')
    },
    on: {
      "input": _vm.onBranchChange
    },
    model: {
      value: _vm.form.branch,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "branch", $$v);
      },
      expression: "form.branch"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "branch_id"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12 col-sm-6 col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "representative"
    }
  }, [_vm._v(_vm._s(_vm.$t("Sales Representative")))]), _vm._v(" "), _c('v-select', {
    staticClass: "flex-grow-1",
    "class": {
      'is-invalid': _vm.form.errors.has('representative_id')
    },
    attrs: {
      "options": _vm.representatives,
      "label": "name",
      "name": "representative",
      "placeholder": _vm.$t('اختر مندوب مبيعات')
    },
    on: {
      "input": _vm.onRepresentativeChange
    },
    model: {
      value: _vm.form.representative,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "representative", $$v);
      },
      expression: "form.representative"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "representative_id"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12 col-sm-6 col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "cashier"
    }
  }, [_vm._v(_vm._s(_vm.$t("Cashier")))]), _vm._v(" "), _c('v-select', {
    staticClass: "flex-grow-1",
    "class": {
      'is-invalid': _vm.form.errors.has('cashier_id')
    },
    attrs: {
      "options": _vm.cashiers,
      "label": "name",
      "name": "cashier",
      "placeholder": _vm.$t('اختر كاشير')
    },
    on: {
      "input": _vm.onCashierChange
    },
    model: {
      value: _vm.form.cashier,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "cashier", $$v);
      },
      expression: "form.cashier"
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "cashier_id"
    }
  })], 1)]), _vm._v(" "), _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-12 col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "client"
    }
  }, [_vm._v(_vm._s(_vm.$t("Client")) + "\n                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
    staticClass: "d-flex w-100"
  }, [_c('v-select', {
    staticClass: "flex-grow-1",
    "class": {
      'is-invalid': _vm.form.errors.has('client')
    },
    attrs: {
      "options": _vm.items || [],
      "label": "name",
      "name": "client",
      "placeholder": _vm.$t('Select a client')
    },
    on: {
      "input": _vm.onClientChange
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
  }, [_vm._v(_vm._s(_vm.$t("Client needs Chart of Account")))]), _vm._v(" "), _c('button', {
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
  }), _vm._v("\n                        " + _vm._s(_vm.isAutoAssigningClient ? _vm.$t("Assigning...") : _vm.$t("Auto-Assign")) + "\n                      ")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "client"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12 col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "saleStatus"
    }
  }, [_vm._v(_vm._s(_vm.$t("Sale Status")))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.saleStatus,
      expression: "form.saleStatus"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('sale_status')
    },
    attrs: {
      "id": "saleStatus",
      "name": "saleStatus"
    },
    on: {
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "saleStatus", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, _vm.onSaleStatusChange]
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v(_vm._s(_vm.$t("Select")))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "مكتملة"
    }
  }, [_vm._v(_vm._s(_vm.$t("Completed")))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "معلقة"
    }
  }, [_vm._v(_vm._s(_vm.$t("Pending")))])]), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "sale_status"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12 col-md-3"
  }, [_c('label', {
    attrs: {
      "for": "current_date"
    }
  }, [_vm._v(_vm._s(_vm.$t("Date")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.current_date,
      expression: "form.current_date"
    }],
    staticClass: "form-control readonly-field",
    "class": {
      'is-invalid': _vm.form.errors.has('current_date')
    },
    attrs: {
      "id": "current_date",
      "type": "date",
      "name": "current_date",
      "readonly": ""
    },
    domProps: {
      "value": _vm.form.current_date
    },
    on: {
      "input": function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "current_date", $event.target.value);
      }
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "current_date"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-12 col-md-6"
  }, [_c('label', {
    attrs: {
      "for": "reference"
    }
  }, [_vm._v(_vm._s(_vm.$t("Reference Number")))]), _vm._v(" "), _c('input', {
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
      "placeholder": _vm.$t('Enter reference number')
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
  })], 1)])]), _vm._v(" "), _vm.products ? _c('div', [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-12"
  }, [_c('label', {
    attrs: {
      "for": "product"
    }
  }, [_vm._v(_vm._s(_vm.$t("Select Items")) + "\n                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('div', {
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
    scopedSlots: _vm._u([{
      key: "option",
      fn: function fn(_ref) {
        var name = _ref.name,
          code = _ref.code,
          unitName = _ref.unitName,
          unitCode = _ref.unitCode,
          inventoryCount = _ref.inventoryCount,
          avgPurchasePrice = _ref.avgPurchasePrice,
          regularPrice = _ref.regularPrice,
          isLowStock = _ref.isLowStock;
        return [_c('div', {
          staticClass: "product-option"
        }, [_c('div', {
          staticClass: "product-option-header"
        }, [_c('strong', [_vm._v(_vm._s(name))]), _vm._v(" "), _c('span', {
          staticClass: "product-code"
        }, [_vm._v("[" + _vm._s(code) + "]")]), _vm._v(" "), isLowStock ? _c('span', {
          staticClass: "badge badge-warning badge-sm ml-2"
        }, [_c('i', {
          staticClass: "fas fa-exclamation-triangle"
        }), _vm._v(" " + _vm._s(_vm.$t('Low Stock')) + "\n                              ")]) : _vm._e()]), _vm._v(" "), _c('div', {
          staticClass: "product-option-details"
        }, [_c('span', {
          staticClass: "product-detail-item"
        }, [_c('i', {
          staticClass: "fas fa-ruler"
        }), _vm._v(" " + _vm._s(unitName || unitCode || _vm.$t('N/A')) + "\n                              ")]), _vm._v(" "), _c('span', {
          staticClass: "product-detail-item"
        }, [_c('i', {
          staticClass: "fas fa-boxes"
        }), _vm._v(" " + _vm._s(_vm.$t('Stock')) + ": " + _vm._s(inventoryCount || 0) + "\n                              ")]), _vm._v(" "), _c('span', {
          staticClass: "product-detail-item"
        }, [_c('i', {
          staticClass: "fas fa-dollar-sign"
        }), _vm._v(" " + _vm._s(_vm.$t('Cost')) + ": " + _vm._s(_vm.formatToTwoDecimals(avgPurchasePrice || 0)) + " "), _c('span', {
          staticClass: "saudi-riyal"
        }, [_vm._v("ê")])]), _vm._v(" "), _c('span', {
          staticClass: "product-detail-item"
        }, [_c('i', {
          staticClass: "fas fa-tag"
        }), _vm._v(" " + _vm._s(_vm.$t('Price')) + ": " + _vm._s(_vm.formatToTwoDecimals(regularPrice || 0)) + " "), _c('span', {
          staticClass: "saudi-riyal"
        }, [_vm._v("ê")])])])])];
      }
    }, {
      key: "selected-option",
      fn: function fn(_ref2) {
        var name = _ref2.name,
          code = _ref2.code;
        return [_c('span', [_vm._v(_vm._s(name) + " [" + _vm._s(code) + "]")])];
      }
    }], null, false, 531929248),
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
  })])]), _vm._v(" "), _c('ProductCreateModal', {
    on: {
      "reloadProducts": _vm.getProducts,
      "productCreated": _vm.handleProductCreated
    }
  }, [_c('div', {
    staticClass: "input-group-text create-btn"
  }, [_c('i', {
    staticClass: "fas fa-solid fa-plus-circle"
  })])])], 1), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "product-status mt-2"
  }, [!_vm.form.selectedProducts[0].sales_account_id ? _c('div', {
    staticClass: "product-warning"
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle text-warning"
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("Product")) + "\n                        \"" + _vm._s(_vm.form.selectedProducts[0].name) + "\"\n                        " + _vm._s(_vm.$t("needs Sales Account")) + "\n                      ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-sm btn-outline-warning ml-2",
    attrs: {
      "type": "button",
      "disabled": _vm.isAutoAssigningProduct === _vm.form.selectedProducts[0].id
    },
    on: {
      "click": function click($event) {
        return _vm.autoAssignProductChartOfAccount(_vm.form.selectedProducts[0], 'sales');
      }
    }
  }, [_c('i', {
    "class": _vm.isAutoAssigningProduct === _vm.form.selectedProducts[0].id ? 'fas fa-spinner fa-spin' : 'fas fa-magic'
  }), _vm._v("\n                        " + _vm._s(_vm.isAutoAssigningProduct === _vm.form.selectedProducts[0].id ? _vm.$t("Assigning...") : _vm.$t("Auto-Assign")) + "\n                      ")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "selectedProducts"
    }
  })], 1)])]) : _vm._e(), _vm._v(" "), _c('ItemsTable', {
    attrs: {
      "items": _vm.form.selectedProducts,
      "prefix": _vm.prefix,
      "taxes": _vm.taxes,
      "form-errors": _vm.form.errors,
      "total-unit-price": _vm.totalUnitPrice,
      "total-product-discount": _vm.totalProductDiscount,
      "total-after-discount": _vm.totalAfterDiscount,
      "total-product-tax": _vm.totalProductTax,
      "subtotal": _vm.subtotal,
      "amount-in-words": _vm.toWord(),
      "table-class": "invoices-create-table"
    },
    on: {
      "item-change": _vm.handleItemChange,
      "discount-change": _vm.calculateProductDiscount,
      "vat-change": _vm.calculateProductVat,
      "remove-item": _vm.removeItem,
      "open-stock-modal": _vm.openStockAdjustmentModal,
      "edit-product": _vm.editProductFromTable
    }
  }), _vm._v(" "), _vm.hasInsufficientStock ? _c('div', {
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
  }), _vm._v("\n                        " + _vm._s(_vm.$t("View All")) + "\n                      ")])])])])])]) : _vm._e(), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', [_vm.taxes && !_vm.isSaudiArabia ? _c('div', {
    staticClass: "row mb-3"
  }, [_c('div', {
    staticClass: "form-group col-12 col-sm-6 col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "orderTax"
    }
  }, [_vm._v(_vm._s(_vm.$t("Invoice Tax")) + "\n                    "), _c('span', {
    staticClass: "required"
  }, [_vm._v("*")])]), _vm._v(" "), _c('v-select', {
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
      "input": function input($event) {
        _vm.calculateSum();
        _vm.clearFieldError('orderTax');
      }
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12 col-sm-6 col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "totalTax"
    }
  }, [_vm._v(_vm._s(_vm.$t("Total Tax")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.totalTax,
      expression: "form.totalTax"
    }],
    staticClass: "form-control readonly-field",
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
  })], 1)]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row mb-3"
  }, [_c('div', {
    staticClass: "form-group col-12 col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "discount_type"
    }
  }, [_vm._v(_vm._s(_vm.$t("Discount Type")))]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('select', {
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
      "id": "discount_type",
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
      }, function ($event) {
        _vm.calculateSum();
        _vm.clearFieldError('discountType');
      }]
    }
  }, [_c('option', {
    attrs: {
      "value": "0"
    }
  }, [_vm._v(_vm._s(_vm.$t("Fixed")))]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v(_vm._s(_vm.$t("Percentage")) + "(%)")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.discount,
      expression: "form.discount"
    }],
    staticClass: "form-control",
    "class": {
      'is-invalid': _vm.form.errors.has('discount') || _vm.isDiscountExceedingTotal
    },
    attrs: {
      "id": "discount",
      "type": "number",
      "step": "any",
      "min": "0",
      "max": _vm.form.discountType == 1 ? 100 : _vm.form.subTotal,
      "name": "discount",
      "placeholder": _vm.$t('Enter discount')
    },
    domProps: {
      "value": _vm.form.discount
    },
    on: {
      "change": _vm.calculateSum,
      "keyup": _vm.calculateSum,
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "discount", $event.target.value);
      }, _vm.onDiscountInput]
    }
  })]), _vm._v(" "), _vm.form.errors.has('discountType') || _vm.form.errors.has('discount') ? _c('div', {
    staticClass: "invalid-feedback d-block"
  }, [_vm.form.errors.has('discountType') ? _c('span', {
    staticClass: "d-block"
  }, [_vm._v(_vm._s(_vm.form.errors.get("discountType")))]) : _vm._e(), _vm._v(" "), _vm.form.errors.has('discount') ? _c('span', {
    staticClass: "d-block"
  }, [_vm._v(_vm._s(_vm.form.errors.get("discount")))]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.isDiscountExceedingTotal ? _c('div', {
    staticClass: "alert alert-danger mt-2",
    attrs: {
      "role": "alert"
    }
  }, [_c('i', {
    staticClass: "fas fa-exclamation-triangle mr-2"
  }), _vm._v(" "), _c('strong', [_vm._v(_vm._s(_vm.$t("Error")) + ":")]), _vm._v("\n                    " + _vm._s(_vm.$t("Discount amount cannot exceed the invoice total amount")) + "\n                  ")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12 col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "transportCost"
    }
  }, [_vm._v(_vm._s(_vm.$t("Transport Cost")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.transportCost,
      expression: "form.transportCost"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "transportCost",
      "type": "number",
      "step": "any",
      "min": "0",
      "name": "transportCost",
      "placeholder": _vm.$t('Enter transport cost')
    },
    domProps: {
      "value": _vm.form.transportCost
    },
    on: {
      "change": _vm.calculateSum,
      "keyup": _vm.calculateSum,
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "transportCost", $event.target.value);
      }, function ($event) {
        return _vm.clearFieldError('transportCost');
      }]
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12 col-md-4"
  }, [_c('label', {
    attrs: {
      "for": "total_amount"
    }
  }, [_vm._v(_vm._s(_vm.$t("Amount")))]), _vm._v(" "), _c('input', {
    staticClass: "form-control form-control-sm readonly-field",
    attrs: {
      "id": "total_amount",
      "type": "number",
      "step": "any",
      "name": "total_amount",
      "readonly": ""
    },
    domProps: {
      "value": _vm.grandTotal
    }
  })])]), _vm._v(" "), Number(_vm.form.transportCost || 0) > 0 ? _c('div', {
    staticClass: "row mb-3"
  }, [_c('div', {
    staticClass: "form-group col-12 col-md-4"
  }, [_c('div', {
    staticClass: "transport-taxability-card"
  }, [_c('div', {
    staticClass: "transport-taxability-header"
  }, [_c('i', {
    staticClass: "fas",
    "class": _vm.form.transportIsTaxable ? 'fa-check-circle text-success' : 'fa-times-circle text-secondary'
  }), _vm._v(" "), _c('span', {
    staticClass: "transport-taxability-title"
  }, [_vm._v("\n                        " + _vm._s(_vm.$t("Transport Taxability")) + "\n                      ")])]), _vm._v(" "), _c('div', {
    staticClass: "transport-taxability-body"
  }, [_c('div', {
    staticClass: "custom-checkbox-wrapper"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.transportIsTaxable,
      expression: "form.transportIsTaxable"
    }],
    staticClass: "custom-checkbox-input",
    attrs: {
      "id": "transportIsTaxable",
      "type": "checkbox"
    },
    domProps: {
      "checked": Array.isArray(_vm.form.transportIsTaxable) ? _vm._i(_vm.form.transportIsTaxable, null) > -1 : _vm.form.transportIsTaxable
    },
    on: {
      "change": [function ($event) {
        var $$a = _vm.form.transportIsTaxable,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form, "transportIsTaxable", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form, "transportIsTaxable", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form, "transportIsTaxable", $$c);
        }
      }, _vm.calculateSum]
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "custom-checkbox-label",
    attrs: {
      "for": "transportIsTaxable"
    }
  }, [_c('span', {
    staticClass: "checkbox-indicator"
  }), _vm._v(" "), _c('span', {
    staticClass: "checkbox-text"
  }, [_vm._v("\n                            " + _vm._s(_vm.form.transportIsTaxable ? _vm.$t("Transport is Taxable") : _vm.$t("Transport is Non-Taxable")) + "\n                          ")])])]), _vm._v(" "), _c('div', {
    staticClass: "transport-taxability-description",
    "class": {
      'description-taxable': _vm.form.transportIsTaxable,
      'description-non-taxable': !_vm.form.transportIsTaxable
    }
  }, [_c('i', {
    staticClass: "fas mr-2",
    "class": _vm.form.transportIsTaxable ? 'fa-info-circle' : 'fa-exclamation-circle'
  }), _vm._v(" "), _c('span', [_vm._v("\n                          " + _vm._s(_vm.form.transportIsTaxable ? _vm.$t("VAT will be calculated on transport cost") : _vm.$t("Transport will be added after VAT calculation")) + "\n                        ")])])])])])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4",
    staticStyle: {
      "display": "none"
    }
  }, [_c('label', {
    attrs: {
      "for": "poReference"
    }
  }, [_vm._v(_vm._s(_vm.$t("PO Reference")))]), _vm._v(" "), _c('input', {
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
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "poReference", $event.target.value);
      }, function ($event) {
        return _vm.clearFieldError('poReference');
      }]
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "poReference"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4",
    staticStyle: {
      "display": "none"
    }
  }, [_c('label', {
    attrs: {
      "for": "paymentTerms"
    }
  }, [_vm._v(_vm._s(_vm.$t("Payment Terms")))]), _vm._v(" "), _c('input', {
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
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "paymentTerms", $event.target.value);
      }, function ($event) {
        return _vm.clearFieldError('paymentTerms');
      }]
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "paymentTerms"
    }
  })], 1), _vm._v(" "),  false ? 0 : _vm._e()]), _vm._v(" "),  false ? 0 : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-4",
    staticStyle: {
      "display": "none"
    }
  }, [_c('label', {
    attrs: {
      "for": "deliveryPlace"
    }
  }, [_vm._v(_vm._s(_vm.$t("Delivery Place")))]), _vm._v(" "), _c('input', {
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
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "deliveryPlace", $event.target.value);
      }, function ($event) {
        return _vm.clearFieldError('deliveryPlace');
      }]
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "deliveryPlace"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group col-md-4",
    staticStyle: {
      "display": "none"
    }
  }, [_c('label', {
    attrs: {
      "for": "date"
    }
  }, [_vm._v(_vm._s(_vm.$t("Date")))]), _vm._v(" "), _c('input', {
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
      "change": function change($event) {
        return _vm.clearFieldError('date');
      },
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
      "change": [function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.form, "status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }, function ($event) {
        return _vm.clearFieldError('status');
      }]
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
  })], 1) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "form-group col-md-6"
  }, [_c('label', [_vm._v(_vm._s(_vm.$t("Payment Type")) + " (" + _vm._s(_vm.$t("نوع الدفع")) + ")")]), _vm._v(" "), _c('div', {
    staticClass: "d-flex align-items-center"
  }, [_c('toggle-button', {
    staticClass: "mr-2",
    attrs: {
      "labels": {
        checked: _vm.$t('Paid'),
        unchecked: _vm.$t('On Credit')
      },
      "color": {
        checked: '#2AB930',
        unchecked: '#dc3545'
      },
      "sync": true
    },
    on: {
      "change": _vm.onPaymentTypeChange
    },
    model: {
      value: _vm.form.isPaid,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "isPaid", $$v);
      },
      expression: "form.isPaid"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.form.isPaid ? _vm.$t("Paid") : _vm.$t("On Credit")))])], 1), _vm._v(" "), _c('small', {
    staticClass: "form-text text-muted"
  }, [_vm._v("\n                  " + _vm._s(_vm.form.isPaid ? _vm.$t("Payment will be added after invoice creation") : _vm.$t("Invoice will be created on credit")) + "\n                ")])])]), _vm._v(" "), _c('div', {
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
      "placeholder": _vm.$t('Write your note here!')
    },
    domProps: {
      "value": _vm.form.note
    },
    on: {
      "input": [function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.form, "note", $event.target.value);
      }, function ($event) {
        return _vm.clearFieldError('note');
      }]
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "note"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "mb-2",
    attrs: {
      "for": "attachments"
    }
  }, [_vm._v(_vm._s(_vm.$t("Attachments")))]), _vm._v(" "), _c('input', {
    staticClass: "form-control form-control-sm",
    "class": {
      'is-invalid': _vm.form.errors.has('attachments')
    },
    attrs: {
      "id": "attachments",
      "type": "file",
      "multiple": "",
      "name": "attachments"
    },
    on: {
      "change": _vm.onAttachmentChange
    }
  }), _vm._v(" "), _c('has-error', {
    attrs: {
      "form": _vm.form,
      "field": "attachments"
    }
  }), _vm._v(" "), _vm.form.attachments && _vm.form.attachments.length > 0 ? _c('div', {
    staticClass: "mt-2"
  }, [_c('small', {
    staticClass: "text-muted d-block mb-1"
  }, [_vm._v(_vm._s(_vm.$t("Selected files")) + ":")]), _vm._v(" "), _c('ul', {
    staticClass: "list-unstyled mb-0"
  }, _vm._l(_vm.form.attachments, function (file, index) {
    return _c('li', {
      key: index,
      staticClass: "d-flex justify-content-between align-items-center mb-1 py-1 px-2 bg-light rounded"
    }, [_c('span', {
      staticClass: "text-truncate small",
      staticStyle: {
        "max-width": "70%"
      }
    }, [_c('i', {
      staticClass: "fas fa-file mr-1"
    }), _vm._v(_vm._s(file.name) + "\n                    ")]), _vm._v(" "), _c('button', {
      staticClass: "btn btn-sm btn-danger p-1",
      staticStyle: {
        "min-width": "28px"
      },
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.removeAttachment(index);
        }
      }
    }, [_c('i', {
      staticClass: "fas fa-times"
    })])]);
  }), 0)]) : _vm._e()], 1), _vm._v(" "), _vm.form.selectedProducts && _vm.form.selectedProducts.length > 0 ? _c('div', {
    staticClass: "summary-footer-wrapper mt-3 mb-3"
  }, [_c('div', {
    staticClass: "summary-card summary-card-horizontal"
  }, [_c('div', {
    staticClass: "summary-row-horizontal"
  }, [_c('div', {
    staticClass: "summary-item"
  }, [_c('span', {
    staticClass: "summary-item-label"
  }, [_vm._v(_vm._s(_vm.$t("Items")))]), _vm._v(" "), _c('span', {
    staticClass: "summary-item-value"
  }, [_vm._v(_vm._s(_vm.numberOfItems))])]), _vm._v(" "), _c('div', {
    staticClass: "summary-divider"
  }), _vm._v(" "), _c('div', {
    staticClass: "summary-item"
  }, [_c('span', {
    staticClass: "summary-item-label"
  }, [_vm._v(_vm._s(_vm.$t("Subtotal")))]), _vm._v(" "), _c('span', {
    staticClass: "summary-item-value"
  }, [_vm._v("\n                      " + _vm._s(_vm.formatToTwoDecimals(_vm.invoiceSubtotal)) + "\n                      "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _vm.invoiceLevelDiscountTotal > 0 ? _c('div', {
    staticClass: "summary-divider"
  }) : _vm._e(), _vm._v(" "), _vm.invoiceLevelDiscountTotal > 0 ? _c('div', {
    staticClass: "summary-item summary-item-discount"
  }, [_c('span', {
    staticClass: "summary-item-label"
  }, [_vm._v(_vm._s(_vm.$t("Discount")))]), _vm._v(" "), _c('span', {
    staticClass: "summary-item-value text-danger"
  }, [_vm._v("\n                      -" + _vm._s(_vm.formatToTwoDecimals(_vm.invoiceLevelDiscountTotal)) + "\n                      "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]) : _vm._e(), _vm._v(" "), _vm.shippingCostTotal > 0 ? _c('div', {
    staticClass: "summary-divider"
  }) : _vm._e(), _vm._v(" "), _vm.shippingCostTotal > 0 ? _c('div', {
    staticClass: "summary-item"
  }, [_c('span', {
    staticClass: "summary-item-label"
  }, [_vm._v(_vm._s(_vm.$t("Shipping")))]), _vm._v(" "), _c('span', {
    staticClass: "summary-item-value"
  }, [_vm._v("\n                      " + _vm._s(_vm.formatToTwoDecimals(_vm.shippingCostTotal)) + "\n                      "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "summary-divider"
  }), _vm._v(" "), _c('div', {
    staticClass: "summary-item"
  }, [_c('span', {
    staticClass: "summary-item-label"
  }, [_vm._v(_vm._s(_vm.$t("VAT")))]), _vm._v(" "), _c('span', {
    staticClass: "summary-item-value"
  }, [_vm._v("\n                      " + _vm._s(_vm.formatToTwoDecimals(_vm.vatAmount)) + "\n                      "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])]), _vm._v(" "), _c('div', {
    staticClass: "summary-divider summary-divider-bold"
  }), _vm._v(" "), _c('div', {
    staticClass: "summary-item summary-item-total"
  }, [_c('span', {
    staticClass: "summary-item-label"
  }, [_c('strong', [_vm._v(_vm._s(_vm.$t("Grand Total")))])]), _vm._v(" "), _c('span', {
    staticClass: "summary-item-value summary-total"
  }, [_c('strong', [_vm._v("\n                        " + _vm._s(_vm.formatToTwoDecimals(_vm.grandTotal)) + "\n                        "), _c('span', {
    staticClass: "saudi-riyal"
  }, [_vm._v("ê")])])])])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12 d-flex flex-wrap"
  }, [_c('div', {
    staticClass: "pr-5 d-flex align-items-center"
  }, [_c('toggle-button', {
    attrs: {
      "disabled": _vm.isDemoMode || _vm.communicationConfig.loading || !_vm.communicationConfig.email_configured
    },
    model: {
      value: _vm.form.isSendEmail,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "isSendEmail", $$v);
      },
      expression: "form.isSendEmail"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-3"
  }, [_vm._v(_vm._s(_vm.$t("Send To Email")))]), _vm._v(" "), !_vm.communicationConfig.loading && !_vm.communicationConfig.email_configured ? _c('span', {
    staticClass: "ml-2 text-muted small"
  }, [_vm._v("\n                  (" + _vm._s(_vm.$t("Email not configured")) + ")\n                ")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "form-group col-12 d-flex flex-wrap"
  }, [_c('div', {
    staticClass: "pr-5 d-flex align-items-center"
  }, [_c('toggle-button', {
    attrs: {
      "disabled": _vm.isDemoMode || _vm.communicationConfig.loading || !_vm.communicationConfig.sms_configured
    },
    model: {
      value: _vm.form.isSendSMS,
      callback: function callback($$v) {
        _vm.$set(_vm.form, "isSendSMS", $$v);
      },
      expression: "form.isSendSMS"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "ml-3"
  }, [_vm._v(_vm._s(_vm.$t("Send To SMS")))]), _vm._v(" "), !_vm.communicationConfig.loading && !_vm.communicationConfig.sms_configured ? _c('span', {
    staticClass: "ml-2 text-muted small"
  }, [_vm._v("\n                  (" + _vm._s(_vm.$t("SMS not configured")) + ")\n                ")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "card-footer"
  }, [_c('div', {
    staticClass: "dtable-footer"
  }, [_c('div', {
    staticClass: "form-group row display-per-page footer-buttons d-flex justify-content-between w-100"
  }, [_c('button', {
    staticClass: "btn btn-success",
    attrs: {
      "disabled": _vm.form.busy || !_vm.isFormReady,
      "type": "submit"
    }
  }, [_vm.form.busy ? _c('i', {
    staticClass: "fas fa-spinner fa-spin"
  }) : _c('i', {
    staticClass: "fas fa-save"
  }), _vm._v("\n                    " + _vm._s(_vm.form.busy ? _vm.$t("Saving...") : _vm.$t("Complete Process")) + "\n                  ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-secondary ml-2",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.resetForm
    }
  }, [_c('i', {
    staticClass: "fas fa-power-off"
  }), _vm._v(" " + _vm._s(_vm.$t("Reset")) + "\n                  ")])])])])], 1)])])])]), _vm._v(" "), _c('ProductEditModal', {
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
      "persist": _vm.saveTemporary,
      "stock-updated": _vm.handleStockUpdated
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "row mt-3 mb-3"
  }, [_c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "card debug-panel"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "mb-4"
  }, [_vm._m(1), _vm._v(" "), _vm._l(_vm.form.selectedProducts, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "debug-item mb-3 p-3 border rounded"
    }, [_c('div', {
      staticClass: "font-weight-bold text-dark mb-2"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-md-6"
    }, [_c('div', {
      staticClass: "debug-step"
    }, [_c('strong', [_vm._v("Subtotal:")]), _vm._v(" " + _vm._s(_vm.formatToTwoDecimals(item.unitPrice)) + " × " + _vm._s(item.qty) + " = " + _vm._s(_vm.formatToTwoDecimals((Number(item.unitPrice) || 0) * (Number(item.qty) || 0))) + "\n                  ")]), _vm._v(" "), _c('div', {
      staticClass: "debug-step"
    }, [_c('strong', [_vm._v("Discount:")]), _vm._v(" " + _vm._s(_vm.formatToTwoDecimals(item.discountAmount || 0)) + "\n                  ")]), _vm._v(" "), _c('div', {
      staticClass: "debug-step"
    }, [_c('strong', [_vm._v(_vm._s(_vm.$t("After Discount")) + ":")]), _vm._v(" " + _vm._s(_vm.formatToTwoDecimals((Number(item.unitPrice) || 0) * (Number(item.qty) || 0) - (item.discountAmount || 0))) + "\n                  ")])]), _vm._v(" "), _c('div', {
      staticClass: "col-md-6"
    }, [_c('div', {
      staticClass: "debug-step"
    }, [_c('strong', [_vm._v("VAT:")]), _vm._v(" " + _vm._s(_vm.formatToTwoDecimals(item.totalTax || 0)) + "\n                  ")]), _vm._v(" "), _c('div', {
      staticClass: "debug-step"
    }, [_c('strong', [_vm._v("Total with VAT:")]), _vm._v(" " + _vm._s(_vm.formatToTwoDecimals(item.totalPrice || 0)) + "\n                  ")])])])]);
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "mb-4"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "debug-summary"
  }, [_c('strong', [_vm._v("Computed Values:")]), _vm._v(" "), _c('ul', {
    staticClass: "list-unstyled mt-2"
  }, [_c('li', [_vm._v("Total Unit Price: " + _vm._s(_vm.formatToTwoDecimals(_vm.totalUnitPrice)))]), _vm._v(" "), _c('li', [_vm._v("Total Discount: " + _vm._s(_vm.formatToTwoDecimals(_vm.totalProductDiscount)))]), _vm._v(" "), _c('li', [_vm._v("Total After Discount: " + _vm._s(_vm.formatToTwoDecimals(_vm.totalAfterDiscount)))]), _vm._v(" "), _c('li', [_vm._v("Total Product Tax: " + _vm._s(_vm.formatToTwoDecimals(_vm.totalProductTax)))]), _vm._v(" "), _c('li', [_vm._v("Subtotal (After Discount + VAT): " + _vm._s(_vm.formatToTwoDecimals(_vm.subtotal)))])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "debug-summary"
  }, [_c('strong', [_vm._v("Form Values:")]), _vm._v(" "), _c('ul', {
    staticClass: "list-unstyled mt-2"
  }, [_c('li', [_vm._v("form.subTotal: " + _vm._s(_vm.formatToTwoDecimals(_vm.form.subTotal)))]), _vm._v(" "), _c('li', [_vm._v("form.totalDiscount: " + _vm._s(_vm.formatToTwoDecimals(_vm.form.totalDiscount)))]), _vm._v(" "), _c('li', [_vm._v("form.productTotalTax: " + _vm._s(_vm.formatToTwoDecimals(_vm.form.productTotalTax)))]), _vm._v(" "), _c('li', [_vm._v("form.invoiceTax: " + _vm._s(_vm.formatToTwoDecimals(_vm.form.invoiceTax || 0)))]), _vm._v(" "), _c('li', [_vm._v("form.totalTax: " + _vm._s(_vm.formatToTwoDecimals(_vm.form.totalTax)))]), _vm._v(" "), _c('li', [_vm._v("form.netTotal: " + _vm._s(_vm.formatToTwoDecimals(_vm.form.netTotal)))])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "mb-4"
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "debug-display p-3 bg-light rounded"
  }, [_c('div', [_c('strong', [_vm._v("Summary Final Total:")]), _vm._v(" " + _vm._s(_vm.formatToTwoDecimals(_vm.subtotal)))]), _vm._v(" "), _c('div', [_c('strong', [_vm._v("Amount in Words:")]), _vm._v(" " + _vm._s(_vm.toWord()))])])]), _vm._v(" "), _c('div', {
    staticClass: "mb-4"
  }, [_vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "debug-steps"
  }, [_c('div', {
    staticClass: "step"
  }, [_vm._v("Step 1: Sum of all item totals = " + _vm._s(_vm.formatToTwoDecimals(_vm.subtotal)))]), _vm._v(" "), _c('div', {
    staticClass: "step"
  }, [_vm._v("Step 2: form.netTotal = " + _vm._s(_vm.formatToTwoDecimals(_vm.form.netTotal)))]), _vm._v(" "), _c('div', {
    staticClass: "step"
  }, [_vm._v("Step 3: Are they equal?\n                "), _c('span', {
    "class": _vm.formatToTwoDecimals(_vm.subtotal) === _vm.formatToTwoDecimals(_vm.form.netTotal) ? 'text-success' : 'text-danger'
  }, [_vm._v("\n                  " + _vm._s(_vm.formatToTwoDecimals(_vm.subtotal) === _vm.formatToTwoDecimals(_vm.form.netTotal) ? '✅ YES' : '❌ NO') + "\n                ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "mb-4"
  }, [_vm._m(5), _vm._v(" "), _c('div', {
    staticClass: "debug-state"
  }, [_c('div', [_vm._v("Selected Products Count: " + _vm._s(_vm.form.selectedProducts.length))]), _vm._v(" "), _c('div', [_vm._v("Is Saudi Arabia: " + _vm._s(_vm.isSaudiArabia))]), _vm._v(" "), _c('div', [_vm._v("Debug Panel Visible: ✅ YES")])])]), _vm._v(" "), _c('div', {
    staticClass: "mb-0"
  }, [_vm._m(6), _vm._v(" "), _c('div', {
    staticClass: "table-responsive"
  }, [_c('table', {
    staticClass: "table table-sm table-bordered"
  }, [_vm._m(7), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("Subtotal")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.subtotal)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.form.subTotal)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.subtotal)))]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.formatToTwoDecimals(_vm.subtotal) === _vm.formatToTwoDecimals(_vm.form.subTotal) ? 'text-success' : 'text-danger'
  }, [_vm._v("\n                        " + _vm._s(_vm.formatToTwoDecimals(_vm.subtotal) === _vm.formatToTwoDecimals(_vm.form.subTotal) ? '✅' : '❌') + "\n                      ")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Discount")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalProductDiscount)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.form.totalDiscount)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalProductDiscount)))]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.totalProductDiscount === _vm.form.totalDiscount ? 'text-success' : 'text-danger'
  }, [_vm._v("\n                        " + _vm._s(_vm.totalProductDiscount === _vm.form.totalDiscount ? '✅' : '❌') + "\n                      ")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v(_vm._s(_vm.$t("After Discount")))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalAfterDiscount)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.form.subTotal - (_vm.form.productTotalTax + (_vm.form.invoiceTax || 0)))) + "\n                    ")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalAfterDiscount)))]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.formatToTwoDecimals(_vm.totalAfterDiscount) === _vm.formatToTwoDecimals(_vm.form.subTotal - (_vm.form.productTotalTax + (_vm.form.invoiceTax || 0))) ? 'text-success' : 'text-danger'
  }, [_vm._v("\n                        " + _vm._s(_vm.formatToTwoDecimals(_vm.totalAfterDiscount) === _vm.formatToTwoDecimals(_vm.form.subTotal - (_vm.form.productTotalTax + (_vm.form.invoiceTax || 0))) ? '✅' : '❌') + "\n                      ")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Tax")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalProductTax + (_vm.form.invoiceTax || 0))))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.form.totalTax)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.totalProductTax + (_vm.form.invoiceTax || 0))))]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.formatToTwoDecimals(_vm.totalProductTax + (_vm.form.invoiceTax || 0)) === _vm.formatToTwoDecimals(_vm.form.totalTax) ? 'text-success' : 'text-danger'
  }, [_vm._v("\n                        " + _vm._s(_vm.formatToTwoDecimals(_vm.totalProductTax + (_vm.form.invoiceTax || 0)) === _vm.formatToTwoDecimals(_vm.form.totalTax) ? '✅' : '❌') + "\n                      ")])])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("Final Total")]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.subtotal)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.form.netTotal)))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(_vm.formatToTwoDecimals(_vm.subtotal)))]), _vm._v(" "), _c('td', [_c('span', {
    "class": _vm.formatToTwoDecimals(_vm.subtotal) === _vm.formatToTwoDecimals(_vm.form.netTotal) ? 'text-success' : 'text-danger'
  }, [_vm._v("\n                        " + _vm._s(_vm.formatToTwoDecimals(_vm.subtotal) === _vm.formatToTwoDecimals(_vm.form.netTotal) ? '✅' : '❌') + "\n                      ")])])])])])])])])])])]), _vm._v(" "), _vm.createdInvoiceData ? _c('InvoicePaymentModal', {
    attrs: {
      "show": _vm.showPaymentModal,
      "invoice-id": _vm.paymentModalData.id,
      "invoice-no": _vm.paymentModalData.invoiceNo,
      "invoice-prefix": _vm.prefix,
      "invoice-total": _vm.paymentModalData.netTotal,
      "due-amount": _vm.paymentModalData.netTotal,
      "invoice-status": _vm.paymentModalData.status || 1
    },
    on: {
      "close": _vm.handlePaymentModalClose,
      "payment-saved": _vm.handlePaymentSaved
    }
  }) : _vm._e()], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "card-header bg-warning text-dark"
  }, [_c('h6', {
    staticClass: "mb-0"
  }, [_c('i', {
    staticClass: "fas fa-bug mr-2"
  }), _vm._v("\n            🔍 Debug Panel - Calculation Steps\n            "), _c('span', {
    staticClass: "badge badge-success ml-2"
  }, [_vm._v("DEBUG MODE ACTIVE")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('h6', {
    staticClass: "text-primary"
  }, [_c('i', {
    staticClass: "fas fa-calculator mr-1"
  }), _vm._v("\n              Individual Item Calculations:\n            ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('h6', {
    staticClass: "text-success"
  }, [_c('i', {
    staticClass: "fas fa-chart-line mr-1"
  }), _vm._v("\n              Summary Totals:\n            ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('h6', {
    staticClass: "text-info"
  }, [_c('i', {
    staticClass: "fas fa-eye mr-1"
  }), _vm._v("\n              Template Display:\n            ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('h6', {
    staticClass: "text-warning"
  }, [_c('i', {
    staticClass: "fas fa-list-ol mr-1"
  }), _vm._v("\n              Calculation Steps:\n            ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('h6', {
    staticClass: "text-secondary"
  }, [_c('i', {
    staticClass: "fas fa-info-circle mr-1"
  }), _vm._v("\n              Current State:\n            ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('h6', {
    staticClass: "text-danger"
  }, [_c('i', {
    staticClass: "fas fa-table mr-1"
  }), _vm._v("\n              Summary Table Comparison:\n            ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('thead', {
    staticClass: "thead-light"
  }, [_c('tr', [_c('th', [_vm._v("Value")]), _vm._v(" "), _c('th', [_vm._v("Computed Property")]), _vm._v(" "), _c('th', [_vm._v("Form Value")]), _vm._v(" "), _c('th', [_vm._v("Template Display")]), _vm._v(" "), _c('th', [_vm._v("Status")])])]);
}];

;// ./resources/js/pages/sales/invoices/create.vue?vue&type=template&id=5f535d2c&scoped=true

// EXTERNAL MODULE: ./node_modules/vform/dist/vform.es.js
var vform_es = __webpack_require__(63216);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(72505);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__(95353);
// EXTERNAL MODULE: ./node_modules/vue-js-toggle-button/dist/index.js
var dist = __webpack_require__(12616);
// EXTERNAL MODULE: ./resources/js/components/ClientCreateModal.vue + 5 modules
var ClientCreateModal = __webpack_require__(95779);
// EXTERNAL MODULE: ./resources/js/components/ProductCreateModal.vue + 17 modules
var ProductCreateModal = __webpack_require__(72781);
// EXTERNAL MODULE: ./resources/js/components/ProductEditModal.vue + 18 modules
var ProductEditModal = __webpack_require__(28788);
// EXTERNAL MODULE: ./resources/js/components/StockAdjustmentModal.vue + 6 modules
var StockAdjustmentModal = __webpack_require__(65259);
// EXTERNAL MODULE: ./resources/js/components/ItemsTable.vue + 5 modules
var ItemsTable = __webpack_require__(41600);
// EXTERNAL MODULE: ./resources/js/components/InvoicePaymentModal.vue + 5 modules
var InvoicePaymentModal = __webpack_require__(22367);
// EXTERNAL MODULE: ./resources/js/mixins/RTLMixin.js
var RTLMixin = __webpack_require__(64744);
// EXTERNAL MODULE: ./node_modules/to-words/dist/ToWords.js
var ToWords = __webpack_require__(54923);
;// ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/invoices/create.vue?vue&type=script&lang=js
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }












/* harmony default export */ const createvue_type_script_lang_js = ({
  middleware: ["auth", "check-permissions"],
  metaInfo: function metaInfo() {
    return {
      title: this.$t("Create Invoice")
    };
  },
  mixins: [RTLMixin/* default */.A],
  components: {
    ToggleButton: dist.ToggleButton,
    ClientCreateModal: ClientCreateModal/* default */.A,
    ProductCreateModal: ProductCreateModal/* default */.A,
    ProductEditModal: ProductEditModal/* default */.A,
    StockAdjustmentModal: StockAdjustmentModal/* default */.A,
    ItemsTable: ItemsTable/* default */.A,
    InvoicePaymentModal: InvoicePaymentModal/* default */.A
  },
  data: function data() {
    return {
      isDemoMode: window.config.isDemoMode,
      breadcrumbsCurrent: "Create Invoice",
      isSubmitting: false,
      // Flag to track form submission state
      breadcrumbs: [{
        name: "Dashboard",
        url: "home"
      }, {
        name: "Invoices",
        url: "invoices.index"
      }, {
        name: "Create",
        url: ""
      }],
      form: new vform_es/* default */.Ay({
        invoiceNo: "",
        client: "",
        reference: "",
        selectedProducts: [],
        subTotal: 0,
        netTotal: 0,
        transportCost: "",
        transportIsTaxable: true,
        // Default to true to maintain existing behavior (transport is taxable)
        orderTax: "",
        totalTax: 0,
        productTotalTax: 0,
        invoiceTax: 0,
        // Add this field for Invoice Tax calculation
        total_amount: 0,
        account: "",
        totalPaid: "",
        dueAmount: "",
        poReference: "",
        paymentTerms: "",
        deliveryPlace: "",
        addPayment: 0,
        // Initialize to 0 (No) by default
        chequeNo: "",
        receiptNo: "",
        date: new Date().toISOString().slice(0, 10),
        note: "",
        status: 1,
        isSendEmail: false,
        isSendSMS: false,
        discountType: 0,
        // 0 for fixed, 1 for percentage
        discount: 0,
        totalDiscount: 0,
        costCenter: null,
        cost_center_id: null,
        saleStatus: "",
        sale_status: "",
        representative: null,
        representative_id: null,
        cashier: null,
        cashier_id: null,
        branch: null,
        branch_id: null,
        current_date: new Date().toISOString().slice(0, 10),
        attachments: [],
        isPaid: true,
        // Default to Paid (مدفوع)
        discount_type: "percentage",
        // "percentage" or "fixed"
        discount_value: 0
      }),
      products: [],
      accounts: [],
      taxes: [],
      costCenters: [],
      employees: [],
      representatives: [],
      cashiers: [],
      branches: [],
      prefix: "",
      showPaymentModal: false,
      paymentModalData: {
        id: null,
        invoiceNo: null,
        netTotal: 0,
        status: 1
      },
      createdInvoiceData: null,
      isUpdatingChartOfAccount: false,
      // Flag to prevent form submission during chart of account updates

      isAutoAssigningClient: false,
      // Add this back for the auto-assign button
      isAutoAssigningProduct: null,
      // Track which product is being auto-assigned

      // Communication configuration status
      communicationConfig: {
        email_configured: false,
        sms_configured: false,
        loading: true
      },
      // Stock adjustment modal
      showStockAdjustmentModal: false,
      selectedProductForStockAdjustment: null,
      // Reactive totals for the table
      reactiveTotals: {
        totalUnitPrice: 0,
        totalAfterDiscount: 0,
        totalDiscount: 0,
        productTotalTax: 0,
        subTotal: 0
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex_esm/* mapGetters */.L8)("operations", ["items", "appInfo"])), {}, {
    // Check if country is Saudi Arabia or not selected (default to Saudi Arabia)
    isSaudiArabia: function isSaudiArabia() {
      var _this$appInfo;
      return !((_this$appInfo = this.appInfo) !== null && _this$appInfo !== void 0 && _this$appInfo.country) || this.appInfo.country === 'SA';
    },
    // Display the calculated global discount amount
    globalDiscountDisplay: function globalDiscountDisplay() {
      if (this.form.discount > 0) {
        if (this.form.discountType == 1) {
          // Percentage
          return (this.form.discount / 100 * this.form.subTotal).toFixed(2);
        } else {
          // Fixed
          return this.form.discount.toFixed(2);
        }
      }
      return '0.00';
    },
    // Calculate total unit price (sum of all unit prices)
    totalUnitPrice: function totalUnitPrice() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce(function (total, item) {
        return total + item.unitPrice * item.qty;
      }, 0);
    },
    // Calculate total after discount (sum of all totalAfterDiscount values)
    totalAfterDiscount: function totalAfterDiscount() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.reduce(function (total, item) {
        return total + (item.totalAfterDiscount || 0);
      }, 0);
    },
    // Calculate total discount from all products (reactive)
    totalProductDiscount: function totalProductDiscount() {
      var total = this.form.selectedProducts.reduce(function (total, item) {
        return total + (item.discountAmount || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },
    // Calculate total product tax (reactive)
    totalProductTax: function totalProductTax() {
      var total = this.form.selectedProducts.reduce(function (total, item) {
        return total + (item.totalTax || 0);
      }, 0);
      return this.roundToTwoDecimals(total);
    },
    // Invoice Subtotal: Sum of all item subtotals before discount (qty × unit_price)
    invoiceSubtotal: function invoiceSubtotal() {
      return this.roundToTwoDecimals(this.totalUnitPrice);
    },
    // Invoice-Level Discount Total: Total discount applied at invoice level and distributed across items
    // This is calculated from invoice-level discount inputs (discount_type and discount_value)
    invoiceLevelDiscountTotal: function invoiceLevelDiscountTotal() {
      var subtotal = this.invoiceSubtotal;
      if (!this.form.discount || this.form.discount <= 0) {
        return 0;
      }
      var discountAmount = 0;
      if (this.form.discountType == 1) {
        discountAmount = this.roundToTwoDecimals(subtotal * this.form.discount / 100);
      } else {
        discountAmount = this.roundToTwoDecimals(Number(this.form.discount));
      }

      // Ensure discount doesn't exceed the subtotal
      return discountAmount > subtotal ? this.roundToTwoDecimals(subtotal) : discountAmount;
    },
    // Check if discount exceeds invoice total (before capping)
    isDiscountExceedingTotal: function isDiscountExceedingTotal() {
      var subtotal = this.invoiceSubtotal;
      if (!this.form.discount || this.form.discount <= 0 || subtotal <= 0) {
        return false;
      }
      var discountAmount = 0;
      if (this.form.discountType == 1) {
        // Percentage discount
        discountAmount = this.roundToTwoDecimals(subtotal * this.form.discount / 100);
      } else {
        // Fixed discount
        discountAmount = this.roundToTwoDecimals(Number(this.form.discount));
      }
      return discountAmount > subtotal;
    },
    // Gets transport amount
    shippingCostTotal: function shippingCostTotal() {
      var transportCost = Number(this.form.transportCost || 0);
      return this.roundToTwoDecimals(transportCost);
    },
    // Calculate subtotal for ItemsTable footer (Total with VAT)
    subtotal: function subtotal() {
      // Must include tax to match the "Total with VAT" column in ItemsTable
      var net = Number(this.totalAfterDiscount) || 0;
      var tax = Number(this.totalProductTax) || 0;
      return this.roundToTwoDecimals(net + tax);
    },
    // Net Amount Before VAT: Calculated based on transport taxability
    // CRITICAL: When transport is non-taxable, use sum of item net totals to avoid discount issues
    //
    // If transport is taxable:
    //   Net Amount = Invoice Subtotal - Invoice Discount + Transport
    //   Transport is included in VAT base
    //
    // If transport is non-taxable:
    //   Net Amount = Sum of Item Net Totals (after item-level discounts)
    //   This ensures item-level discounts are correctly included without double-counting
    //   Transport is NOT included in VAT base and is added after VAT calculation
    netAmountBeforeVAT: function netAmountBeforeVAT() {
      var subtotal = this.invoiceSubtotal;
      var invoiceDiscount = this.invoiceLevelDiscountTotal;
      var shipping = this.shippingCostTotal;
      if (this.form.transportIsTaxable) {
        // Transport is taxable: include it in Net Amount (part of VAT base)
        // Net Amount = Invoice Subtotal - Invoice Discount + Transport
        return this.roundToTwoDecimals(subtotal - invoiceDiscount + shipping);
      } else {
        // Transport is non-taxable: use sum of item net totals (after item-level discounts)
        // This ensures item-level discounts are correctly included
        if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
          return 0;
        }

        // Sum of item net totals after discount (transport excluded)
        var sumOfItemNetTotals = this.form.selectedProducts.reduce(function (total, item) {
          var itemNetTotal = item.netTotal || item.totalAfterDiscount || 0;
          return total + itemNetTotal;
        }, 0);

        // Net Amount = Taxable Base = Sum of Item Net Totals (transport excluded)
        // Transport will be added after VAT calculation in grandTotal()
        return this.roundToTwoDecimals(sumOfItemNetTotals);
      }
    },
    // VAT Amount: Calculated based on transport taxability
    // CRITICAL: VAT calculation differs based on whether transport is taxable or not
    //
    // Transport Taxability Behavior:
    // - If transport is taxable:
    //   VAT base = Subtotal - Discount + Transport
    //   VAT = VAT base × Weighted Average VAT Rate
    // - If transport is non-taxable:
    //   VAT base = Subtotal - Discount (transport EXCLUDED from VAT base)
    //   VAT = Sum of item VATs (totalProductTax) - ensures consistency with item-level calculations
    //   Transport is NOT included in VAT calculation and is added after VAT
    //
    // Why this approach:
    // - When transport is taxable: It's part of the transaction value, so included in VAT base
    // - When transport is non-taxable: Item-level VAT already correctly excludes transport,
    //   so we use the sum of item VATs to ensure consistency and avoid double-counting
    // - This matches standard accounting practices for non-taxable shipping
    vatAmount: function vatAmount() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }

      // When transport is non-taxable, use sum of item VATs directly
      // This ensures VAT equals the sum of item VATs and transport is NOT included in VAT base
      if (!this.form.transportIsTaxable) {
        // Transport is non-taxable: VAT = Sum of item VATs (transport excluded from VAT base)
        // Item-level calculations already correctly exclude transport from VAT when non-taxable
        var itemVatSum = this.form.selectedProducts.reduce(function (total, item) {
          return total + (item.totalTax || 0);
        }, 0);
        return this.roundToTwoDecimals(itemVatSum);
      }

      // When transport is taxable, calculate VAT on Net Amount (includes transport)
      var netAmount = this.netAmountBeforeVAT;
      if (netAmount <= 0) {
        return 0;
      }

      // Calculate weighted average VAT rate from all items
      // We use items' net amounts (after discount) as weights
      var totalNetAmountForWeighting = 0;
      var weightedVatRateSum = 0;
      this.form.selectedProducts.forEach(function (item) {
        var itemNetAmount = item.netTotal || item.totalAfterDiscount || 0;
        if (itemNetAmount > 0) {
          // Get item's VAT rate
          var vatRate = 0;
          if (item.selectedVatRate && item.selectedVatRate.rate !== undefined && item.selectedVatRate.rate !== null) {
            vatRate = Number(item.selectedVatRate.rate);
          } else if (item.taxRate !== undefined && item.taxRate !== null) {
            vatRate = Number(item.taxRate);
          }

          // Ensure vatRate is valid
          if (!isNaN(vatRate) && vatRate >= 0) {
            totalNetAmountForWeighting += itemNetAmount;
            // Weighted contribution: itemNetAmount × (vatRate / 100)
            weightedVatRateSum += itemNetAmount * (vatRate / 100);
          }
        }
      });

      // If no valid net amount for weighting, return 0
      if (totalNetAmountForWeighting <= 0) {
        return 0;
      }

      // Calculate weighted average VAT rate as percentage
      // Formula: weightedAverageRate = (sum(itemNetAmount × itemVatRate) / sum(itemNetAmount)) × 100
      var weightedAverageVatRate = weightedVatRateSum / totalNetAmountForWeighting * 100;

      // Calculate VAT on the Net Amount using weighted average rate
      // Net Amount includes transport when transport is taxable
      var vat = this.roundToTwoDecimals(netAmount * (weightedAverageVatRate / 100));
      return vat;
    },
    // Grand Total: Calculated based on transport taxability
    // CRITICAL: When transport is non-taxable, use sum of item totals to avoid discount double-counting
    //
    // If transport is taxable:
    //   Grand Total = Net Amount + VAT
    //   Where: Net Amount = Subtotal - Discount + Transport (transport included in VAT base)
    //
    // If transport is non-taxable:
    //   Grand Total = Sum of Item Totals After VAT + Transport
    //   This ensures:
    //   - Item-level discounts are correctly included (no double-counting)
    //   - VAT is calculated correctly on items only (transport excluded)
    //   - Transport is added only once at invoice level
    //
    // Why use sum of item totals when non-taxable:
    // - Item totals already include item-level discounts and VAT
    // - Avoids issues with invoice-level vs item-level discount calculations
    // - Ensures accuracy: Grand Total = sum(item totals) + transport
    grandTotal: function grandTotal() {
      var shipping = this.shippingCostTotal;
      if (this.form.transportIsTaxable) {
        // Transport is taxable: use Net Amount + VAT calculation
        var netAmount = this.netAmountBeforeVAT;
        var vat = this.vatAmount;
        // Grand Total = Net Amount + VAT (transport already included in Net Amount)
        return this.roundToTwoDecimals(netAmount + vat);
      } else {
        // Transport is non-taxable: use sum of item totals after VAT
        // This ensures item-level discounts are correctly included without double-counting
        if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
          return this.roundToTwoDecimals(shipping);
        }

        // Calculate sum of all item totals after VAT (includes item-level discounts and VAT)
        var sumOfItemTotals = this.form.selectedProducts.reduce(function (total, item) {
          // Item total after VAT = itemAfterDiscount + itemVAT (transport excluded)
          var itemTotal = item.totalPrice || 0;
          return total + itemTotal;
        }, 0);

        // Grand Total = Sum of Item Totals + Transport
        // Transport is added only at invoice level, not distributed to items
        return this.roundToTwoDecimals(sumOfItemTotals + shipping);
      }
    },
    // Calculate number of items
    numberOfItems: function numberOfItems() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return 0;
      }
      return this.form.selectedProducts.length;
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
      // Block form submission if discount exceeds total
      if (this.isDiscountExceedingTotal) {
        return false;
      }
      var basicRequirements = this.hasChartOfAccount && this.allProductsHaveSalesAccounts && this.hasBankAccountChartOfAccount && this.form.selectedProducts && this.form.selectedProducts.length > 0;

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
    },
    // Check payment fields visibility conditions
    paymentFieldsVisible: function paymentFieldsVisible() {
      return this.form.addPayment == 1;
    },
    // Check if there are any products with insufficient stock
    hasInsufficientStock: function hasInsufficientStock() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return false;
      }
      return this.form.selectedProducts.some(function (item) {
        return item.itemType === 'product' && Number(item.inventoryCount) < Number(item.qty);
      });
    },
    // Get products with insufficient stock
    insufficientStockProducts: function insufficientStockProducts() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        return [];
      }
      return this.form.selectedProducts.filter(function (item) {
        return item.itemType === 'product' && Number(item.inventoryCount) < Number(item.qty);
      });
    }
  }),
  watch: _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
    // Watch for changes in addPayment to reset account when payment is disabled
    'form.addPayment': {
      handler: function handler(newVal, oldVal) {
        if (newVal != 1 && oldVal == 1) {
          // Payment was disabled, reset account selection
          this.form.account = "";
          this.clearFieldError('account');
          this.clearFieldError('paidAmount');
          this.clearFieldError('chequeNo');
          this.clearFieldError('receiptNo');
        }
      }
    },
    // Watch for changes in discount to reset payment fields when discount changes
    'form.discount': {
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal && this.form.addPayment == 1 && !this.isSubmitting) {
          // Only clear errors, don't reset the actual values
          this.clearFieldError('paidAmount');
        }
      }
    },
    // Watch for changes in transport cost to reset payment fields when transport cost changes
    'form.transportCost': {
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal && this.form.addPayment == 1 && !this.isSubmitting) {
          // Only clear errors, don't reset the actual values
          this.clearFieldError('paidAmount');
        }
        // Recalculate totals when transport cost changes
        if (newVal !== oldVal) {
          this.calculateSum();
        }
      }
    },
    // Watch for changes in transport taxability to recalculate totals
    'form.transportIsTaxable': {
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          // Recalculate all items and totals when transport taxability changes
          this.calculateSum();
        }
      }
    },
    // Watch for changes in order tax to reset payment fields when order tax changes
    'form.orderTax': {
      handler: function handler(newVal, oldVal) {
        var _this = this;
        if (newVal !== oldVal && this.form.addPayment == 1 && !this.isSubmitting) {
          // Only clear errors, don't reset the actual values
          this.clearFieldError('paidAmount');
        } else if (newVal !== oldVal && this.form.selectedProducts && this.form.selectedProducts.length > 0) {
          // Update all products that don't have a specific VAT rate selected
          this.form.selectedProducts.forEach(function (item, index) {
            if (!item.selectedVatRate || item.selectedVatRate.id === (oldVal === null || oldVal === void 0 ? void 0 : oldVal.id)) {
              item.selectedVatRate = newVal;
              _this.generateItemTotalPrice(index);
            }
          });
          this.calculateSum();
        }
      },
      deep: true
    },
    // Watch for changes in discount type to reset payment fields when discount type changes
    'form.discountType': {
      handler: function handler(newVal, oldVal) {
        if (newVal !== oldVal && this.form.addPayment == 1 && !this.isSubmitting) {
          // Only clear errors, don't reset the actual values
          this.clearFieldError('paidAmount');
        }
      }
    }
  }, "form.discountType", {
    handler: function handler(newVal) {
      if (newVal !== null && newVal !== undefined) {
        // Sync discountType to discount_type (0 = fixed, 1 = percentage)
        var newDiscountType = newVal == 1 ? 'percentage' : 'fixed';
        if (this.form.discount_type !== newDiscountType) {
          this.form.discount_type = newDiscountType;
        }
      }
    },
    immediate: true
  }), "form.discount", {
    handler: function handler(newVal) {
      if (newVal !== null && newVal !== undefined) {
        // Sync discount to discount_value
        var newDiscountValue = parseFloat(newVal) || 0;
        if (this.form.discount_value !== newDiscountValue) {
          this.form.discount_value = newDiscountValue;
        }
      }
    },
    immediate: true
  }), 'form.selectedProducts', {
    handler: function handler(newVal, oldVal) {
      if (newVal !== oldVal && this.form.addPayment == 1 && !this.isSubmitting) {
        // Only clear errors, don't reset the actual values
        this.clearFieldError('paidAmount');
      }

      // Update reactive totals when products change
      this.updateReactiveTotals();
    },
    deep: true
  }), 'form.client', {
    handler: function handler(newVal, oldVal) {
      if (newVal !== oldVal && this.form.addPayment == 1 && !this.isSubmitting) {
        // Only clear errors, don't reset the actual values
        this.clearFieldError('paidAmount');
      }
    },
    deep: true
  }), 'form.account', {
    handler: function handler(newVal, oldVal) {
      if (newVal && this.form.addPayment == 1) {
        this.clearFieldError('account');
      }
    }
  }), 'form.paidAmount', {
    handler: function handler(newVal, oldVal) {
      if (newVal && Number(newVal) > 0 && this.form.addPayment == 1) {
        this.clearFieldError('paidAmount');
      }
    }
  }), "items", {
    handler: function handler(newItems, oldItems) {
      var _newItems$,
        _oldItems$,
        _this2 = this;
      if (!newItems || newItems.length === 0) return;

      // Skip if items haven't actually changed (prevent infinite loop)
      if (oldItems && newItems.length === oldItems.length && ((_newItems$ = newItems[0]) === null || _newItems$ === void 0 ? void 0 : _newItems$.id) === ((_oldItems$ = oldItems[0]) === null || _oldItems$ === void 0 ? void 0 : _oldItems$.id)) {
        return;
      }

      // Check if items are actually clients
      var firstItem = newItems[0];
      if (firstItem && _typeof(firstItem) === 'object') {
        var hasClientProperties = firstItem.hasOwnProperty('clientTotalAdvance') || firstItem.hasOwnProperty('email') || firstItem.hasOwnProperty('phone');
        var hasCategoryProperties = firstItem.hasOwnProperty('sub_categories');

        // If items look like categories instead of clients, reload clients
        if (hasCategoryProperties && !hasClientProperties) {
          console.warn('Detected categories in items instead of clients, reloading clients...');
          // Use a flag to prevent infinite loop
          if (!this._reloadingClients) {
            this._reloadingClients = true;
            this.getClients()["finally"](function () {
              _this2._reloadingClients = false;
            });
          }
        } else if (hasClientProperties && !this.form.client) {
          // If items are clients and no client is selected, select default client
          this.$nextTick(function () {
            var items = _this2.items || [];
            if (items.length > 0) {
              _this2.selectDefaultClient();
            }
          });
        }
      }
    },
    immediate: false
  }),
  created: function created() {
    this.getClients();
    this.getProducts();
    this.getAccounts();
    this.getTaxes();
    this.getCostCenters();
    this.getEmployees();
    this.getBranches();
    this.loadCommunicationConfigStatus();
    this.prefix = this.appInfo.productPrefix;
    this.ensureDiscountProperties();
  },
  mounted: function mounted() {
    var _this3 = this;
    // Set up global error handling
    this.setupGlobalErrorHandling();
    // Load temporary data
    this.loadTemporaryData();

    // Initialize current date with today's date (if not loaded from temporary data)
    if (!this.form.current_date) {
      this.form.current_date = new Date().toISOString().slice(0, 10);
    }

    // Set default cashier after temporary data is loaded (if not already set)
    this.$nextTick(function () {
      _this3.setDefaultCashier();
    });

    // Ensure default client is selected after everything is loaded
    this.$nextTick(function () {
      var items = _this3.items || [];
      if (!_this3.form.client && items.length > 0) {
        _this3.selectDefaultClient();
      } else if (items.length === 0) {
        // If items are not loaded yet, try again after a short delay
        setTimeout(function () {
          var retryItems = _this3.items || [];
          if (!_this3.form.client && retryItems.length > 0) {
            _this3.selectDefaultClient();
          }
        }, 500);
      }
    });

    // Ensure VAT calculations are up to date after component is mounted
    this.$nextTick(function () {
      if (_this3.form.selectedProducts && _this3.form.selectedProducts.length > 0) {
        _this3.form.selectedProducts.forEach(function (item, index) {
          _this3.generateItemTotalPrice(index);
        });
        _this3.calculateSum();
      }

      // Initialize reactive totals
      _this3.updateReactiveTotals();
    });
  },
  // Persist form state when navigating away (e.g., to adjustments page) so it's restored on return
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    try {
      // Only persist when going to inventory adjustments create page
      if (to && to.name === 'adjustments.create') {
        this.saveTemporary();
      } else {
        // For any other navigation, ensure temp is cleared so data doesn't persist
        this.clearTemporaryData();
      }
    } catch (e) {
      // no-op
    }
    next();
  },
  beforeDestroy: function beforeDestroy() {
    // Clean up global error handlers
    this.cleanupGlobalErrorHandling();
  },
  methods: {
    // Debug helpers
    logDebug: function logDebug(label, payload) {
      try {
        // Toggle with window.__INVOICE_DEBUG (true by default)
        if (typeof window === 'undefined' || window.__INVOICE_DEBUG === false) return;
        console.log("[InvoiceCreate] ".concat(label), payload);
      } catch (e) {}
    },
    debugBreak: function debugBreak() {
      try {
        if (typeof window !== 'undefined' && window.__INVOICE_DEBUGGER) {
          debugger; // eslint-disable-line no-debugger
        }
      } catch (e) {}
    },
    // Load communication configuration status
    loadCommunicationConfigStatus: function loadCommunicationConfigStatus() {
      var _this4 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              _this4.communicationConfig.loading = true;
              _context.n = 1;
              return axios_default().get('/api/communication-config-status');
            case 1:
              response = _context.v;
              _this4.communicationConfig.email_configured = response.data.email_configured;
              _this4.communicationConfig.sms_configured = response.data.sms_configured;
              _this4.communicationConfig.loading = false;
              _context.n = 3;
              break;
            case 2:
              _context.p = 2;
              _t = _context.v;
              console.error('Error loading communication config status:', _t);
              // Default to false if there's an error
              _this4.communicationConfig.email_configured = false;
              _this4.communicationConfig.sms_configured = false;
              _this4.communicationConfig.loading = false;
            case 3:
              return _context.a(2);
          }
        }, _callee, null, [[0, 2]]);
      }))();
    },
    // get all clients
    getClients: function getClients() {
      var _arguments = arguments,
        _this5 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var selectedClient, currentItems, areClients, finalItems, walkingCustomerExists, retryCount, maxRetries, defaultClientSlug, defaultClient, walkingCustomer, _error$response, _error$response2, _error$config, _error$response3, _error$response4, _error$response5, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              selectedClient = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : 'default';
              _context2.p = 1;
              console.log('[Invoice] Fetching clients from API...');
              _context2.n = 2;
              return _this5.$store.dispatch("operations/allData", {
                path: "/api/all-clients"
              });
            case 2:
              _context2.n = 3;
              return _this5.$nextTick();
            case 3:
              // Verify that items are actually clients (not categories or other data)
              // Clients should have properties like 'name', 'slug', and typically 'clientTotalAdvance' or 'email'
              // Categories would have different structure (e.g., 'sub_categories', 'note' as category-specific)
              currentItems = _this5.items || [];
              console.log("[Invoice] Loaded ".concat(currentItems.length, " items from store"));

              // Check if items look like clients
              // Clients typically have: name, slug, and may have clientTotalAdvance, email, phone
              // Categories typically have: name, slug, but may have sub_categories or different structure
              areClients = currentItems.length === 0 || currentItems.some(function (item) {
                if (!item || _typeof(item) !== 'object') return false;

                // Check for client-specific properties
                var hasClientProperties = item.hasOwnProperty('clientTotalAdvance') || item.hasOwnProperty('email') || item.hasOwnProperty('phone') || item.hasOwnProperty('address');

                // Check that it doesn't have category-specific properties
                var hasCategoryProperties = item.hasOwnProperty('sub_categories') || item.note && typeof item.note === 'string' && item.note.length > 100;

                // If it has client properties and not category properties, it's likely a client
                return item.name && item.slug && (hasClientProperties || !hasCategoryProperties);
              });
              if (!(!areClients && currentItems.length > 0)) {
                _context2.n = 5;
                break;
              }
              // If items don't look like clients, force reload
              console.warn('[Invoice] Items do not appear to be clients, force reloading clients...');
              // Clear the store first
              _this5.$store.commit('operations/FETCH_DATA', {
                items: {
                  data: []
                },
                loading: false
              });
              // Then reload
              _context2.n = 4;
              return _this5.$store.dispatch("operations/allData", {
                path: "/api/all-clients"
              });
            case 4:
              _context2.n = 5;
              return _this5.$nextTick();
            case 5:
              // Don't return early - allow the dropdown to show even if empty
              // The default selection will happen below if items exist
              // Get fresh items after potential reload
              finalItems = _this5.items || [];
              console.log("[Invoice] Final items count: ".concat(finalItems.length));

              // Check if Walking Customer exists in the list
              walkingCustomerExists = finalItems.some(function (item) {
                return item.slug === 'walking-customer';
              });
              if (!walkingCustomerExists && finalItems.length > 0) {
                console.warn('[Invoice] ⚠️ Walking Customer not found in clients list!');
                console.warn('[Invoice] Available client slugs:', finalItems.map(function (c) {
                  return c.slug;
                }).join(', '));
              } else if (walkingCustomerExists) {
                console.log('[Invoice] ✅ Walking Customer found in clients list');
              }

              // If explicitly requesting latest (e.g., after creating a client)
              if (!(selectedClient === 'latest')) {
                _context2.n = 6;
                break;
              }
              if (finalItems.length > 0) {
                _this5.form.client = finalItems[0];
                console.log('[Invoice] Selected latest client:', finalItems[0].name);
              }
              return _context2.a(2);
            case 6:
              if (!(_this5.form.client && (_this5.form.client.id || _this5.form.client.slug))) {
                _context2.n = 7;
                break;
              }
              console.log('[Invoice] Client already selected, normalizing selection');
              _this5.normalizeClientSelection();
              return _context2.a(2);
            case 7:
              if (!(finalItems.length > 0)) {
                _context2.n = 12;
                break;
              }
              // Wait for appInfo to be available
              retryCount = 0;
              maxRetries = 10;
            case 8:
              if (!(!_this5.appInfo && retryCount < maxRetries)) {
                _context2.n = 11;
                break;
              }
              _context2.n = 9;
              return _this5.$nextTick();
            case 9:
              _context2.n = 10;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 100);
              });
            case 10:
              retryCount++;
              _context2.n = 8;
              break;
            case 11:
              // Try to get default client slug from appInfo, fallback to 'walking-customer'
              defaultClientSlug = _this5.appInfo && _this5.appInfo.defaultClientSlug ? _this5.appInfo.defaultClientSlug : 'walking-customer';
              console.log("[Invoice] Looking for default client with slug: ".concat(defaultClientSlug));
              defaultClient = finalItems.find(function (item) {
                return item.slug === defaultClientSlug;
              });
              if (defaultClient) {
                _this5.form.client = defaultClient;
                console.log("[Invoice] \u2705 Selected default client: ".concat(defaultClient.name, " (").concat(defaultClient.slug, ")"));
              } else {
                // Fallback to Walking Customer if default client not found
                console.warn("[Invoice] Default client (".concat(defaultClientSlug, ") not found, trying Walking Customer..."));
                walkingCustomer = finalItems.find(function (item) {
                  return item.slug === 'walking-customer';
                });
                if (walkingCustomer) {
                  _this5.form.client = walkingCustomer;
                  console.log("[Invoice] \u2705 Selected Walking Customer as fallback: ".concat(walkingCustomer.name));
                } else {
                  // Last resort: select first available client
                  console.warn('[Invoice] ⚠️ Walking Customer not found! Selecting first available client.');
                  if (finalItems.length > 0) {
                    _this5.form.client = finalItems[0];
                    console.log("[Invoice] Selected first available client: ".concat(finalItems[0].name));
                  } else {
                    console.error('[Invoice] ❌ No clients available in the list!');
                  }
                }
              }
              _context2.n = 13;
              break;
            case 12:
              console.error('[Invoice] ❌ No clients loaded from API!');
            case 13:
              _context2.n = 15;
              break;
            case 14:
              _context2.p = 14;
              _t2 = _context2.v;
              console.error('[Invoice] ❌ Error getting clients:', _t2);
              console.error('[Invoice] Error details:', {
                message: _t2.message,
                response: (_error$response = _t2.response) === null || _error$response === void 0 ? void 0 : _error$response.data,
                status: (_error$response2 = _t2.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.status,
                url: (_error$config = _t2.config) === null || _error$config === void 0 ? void 0 : _error$config.url
              });

              // Show error toast for client loading failures
              if (((_error$response3 = _t2.response) === null || _error$response3 === void 0 ? void 0 : _error$response3.status) === 401) {
                toast.fire({
                  type: "error",
                  title: _this5.$t("Authentication Error"),
                  text: _this5.$t("You are not authorized to view clients. Please log in again."),
                  timer: 5000,
                  timerProgressBar: true
                });
              } else if (((_error$response4 = _t2.response) === null || _error$response4 === void 0 ? void 0 : _error$response4.status) === 403) {
                toast.fire({
                  type: "error",
                  title: _this5.$t("Permission Error"),
                  text: _this5.$t("You don't have permission to view clients."),
                  timer: 5000,
                  timerProgressBar: true
                });
              } else if (((_error$response5 = _t2.response) === null || _error$response5 === void 0 ? void 0 : _error$response5.status) >= 500) {
                toast.fire({
                  type: "error",
                  title: _this5.$t("Server Error"),
                  text: _this5.$t("Unable to load clients. Please try again later."),
                  timer: 5000,
                  timerProgressBar: true
                });
              } else if (_t2.message) {
                toast.fire({
                  type: "error",
                  title: _this5.$t("Client Loading Error"),
                  text: _t2.message,
                  timer: 5000,
                  timerProgressBar: true
                });
              }

              // Set empty array to prevent errors
              _this5.$store.commit('operations/FETCH_DATA', {
                items: {
                  data: []
                },
                loading: false
              });
            case 15:
              _context2.p = 15;
              // Ensure default client is selected after clients are loaded
              _this5.$nextTick(function () {
                var items = _this5.items || [];
                if (!_this5.form.client && items.length > 0) {
                  console.log('[Invoice] Finally block: Selecting default client...');
                  _this5.selectDefaultClient();
                } else if (items.length === 0) {
                  console.warn('[Invoice] Finally block: No clients available to select');
                } else if (_this5.form.client) {
                  console.log("[Invoice] Finally block: Client already selected: ".concat(_this5.form.client.name));
                }
              });
              return _context2.f(15);
            case 16:
              return _context2.a(2);
          }
        }, _callee2, null, [[1, 14, 15, 16]]);
      }))();
    },
    // get products
    getProducts: function getProducts() {
      var _this6 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$axios$get, data, _error$response6, _error$response7, _error$response8, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return axios_default().get(window.location.origin + "/api/all-products");
            case 1:
              _yield$axios$get = _context3.v;
              data = _yield$axios$get.data;
              _this6.products = data.data || [];
              _this6.products.sort(_this6.sortProducts);
              // After products are loaded/refreshed, sync inventory for selected items
              if (_this6.form.selectedProducts && _this6.form.selectedProducts.length > 0) {
                _this6.refreshSelectedProductsInventory();
              }
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t3 = _context3.v;
              console.error('Error getting products:', _t3);

              // Show error toast for product loading failures
              if (((_error$response6 = _t3.response) === null || _error$response6 === void 0 ? void 0 : _error$response6.status) === 401) {
                toast.fire({
                  type: "error",
                  title: _this6.$t("Authentication Error"),
                  text: _this6.$t("You are not authorized to view products. Please log in again."),
                  timer: 5000,
                  timerProgressBar: true
                });
              } else if (((_error$response7 = _t3.response) === null || _error$response7 === void 0 ? void 0 : _error$response7.status) === 403) {
                toast.fire({
                  type: "error",
                  title: _this6.$t("Permission Error"),
                  text: _this6.$t("You don't have permission to view products."),
                  timer: 5000,
                  timerProgressBar: true
                });
              } else if (((_error$response8 = _t3.response) === null || _error$response8 === void 0 ? void 0 : _error$response8.status) >= 500) {
                toast.fire({
                  type: "error",
                  title: _this6.$t("Server Error"),
                  text: _this6.$t("Unable to load products. Please try again later."),
                  timer: 5000,
                  timerProgressBar: true
                });
              } else if (_t3.message) {
                toast.fire({
                  type: "error",
                  title: _this6.$t("Product Loading Error"),
                  text: _t3.message,
                  timer: 5000,
                  timerProgressBar: true
                });
              }
            case 3:
              return _context3.a(2);
          }
        }, _callee3, null, [[0, 2]]);
      }))();
    },
    // Select default client (Walking Customer)
    selectDefaultClient: function selectDefaultClient() {
      var items = this.items || [];
      if (items.length === 0) {
        console.warn('[Invoice] selectDefaultClient: No clients available');
        return;
      }

      // Skip if client is already selected
      if (this.form.client && (this.form.client.id || this.form.client.slug)) {
        console.log("[Invoice] selectDefaultClient: Client already selected: ".concat(this.form.client.name || this.form.client.slug));
        return;
      }

      // Wait for appInfo to be available (with timeout)
      var appInfoReady = false;
      var retryCount = 0;
      var maxRetries = 10;
      while (!this.appInfo && retryCount < maxRetries) {
        this.$nextTick();
        retryCount++;
        if (retryCount >= maxRetries) {
          console.warn('[Invoice] selectDefaultClient: appInfo not available after retries, using fallback');
          break;
        }
      }

      // Try to get default client slug from appInfo, fallback to 'walking-customer'
      var defaultClientSlug = this.appInfo && this.appInfo.defaultClientSlug ? this.appInfo.defaultClientSlug : 'walking-customer';
      console.log("[Invoice] selectDefaultClient: Looking for client with slug: ".concat(defaultClientSlug));
      console.log("[Invoice] selectDefaultClient: Available slugs: ".concat(items.map(function (c) {
        return c.slug;
      }).join(', ')));
      var defaultClient = items.find(function (item) {
        return item.slug === defaultClientSlug;
      });
      if (defaultClient) {
        this.form.client = defaultClient;
        console.log("[Invoice] selectDefaultClient: \u2705 Selected default client: ".concat(defaultClient.name, " (").concat(defaultClient.slug, ")"));
        return;
      }

      // Fallback to Walking Customer if default client not found
      console.warn("[Invoice] selectDefaultClient: Default client (".concat(defaultClientSlug, ") not found, trying Walking Customer..."));
      var walkingCustomer = items.find(function (item) {
        return item.slug === 'walking-customer';
      });
      if (walkingCustomer) {
        this.form.client = walkingCustomer;
        console.log("[Invoice] selectDefaultClient: \u2705 Selected Walking Customer: ".concat(walkingCustomer.name));
        return;
      }

      // Last resort: select first available client
      console.warn('[Invoice] selectDefaultClient: ⚠️ Walking Customer not found! Selecting first available client.');
      if (items.length > 0) {
        this.form.client = items[0];
        console.log("[Invoice] selectDefaultClient: Selected first client: ".concat(items[0].name, " (").concat(items[0].slug, ")"));
      } else {
        console.error('[Invoice] selectDefaultClient: ❌ No clients available!');
      }
    },
    // handle newly created product
    handleProductCreated: function handleProductCreated(newProduct) {
      // Add the new product to the products list
      this.products.unshift(newProduct);
      this.products.sort(this.sortProducts);

      // Automatically select the newly created product
      this.form.product = newProduct;

      // Automatically add it to the selected products list
      this.storeProduct(newProduct);

      // Show success message
      // this.$toast.success(this.$t("Product created and added to invoice successfully!"));
    },
    // edit product
    editProduct: function editProduct() {
      // Check if any product is selected
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        // Show message that no product is selected
        toast.fire({
          type: "warning",
          title: this.$t("No Product Selected"),
          text: this.$t("Please select a product first to edit")
        });
        return;
      }

      // Check if the modal component is available
      if (!this.$refs.productEditModal) {
        console.error('ProductEditModal component not found');
        toast.fire({
          type: "error",
          title: this.$t("Error"),
          text: this.$t("Edit modal not available. Please refresh the page.")
        });
        return;
      }

      // Open the product edit modal with the first selected product
      this.$refs.productEditModal.openModal(this.form.selectedProducts[0]);
    },
    // edit product from table row
    editProductFromTable: function editProductFromTable(product) {
      // Check if the modal component is available
      if (!this.$refs.productEditModal) {
        console.error('ProductEditModal component not found');
        toast.fire({
          type: "error",
          title: this.$t("Error"),
          text: this.$t("Edit modal not available. Please refresh the page.")
        });
        return;
      }

      // Open the product edit modal with the specific product from the table
      this.$refs.productEditModal.openModal(product);
    },
    // handle product updated event
    handleProductUpdated: function handleProductUpdated(eventData) {
      var originalProduct = eventData.originalProduct,
        updatedData = eventData.updatedData;
      console.log('Product updated event received:', eventData);

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
        console.log('Updated product in selectedProducts array:', updatedProduct);

        // Recalculate totals
        this.calculateTotal();
      } else {
        console.warn('Could not find product to update in selectedProducts array');
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
        console.log('Updated product in main products array:', updatedMainProduct);
      }
    },
    // sort products
    sortProducts: function sortProducts(a, b) {
      if (Number(a.code) < Number(b.code)) {
        return -1;
      }
      if (Number(a.code) > Number(b.code)) {
        return 1;
      }
      return 0;
    },
    // get accounts
    getAccounts: function getAccounts() {
      var _this7 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var _yield$axios$get2, data, defaultAccountSlug, _error$response9, _error$response0, _error$response1, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return axios_default().get(window.location.origin + "/api/all-accounts");
            case 1:
              _yield$axios$get2 = _context4.v;
              data = _yield$axios$get2.data;
              _this7.accounts = data.data || [];
              // assign default account
              if (_this7.accounts && _this7.accounts.length > 0) {
                defaultAccountSlug = _this7.appInfo.defaultAccountSlug;
                _this7.form.account = _this7.accounts.find(function (item) {
                  return item.slug === defaultAccountSlug;
                });
              }
              _context4.n = 3;
              break;
            case 2:
              _context4.p = 2;
              _t4 = _context4.v;
              console.error('Error getting accounts:', _t4);

              // Show error toast for account loading failures
              if (((_error$response9 = _t4.response) === null || _error$response9 === void 0 ? void 0 : _error$response9.status) === 401) {
                toast.fire({
                  type: "error",
                  title: _this7.$t("Authentication Error"),
                  text: _this7.$t("You are not authorized to view accounts. Please log in again."),
                  timer: 5000,
                  timerProgressBar: true
                });
              } else if (((_error$response0 = _t4.response) === null || _error$response0 === void 0 ? void 0 : _error$response0.status) === 403) {
                toast.fire({
                  type: "error",
                  title: _this7.$t("Permission Error"),
                  text: _this7.$t("You don't have permission to view accounts."),
                  timer: 5000,
                  timerProgressBar: true
                });
              } else if (((_error$response1 = _t4.response) === null || _error$response1 === void 0 ? void 0 : _error$response1.status) >= 500) {
                toast.fire({
                  type: "error",
                  title: _this7.$t("Server Error"),
                  text: _this7.$t("Unable to load accounts. Please try again later."),
                  timer: 5000,
                  timerProgressBar: true
                });
              } else if (_t4.message) {
                toast.fire({
                  type: "error",
                  title: _this7.$t("Account Loading Error"),
                  text: _t4.message,
                  timer: 5000,
                  timerProgressBar: true
                });
              }
            case 3:
              return _context4.a(2);
          }
        }, _callee4, null, [[0, 2]]);
      }))();
    },
    // get taxes
    // get all cost centers
    getCostCenters: function getCostCenters() {
      var _this8 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var _yield$axios$get3, data, _t5;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              _context5.n = 1;
              return axios_default().get(window.location.origin + "/api/cost-centers");
            case 1:
              _yield$axios$get3 = _context5.v;
              data = _yield$axios$get3.data;
              // Handle paginated response
              if (data.data && Array.isArray(data.data)) {
                _this8.costCenters = data.data;
              } else if (Array.isArray(data)) {
                _this8.costCenters = data;
              } else {
                _this8.costCenters = [];
              }
              _context5.n = 3;
              break;
            case 2:
              _context5.p = 2;
              _t5 = _context5.v;
              console.error('Error getting cost centers:', _t5);
              _this8.costCenters = [];
            case 3:
              return _context5.a(2);
          }
        }, _callee5, null, [[0, 2]]);
      }))();
    },
    // handle cost center change
    onCostCenterChange: function onCostCenterChange(costCenter) {
      if (costCenter && costCenter.id) {
        this.form.cost_center_id = costCenter.id;
      } else {
        this.form.cost_center_id = null;
      }
      this.clearFieldError('cost_center_id');
    },
    // handle sale status change
    onSaleStatusChange: function onSaleStatusChange() {
      this.form.sale_status = this.form.saleStatus;
      this.clearFieldError('sale_status');
    },
    // get all employees
    getEmployees: function getEmployees() {
      var _this9 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var _yield$axios$get4, data, _t6;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _context6.p = 0;
              _context6.n = 1;
              return axios_default().get(window.location.origin + "/api/all-employees");
            case 1:
              _yield$axios$get4 = _context6.v;
              data = _yield$axios$get4.data;
              // Handle response
              if (data.data && Array.isArray(data.data)) {
                _this9.employees = data.data;
              } else if (Array.isArray(data)) {
                _this9.employees = data;
              } else {
                _this9.employees = [];
              }

              // Load all employees in both dropdowns regardless of roles or permissions
              _this9.representatives = _this9.employees;
              _this9.cashiers = _this9.employees;

              // Set default cashier to currently logged-in user
              _this9.setDefaultCashier();
              _context6.n = 3;
              break;
            case 2:
              _context6.p = 2;
              _t6 = _context6.v;
              console.error('Error getting employees:', _t6);
              _this9.employees = [];
              _this9.representatives = [];
              _this9.cashiers = [];
            case 3:
              return _context6.a(2);
          }
        }, _callee6, null, [[0, 2]]);
      }))();
    },
    // Set default cashier to currently logged-in user
    setDefaultCashier: function setDefaultCashier() {
      // Only set default if cashier is not already set
      if (this.form.cashier && this.form.cashier.id) {
        return;
      }
      var user = this.$store.getters['auth/user'];
      if (!user || !user.id) {
        return;
      }

      // Find employee that matches the logged-in user
      var currentUserEmployee = this.employees.find(function (emp) {
        return emp.user && emp.user.id === user.id;
      });
      if (currentUserEmployee) {
        this.form.cashier = currentUserEmployee;
        this.form.cashier_id = currentUserEmployee.id;
      }
    },
    // handle representative change
    onRepresentativeChange: function onRepresentativeChange(representative) {
      if (representative && representative.id) {
        this.form.representative_id = representative.id;
      } else {
        this.form.representative_id = null;
      }
      this.clearFieldError('representative_id');
    },
    // handle cashier change
    onCashierChange: function onCashierChange(cashier) {
      if (cashier && cashier.id) {
        this.form.cashier_id = cashier.id;
      } else {
        this.form.cashier_id = null;
      }
      this.clearFieldError('cashier_id');
    },
    getBranches: function getBranches() {
      var _this0 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
        var user, isSuperAdmin, branchesData, _yield$axios$get5, data, _yield$axios$get6, _data, _yield$axios$get7, _data2, _t7, _t8;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              _context7.p = 0;
              user = _this0.$store.getters['auth/user'];
              isSuperAdmin = user && Number(user.account_role) === 1;
              branchesData = [];
              if (!isSuperAdmin) {
                _context7.n = 2;
                break;
              }
              _context7.n = 1;
              return axios_default().get('/api/branches');
            case 1:
              _yield$axios$get5 = _context7.v;
              data = _yield$axios$get5.data;
              if (data && data.data && Array.isArray(data.data)) {
                branchesData = data.data;
              } else if (Array.isArray(data)) {
                branchesData = data;
              }
              _context7.n = 7;
              break;
            case 2:
              if (!(user && user.id)) {
                _context7.n = 7;
                break;
              }
              _context7.p = 3;
              _context7.n = 4;
              return axios_default().get("/api/users/".concat(user.id, "/branches"));
            case 4:
              _yield$axios$get6 = _context7.v;
              _data = _yield$axios$get6.data;
              if (Array.isArray(_data)) {
                branchesData = _data;
              } else if (_data && Array.isArray(_data.data)) {
                branchesData = _data.data;
              }
              _context7.n = 7;
              break;
            case 5:
              _context7.p = 5;
              _t7 = _context7.v;
              _context7.n = 6;
              return axios_default().get('/api/branches');
            case 6:
              _yield$axios$get7 = _context7.v;
              _data2 = _yield$axios$get7.data;
              if (_data2 && _data2.data && Array.isArray(_data2.data)) {
                branchesData = _data2.data;
              }
            case 7:
              // Ensure branches have name property for display
              _this0.branches = branchesData.map(function (branch) {
                return _objectSpread({
                  id: branch.id,
                  name: branch.name || branch.label || "Branch ".concat(branch.id),
                  slug: branch.slug,
                  code: branch.code
                }, branch);
              });
              _context7.n = 9;
              break;
            case 8:
              _context7.p = 8;
              _t8 = _context7.v;
              console.error('Error getting branches:', _t8);
              _this0.branches = [];
            case 9:
              return _context7.a(2);
          }
        }, _callee7, null, [[3, 5], [0, 8]]);
      }))();
    },
    // handle branch change
    onBranchChange: function onBranchChange(branch) {
      if (branch && branch.id) {
        this.form.branch_id = branch.id;
      } else {
        this.form.branch_id = null;
      }
      this.clearFieldError('branch_id');
    },
    // handle attachment file change
    onAttachmentChange: function onAttachmentChange(e) {
      var _this1 = this;
      var files = Array.from(e.target.files);
      var validFiles = [];
      files.forEach(function (file) {
        // Check file size (2MB limit)
        if (file.size < 2 * 1024 * 1024) {
          validFiles.push(file);
        } else {
          toast.fire({
            type: "error",
            title: _this1.$t("Error!"),
            text: _this1.$t("Please select a file with size less than 2 MB")
          });
        }
      });
      if (validFiles.length > 0) {
        // Add valid files to attachments array
        this.form.attachments = [].concat(_toConsumableArray(this.form.attachments), validFiles);
      }

      // Reset the input to allow selecting the same file again
      e.target.value = '';
    },
    // remove attachment
    removeAttachment: function removeAttachment(index) {
      this.form.attachments.splice(index, 1);
    },
    // handle payment type change
    onPaymentTypeChange: function onPaymentTypeChange(value) {
      // The v-model already updates form.isPaid
      // Payment will be handled through modal after invoice creation
    },
    // Handle payment modal close
    handlePaymentModalClose: function handlePaymentModalClose() {
      this.showPaymentModal = false;
      // Redirect to invoice show page
      if (this.createdInvoiceData && this.createdInvoiceData.slug) {
        var slug = this.createdInvoiceData.slug;
        this.createdInvoiceData = null;
        this.$router.push({
          name: "invoices.show",
          params: {
            slug: slug
          }
        });
      } else {
        this.createdInvoiceData = null;
      }
    },
    // Handle payment saved
    handlePaymentSaved: function handlePaymentSaved() {
      // Redirect to invoice show page after payment is saved
      if (this.createdInvoiceData && this.createdInvoiceData.slug) {
        this.$router.push({
          name: "invoices.show",
          params: {
            slug: this.createdInvoiceData.slug
          }
        });
      }
    },
    getTaxes: function getTaxes() {
      var _this10 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8() {
        var _yield$axios$get8, data, defaultVatRateSlug, _error$response10, _error$response11, _error$response12, _t9;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              _context8.p = 0;
              _context8.n = 1;
              return axios_default().get(window.location.origin + "/api/all-vat-rates");
            case 1:
              _yield$axios$get8 = _context8.v;
              data = _yield$axios$get8.data;
              _this10.taxes = data.data || [];

              // assign default vat rate
              if (_this10.taxes && _this10.taxes.length > 0) {
                defaultVatRateSlug = _this10.appInfo.defaultVatRateSlug;
                _this10.form.orderTax = _this10.taxes.find(function (tax) {
                  return tax.slug === defaultVatRateSlug;
                }) || _this10.taxes[0]; // Fallback to first available tax if default not found

                // Update any existing products with the default VAT rate if they don't have one
                if (_this10.form.selectedProducts && _this10.form.selectedProducts.length > 0) {
                  _this10.form.selectedProducts.forEach(function (item, index) {
                    if (!item.selectedVatRate) {
                      // First try to use the product's default VAT rate, then fall back to invoice default
                      if (item.productTax) {
                        item.selectedVatRate = _this10.findMatchingVatRate(item.productTax);
                      }

                      // If no match found or no productTax, fall back to invoice default
                      if (!item.selectedVatRate) {
                        item.selectedVatRate = _this10.form.orderTax;
                      }
                      _this10.generateItemTotalPrice(index);
                    }
                  });
                }
              }
              _this10.calculateSum();
              _context8.n = 3;
              break;
            case 2:
              _context8.p = 2;
              _t9 = _context8.v;
              console.error('Error getting taxes:', _t9);

              // Show error toast for tax loading failures
              if (((_error$response10 = _t9.response) === null || _error$response10 === void 0 ? void 0 : _error$response10.status) === 401) {
                toast.fire({
                  type: "error",
                  title: _this10.$t("Authentication Error"),
                  text: _this10.$t("You are not authorized to view tax rates. Please log in again."),
                  timer: 5000,
                  timerProgressBar: true
                });
              } else if (((_error$response11 = _t9.response) === null || _error$response11 === void 0 ? void 0 : _error$response11.status) === 403) {
                toast.fire({
                  type: "error",
                  title: _this10.$t("Permission Error"),
                  text: _this10.$t("You don't have permission to view tax rates."),
                  timer: 5000,
                  timerProgressBar: true
                });
              } else if (((_error$response12 = _t9.response) === null || _error$response12 === void 0 ? void 0 : _error$response12.status) >= 500) {
                toast.fire({
                  type: "error",
                  title: _this10.$t("Server Error"),
                  text: _this10.$t("Unable to load tax rates. Please try again later."),
                  timer: 5000,
                  timerProgressBar: true
                });
              } else if (_t9.message) {
                toast.fire({
                  type: "error",
                  title: _this10.$t("Tax Loading Error"),
                  text: _t9.message,
                  timer: 5000,
                  timerProgressBar: true
                });
              }
            case 3:
              return _context8.a(2);
          }
        }, _callee8, null, [[0, 2]]);
      }))();
    },
    // ensure all products have discount and VAT properties
    ensureDiscountProperties: function ensureDiscountProperties() {
      var _this11 = this;
      this.form.selectedProducts.forEach(function (item) {
        if (typeof item.discount === 'undefined') {
          item.discount = 0;
        }
        if (typeof item.discountType === 'undefined') {
          item.discountType = 'fixed';
        }
        if (typeof item.discountAmount === 'undefined') {
          item.discountAmount = 0;
        }
        if (typeof item.selectedVatRate === 'undefined') {
          // First try to use the product's default VAT rate, then fall back to invoice default
          if (item.productTax) {
            item.selectedVatRate = _this11.findMatchingVatRate(item.productTax);
          }

          // If no match found or no productTax, fall back to invoice default
          if (!item.selectedVatRate) {
            if (_this11.form.orderTax) {
              item.selectedVatRate = _this11.form.orderTax;
            } else if (_this11.taxes && _this11.taxes.length > 0) {
              item.selectedVatRate = _this11.taxes[0];
            }
          }
        }
      });
    },
    // store product
    storeProduct: function storeProduct(product) {
      if (product) {
        var _this$taxes;
        // Skip adding items without a Sales Account
        if (!product.sales_account_id) {
          // Keep it selected in dropdown and show auto-assign UI below
          return;
        }
        // Clear selectedProducts validation errors when adding a product
        this.clearFieldError('selectedProducts');

        // Clear payment field errors when products change (but don't reset addPayment selection)
        this.clearFieldError('account');
        this.clearFieldError('paidAmount');
        this.clearFieldError('chequeNo');
        this.clearFieldError('receiptNo');
        this.form.selectedProducts.unshift({
          id: product.id,
          slug: product.slug,
          name: product.name,
          code: product.code,
          taxType: product.taxType,
          taxRate: product.taxRate,
          qty: 1,
          inventoryCount: product.inventoryCount,
          avgPurchasePrice: product.avgPurchasePrice,
          unitPrice: product.regularPrice,
          unitCost: product.regularPrice,
          totalPrice: product.regularPrice,
          productTax: product.productTax,
          // Store the product's default VAT rate object
          totalTax: 0,
          // Will be calculated below
          totalBeforeDiscount: product.regularPrice,
          // Will be calculated below
          totalAfterDiscount: product.regularPrice,
          // Will be calculated below
          itemType: product.itemType,
          discount: 0,
          discountType: "fixed",
          discountAmount: 0,
          selectedVatRate: this.findMatchingVatRate(product.productTax) || this.form.orderTax || ((_this$taxes = this.taxes) === null || _this$taxes === void 0 ? void 0 : _this$taxes[0]),
          // Use product's default VAT rate, fallback to invoice VAT rate or first available tax
          // Add chart of account information for validation
          sales_account_id: product.sales_account_id,
          purchase_account_id: product.purchase_account_id
        });

        // Calculate initial VAT and totals for the newly added product
        var index = 0; // Since we're adding to the beginning of the array
        this.generateItemTotalPrice(index);
        this.form.product = "";
        this.calculateSum();

        // Update reactive totals
        this.updateReactiveTotals();
      }
    },
    // Handle item change from ItemsTable component
    handleItemChange: function handleItemChange(_ref) {
      var value = _ref.value,
        type = _ref.type,
        index = _ref.index,
        action = _ref.action;
      // Map ItemsTable event format to generateItemTotal method signature
      // ItemsTable: { value, type, index, action }
      // generateItemTotal: (value, field, index, type)
      this.generateItemTotal(value, type, index, action);
    },
    // update array
    generateItemTotal: function generateItemTotal(value, field, index, type) {
      this.debugBreak();
      var item = this.form.selectedProducts[index];
      this.logDebug('generateItemTotal:start', {
        value: value,
        field: field,
        index: index,
        type: type,
        before: item ? JSON.parse(JSON.stringify(item)) : null
      });
      if (item) {
        var updatedItem = _objectSpread({}, item);
        if (type === "increment") {
          if (field === "qty") {
            updatedItem.qty = item.qty + 1;
          } else if (field === "price") {
            updatedItem.unitPrice = this.roundToTwoDecimals(item.unitPrice + 1);
          }
        } else if (type === "decrement") {
          if (field === "qty" && item.qty > 1) {
            updatedItem.qty = item.qty - 1;
          } else if (field === "price" && item.unitPrice > 0) {
            updatedItem.unitPrice = this.roundToTwoDecimals(item.unitPrice - 1);
          }
        } else {
          if (field === "qty") {
            updatedItem.qty = Number(value);
            // Clear quantity validation error when value changes
            this.clearProductErrors(index);
          } else if (field === "price") {
            updatedItem.unitPrice = this.roundToTwoDecimals(Number(value));
            // Clear unit price validation error when value changes
            this.clearProductErrors(index);
          }
        }
        this.logDebug('generateItemTotal:after-mutate', {
          index: index,
          item: JSON.parse(JSON.stringify(updatedItem))
        });

        // Persist row change so Vue updates the row immediately
        this.$set(this.form.selectedProducts, index, updatedItem);

        // Recalculate all amounts (discount, price, tax, total) using unified function
        this.calculateItemAmounts(index);

        // Force update totals row specifically
        this.forceUpdateTotals();
        this.logDebug('generateItemTotal:end', {
          index: index,
          row: JSON.parse(JSON.stringify(this.form.selectedProducts[index]))
        });
      }
    },
    // Helper method to round to 2 decimal places
    roundToTwoDecimals: function roundToTwoDecimals(value) {
      return Math.round((value + Number.EPSILON) * 100) / 100;
    },
    // Format number to display with exactly 2 decimal places
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
    // Calculate all item amounts (discount, price, tax, total) - single function for all calculations
    // Optional second parameter skipRecalculate controls whether to trigger global recalculation (calculateSum)
    // Use skipRecalculate = true when we are already inside a global recomputation to avoid recursive re-entry.
    calculateItemAmounts: function calculateItemAmounts(index) {
      var skipRecalculate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.debugBreak();
      var item = this.form.selectedProducts[index];
      if (!item) {
        return;
      }
      this.logDebug('calculateItemAmounts:start', {
        index: index,
        before: JSON.parse(JSON.stringify(item))
      });

      // Clear validation errors when values change
      this.clearProductErrors(index);

      // Normalize numeric inputs
      var unitPriceNumber = Number(item.unitPrice) || 0;
      var qtyNumber = Number(item.qty) || 0;

      // Calculate total before discount (unit price × quantity)
      var totalBeforeDiscount = this.roundToTwoDecimals(unitPriceNumber * qtyNumber);

      // Calculate product-level discount amount based on type
      var productDiscountAmount = 0;
      if (item.discountType === "percentage") {
        productDiscountAmount = this.roundToTwoDecimals(unitPriceNumber * qtyNumber * (item.discount || 0) / 100);
      } else {
        productDiscountAmount = this.roundToTwoDecimals(Number(item.discount || 0));
      }

      // Ensure product discount amount doesn't exceed the total before discount
      if (productDiscountAmount > totalBeforeDiscount) {
        productDiscountAmount = this.roundToTwoDecimals(totalBeforeDiscount);
      }

      // Get proportional invoice-level discount allocation (if any)
      var proportionalDiscount = item.proportionalDiscountAmount || 0;

      // Total discount = product discount + proportional invoice-level discount
      var discountAmount = this.roundToTwoDecimals(productDiscountAmount + proportionalDiscount);

      // Ensure total discount doesn't exceed the total before discount
      var finalDiscountAmount = discountAmount > totalBeforeDiscount ? this.roundToTwoDecimals(totalBeforeDiscount) : discountAmount;

      // Calculate net total after discount (this is what VAT is calculated on)
      var netTotal = this.roundToTwoDecimals(totalBeforeDiscount - finalDiscountAmount);

      // Get proportional transport cost allocation (if any)
      var proportionalTransport = item.proportionalTransportAmount || 0;

      // Use selected VAT rate if available, otherwise fall back to product's default tax rate
      var vatRate = 0;
      if (item.selectedVatRate && item.selectedVatRate.rate !== undefined && item.selectedVatRate.rate !== null) {
        vatRate = Number(item.selectedVatRate.rate);
      } else if (item.taxRate !== undefined && item.taxRate !== null) {
        vatRate = Number(item.taxRate);
      }

      // Ensure vatRate is a valid number
      if (isNaN(vatRate) || vatRate < 0) {
        vatRate = 0;
      }

      // Ensure the selectedVatRate is properly set for VAT calculations
      var updatedItem = _objectSpread({}, item);
      if (!updatedItem.selectedVatRate && vatRate > 0) {
        // First try to use the product's default VAT rate, then fall back to available taxes
        if (updatedItem.productTax) {
          updatedItem.selectedVatRate = this.findMatchingVatRate(updatedItem.productTax);
        }

        // If no match found or no productTax, fall back to available taxes
        if (!updatedItem.selectedVatRate && this.taxes && this.taxes.length > 0) {
          updatedItem.selectedVatRate = this.taxes[0];
        }
      }

      // Calculate VAT base depending on transport taxability
      // CRITICAL: When transport is non-taxable, it must NOT affect item-level calculations
      // If transport is taxable: VAT base = netTotal + proportionalTransport
      // If transport is non-taxable: VAT base = netTotal (transport EXCLUDED from item calculations)
      // Use form.transportIsTaxable to respect user's choice (defaults to true for backward compatibility)
      var isTransportTaxable = this.form.transportIsTaxable !== false; // Default to true if not set

      // When transport is non-taxable, proportionalTransport should be 0 (not distributed)
      // But we explicitly exclude it to ensure clean calculation
      var transportForVatBase = isTransportTaxable ? proportionalTransport : 0;
      var vatBase = this.roundToTwoDecimals(netTotal + transportForVatBase);

      // Calculate tax and total based on tax type
      var productTax, totalTax, totalPrice;

      // Default to Exclusive if taxType is not explicitly "Inclusive"
      var isInclusive = item.taxType === "Inclusive";
      if (!isInclusive) {
        // VAT on vatBase (which includes transport only if transport is taxable)
        productTax = this.roundToTwoDecimals(vatBase * (vatRate / 100));
        totalTax = this.roundToTwoDecimals(productTax);
        // Total after VAT = vatBase + VAT
        totalPrice = this.roundToTwoDecimals(vatBase + totalTax);
      } else {
        // Inclusive: VAT is included in unit price; derive VAT from net_total
        var netUnitPrice = this.roundToTwoDecimals(qtyNumber > 0 ? netTotal / qtyNumber : 0);
        productTax = this.roundToTwoDecimals(netUnitPrice - netUnitPrice / (1 + vatRate / 100));
        totalTax = this.roundToTwoDecimals(productTax * qtyNumber);
        // Total after VAT = net_total (VAT already included, transport added at invoice level only if non-taxable)
        totalPrice = this.roundToTwoDecimals(netTotal);
      }

      // CRITICAL: When transport is non-taxable, it must NOT be included in item totals
      // Transport is only added at the invoice level (grand total) when non-taxable
      // If transport is taxable: Total = vatBase + VAT (transport already included in vatBase)
      // If transport is non-taxable: Total = vatBase + VAT (transport NOT included, added at invoice level only)
      if (!isTransportTaxable) {
        // Transport is non-taxable: EXCLUDE it from item total
        // Item total = itemAfterDiscount + itemVAT (transport added only at invoice grand total)
        // Note: vatBase already excludes transport when non-taxable, so totalPrice is correct
      }

      // Create updated item with all calculated values
      updatedItem = _objectSpread(_objectSpread({}, updatedItem), {}, {
        discountAmount: finalDiscountAmount,
        productDiscountAmount: productDiscountAmount,
        // Store product-level discount separately
        proportionalDiscountAmount: proportionalDiscount,
        // Store proportional discount separately
        proportionalTransportAmount: proportionalTransport,
        // Store proportional transport separately (for reporting only)
        totalBeforeDiscount: totalBeforeDiscount,
        // Net total after discount (before VAT, before transport)
        // Note: shipping share is stored separately in proportionalTransportAmount
        totalAfterDiscount: netTotal,
        // Net total after discount (this is what VAT is calculated on, together with shipping share)
        netTotal: netTotal,
        productTax: productTax,
        totalTax: totalTax,
        totalPrice: totalPrice // Total after VAT (transport added at invoice level)
      });

      // Use Vue.set to ensure reactivity
      this.$set(this.form.selectedProducts, index, updatedItem);

      // Recalculate sum and update reactive totals (unless we are already in a global recomputation)
      if (!skipRecalculate) {
        this.calculateSum();
        this.updateReactiveTotals();
      }

      // Force update to ensure template re-renders
      this.$forceUpdate();
      this.logDebug('calculateItemAmounts:end', {
        index: index,
        row: JSON.parse(JSON.stringify(this.form.selectedProducts[index]))
      });
    },
    // calculate product discount
    calculateProductDiscount: function calculateProductDiscount(index) {
      this.calculateItemAmounts(index);
    },
    // calculate product VAT
    calculateProductVat: function calculateProductVat(index) {
      this.calculateItemAmounts(index);
    },
    // generate item total price (kept for backward compatibility, now calls calculateItemAmounts)
    generateItemTotalPrice: function generateItemTotalPrice(index) {
      this.calculateItemAmounts(index);
    },
    // remove item from array
    removeItem: function removeItem(item) {
      var index = this.form.selectedProducts.indexOf(item);
      if (index > -1) {
        this.form.selectedProducts.splice(index, 1);
      }

      // Reset payment fields when products are removed
      if (this.form.selectedProducts.length === 0) {
        this.form.addPayment = 0; // Reset to 0 (No) by default
        this.form.account = "";
        this.form.paidAmount = "";
        this.form.chequeNo = "";
        this.form.receiptNo = "";
        this.clearFieldError('addPayment');
        this.clearFieldError('account');
        this.clearFieldError('paidAmount');
        this.clearFieldError('chequeNo');
        this.clearFieldError('receiptNo');
      }

      // Recalculate totals after removing item
      this.calculateSum();

      // Update reactive totals
      this.updateReactiveTotals();
      return;
    },
    // Handle discount input for real-time validation
    onDiscountInput: function onDiscountInput() {
      // Clear any existing discount errors
      this.clearFieldError('discount');
      // Trigger calculation to update totals and validation
      this.calculateSum();
      // Force Vue to update the computed property
      this.$forceUpdate();
    },
    // calculate sum
    calculateSum: function calculateSum() {
      this.debugBreak();
      // Update products with default VAT rate if needed
      this.updateProductsWithDefaultVatRate();

      // Update form values for consistency with computed properties
      this.$set(this.form, 'subTotal', this.roundToTwoDecimals(this.totalAfterDiscount));
      this.$set(this.form, 'productTotalTax', this.roundToTwoDecimals(this.totalProductTax));
      this.$set(this.form, 'totalDiscount', this.roundToTwoDecimals(this.totalProductDiscount));

      // Sync discount fields before calculations
      this.syncDiscountFields();

      // Global discount used ONLY for legacy invoice-level tax (orderTax)
      // NOTE: This is separate from the commercial invoice-level discount that we allocate proportionally.
      var globalDiscount = 0;
      if (!this.isSaudiArabia && this.form.discount > 0) {
        if (this.form.discountType == 1) {
          globalDiscount = this.roundToTwoDecimals(this.form.discount / 100 * this.form.subTotal);
        } else {
          globalDiscount = this.roundToTwoDecimals(Number(this.form.discount));
        }
      }

      // Invoice-level tax (orderTax) computed on (subTotal - globalDiscount)
      this.$set(this.form, 'invoiceTax', 0);
      if (!this.isSaudiArabia && this.form.orderTax && this.form.orderTax.rate) {
        this.$set(this.form, 'invoiceTax', this.roundToTwoDecimals(this.form.orderTax.rate / 100 * (this.form.subTotal - globalDiscount)));
      }

      // Total tax = product VAT + invoice-level tax
      this.$set(this.form, 'totalTax', this.roundToTwoDecimals(this.form.productTotalTax + this.form.invoiceTax));

      // Apply commercial invoice-level discount (for allocation only)
      // Business rule: invoice-level discount is applied on the INVOICE SUBTOTAL (sum of qty × unit_price),
      // not on a single line or on net/after-tax amounts.
      // Use the computed invoiceLevelDiscountTotal which already handles the calculation correctly
      var invoiceLevelDiscount = this.invoiceLevelDiscountTotal;

      // Update netTotal to match the computed grandTotal
      // Grand total calculation is handled by the computed property which respects transport taxability
      this.$set(this.form, 'netTotal', this.grandTotal);

      // Allocate invoice-level discount proportionally to items
      this.allocateInvoiceDiscountProportionally(invoiceLevelDiscount);

      // Allocate transport costs proportionally to items (only when transport is taxable)
      // When transport is non-taxable, it should NOT be distributed to items
      var transportCost = Number(this.form.transportCost || 0);
      this.allocateTransportCostProportionally(transportCost);

      // Recalculate all items with proportional discount and transport allocation
      this.recalculateAllItemsWithProportionalDiscount();

      // Update reactive totals for the table
      this.updateReactiveTotals();
      this.logDebug('calculateSum', {
        subTotal: this.form.subTotal,
        productTotalTax: this.form.productTotalTax,
        invoiceTax: this.form.invoiceTax,
        totalTax: this.form.totalTax,
        netTotal: this.form.netTotal,
        totalDiscount: this.form.totalDiscount,
        reactiveTotals: this.reactiveTotals,
        selectedProducts: this.form.selectedProducts.map(function (p, i) {
          return {
            i: i,
            qty: p.qty,
            unitPrice: p.unitPrice,
            discountAmount: p.discountAmount || 0,
            productTax: p.productTax,
            totalTax: p.totalTax,
            totalPrice: p.totalPrice
          };
        })
      });
      return;
    },
    // Allocate invoice-level discount proportionally across all items based on item subtotals (qty × unit_price)
    // Business rule: invoice-level discount is NOT a line-level discount.
    // Formula: itemDiscount = (itemSubtotal / invoiceSubtotal) * invoiceDiscount
    allocateInvoiceDiscountProportionally: function allocateInvoiceDiscountProportionally(invoiceLevelDiscount) {
      var _this12 = this;
      if (!invoiceLevelDiscount || invoiceLevelDiscount <= 0) {
        // Clear proportional discounts if no invoice-level discount
        this.form.selectedProducts.forEach(function (item, index) {
          if (item.proportionalDiscountAmount) {
            _this12.$set(_this12.form.selectedProducts[index], 'proportionalDiscountAmount', 0);
          }
        });
        return;
      }

      // Calculate total invoice subtotal (sum of all item subtotals: qty × unit_price)
      var invoiceSubtotal = 0;
      var itemSubtotals = [];
      this.form.selectedProducts.forEach(function (item) {
        var unitPriceNumber = Number(item.unitPrice) || 0;
        var qtyNumber = Number(item.qty) || 0;
        var itemSubtotal = unitPriceNumber * qtyNumber; // Item subtotal = qty × unit_price

        itemSubtotals.push(itemSubtotal);
        invoiceSubtotal += itemSubtotal;
      });

      // If no subtotal, return
      if (invoiceSubtotal <= 0) {
        return;
      }

      // Allocate discount proportionally based on item subtotals
      var allocatedTotal = 0;
      this.form.selectedProducts.forEach(function (item, index) {
        var itemSubtotal = itemSubtotals[index] || 0;
        var proportionalAmount = 0;
        if (invoiceSubtotal > 0 && itemSubtotal > 0) {
          // Calculate proportional share: itemDiscount = (itemSubtotal / invoiceSubtotal) * invoiceDiscount
          var proportion = itemSubtotal / invoiceSubtotal;
          proportionalAmount = _this12.roundToTwoDecimals(invoiceLevelDiscount * proportion);
          allocatedTotal += proportionalAmount;
        }

        // Store proportional discount amount
        _this12.$set(_this12.form.selectedProducts[index], 'proportionalDiscountAmount', proportionalAmount);
      });

      // Handle rounding differences - add/subtract from the last item
      var roundingDifference = this.roundToTwoDecimals(invoiceLevelDiscount - allocatedTotal);
      if (Math.abs(roundingDifference) > 0.01 && this.form.selectedProducts.length > 0) {
        var lastIndex = this.form.selectedProducts.length - 1;
        var lastItem = this.form.selectedProducts[lastIndex];
        var currentProportional = lastItem.proportionalDiscountAmount || 0;
        var adjusted = this.roundToTwoDecimals(currentProportional + roundingDifference);
        this.$set(this.form.selectedProducts[lastIndex], 'proportionalDiscountAmount', Math.max(0, adjusted));
      }
    },
    // Allocate transport costs proportionally across all items based on item subtotals (qty × unit_price)
    // CRITICAL: This function should ONLY be called when transport is taxable
    // When transport is non-taxable, it must NOT be distributed to items
    // Formula: itemShippingShare = (itemSubtotal / invoiceSubtotal) * shippingCost
    // Note: Transport is allocated for reporting/display purposes and included in VAT calculation (when taxable)
    allocateTransportCostProportionally: function allocateTransportCostProportionally(transportCost) {
      var _this13 = this;
      if (!transportCost || transportCost <= 0) {
        // Clear proportional transport if no transport cost
        this.form.selectedProducts.forEach(function (item, index) {
          if (item.proportionalTransportAmount) {
            _this13.$set(_this13.form.selectedProducts[index], 'proportionalTransportAmount', 0);
          }
        });
        return;
      }

      // CRITICAL: Only allocate transport when it is taxable
      // When transport is non-taxable, it should NOT be distributed to items
      if (!this.form.transportIsTaxable) {
        // Clear all proportional transport amounts when transport is non-taxable
        this.form.selectedProducts.forEach(function (item, index) {
          if (item.proportionalTransportAmount) {
            _this13.$set(_this13.form.selectedProducts[index], 'proportionalTransportAmount', 0);
          }
        });
        return;
      }

      // Calculate total invoice subtotal (sum of all item subtotals: qty × unit_price)
      var invoiceSubtotal = 0;
      var itemSubtotals = [];
      this.form.selectedProducts.forEach(function (item) {
        var unitPriceNumber = Number(item.unitPrice) || 0;
        var qtyNumber = Number(item.qty) || 0;
        var itemSubtotal = unitPriceNumber * qtyNumber; // Item subtotal = qty × unit_price

        itemSubtotals.push(itemSubtotal);
        invoiceSubtotal += itemSubtotal;
      });

      // If no subtotal, return
      if (invoiceSubtotal <= 0) {
        return;
      }

      // Allocate transport proportionally based on item subtotals
      var allocatedTotal = 0;
      this.form.selectedProducts.forEach(function (item, index) {
        var itemSubtotal = itemSubtotals[index] || 0;
        var proportionalAmount = 0;
        if (invoiceSubtotal > 0 && itemSubtotal > 0) {
          // Calculate proportional share: itemShippingShare = (itemSubtotal / invoiceSubtotal) * shippingCost
          var proportion = itemSubtotal / invoiceSubtotal;
          proportionalAmount = _this13.roundToTwoDecimals(transportCost * proportion);
          allocatedTotal += proportionalAmount;
        }

        // Store proportional transport amount (for reporting/display and VAT calculation)
        _this13.$set(_this13.form.selectedProducts[index], 'proportionalTransportAmount', proportionalAmount);
      });

      // Handle rounding differences - add/subtract from the last item
      var roundingDifference = this.roundToTwoDecimals(transportCost - allocatedTotal);
      if (Math.abs(roundingDifference) > 0.01 && this.form.selectedProducts.length > 0) {
        var lastIndex = this.form.selectedProducts.length - 1;
        var lastItem = this.form.selectedProducts[lastIndex];
        var currentProportional = lastItem.proportionalTransportAmount || 0;
        var adjusted = this.roundToTwoDecimals(currentProportional + roundingDifference);
        this.$set(this.form.selectedProducts[lastIndex], 'proportionalTransportAmount', Math.max(0, adjusted));
      }
    },
    // Recalculate all items with proportional discount allocation (without re-entering calculateSum)
    recalculateAllItemsWithProportionalDiscount: function recalculateAllItemsWithProportionalDiscount() {
      var _this14 = this;
      this.form.selectedProducts.forEach(function (item, index) {
        // Recalculate this item to include proportional discount and transport
        // Pass skipRecalculate = true to avoid recursive global recalculation
        _this14.calculateItemAmounts(index, true);
      });
    },
    // return number to word with language support
    toWord: function toWord() {
      var amount = this.subtotal || 0;

      // Handle edge cases
      if (isNaN(amount) || amount < 0) {
        return this.isRTL && this.currentLocale === 'ar' ? 'مبلغ غير صحيح' : 'Invalid Amount';
      }
      if (amount === 0) {
        return this.isRTL && this.currentLocale === 'ar' ? 'صفر ريال فقط' : 'Zero Only';
      }
      if (this.isRTL && this.currentLocale === 'ar') {
        return this.convertToArabicWords(amount);
      } else {
        return this.convertToEnglishWords(amount);
      }
    },
    // Convert number to Arabic words
    convertToArabicWords: function convertToArabicWords(amount) {
      var currencyInfo = this.getCurrencyInfo();
      if (amount === 0) return "\u0635\u0641\u0631 ".concat(currencyInfo.main, " \u0641\u0642\u0637");
      var integerPart = Math.floor(amount);
      var decimalPart = Math.round((amount - integerPart) * 100);
      var result = '';
      if (integerPart > 0) {
        var arabicNumber = this.convertIntegerToArabic(integerPart);
        result += arabicNumber + ' ' + currencyInfo.main;

        // Add proper pluralization for main currency
        if (integerPart === 1) {
          // Keep singular form
        } else if (integerPart === 2) {
          result = result.replace(currencyInfo.main, currencyInfo.main + 'ان');
        } else if (integerPart >= 3 && integerPart <= 10) {
          result = result.replace(currencyInfo.main, currencyInfo.main + 'ات');
        } else {
          // Keep plural form for larger numbers
        }
      }
      if (decimalPart > 0) {
        if (result) result += ' و ';
        var arabicDecimal = this.convertIntegerToArabic(decimalPart);
        result += arabicDecimal + ' ' + currencyInfo.sub;

        // Add proper pluralization for sub currency
        if (decimalPart === 1) {
          // Keep singular form
        } else if (decimalPart === 2) {
          result = result.replace(currencyInfo.sub, currencyInfo.sub + 'ان');
        } else if (decimalPart >= 3 && decimalPart <= 10) {
          result = result.replace(currencyInfo.sub, currencyInfo.sub + 'ات');
        } else {
          // Keep plural form for larger numbers
        }
      }
      return result + ' فقط';
    },
    // Get currency information based on locale and app settings
    getCurrencyInfo: function getCurrencyInfo() {
      var _this$appInfo2, _currencyMap$currency;
      var currency = ((_this$appInfo2 = this.appInfo) === null || _this$appInfo2 === void 0 ? void 0 : _this$appInfo2.currency) || 'SAR';
      var isArabic = this.isRTL && this.currentLocale === 'ar';
      var currencyMap = {
        'SAR': {
          en: {
            main: 'Riyal',
            sub: 'Halala',
            symbol: 'ê'
          },
          ar: {
            main: 'ريال',
            sub: 'هللة',
            symbol: 'ê'
          }
        },
        'USD': {
          en: {
            main: 'Dollar',
            sub: 'Cent',
            symbol: '$'
          },
          ar: {
            main: 'دولار',
            sub: 'سنت',
            symbol: '$'
          }
        },
        'EUR': {
          en: {
            main: 'Euro',
            sub: 'Cent',
            symbol: '€'
          },
          ar: {
            main: 'يورو',
            sub: 'سنت',
            symbol: '€'
          }
        },
        'EGP': {
          en: {
            main: 'Pound',
            sub: 'Piastre',
            symbol: '£'
          },
          ar: {
            main: 'جنيه',
            sub: 'قرش',
            symbol: '£'
          }
        }
      };
      return ((_currencyMap$currency = currencyMap[currency]) === null || _currencyMap$currency === void 0 ? void 0 : _currencyMap$currency[isArabic ? 'ar' : 'en']) || currencyMap['SAR'][isArabic ? 'ar' : 'en'];
    },
    // Convert number to English words
    convertToEnglishWords: function convertToEnglishWords(amount) {
      var currencyInfo = this.getCurrencyInfo();
      var toWords = new ToWords.ToWords();
      var words = toWords.convert(amount);

      // Add currency information
      var integerPart = Math.floor(amount);
      var decimalPart = Math.round((amount - integerPart) * 100);
      var result = words;
      if (integerPart > 0) {
        result += ' ' + currencyInfo.main;
        if (integerPart !== 1) result += 's';
      }
      if (decimalPart > 0) {
        if (result) result += ' and ';
        result += this.convertIntegerToEnglish(decimalPart) + ' ' + currencyInfo.sub;
        if (decimalPart !== 1) result += 's';
      }
      return result + ' Only';
    },
    // Convert integer to English words (for decimal parts)
    convertIntegerToEnglish: function convertIntegerToEnglish(num) {
      if (num === 0) return 'zero';
      var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
      var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
      var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
      if (num < 10) return ones[num];
      if (num < 20) return teens[num - 10];
      if (num < 100) {
        var ten = Math.floor(num / 10);
        var one = num % 10;
        if (one === 0) return tens[ten];
        return tens[ten] + '-' + ones[one];
      }
      return 'number';
    },
    // Convert integer to Arabic words
    convertIntegerToArabic: function convertIntegerToArabic(num) {
      if (num === 0) return 'صفر';
      var ones = ['', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة'];
      var tens = ['', '', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'];
      var teens = ['عشرة', 'أحد عشر', 'اثنا عشر', 'ثلاثة عشر', 'أربعة عشر', 'خمسة عشر', 'ستة عشر', 'سبعة عشر', 'ثمانية عشر', 'تسعة عشر'];
      var hundreds = ['', 'مائة', 'مائتان', 'ثلاثمائة', 'أربعمائة', 'خمسمائة', 'ستمائة', 'سبعمائة', 'ثمانمائة', 'تسعمائة'];
      if (num < 10) return ones[num];
      if (num < 20) return teens[num - 10];
      if (num < 100) {
        var ten = Math.floor(num / 10);
        var one = num % 10;
        if (one === 0) return tens[ten];
        return ones[one] + ' و ' + tens[ten];
      }
      if (num < 1000) {
        var hundred = Math.floor(num / 100);
        var remainder = num % 100;
        if (remainder === 0) return hundreds[hundred];
        return hundreds[hundred] + ' و ' + this.convertIntegerToArabic(remainder);
      }
      if (num < 1000000) {
        var thousand = Math.floor(num / 1000);
        var _remainder = num % 1000;
        if (_remainder === 0) {
          if (thousand === 1) return 'ألف';
          if (thousand === 2) return 'ألفان';
          if (thousand >= 3 && thousand <= 10) return this.convertIntegerToArabic(thousand) + ' آلاف';
          return this.convertIntegerToArabic(thousand) + ' ألف';
        }
        return this.convertIntegerToArabic(thousand) + ' ألف و ' + this.convertIntegerToArabic(_remainder);
      }
      if (num < 1000000000) {
        var million = Math.floor(num / 1000000);
        var _remainder2 = num % 1000000;
        if (_remainder2 === 0) {
          if (million === 1) return 'مليون';
          if (million === 2) return 'مليونان';
          if (million >= 3 && million <= 10) return this.convertIntegerToArabic(million) + ' ملايين';
          return this.convertIntegerToArabic(million) + ' مليون';
        }
        return this.convertIntegerToArabic(million) + ' مليون و ' + this.convertIntegerToArabic(_remainder2);
      }
      return 'رقم كبير جداً';
    },
    // Update reactive totals for the table
    updateReactiveTotals: function updateReactiveTotals() {
      if (!this.form.selectedProducts || this.form.selectedProducts.length === 0) {
        this.reactiveTotals.totalUnitPrice = 0;
        this.reactiveTotals.totalAfterDiscount = 0;
        this.reactiveTotals.totalDiscount = 0;
        this.reactiveTotals.productTotalTax = 0;
        this.reactiveTotals.subTotal = 0;
        return;
      }

      // Calculate totals
      this.reactiveTotals.totalUnitPrice = this.roundToTwoDecimals(this.form.selectedProducts.reduce(function (total, item) {
        return total + item.unitPrice * item.qty;
      }, 0));
      this.reactiveTotals.totalAfterDiscount = this.roundToTwoDecimals(this.form.selectedProducts.reduce(function (total, item) {
        return total + (item.totalAfterDiscount || 0);
      }, 0));
      this.reactiveTotals.totalDiscount = this.roundToTwoDecimals(this.form.selectedProducts.reduce(function (total, item) {
        return total + (item.discountAmount || 0);
      }, 0));
      this.reactiveTotals.productTotalTax = this.roundToTwoDecimals(this.form.selectedProducts.reduce(function (total, item) {
        return total + (item.totalTax || 0);
      }, 0));
      this.reactiveTotals.subTotal = this.roundToTwoDecimals(this.form.selectedProducts.reduce(function (total, item) {
        // Strictly sum Net + Tax to ensure accuracy regardless of totalPrice state
        var net = item.totalAfterDiscount || 0;
        var tax = item.totalTax || 0;
        // console.log(`[ReactiveUpdate] Item ${item.id}: Net=${net}, Tax=${tax}, Sum=${net+tax}`);
        return total + net + tax;
      }, 0));
      console.log('[InvoiceCreate] updateReactiveTotals called:', this.reactiveTotals);

      // Force update to ensure template re-renders
      this.$forceUpdate();
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
      // Strictly sum Net + Tax
      var total = this.form.selectedProducts.reduce(function (total, item) {
        var net = Number(item.totalAfterDiscount) || 0;
        var tax = Number(item.totalTax) || 0;
        return total + net + tax;
      }, 0);
      return this.roundToTwoDecimals(total);
    },
    // Force update totals row
    forceUpdateTotals: function forceUpdateTotals() {
      this.$forceUpdate();
    },
    // vue file upload
    onFileChange: function onFileChange(e) {
      var _this15 = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      if (file.size < 2111775 && (file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/gif")) {
        reader.onloadend = function () {
          _this15.formClient.image = reader.result;
        };
        reader.readAsDataURL(file);
        this.url = URL.createObjectURL(file);
      } else {
        this.$toast.error(this.$t("Error!"), this.$t("Please select a valid thumbnail with size less than 2 MB"));
      }
    },
    // Sync discountType and discount to discount_type and discount_value for backend compatibility
    syncDiscountFields: function syncDiscountFields() {
      // Map discountType (0/1) to discount_type ("fixed"/"percentage")
      if (this.form.discountType !== null && this.form.discountType !== undefined) {
        this.form.discount_type = this.form.discountType == 1 ? 'percentage' : 'fixed';
      }
      // Map discount to discount_value
      if (this.form.discount !== null && this.form.discount !== undefined) {
        this.form.discount_value = parseFloat(this.form.discount) || 0;
      }
    },
    // save invoice
    saveInvoice: function saveInvoice() {
      var _this16 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
        var validationErrors, productsWithoutSalesAccount, productNames, _formDataObj$client, _formDataObj$orderTax, formDataObj, formData, appendIfDefined, _yield$axios$post, data, _yield$_this16$form$p, _data3, _error$response13, _error$response14, _error$response15, _error$response16, _error$response17, _error$response18, _error$response19, _error$response20, _error$response21, _error$response22, _validationErrors, errorMessage, _validationErrors2, errorCount, _errorMessage, _errorMessage2, _errorMessage3, ErrorHandler, _t0, _t1;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.p = _context9.n) {
            case 0:
              _context9.p = 0;
              // Sync discount fields before submission
              _this16.syncDiscountFields();

              // Ensure calculations are up to date
              _this16.calculateSum();

              // Ensure all monetary values are properly formatted to 2 decimal places before submission
              _this16.formatFormValues();

              // Don't clear payment fields here - let the backend handle validation
              // The backend will ignore payment fields if addPayment is 0

              // Collect all validation errors before submission
              validationErrors = [];
              if (!_this16.form.client || !_this16.form.client.chart_of_account_id) {
                validationErrors.push({
                  type: "warning",
                  title: _this16.$t("Chart of Account Required"),
                  message: _this16.$t("Client must have a Chart of Account assigned before creating an invoice."),
                  field: "client"
                });
              }
              if (!_this16.form.selectedProducts || _this16.form.selectedProducts.length === 0) {
                validationErrors.push({
                  type: "warning",
                  title: _this16.$t("No Products Selected"),
                  message: _this16.$t("Please select at least one product to create an invoice."),
                  field: "selectedProducts"
                });
              }

              // Validate that all products have sales accounts assigned
              productsWithoutSalesAccount = _this16.form.selectedProducts.filter(function (product) {
                return !product.sales_account_id;
              });
              if (productsWithoutSalesAccount.length > 0) {
                productNames = productsWithoutSalesAccount.map(function (p) {
                  return p.name || 'Unknown';
                }).join(', ');
                validationErrors.push({
                  type: "warning",
                  title: _this16.$t("Product Chart of Account Required"),
                  message: _this16.$t("The following products must have Sales Accounts assigned: ") + productNames,
                  field: "products",
                  timer: 8000,
                  timerProgressBar: true
                });
              }

              // VAT rate validation removed per business request

              // Payment validation removed - payment is handled through modal after invoice creation

              // NOTE: Calculation validation disabled because invoice-level discount logic
              // now differs from the original net total calculation and was blocking save.
              // If needed later, this can be re-enabled after aligning the formulas.

              // If there are validation errors, show them all and return
              if (!(validationErrors.length > 0)) {
                _context9.n = 1;
                break;
              }
              _this16.showMultipleValidationErrors(validationErrors);
              return _context9.a(2);
            case 1:
              _this16.loading = true;

              // If attachments exist, use FormData; otherwise use regular form.post()
              if (!(_this16.form.attachments && _this16.form.attachments.length > 0)) {
                _context9.n = 6;
                break;
              }
              // Create FormData for file uploads
              formDataObj = _this16.form.data();
              formData = new FormData(); // Helper function to append values
              appendIfDefined = function appendIfDefined(key, value) {
                if (value !== null && value !== undefined && value !== '') {
                  formData.append(key, value);
                }
              }; // Append all form fields manually to ensure proper formatting
              appendIfDefined('reference', formDataObj.reference);
              appendIfDefined('client[id]', (_formDataObj$client = formDataObj.client) === null || _formDataObj$client === void 0 ? void 0 : _formDataObj$client.id);
              appendIfDefined('transportCost', formDataObj.transportCost);
              appendIfDefined('transportIsTaxable', formDataObj.transportIsTaxable ? 1 : 0);
              appendIfDefined('subTotal', formDataObj.subTotal);
              // Sync discount fields before appending
              _this16.syncDiscountFields();
              appendIfDefined('discountType', _this16.form.discountType);
              appendIfDefined('discount', _this16.form.discount);
              appendIfDefined('poReference', formDataObj.poReference);
              appendIfDefined('paymentTerms', formDataObj.paymentTerms);
              appendIfDefined('deliveryPlace', formDataObj.deliveryPlace);
              appendIfDefined('orderTax[id]', (_formDataObj$orderTax = formDataObj.orderTax) === null || _formDataObj$orderTax === void 0 ? void 0 : _formDataObj$orderTax.id);
              appendIfDefined('date', formDataObj.date);
              appendIfDefined('note', formDataObj.note);
              appendIfDefined('status', formDataObj.status);
              appendIfDefined('isSendEmail', formDataObj.isSendEmail ? 1 : 0);
              appendIfDefined('isSendSMS', formDataObj.isSendSMS ? 1 : 0);
              appendIfDefined('netTotal', formDataObj.netTotal);
              appendIfDefined('cost_center_id', formDataObj.cost_center_id);
              appendIfDefined('sale_status', formDataObj.sale_status);
              appendIfDefined('representative_id', formDataObj.representative_id);
              appendIfDefined('cashier_id', formDataObj.cashier_id);
              appendIfDefined('branch_id', formDataObj.branch_id);
              appendIfDefined('current_date', formDataObj.current_date);
              appendIfDefined('isPaid', formDataObj.isPaid ? 1 : 0);

              // Append selectedProducts array
              if (Array.isArray(formDataObj.selectedProducts)) {
                formDataObj.selectedProducts.forEach(function (product, index) {
                  Object.keys(product).forEach(function (prodKey) {
                    var prodValue = product[prodKey];
                    if (prodValue !== null && prodValue !== undefined && prodValue !== '') {
                      // Handle nested objects in products
                      if (_typeof(prodValue) === 'object' && !Array.isArray(prodValue) && prodValue.id) {
                        formData.append("selectedProducts[".concat(index, "][").concat(prodKey, "][id]"), prodValue.id);
                      } else {
                        formData.append("selectedProducts[".concat(index, "][").concat(prodKey, "]"), prodValue);
                      }
                    }
                  });
                });
              }

              // Append attachments using attachments[] format
              _this16.form.attachments.forEach(function (file) {
                if (file instanceof File) {
                  formData.append('attachments[]', file);
                }
              });

              // Submit using axios with FormData
              _context9.p = 2;
              _context9.n = 3;
              return axios_default().post(window.location.origin + "/api/invoices", formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
            case 3:
              _yield$axios$post = _context9.v;
              data = _yield$axios$post.data;
              _this16.loading = false;
              if (data.success) {
                toast.fire({
                  type: "success",
                  title: _this16.$t("Success"),
                  text: _this16.$t("Invoice created successfully")
                });

                // Show journal entries creation confirmation if entries were created
                if (data.data.journal_entries_created) {
                  setTimeout(function () {
                    toast.fire({
                      type: "success",
                      title: _this16.$t("Journal Entries Created"),
                      text: _this16.$t("Journal entries have been automatically created for this invoice"),
                      timer: 4000,
                      timerProgressBar: true
                    });
                  }, 500);
                }
                _this16.clearTemporaryData();

                // If payment type is Paid, open payment modal instead of redirecting
                if (_this16.form.isPaid) {
                  _this16.createdInvoiceData = data.data;
                  _this16.paymentModalData = {
                    id: data.data.id || data.data.invoice_id,
                    invoiceNo: data.data.invoiceNo || data.data.invoice_no,
                    netTotal: data.data.netTotal,
                    status: data.data.status || 1
                  };
                  _this16.showPaymentModal = true;
                } else {
                  _this16.$router.push({
                    name: "invoices.show",
                    params: {
                      slug: data.data.slug
                    }
                  });
                }
              } else {
                toast.fire({
                  type: "error",
                  title: _this16.$t("Error"),
                  text: data.message
                });
              }
              _context9.n = 5;
              break;
            case 4:
              _context9.p = 4;
              _t0 = _context9.v;
              _this16.loading = false;
              throw _t0;
            case 5:
              _context9.n = 8;
              break;
            case 6:
              _context9.n = 7;
              return _this16.form.post(window.location.origin + "/api/invoices");
            case 7:
              _yield$_this16$form$p = _context9.v;
              _data3 = _yield$_this16$form$p.data;
              _this16.loading = false;
              if (_data3.success) {
                toast.fire({
                  type: "success",
                  title: _this16.$t("Success"),
                  text: _this16.$t("Invoice created successfully")
                });

                // Show journal entries creation confirmation if entries were created
                if (_data3.data.journal_entries_created) {
                  setTimeout(function () {
                    toast.fire({
                      type: "success",
                      title: _this16.$t("Journal Entries Created"),
                      text: _this16.$t("Journal entries have been automatically created for this invoice"),
                      timer: 4000,
                      timerProgressBar: true
                    });
                  }, 500);
                }
                _this16.clearTemporaryData();

                // If payment type is Paid, open payment modal instead of redirecting
                if (_this16.form.isPaid) {
                  _this16.createdInvoiceData = _data3.data;
                  // Use current form netTotal which has the correct calculation (e.g. 57.5) before reset takes effect effectively
                  // Actually we cleared data above, so we lost form.netTotal. 
                  // We must use the data from response strictly, but we know response netTotal is correct now.
                  // BUT to be absolutely safe given user feedback, let's look at what we sent.
                  // Wait, clearTemporaryData() was ALREADY called. The form is GONE.
                  // We must rely on 'data.data'.
                  // Let's ensure we use the 'netTotal' from response which we fixed in backend to be '$request->netTotal'.

                  _this16.paymentModalData = {
                    id: _data3.data.id || _data3.data.invoice_id,
                    invoiceNo: _data3.data.invoiceNo || _data3.data.invoice_no,
                    netTotal: _data3.data.netTotal,
                    status: _data3.data.status || 1
                  };
                  _this16.showPaymentModal = true;
                } else {
                  _this16.$router.push({
                    name: "invoices.show",
                    params: {
                      slug: _data3.data.slug
                    }
                  });
                }
              } else {
                toast.fire({
                  type: "error",
                  title: _this16.$t("Error"),
                  text: _data3.message
                });
              }
            case 8:
              _context9.n = 14;
              break;
            case 9:
              _context9.p = 9;
              _t1 = _context9.v;
              _this16.loading = false;
              console.error('Invoice creation error:', _t1);

              // Handle validation errors specifically
              if (!(((_error$response13 = _t1.response) === null || _error$response13 === void 0 ? void 0 : _error$response13.status) === 422 && (_error$response14 = _t1.response) !== null && _error$response14 !== void 0 && (_error$response14 = _error$response14.data) !== null && _error$response14 !== void 0 && _error$response14.errors)) {
                _context9.n = 10;
                break;
              }
              _validationErrors = _t1.response.data.errors; // Show validation errors in toast
              Object.keys(_validationErrors).forEach(function (field) {
                var fieldErrors = _validationErrors[field];
                if (Array.isArray(fieldErrors) && fieldErrors.length > 0) {
                  // Show first error for each field
                  toast.fire({
                    type: "error",
                    title: _this16.$t("Validation Error"),
                    text: "".concat(_this16.getFieldLabel(field), ": ").concat(fieldErrors[0]),
                    timer: 5000,
                    timerProgressBar: true
                  });
                }
              });

              // Also set form errors for inline validation display
              _this16.form.errors.set(_validationErrors);
              _context9.n = 13;
              break;
            case 10:
              if (!(((_error$response15 = _t1.response) === null || _error$response15 === void 0 ? void 0 : _error$response15.status) === 400)) {
                _context9.n = 12;
                break;
              }
              // Handle bad request errors (business logic errors)
              errorMessage = _t1.response.data.message || _t1.response.data.error || _this16.$t("Bad Request Error");
              _validationErrors2 = _t1.response.data.validation_errors;
              errorCount = _t1.response.data.error_count; // If we have multiple validation errors from the backend, show them all
              if (!(_validationErrors2 && Array.isArray(_validationErrors2) && _validationErrors2.length > 0)) {
                _context9.n = 11;
                break;
              }
              _this16.showBackendValidationErrors(_validationErrors2, errorMessage);
              return _context9.a(2);
            case 11:
              // Try to handle as business logic error first
              if (!_this16.handleBusinessLogicError(_t1.response.data)) {
                // If not handled by business logic handler, show generic bad request error
                toast.fire({
                  type: "error",
                  title: _this16.$t("Business Logic Error"),
                  text: errorMessage,
                  timer: 6000,
                  timerProgressBar: true
                });
              }
              _context9.n = 13;
              break;
            case 12:
              if (((_error$response16 = _t1.response) === null || _error$response16 === void 0 ? void 0 : _error$response16.status) === 401) {
                // Handle unauthorized errors
                toast.fire({
                  type: "error",
                  title: _this16.$t("Authentication Error"),
                  text: _this16.$t("You are not authorized to perform this action. Please log in again."),
                  timer: 5000,
                  timerProgressBar: true
                });
              } else if (((_error$response17 = _t1.response) === null || _error$response17 === void 0 ? void 0 : _error$response17.status) === 403) {
                // Handle forbidden errors
                toast.fire({
                  type: "error",
                  title: _this16.$t("Permission Error"),
                  text: _this16.$t("You don't have permission to perform this action."),
                  timer: 5000,
                  timerProgressBar: true
                });
              } else if (((_error$response18 = _t1.response) === null || _error$response18 === void 0 ? void 0 : _error$response18.status) === 404) {
                // Handle not found errors
                toast.fire({
                  type: "error",
                  title: _this16.$t("Resource Not Found"),
                  text: _this16.$t("The requested resource was not found. Please check your data and try again."),
                  timer: 5000,
                  timerProgressBar: true
                });
              } else if (((_error$response19 = _t1.response) === null || _error$response19 === void 0 ? void 0 : _error$response19.status) === 409) {
                // Handle conflict errors
                _errorMessage = _t1.response.data.message || _this16.$t("Data Conflict Error");
                toast.fire({
                  type: "error",
                  title: _this16.$t("Data Conflict"),
                  text: _errorMessage,
                  timer: 6000,
                  timerProgressBar: true
                });
              } else if (((_error$response20 = _t1.response) === null || _error$response20 === void 0 ? void 0 : _error$response20.status) === 422) {
                // Handle other unprocessable entity errors
                _errorMessage2 = _t1.response.data.message || _this16.$t("Please check your input and try again.");
                toast.fire({
                  type: "error",
                  title: _this16.$t("Validation Error"),
                  text: _errorMessage2,
                  timer: 6000,
                  timerProgressBar: true
                });
              } else if (((_error$response21 = _t1.response) === null || _error$response21 === void 0 ? void 0 : _error$response21.status) >= 500) {
                // Handle server errors
                _errorMessage3 = _t1.response.data.message || _this16.$t("Server Error");
                toast.fire({
                  type: "error",
                  title: _this16.$t("Server Error"),
                  text: "".concat(_errorMessage3, " (").concat(_this16.$t("Please try again later or contact support"), ")"),
                  timer: 8000,
                  timerProgressBar: true
                });
              } else if ((_error$response22 = _t1.response) !== null && _error$response22 !== void 0 && (_error$response22 = _error$response22.data) !== null && _error$response22 !== void 0 && _error$response22.message) {
                // Handle other API error messages
                toast.fire({
                  type: "error",
                  title: _this16.$t("API Error"),
                  text: _t1.response.data.message,
                  timer: 6000,
                  timerProgressBar: true
                });
              } else if (_t1.message) {
                // Handle JavaScript errors
                toast.fire({
                  type: "error",
                  title: _this16.$t("JavaScript Error"),
                  text: _t1.message,
                  timer: 6000,
                  timerProgressBar: true
                });
              } else if (_t1.code === 'NETWORK_ERROR' || _t1.code === 'ECONNABORTED') {
                // Handle network errors
                toast.fire({
                  type: "error",
                  title: _this16.$t("Network Error"),
                  text: _this16.$t("Unable to connect to the server. Please check your internet connection and try again."),
                  timer: 8000,
                  timerProgressBar: true
                });
              } else {
                // Use centralized error handler for any remaining errors
                ErrorHandler = (__webpack_require__(36694)["default"]);
                ErrorHandler.handleApiError(_t1, {
                  showValidationErrors: false
                });
              }
            case 13:
              // Log detailed error information for debugging
              console.group('Detailed Error Information');
              console.error('Error object:', _t1);
              console.error('Error response:', _t1.response);
              console.error('Error message:', _t1.message);
              console.error('Error stack:', _t1.stack);
              console.groupEnd();
            case 14:
              return _context9.a(2);
          }
        }, _callee9, null, [[2, 4], [0, 9]]);
      }))();
    },
    // Format all form values to ensure proper decimal precision
    formatFormValues: function formatFormValues() {
      var _this17 = this;
      // Format selected products
      this.form.selectedProducts.forEach(function (item) {
        item.unitPrice = _this17.roundToTwoDecimals(Number(item.unitPrice));
        item.qty = Number(item.qty);
        item.productTax = _this17.roundToTwoDecimals(Number(item.productTax));
        item.totalTax = _this17.roundToTwoDecimals(Number(item.totalTax));
        item.totalPrice = _this17.roundToTwoDecimals(Number(item.totalPrice));
        item.unitCost = _this17.roundToTwoDecimals(Number(item.unitCost));
        item.discount = _this17.roundToTwoDecimals(Number(item.discount || 0));
        item.discountAmount = _this17.roundToTwoDecimals(Number(item.discountAmount || 0));
      });

      // Format form totals
      this.form.subTotal = this.roundToTwoDecimals(Number(this.form.subTotal));
      this.form.productTotalTax = this.roundToTwoDecimals(Number(this.form.productTotalTax));
      this.form.invoiceTax = this.roundToTwoDecimals(Number(this.form.invoiceTax || 0));
      this.form.totalDiscount = this.roundToTwoDecimals(Number(this.form.totalDiscount));
      this.form.totalTax = this.roundToTwoDecimals(Number(this.form.totalTax));
      this.form.netTotal = this.roundToTwoDecimals(Number(this.form.netTotal));
      this.form.total_amount = this.roundToTwoDecimals(Number(this.form.netTotal));
      this.form.transportCost = this.roundToTwoDecimals(Number(this.form.transportCost || 0));
      this.form.discount = this.roundToTwoDecimals(Number(this.form.discount || 0));

      // Only format payment-related fields if addPayment is 1
      if (this.form.addPayment == 1) {
        this.form.paidAmount = this.roundToTwoDecimals(Number(this.form.paidAmount || 0));
        this.form.account = this.form.account || "";
        this.form.chequeNo = this.form.chequeNo || "";
        this.form.receiptNo = this.form.receiptNo || "";
      }

      // Ensure cost center and sale status are set
      if (this.form.costCenter && this.form.costCenter.id) {
        this.form.cost_center_id = this.form.costCenter.id;
      } else {
        this.form.cost_center_id = this.form.cost_center_id || null;
      }
      if (this.form.saleStatus) {
        this.form.sale_status = this.form.saleStatus;
      } else {
        this.form.sale_status = this.form.sale_status || null;
      }

      // Ensure representative and cashier IDs are set
      if (this.form.representative && this.form.representative.id) {
        this.form.representative_id = this.form.representative.id;
      } else {
        this.form.representative_id = this.form.representative_id || null;
      }
      if (this.form.cashier && this.form.cashier.id) {
        this.form.cashier_id = this.form.cashier.id;
      } else {
        this.form.cashier_id = this.form.cashier_id || null;
      }

      // Ensure branch ID is set
      if (this.form.branch && this.form.branch.id) {
        this.form.branch_id = this.form.branch.id;
      } else {
        this.form.branch_id = this.form.branch_id || null;
      }

      // Don't clear payment fields here - let the backend handle validation
    },
    // Validate that all calculations are mathematically correct
    validateCalculations: function validateCalculations() {
      try {
        // Validate subtotal (should match the computed subtotal which includes VAT)
        var calculatedSubTotal = this.form.selectedProducts.reduce(function (total, item) {
          return total + Number(item.totalAfterDiscount || 0) + Number(item.totalTax || 0);
        }, 0);
        if (Math.abs(calculatedSubTotal - this.form.subTotal) > 0.01) {
          console.error('Subtotal validation failed:', calculatedSubTotal, 'vs', this.form.subTotal);
          return false;
        }

        // Validate product tax total
        var calculatedProductTax = this.form.selectedProducts.reduce(function (total, item) {
          return total + Number(item.totalTax);
        }, 0);
        if (Math.abs(calculatedProductTax - this.form.productTotalTax) > 0.01) {
          console.error('Product tax validation failed:', calculatedProductTax, 'vs', this.form.productTotalTax);
          return false;
        }

        // Validate total discount
        var calculatedTotalDiscount = this.form.selectedProducts.reduce(function (total, item) {
          return total + Number(item.discountAmount || 0);
        }, 0);
        if (Math.abs(calculatedTotalDiscount - this.form.totalDiscount) > 0.01) {
          console.error('Total discount validation failed:', calculatedTotalDiscount, 'vs', this.form.totalDiscount);
          return false;
        }

        // Validate invoice tax (skip for Saudi Arabia)
        if (!this.isSaudiArabia) {
          var calculatedInvoiceTax = this.form.orderTax && this.form.orderTax.rate ? this.roundToTwoDecimals(this.form.orderTax.rate / 100 * (this.form.subTotal - globalDiscount)) : 0;
          if (Math.abs(calculatedInvoiceTax - this.form.invoiceTax) > 0.01) {
            console.error('Invoice tax validation failed:', calculatedInvoiceTax, 'vs', this.form.invoiceTax);
            return false;
          }
        }

        // Validate net total
        var globalDiscount = this.form.discount > 0 ? this.form.discountType == 1 ? this.roundToTwoDecimals(this.form.discount / 100 * this.form.subTotal) : this.roundToTwoDecimals(Number(this.form.discount)) : 0;

        // For Saudi Arabia, skip global discount and invoice tax in net total calculation
        var calculatedNetTotal = this.isSaudiArabia ? this.roundToTwoDecimals(this.form.subTotal) : this.roundToTwoDecimals(this.form.subTotal - globalDiscount + this.form.invoiceTax + Number(this.form.transportCost || 0));
        if (Math.abs(calculatedNetTotal - this.form.netTotal) > 0.01) {
          console.error('Net total validation failed:', calculatedNetTotal, 'vs', this.form.netTotal);
          return false;
        }
        return true;
      } catch (error) {
        console.error('Validation error:', error);
        return false;
      }
    },
    // Validate payment fields - payment is handled through modal after invoice creation
    validatePaymentFields: function validatePaymentFields() {
      // Payment validation removed - payment is handled through modal after invoice creation
      return {
        isValid: true,
        errors: []
      };
    },
    // save client
    saveClient: function saveClient() {
      var _this18 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0() {
        return _regenerator().w(function (_context0) {
          while (1) switch (_context0.n) {
            case 0:
              _context0.n = 1;
              return _this18.formClient.post(window.location.origin + "/api/clients").then(function () {
                toast.fire({
                  type: "success",
                  title: _this18.$t("Client added successfully")
                });
                _this18.showClientCreateModal = false;
                _this18.getClients();
                _this18.formClient.reset();
                _this18.url = null;
              })["catch"](function (error) {
                var ErrorHandler = (__webpack_require__(36694)["default"]);
                ErrorHandler.handleApiError(error, {
                  showValidationErrors: false
                });
              });
            case 1:
              return _context0.a(2);
          }
        }, _callee0);
      }))();
    },
    // on client change
    onClientChange: function onClientChange() {
      // Don't process client changes during form submission
      if (this.isSubmitting) {
        return;
      }

      // Clear client validation errors when client changes
      this.clearFieldError('client');

      // Do not override user selection; keep current client even if missing chart_of_account_id
      // Validation UI will prompt auto-assign if needed

      // Payment fields are no longer used - payment is handled through modal after invoice creation
    },
    // Add back the autoAssignClientChartOfAccount method
    autoAssignClientChartOfAccount: function autoAssignClientChartOfAccount() {
      var _this19 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1() {
        var currentClientSlug, response, newAccountId, idx, _error$response23, _error$response24, _error$response25, _error$response26, _error$response27, _error$response28, errorMessage, _errorMessage4, _t10;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.p = _context1.n) {
            case 0:
              if (!(!_this19.form.client || _this19.isAutoAssigningClient)) {
                _context1.n = 1;
                break;
              }
              return _context1.a(2);
            case 1:
              _this19.isAutoAssigningClient = true;
              _context1.p = 2;
              // Store the current client slug before making the API call
              currentClientSlug = _this19.form.client.slug;
              _context1.n = 3;
              return _this19.$http.post("/api/clients/".concat(_this19.form.client.slug, "/auto-assign-chart-of-account"));
            case 3:
              response = _context1.v;
              if (response.data.success) {
                // Update the client data with new chart of account
                newAccountId = response.data.chart_of_account_id || response.data.data && response.data.data.chart_of_account_id || null;
                if (newAccountId) {
                  _this19.form.client.chart_of_account_id = newAccountId;
                  // Also update the option in items list to keep state consistent when switching clients
                  idx = _this19.items.findIndex(function (i) {
                    return i.slug === currentClientSlug;
                  });
                  if (idx !== -1) {
                    _this19.$set(_this19.items[idx], 'chart_of_account_id', newAccountId);
                  }
                }

                // Force Vue to re-render the component to update the UI
                _this19.$nextTick(function () {
                  _this19.$forceUpdate();
                });

                // Show success message
                toast.fire({
                  type: "success",
                  title: _this19.$t("Chart of Account assigned successfully")
                });
              } else {
                toast.fire({
                  type: "error",
                  title: _this19.$t("Failed to assign Chart of Account"),
                  text: response.data.message || _this19.$t("Please try again or assign manually")
                });
              }
              _context1.n = 5;
              break;
            case 4:
              _context1.p = 4;
              _t10 = _context1.v;
              console.error('Error auto-assigning chart of account:', _t10);

              // Handle different types of errors
              if (((_error$response23 = _t10.response) === null || _error$response23 === void 0 ? void 0 : _error$response23.status) === 400) {
                errorMessage = _t10.response.data.message || _this19.$t("Bad request error");
                toast.fire({
                  type: "error",
                  title: _this19.$t("Assignment Failed"),
                  text: errorMessage,
                  timer: 6000,
                  timerProgressBar: true
                });
              } else if (((_error$response24 = _t10.response) === null || _error$response24 === void 0 ? void 0 : _error$response24.status) === 401) {
                toast.fire({
                  type: "error",
                  title: _this19.$t("Authentication Error"),
                  text: _this19.$t("You are not authorized to perform this action. Please log in again."),
                  timer: 5000,
                  timerProgressBar: true
                });
              } else if (((_error$response25 = _t10.response) === null || _error$response25 === void 0 ? void 0 : _error$response25.status) === 403) {
                toast.fire({
                  type: "error",
                  title: _this19.$t("Permission Error"),
                  text: _this19.$t("You don't have permission to assign Chart of Accounts."),
                  timer: 5000,
                  timerProgressBar: true
                });
              } else if (((_error$response26 = _t10.response) === null || _error$response26 === void 0 ? void 0 : _error$response26.status) === 404) {
                toast.fire({
                  type: "error",
                  title: _this19.$t("Client Not Found"),
                  text: _this19.$t("The client was not found. Please refresh the page and try again."),
                  timer: 5000,
                  timerProgressBar: true
                });
              } else if (((_error$response27 = _t10.response) === null || _error$response27 === void 0 ? void 0 : _error$response27.status) >= 500) {
                _errorMessage4 = _t10.response.data.message || _this19.$t("Server error");
                toast.fire({
                  type: "error",
                  title: _this19.$t("Server Error"),
                  text: "".concat(_errorMessage4, " (").concat(_this19.$t("Please try again later"), ")"),
                  timer: 8000,
                  timerProgressBar: true
                });
              } else if ((_error$response28 = _t10.response) !== null && _error$response28 !== void 0 && (_error$response28 = _error$response28.data) !== null && _error$response28 !== void 0 && _error$response28.message) {
                toast.fire({
                  type: "error",
                  title: _this19.$t("Assignment Failed"),
                  text: _t10.response.data.message,
                  timer: 6000,
                  timerProgressBar: true
                });
              } else if (_t10.message) {
                toast.fire({
                  type: "error",
                  title: _this19.$t("Assignment Failed"),
                  text: _t10.message,
                  timer: 6000,
                  timerProgressBar: true
                });
              } else {
                toast.fire({
                  type: "error",
                  title: _this19.$t("Failed to assign Chart of Account"),
                  text: _this19.$t("Please try again or assign manually"),
                  timer: 5000,
                  timerProgressBar: true
                });
              }
            case 5:
              _context1.p = 5;
              _this19.isAutoAssigningClient = false;
              return _context1.f(5);
            case 6:
              return _context1.a(2);
          }
        }, _callee1, null, [[2, 4, 5, 6]]);
      }))();
    },
    // Helper method to get human-readable field labels
    getFieldLabel: function getFieldLabel(field) {
      var fieldLabels = {
        'client': this.$t('Client'),
        'selectedProducts': this.$t('Products'),
        'orderTax': this.$t('Order Tax'),
        'netTotal': this.$t('Net Total'),
        'poReference': this.$t('PO Reference'),
        'paymentTerms': this.$t('Payment Terms'),
        'deliveryPlace': this.$t('Delivery Place'),
        'account': this.$t('Account'),
        'paidAmount': this.$t('Paid Amount'),
        'chequeNo': this.$t('Cheque Number'),
        'receiptNo': this.$t('Receipt Number'),
        'date': this.$t('Date'),
        'note': this.$t('Note'),
        'status': this.$t('Status'),
        'addPayment': this.$t('Add Payment'),
        'isSendEmail': this.$t('Send Email'),
        'isSendSMS': this.$t('Send SMS'),
        'discountType': this.$t('Discount Type'),
        'discount': this.$t('Discount'),
        'transportCost': this.$t('Transport Cost'),
        'reference': this.$t('Reference')
      };
      return fieldLabels[field] || this.$t(field.charAt(0).toUpperCase() + field.slice(1));
    },
    // Helper method to handle specific business logic errors
    handleBusinessLogicError: function handleBusinessLogicError(errorData) {
      var _this20 = this;
      var message = errorData.message,
        errors = errorData.errors,
        details = errorData.details;

      // Handle specific error types with more detailed matching
      if (message && message.includes('Bank Account must have a Chart of Account assigned for journal entries')) {
        toast.fire({
          type: "warning",
          title: this.$t("Bank Account Chart of Account Required"),
          text: this.$t("The selected bank account must have a Chart of Account assigned for journal entries. Please select a different account or assign a Chart of Account to this bank account."),
          timer: 10000,
          timerProgressBar: true,
          showConfirmButton: true,
          confirmButtonText: this.$t("Go to Bank Accounts"),
          showCancelButton: true,
          cancelButtonText: this.$t("Close")
        }).then(function (result) {
          if (result.isConfirmed) {
            // Navigate to bank accounts page
            _this20.$router.push({
              name: 'accounts.index'
            });
          }
        });
        return true;
      }
      if (message && message.includes('Chart of Account')) {
        toast.fire({
          type: "warning",
          title: this.$t("Chart of Account Required"),
          text: message,
          timer: 8000,
          timerProgressBar: true
        });
        return true;
      }
      if (message && message.includes('Sales Account')) {
        toast.fire({
          type: "warning",
          title: this.$t("Sales Account Required"),
          text: message,
          timer: 8000,
          timerProgressBar: true
        });
        return true;
      }
      if (message && message.includes('VAT Account')) {
        toast.fire({
          type: "warning",
          title: this.$t("VAT Account Required"),
          text: message,
          timer: 8000,
          timerProgressBar: true
        });
        return true;
      }
      if (message && message.includes('Discount Allowed account')) {
        toast.fire({
          type: "warning",
          title: this.$t("Account Configuration Required"),
          text: message,
          timer: 8000,
          timerProgressBar: true
        });
        return true;
      }

      // Handle other business logic errors
      if (message) {
        toast.fire({
          type: "error",
          title: this.$t("Business Rule Violation"),
          text: message,
          timer: 8000,
          timerProgressBar: true
        });
        return true;
      }
      return false;
    },
    // Reset form
    resetForm: function resetForm() {
      this.form.reset();
      this.form.errors.clear();
      this.form.selectedProducts = [];
      this.form.subTotal = 0;
      this.form.netTotal = 0;
      this.form.totalTax = 0;
      this.form.productTotalTax = 0;
      this.form.invoiceTax = 0;
      this.form.totalDiscount = 0;
      this.form.discount = 0;
      this.form.transportCost = "";
      this.form.orderTax = "";
      this.form.account = "";
      this.form.totalPaid = "";
      this.form.dueAmount = "";
      this.form.poReference = "";
      this.form.paymentTerms = "";
      this.form.deliveryPlace = "";
      this.form.addPayment = 0; // Reset to 0 (No) by default
      this.form.chequeNo = "";
      this.form.receiptNo = "";
      this.form.date = new Date().toISOString().slice(0, 10);
      this.form.note = "";
      this.form.status = 1;
      this.form.isSendEmail = false;
      this.form.isSendSMS = false;
      this.form.discountType = 0;
      this.form.reference = "";

      // Ensure calculations are reset
      this.calculateSum();
    },
    // Clear validation errors for a specific field
    clearFieldError: function clearFieldError(field) {
      if (this.form.errors.has(field)) {
        this.form.errors.clear(field);
      }
    },
    // Clear all payment-related validation errors
    clearPaymentErrors: function clearPaymentErrors() {
      this.clearFieldError('account');
      this.clearFieldError('paidAmount');
      this.clearFieldError('chequeNo');
      this.clearFieldError('receiptNo');
    },
    // Clear validation errors for product fields
    clearProductErrors: function clearProductErrors(index) {
      var _this21 = this;
      var fields = ['qty', 'unitPrice', 'discount', 'discountType', 'productTax'];
      fields.forEach(function (field) {
        var errorKey = "selectedProducts.".concat(index, ".").concat(field);
        if (_this21.form.errors.has(errorKey)) {
          _this21.form.errors.clear(errorKey);
        }
      });
    },
    // Global error handler for any unhandled errors
    handleGlobalError: function handleGlobalError(error) {
      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Unknown operation';
      console.error("Global error in ".concat(context, ":"), error);

      // Show a generic error toast
      toast.fire({
        type: "error",
        title: this.$t("Unexpected Error"),
        text: this.$t("Please check your input and try again."),
        timer: 6000,
        timerProgressBar: true
      });
    },
    // Set up global error handling
    setupGlobalErrorHandling: function setupGlobalErrorHandling() {
      var _this22 = this;
      // Handle unhandled promise rejections
      this.unhandledRejectionHandler = function (event) {
        console.error('Unhandled promise rejection:', event.reason);
        _this22.handleGlobalError(event.reason, 'Promise rejection');
      };

      // Handle unhandled errors
      this.unhandledErrorHandler = function (event) {
        console.error('Unhandled error:', event.error);
        _this22.handleGlobalError(event.error, 'JavaScript error');
      };

      // Add event listeners
      window.addEventListener('unhandledrejection', this.unhandledRejectionHandler);
      window.addEventListener('error', this.unhandledErrorHandler);
    },
    // Clean up global error handlers
    cleanupGlobalErrorHandling: function cleanupGlobalErrorHandling() {
      if (this.unhandledRejectionHandler) {
        window.removeEventListener('unhandledrejection', this.unhandledRejectionHandler);
      }
      if (this.unhandledErrorHandler) {
        window.removeEventListener('error', this.unhandledErrorHandler);
      }
    },
    // Auto-assign Chart of Account for a specific product
    autoAssignProductChartOfAccount: function autoAssignProductChartOfAccount(product) {
      var _arguments2 = arguments,
        _this23 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10() {
        var type, response, exists, _error$response29, _error$response30, _error$response31, _error$response32, _error$response33, _error$response34, errorMessage, _errorMessage5, _t11;
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.p = _context10.n) {
            case 0:
              type = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : 'sales';
              if (!(!product || _this23.isAutoAssigningProduct === product.id)) {
                _context10.n = 1;
                break;
              }
              return _context10.a(2);
            case 1:
              _this23.isAutoAssigningProduct = product.id;
              _context10.p = 2;
              _context10.n = 3;
              return _this23.$http.post("/api/products/".concat(product.slug, "/").concat(type, "/auto-assign-chart-of-account"));
            case 3:
              response = _context10.v;
              if (response.data.success) {
                // Update the product data with new chart of account
                product.sales_account_id = response.data.sales_account_id;

                // If item not yet in table, add it now
                exists = _this23.form.selectedProducts && _this23.form.selectedProducts.some(function (p) {
                  return p.id === product.id;
                });
                if (!exists) {
                  _this23.storeProduct(product);
                }

                // Force Vue to re-render the component to update the UI
                _this23.$nextTick(function () {
                  _this23.$forceUpdate();
                });

                // Show success message
                toast.fire({
                  type: "success",
                  title: _this23.$t("Chart of Account assigned successfully")
                });
              } else {
                toast.fire({
                  type: "error",
                  title: _this23.$t("Failed to assign Chart of Account"),
                  text: response.data.message || _this23.$t("Please try again or assign manually")
                });
              }
              _context10.n = 5;
              break;
            case 4:
              _context10.p = 4;
              _t11 = _context10.v;
              console.error('Error auto-assigning chart of account for product:', _t11);

              // Handle different types of errors
              if (((_error$response29 = _t11.response) === null || _error$response29 === void 0 ? void 0 : _error$response29.status) === 400) {
                errorMessage = _t11.response.data.message || _this23.$t("Bad request error");
                toast.fire({
                  type: "error",
                  title: _this23.$t("Assignment Failed"),
                  text: errorMessage,
                  timer: 6000,
                  timerProgressBar: true
                });
              } else if (((_error$response30 = _t11.response) === null || _error$response30 === void 0 ? void 0 : _error$response30.status) === 401) {
                toast.fire({
                  type: "error",
                  title: _this23.$t("Authentication Error"),
                  text: _this23.$t("You are not authorized to perform this action. Please log in again."),
                  timer: 5000,
                  timerProgressBar: true
                });
              } else if (((_error$response31 = _t11.response) === null || _error$response31 === void 0 ? void 0 : _error$response31.status) === 403) {
                toast.fire({
                  type: "error",
                  title: _this23.$t("Permission Error"),
                  text: _this23.$t("You don't have permission to assign Chart of Accounts."),
                  timer: 5000,
                  timerProgressBar: true
                });
              } else if (((_error$response32 = _t11.response) === null || _error$response32 === void 0 ? void 0 : _error$response32.status) === 404) {
                toast.fire({
                  type: "error",
                  title: _this23.$t("Product Not Found"),
                  text: _this23.$t("The product was not found. Please refresh the page and try again."),
                  timer: 5000,
                  timerProgressBar: true
                });
              } else if (((_error$response33 = _t11.response) === null || _error$response33 === void 0 ? void 0 : _error$response33.status) >= 500) {
                _errorMessage5 = _t11.response.data.message || _this23.$t("Server error");
                toast.fire({
                  type: "error",
                  title: _this23.$t("Server Error"),
                  text: "".concat(_errorMessage5, " (").concat(_this23.$t("Please try again later"), ")"),
                  timer: 8000,
                  timerProgressBar: true
                });
              } else if ((_error$response34 = _t11.response) !== null && _error$response34 !== void 0 && (_error$response34 = _error$response34.data) !== null && _error$response34 !== void 0 && _error$response34.message) {
                toast.fire({
                  type: "error",
                  title: _this23.$t("Please try again or assign manually"),
                  text: _t11.response.data.message,
                  timer: 6000,
                  timerProgressBar: true
                });
              } else if (_t11.message) {
                toast.fire({
                  type: "error",
                  title: _this23.$t("Please try again or assign manually"),
                  text: _t11.message,
                  timer: 6000,
                  timerProgressBar: true
                });
              } else {
                toast.fire({
                  type: "error",
                  title: _this23.$t("Failed to assign Chart of Account"),
                  text: _this23.$t("Please try again or assign manually"),
                  timer: 5000,
                  timerProgressBar: true
                });
              }
            case 5:
              _context10.p = 5;
              _this23.isAutoAssigningProduct = null;
              return _context10.f(5);
            case 6:
              return _context10.a(2);
          }
        }, _callee10, null, [[2, 4, 5, 6]]);
      }))();
    },
    // Stock adjustment modal methods
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
        toast.fire({
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

      // Update the specific product in selectedProducts if it exists
      var product = eventData.product,
        newQuantity = eventData.newQuantity;
      var index = this.form.selectedProducts.findIndex(function (p) {
        return p.id === product.id;
      });
      if (index !== -1) {
        this.$set(this.form.selectedProducts[index], 'inventoryCount', (this.form.selectedProducts[index].inventoryCount || 0) + newQuantity);

        // Recalculate totals
        this.calculateSum();
      }
    },
    // Sync selected products' inventoryCount with latest products list
    refreshSelectedProductsInventory: function refreshSelectedProductsInventory() {
      try {
        if (!Array.isArray(this.products) || !Array.isArray(this.form.selectedProducts)) return;
        var productById = new Map(this.products.map(function (p) {
          return [p.id, p];
        }));
        this.form.selectedProducts = this.form.selectedProducts.map(function (item) {
          var latest = productById.get(item.id);
          if (latest) {
            var updated = _objectSpread({}, item);
            updated.inventoryCount = latest.inventoryCount;
            // Optionally update name/code/taxRate to reflect latest
            updated.name = latest.name || updated.name;
            updated.code = latest.code || updated.code;
            updated.taxRate = latest.taxRate !== undefined && latest.taxRate !== null ? latest.taxRate : updated.taxRate;
            return updated;
          }
          return item;
        });
        // Recalculate to update any dependent totals
        this.calculateSum();
      } catch (e) {
        // silent fail
      }
    },
    // Normalize form.client to an object from items by id/slug so v-select shows it
    normalizeClientSelection: function normalizeClientSelection() {
      try {
        var items = this.items || [];
        if (!this.form.client || items.length === 0) {
          console.warn('[Invoice] normalizeClientSelection: No client or items list available');
          return;
        }
        var current = this.form.client;
        var matched = null;
        if (current.id) {
          matched = items.find(function (i) {
            return i.id === current.id;
          });
          if (matched) {
            console.log("[Invoice] normalizeClientSelection: Found client by ID: ".concat(matched.name));
          }
        }
        if (!matched && current.slug) {
          matched = items.find(function (i) {
            return i.slug === current.slug;
          });
          if (matched) {
            console.log("[Invoice] normalizeClientSelection: Found client by slug: ".concat(matched.name));
          }
        }
        if (matched) {
          this.form.client = matched;
        } else {
          console.warn("[Invoice] normalizeClientSelection: Could not find matching client for:", current);
        }
      } catch (e) {
        console.error('[Invoice] normalizeClientSelection error:', e);
      }
    },
    showAllInsufficientStock: function showAllInsufficientStock() {
      var _this24 = this;
      // Show a summary of all insufficient stock products
      var insufficientProducts = this.insufficientStockProducts;
      if (insufficientProducts.length === 0) return;
      var message = this.$t("Products with insufficient stock:") + "\n\n";
      insufficientProducts.forEach(function (product, index) {
        var shortage = Number(product.qty) - Number(product.inventoryCount);
        message += "".concat(index + 1, ". ").concat(product.name, "\n");
        message += "   ".concat(_this24.$t("Required"), ": ").concat(product.qty, ", ").concat(_this24.$t("Available"), ": ").concat(product.inventoryCount, ", ").concat(_this24.$t("Shortage"), ": ").concat(shortage, "\n\n");
      });
      message += this.$t("Click on the red badges next to each product to manage stock levels.");
      toast.fire({
        type: "warning",
        title: this.$t("Insufficient Stock Summary"),
        text: message,
        timer: 10000,
        showConfirmButton: true
      });
    },
    // Update all products with default VAT rate if they don't have one selected
    updateProductsWithDefaultVatRate: function updateProductsWithDefaultVatRate() {
      var _this25 = this;
      if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
        this.form.selectedProducts.forEach(function (item, index) {
          if (!item.selectedVatRate) {
            // First try to use the product's default VAT rate, then fall back to invoice default
            if (item.productTax) {
              item.selectedVatRate = item.productTax;
            } else if (_this25.form.orderTax) {
              item.selectedVatRate = _this25.form.orderTax;
            } else if (_this25.taxes && _this25.taxes.length > 0) {
              item.selectedVatRate = _this25.taxes[0];
            }
            _this25.generateItemTotalPrice(index);
          }
        });
      }
    },
    // Recalculate all VAT amounts for all products
    recalculateAllVatAmounts: function recalculateAllVatAmounts() {
      var _this26 = this;
      if (this.form.selectedProducts && this.form.selectedProducts.length > 0) {
        this.form.selectedProducts.forEach(function (item, index) {
          _this26.generateItemTotalPrice(index);
        });
        this.calculateSum();
      }
    },
    // Find matching VAT rate from taxes array
    findMatchingVatRate: function findMatchingVatRate(productTax) {
      if (!productTax || !this.taxes || this.taxes.length === 0) {
        return null;
      }

      // Try to find by ID first (most reliable)
      if (productTax.id) {
        var matchById = this.taxes.find(function (tax) {
          return tax.id === productTax.id;
        });
        if (matchById) {
          return matchById;
        }
      }

      // Try to find by slug
      if (productTax.slug) {
        var matchBySlug = this.taxes.find(function (tax) {
          return tax.slug === productTax.slug;
        });
        if (matchBySlug) {
          return matchBySlug;
        }
      }

      // Try to find by code
      if (productTax.code) {
        var matchByCode = this.taxes.find(function (tax) {
          return tax.code === productTax.code;
        });
        if (matchByCode) {
          return matchByCode;
        }
      }

      // Try to find by rate (least reliable but fallback)
      if (productTax.rate !== undefined) {
        var matchByRate = this.taxes.find(function (tax) {
          return tax.rate === productTax.rate;
        });
        if (matchByRate) {
          return matchByRate;
        }
      }
      return null;
    },
    // Show multiple validation errors in a comprehensive way
    showMultipleValidationErrors: function showMultipleValidationErrors(validationErrors) {
      if (validationErrors.length === 0) return;

      // If there's only one error, show it normally
      if (validationErrors.length === 1) {
        var error = validationErrors[0];
        toast.fire({
          type: error.type,
          title: error.title,
          text: error.message,
          timer: error.timer || 6000,
          timerProgressBar: error.timerProgressBar || false
        });
        return;
      }

      // For multiple errors, show the comprehensive summary
      this.showValidationSummary(validationErrors.map(function (error) {
        return error.message;
      }));
    },
    // Show detailed validation errors one by one
    showDetailedValidationErrors: function showDetailedValidationErrors(validationErrors) {
      validationErrors.forEach(function (error, index) {
        setTimeout(function () {
          toast.fire({
            type: error.type,
            title: error.title,
            text: error.message,
            timer: error.timer || 6000,
            timerProgressBar: error.timerProgressBar || false
          });
        }, index * 1000); // Show each error with 1 second delay
      });
    },
    // Show backend validation errors
    showBackendValidationErrors: function showBackendValidationErrors(validationErrors, mainMessage) {
      if (validationErrors.length === 0) return;

      // If there's only one error, show it normally
      if (validationErrors.length === 1) {
        toast.fire({
          type: "warning",
          title: this.$t("Validation Error"),
          text: validationErrors[0],
          timer: 8000,
          timerProgressBar: true
        });
        return;
      }

      // For multiple errors, show the comprehensive summary
      this.showValidationSummary(validationErrors);
    },
    // Show comprehensive validation summary
    showValidationSummary: function showValidationSummary(validationErrors) {
      if (validationErrors.length === 0) return;

      // Create a formatted error list
      var errorList = validationErrors.map(function (error, index) {
        return "".concat(index + 1, ". ").concat(error);
      }).join('\n');

      // Show a comprehensive error message
      toast.fire({
        type: "warning",
        title: this.$t("Validation Summary"),
        html: "\n          <div style=\"text-align: left;\">\n            <p><strong>".concat(this.$t("Please fix the following issues:"), "</strong></p>\n            <div style=\"max-height: 200px; overflow-y: auto; background: #f8f9fa; padding: 10px; border-radius: 4px; font-family: monospace; font-size: 12px; white-space: pre-line;\">\n              ").concat(errorList, "\n            </div>\n          </div>\n        "),
        timer: 15000,
        timerProgressBar: true,
        showConfirmButton: true,
        confirmButtonText: this.$t("Got it"),
        showCancelButton: false,
        width: '500px'
      });
    },
    // Show payment-specific validation errors
    showPaymentValidationErrors: function showPaymentValidationErrors() {
      if (this.form.addPayment != 1) {
        return;
      }
      var errors = [];
      if (!this.form.account) {
        errors.push(this.$t("Please choose a bank account for the payment."));
      }
      if (!this.form.paidAmount || Number(this.form.paidAmount) <= 0) {
        errors.push(this.$t("Paid amount must be greater than 0."));
      }
      if (errors.length > 0) {
        toast.fire({
          type: "warning",
          title: this.$t("Payment Information Required"),
          html: "\n            <div style=\"text-align: left;\">\n              <p><strong>".concat(this.$t("Please provide the following payment information:"), "</strong></p>\n              <ul style=\"margin: 10px 0; padding-left: 20px;\">\n                ").concat(errors.map(function (error) {
            return "<li>".concat(error, "</li>");
          }).join(''), "\n              </ul>\n            </div>\n          "),
          timer: 8000,
          timerProgressBar: true,
          showConfirmButton: true,
          confirmButtonText: this.$t("Got it"),
          showCancelButton: false,
          width: '450px'
        });
      }
    },
    // Validate form before submission to show payment errors in toast
    validateFormBeforeSubmit: function validateFormBeforeSubmit(event) {
      // If payment is enabled, validate payment fields first
      if (this.form.addPayment == 1) {
        var paymentValidation = this.validatePaymentFields();
        if (!paymentValidation.isValid) {
          event.preventDefault();
          this.showPaymentValidationErrors();
          return false;
        }
      }

      // If all validations pass, allow form submission
      return true;
    },
    // Handle form submission with payment validation
    handleFormSubmit: function handleFormSubmit(event) {
      var _this27 = this;
      return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11() {
        var paymentValidation;
        return _regenerator().w(function (_context11) {
          while (1) switch (_context11.p = _context11.n) {
            case 0:
              // Set submitting flag to prevent field resets
              _this27.isSubmitting = true;
              _context11.p = 1;
              if (!_this27.isDiscountExceedingTotal) {
                _context11.n = 2;
                break;
              }
              event.preventDefault();
              toast.fire({
                type: "error",
                title: _this27.$t("Validation Error"),
                text: _this27.$t("Discount amount cannot exceed the invoice total amount"),
                timer: 5000,
                timerProgressBar: true
              });
              return _context11.a(2);
            case 2:
              if (!(_this27.form.addPayment == 1)) {
                _context11.n = 3;
                break;
              }
              paymentValidation = _this27.validatePaymentFields();
              if (paymentValidation.isValid) {
                _context11.n = 3;
                break;
              }
              event.preventDefault();
              _this27.showPaymentValidationErrors();
              return _context11.a(2);
            case 3:
              _context11.n = 4;
              return _this27.saveInvoice();
            case 4:
              _context11.p = 4;
              // Reset submitting flag
              _this27.isSubmitting = false;
              return _context11.f(4);
            case 5:
              return _context11.a(2);
          }
        }, _callee11, null, [[1,, 4, 5]]);
      }))();
    },
    // on account change
    onAccountChange: function onAccountChange() {
      var _this28 = this;
      // Don't process account changes during form submission
      if (this.isSubmitting) {
        return;
      }

      // Clear any previous validation errors
      this.clearFieldError('account');

      // If an account is selected, clear any existing errors
      if (this.form.account) {
        this.form.errors.clear('account');
      }

      // Only reset payment fields if this is a genuine account change (not during form submission)
      // Check if the account actually changed to a different one
      if (this.form.account && this.form.addPayment == 1) {
        // Validate that the selected bank account has a chart of account assigned
        if (!this.form.account.chartOfAccountId) {
          toast.fire({
            type: "warning",
            title: this.$t("Bank Account Chart of Account Required"),
            text: this.$t("The selected bank account must have a Chart of Account assigned for journal entries. Please select a different account or assign a Chart of Account to this bank account."),
            timer: 8000,
            timerProgressBar: true,
            showConfirmButton: true,
            confirmButtonText: this.$t("Go to Bank Accounts"),
            showCancelButton: true,
            cancelButtonText: this.$t("Close")
          }).then(function (result) {
            if (result.isConfirmed) {
              // Navigate to bank accounts page
              _this28.$router.push({
                name: 'accounts.index'
              });
            }
          });
        }
      }
      this.calculateSum();
    },
    // Navigate to bank accounts page
    goToBankAccounts: function goToBankAccounts() {
      this.$router.push({
        name: 'accounts.index'
      });
    },
    // Handle add payment change
    onAddPaymentChange: function onAddPaymentChange() {
      this.clearFieldError('addPayment');
      if (this.form.addPayment != 1) {
        // Payment was disabled, clear related field errors and reset payment fields
        this.form.paidAmount = "";
        this.form.account = "";
        this.form.chequeNo = "";
        this.form.receiptNo = "";
        this.clearFieldError('account');
        this.clearFieldError('paidAmount');
        this.clearFieldError('chequeNo');
        this.clearFieldError('receiptNo');
      } else {
        // Payment was enabled, clear any previous payment field errors
        this.clearFieldError('account');
        this.clearFieldError('paidAmount');
        this.clearFieldError('chequeNo');
        this.clearFieldError('receiptNo');
      }
    },
    // Handle paid amount change
    onPaidAmountChange: function onPaidAmountChange() {
      // Clear any previous validation errors immediately
      this.clearFieldError('paidAmount');

      // If user is typing and the amount is valid, clear any errors
      if (this.form.paidAmount && Number(this.form.paidAmount) > 0) {
        // Clear any existing errors since the field is now valid
        this.form.errors.clear('paidAmount');
      }

      // Validate that paid amount is greater than 0
      if (this.form.paidAmount && Number(this.form.paidAmount) <= 0) {
        this.form.errors.set('paidAmount', this.$t('Paid amount must be greater than 0'));
        return;
      }

      // Validate that paid amount doesn't exceed net total
      if (this.form.paidAmount && Number(this.form.paidAmount) > Number(this.form.netTotal)) {
        this.form.errors.set('paidAmount', this.$t('Paid amount cannot exceed the net total'));
      }
    },
    // save form data temporarily
    saveTemporary: function saveTemporary() {
      var tempData = {
        invoiceNo: this.form.invoiceNo,
        client: this.form.client,
        reference: this.form.reference,
        selectedProducts: this.form.selectedProducts,
        subTotal: this.form.subTotal,
        netTotal: this.form.netTotal,
        transportCost: this.form.transportCost,
        transportIsTaxable: this.form.transportIsTaxable,
        orderTax: this.form.orderTax,
        totalProductTax: this.form.totalProductTax,
        totalTax: this.form.totalTax,
        discount: this.form.discount,
        discountType: this.form.discountType,
        poReference: this.form.poReference,
        paymentTerms: this.form.paymentTerms,
        addPayment: this.form.addPayment,
        account: this.form.account,
        paidAmount: this.form.paidAmount,
        paymentMethod: this.form.paymentMethod,
        chequeNo: this.form.chequeNo,
        receiptNo: this.form.receiptNo,
        deliveryPlace: this.form.deliveryPlace,
        date: this.form.date,
        note: this.form.note,
        status: this.form.status,
        isSendEmail: this.form.isSendEmail,
        isSendSMS: this.form.isSendSMS,
        costCenter: this.form.costCenter,
        cost_center_id: this.form.cost_center_id,
        saleStatus: this.form.saleStatus,
        sale_status: this.form.sale_status,
        representative: this.form.representative,
        representative_id: this.form.representative_id,
        cashier: this.form.cashier,
        cashier_id: this.form.cashier_id,
        branch: this.form.branch,
        branch_id: this.form.branch_id,
        current_date: this.form.current_date,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('invoiceTempData', JSON.stringify(tempData));
    },
    // load temporary data
    loadTemporaryData: function loadTemporaryData() {
      var tempData = localStorage.getItem('invoiceTempData');
      if (tempData) {
        try {
          var data = JSON.parse(tempData);
          this.form.invoiceNo = data.invoiceNo || '';
          this.form.client = data.client || this.form.client;
          this.form.reference = data.reference || this.form.reference;
          this.form.selectedProducts = data.selectedProducts || this.form.selectedProducts;
          this.form.subTotal = data.subTotal || this.form.subTotal;
          this.form.netTotal = data.netTotal || this.form.netTotal;
          this.form.transportCost = data.transportCost || this.form.transportCost;
          this.form.transportIsTaxable = data.transportIsTaxable !== undefined ? data.transportIsTaxable : this.form.transportIsTaxable;
          this.form.orderTax = data.orderTax || this.form.orderTax;
          this.form.totalProductTax = data.totalProductTax || this.form.totalProductTax;
          this.form.totalTax = data.totalTax || this.form.totalTax;
          this.form.discount = data.discount || this.form.discount;
          this.form.discountType = data.discountType || this.form.discountType;
          this.form.poReference = data.poReference || this.form.poReference;
          this.form.paymentTerms = data.paymentTerms || this.form.paymentTerms;
          this.form.addPayment = data.addPayment || this.form.addPayment;
          this.form.account = data.account || this.form.account;
          this.form.paidAmount = data.paidAmount || this.form.paidAmount;
          this.form.paymentMethod = data.paymentMethod || this.form.paymentMethod;
          this.form.chequeNo = data.chequeNo || this.form.chequeNo;
          this.form.receiptNo = data.receiptNo || this.form.receiptNo;
          this.form.deliveryPlace = data.deliveryPlace || this.form.deliveryPlace;
          this.form.date = data.date || this.form.date;
          this.form.note = data.note || this.form.note;
          this.form.status = data.status !== undefined ? data.status : this.form.status;
          this.form.isSendEmail = data.isSendEmail || this.form.isSendEmail;
          this.form.isSendSMS = data.isSendSMS || this.form.isSendSMS;
          this.form.costCenter = data.costCenter || this.form.costCenter;
          this.form.cost_center_id = data.cost_center_id || this.form.cost_center_id;
          this.form.saleStatus = data.saleStatus || this.form.saleStatus;
          this.form.sale_status = data.sale_status || this.form.sale_status;
          this.form.representative = data.representative || this.form.representative;
          this.form.representative_id = data.representative_id || this.form.representative_id;
          this.form.cashier = data.cashier || this.form.cashier;
          this.form.cashier_id = data.cashier_id || this.form.cashier_id;
          this.form.branch = data.branch || this.form.branch;
          this.form.branch_id = data.branch_id || this.form.branch_id;
          this.form.current_date = data.current_date || new Date().toISOString().slice(0, 10);

          // Sync sale status
          if (this.form.saleStatus) {
            this.form.sale_status = this.form.saleStatus;
          }

          // Sync representative, cashier, and branch IDs
          if (this.form.representative && this.form.representative.id) {
            this.form.representative_id = this.form.representative.id;
          }
          if (this.form.cashier && this.form.cashier.id) {
            this.form.cashier_id = this.form.cashier.id;
          }
          if (this.form.branch && this.form.branch.id) {
            this.form.branch_id = this.form.branch.id;
          }

          // One-time restore: clear after successful load so a refresh doesn't restore again
          this.clearTemporaryData();

          // Ensure product fields exist and recalculate totals after restore
          this.ensureDiscountProperties();
          this.calculateSum();

          // Attempt to refresh inventory counts in case stock changed while away
          this.refreshSelectedProductsInventory();

          // Normalize client selection to list option so v-select shows it
          this.normalizeClientSelection();
        } catch (error) {
          console.error('Error loading temporary data:', error);
        }
      }
    },
    // clear temporary data
    clearTemporaryData: function clearTemporaryData() {
      localStorage.removeItem('invoiceTempData');
    }
  }
});
;// ./resources/js/pages/sales/invoices/create.vue?vue&type=script&lang=js
 /* harmony default export */ const invoices_createvue_type_script_lang_js = (createvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/invoices/create.vue?vue&type=style&index=0&id=5f535d2c&prod&scoped=true&lang=css
var createvue_type_style_index_0_id_5f535d2c_prod_scoped_true_lang_css = __webpack_require__(88481);
;// ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/sales/invoices/create.vue?vue&type=style&index=0&id=5f535d2c&prod&scoped=true&lang=css

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = injectStylesIntoStyleTag_default()(createvue_type_style_index_0_id_5f535d2c_prod_scoped_true_lang_css/* default */.A, options);



/* harmony default export */ const invoices_createvue_type_style_index_0_id_5f535d2c_prod_scoped_true_lang_css = (createvue_type_style_index_0_id_5f535d2c_prod_scoped_true_lang_css/* default */.A.locals || {});
;// ./resources/js/pages/sales/invoices/create.vue?vue&type=style&index=0&id=5f535d2c&prod&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(14486);
;// ./resources/js/pages/sales/invoices/create.vue



;


/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  invoices_createvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "5f535d2c",
  null
  
)

/* harmony default export */ const create = (component.exports);

/***/ }

}]);