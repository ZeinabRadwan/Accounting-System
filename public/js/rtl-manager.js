/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// Simple RTL manager - bundled by Mix into public/js/rtl-manager.js
(function () {
  try {
    // Prevent accidental HTML being served as JS
    if (typeof document === 'undefined') return;
    var scriptTag = document.currentScript;
    if (scriptTag && /<\/?[a-z][\s\S]*>/i.test(scriptTag.text || '')) {
      // Detected HTML content, abort
      return;
    }
    var html = document.documentElement;
    var body = document.body;
    var isRTL = (html.getAttribute('dir') || body.getAttribute('dir') || 'ltr') === 'rtl';

    // Add a class to help CSS override if needed
    if (isRTL) {
      html.classList.add('rtl');
      body.classList.add('rtl');
    } else {
      html.classList.remove('rtl');
      body.classList.remove('rtl');
    }
  } catch (e) {
    // Fail silently - this script is optional
  }
})();
/******/ })()
;