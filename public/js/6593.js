"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[6593],{

/***/ 86593
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72505);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var TenantActivityService = /*#__PURE__*/function () {
  function TenantActivityService() {
    _classCallCheck(this, TenantActivityService);
    this.sessionId = null;
    this.heartbeatInterval = null;
    this.activityTimeout = null;
    this.lastActivityTime = Date.now();
    this.heartbeatIntervalMs = 30 * 1000; // 30 seconds - more frequent updates
    this.inactivityTimeoutMs = 1 * 60 * 1000; // 1 minute
    this.isActive = false;
    this.activityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
  }

  /**
   * Start tracking user activity
   */
  return _createClass(TenantActivityService, [{
    key: "start",
    value: function start() {
      var _this = this;
      if (this.isActive) {
        return;
      }
      this.isActive = true;
      this.lastActivityTime = Date.now();

      // Set up activity listeners
      this.setupActivityListeners();

      // Send initial heartbeat
      this.sendHeartbeat();

      // Set up periodic heartbeat
      this.heartbeatInterval = setInterval(function () {
        _this.sendHeartbeat();
      }, this.heartbeatIntervalMs);

      // Set up inactivity timeout
      this.resetInactivityTimeout();
    }

    /**
     * Stop tracking user activity
     */
  }, {
    key: "stop",
    value: (function () {
      var _stop = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              if (!(!this.isActive && !this.sessionId)) {
                _context.n = 1;
                break;
              }
              return _context.a(2);
            case 1:
              this.isActive = false;

              // End the session on the server if we have a session ID
              if (!this.sessionId) {
                _context.n = 6;
                break;
              }
              _context.p = 2;
              _context.n = 3;
              return Promise.race([axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/activity/heartbeat', {
                session_id: this.sessionId,
                end_session: true
              }), new Promise(function (resolve) {
                return setTimeout(resolve, 2000);
              }) // 2 second timeout
              ]);
            case 3:
              _context.n = 5;
              break;
            case 4:
              _context.p = 4;
              _t = _context.v;
              // Silently fail - don't interrupt user experience
              console.debug('Failed to end session:', _t);
            case 5:
              this.sessionId = null;
            case 6:
              // Clear intervals
              if (this.heartbeatInterval) {
                clearInterval(this.heartbeatInterval);
                this.heartbeatInterval = null;
              }
              if (this.activityTimeout) {
                clearTimeout(this.activityTimeout);
                this.activityTimeout = null;
              }

              // Remove activity listeners
              this.removeActivityListeners();
            case 7:
              return _context.a(2);
          }
        }, _callee, this, [[2, 4]]);
      }));
      function stop() {
        return _stop.apply(this, arguments);
      }
      return stop;
    }()
    /**
     * End session on page unload (using sendBeacon for reliability)
     */
    )
  }, {
    key: "endSessionOnUnload",
    value: function endSessionOnUnload() {
      if (this.sessionId) {
        try {
          // Use sendBeacon for reliable delivery during page unload
          // sendBeacon sends as FormData or Blob, so we'll use a simple approach
          var data = new Blob([JSON.stringify({
            session_id: this.sessionId,
            end_session: true
          })], {
            type: 'application/json'
          });
          navigator.sendBeacon('/api/activity/heartbeat', data);
        } catch (error) {
          console.debug('Failed to end session on unload:', error);
        }
      }
    }

    /**
     * Set up activity event listeners
     */
  }, {
    key: "setupActivityListeners",
    value: function setupActivityListeners() {
      var _this2 = this;
      this.activityEvents.forEach(function (event) {
        document.addEventListener(event, _this2.handleActivity.bind(_this2), true);
      });

      // Also track visibility changes
      document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
    }

    /**
     * Remove activity event listeners
     */
  }, {
    key: "removeActivityListeners",
    value: function removeActivityListeners() {
      var _this3 = this;
      this.activityEvents.forEach(function (event) {
        document.removeEventListener(event, _this3.handleActivity.bind(_this3), true);
      });
      document.removeEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
    }

    /**
     * Handle user activity
     */
  }, {
    key: "handleActivity",
    value: function handleActivity() {
      if (!this.isActive) {
        return;
      }
      var now = Date.now();
      var timeSinceLastActivity = now - this.lastActivityTime;

      // Only update if there's been significant activity (more than 1 second)
      // This prevents too many updates
      if (timeSinceLastActivity > 1000) {
        this.lastActivityTime = now;
        this.resetInactivityTimeout();
      }
    }

    /**
     * Handle visibility change (tab focus/blur)
     */
  }, {
    key: "handleVisibilityChange",
    value: function handleVisibilityChange() {
      if (!this.isActive) {
        return;
      }
      if (document.hidden) {
        // Tab is hidden, stop tracking
        this.stop();
      } else {
        // Tab is visible again, resume tracking
        this.start();
      }
    }

    /**
     * Reset inactivity timeout
     */
  }, {
    key: "resetInactivityTimeout",
    value: function resetInactivityTimeout() {
      var _this4 = this;
      if (this.activityTimeout) {
        clearTimeout(this.activityTimeout);
      }
      this.activityTimeout = setTimeout(function () {
        // Session expired due to inactivity
        _this4.stop();
      }, this.inactivityTimeoutMs);
    }

    /**
     * Send heartbeat to server
     */
  }, {
    key: "sendHeartbeat",
    value: (function () {
      var _sendHeartbeat = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              if (this.isActive) {
                _context2.n = 1;
                break;
              }
              return _context2.a(2);
            case 1:
              _context2.p = 1;
              _context2.n = 2;
              return axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/activity/heartbeat', {
                session_id: this.sessionId
              });
            case 2:
              response = _context2.v;
              if (response.data.success) {
                // Store session ID for future heartbeats
                if (response.data.session_id) {
                  this.sessionId = response.data.session_id;
                }
              }
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t2 = _context2.v;
              // Silently fail - don't interrupt user experience
              console.debug('Activity heartbeat failed:', _t2);
            case 4:
              return _context2.a(2);
          }
        }, _callee2, this, [[1, 3]]);
      }));
      function sendHeartbeat() {
        return _sendHeartbeat.apply(this, arguments);
      }
      return sendHeartbeat;
    }())
  }]);
}(); // Create singleton instance
var tenantActivityService = new TenantActivityService();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tenantActivityService);

/***/ }

}]);