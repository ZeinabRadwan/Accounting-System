import Vue from 'vue'
import store from '../store'

// return formatted limit
// Ex: clientLimit(10) => 10
// Ex: clientLimit(0) => 'Unlimited'
Vue.filter('limitFormat', function (limit) {
  // 0 means unlimited
  if (limit === 0) {
    return 'Unlimited';
  } else {
    return limit;
  }
});

// return formatted number
Vue.filter('numberFormat', function (number) {
  if (number) {
    return Number(number).toFixed(2);
  }
});

// return short text
Vue.filter('shortText', function (str) {
  if (str) {
    return (str.length > 30) ? str.substr(0, 30 - 1) + ' ...' : str;
  }
});

// return formatted currency
Vue.filter('withCurrency', function (number) {
  let currency = store.state.operations.appInfo.currency
  
  // Check if we're in RTL mode
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl' || 
               document.body.classList.contains('rtl')
  
  // RTL-aware position logic
  let effectivePosition = currency.position
  if (isRTL) {
    effectivePosition = currency.position === 'left' ? 'right' : 'left'
  }
  
  if (number > 0) {
    let newNumber = (Number(number).toFixed(2)).toLocaleString()
    return effectivePosition == 'left' ? currency.symbol + newNumber : newNumber + currency.symbol
  } else {
    return effectivePosition == 'left' ? currency.symbol + 0 : 0 + currency.symbol
  }
})

// return central admin active formatted currency
Vue.filter('withCentralAdminCurrency', function (number) {
  let currency = store.state.operations.appInfo.centralAdminCurrency
  
  // Check if we're in RTL mode
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl' || 
               document.body.classList.contains('rtl')
  
  // RTL-aware position logic
  let effectivePosition = currency.position
  if (isRTL) {
    effectivePosition = currency.position === 'left' ? 'right' : 'left'
  }
  
  if (number > 0) {
    let newNumber = (Number(number).toFixed(2)).toLocaleString()
    return effectivePosition == 'left' ? currency.symbol + newNumber : newNumber + currency.symbol
  } else {
    return effectivePosition == 'left' ? currency.symbol + 0 : 0 + currency.symbol
  }
})


// return formatted currency
Vue.filter('withAbsoluteCurrency', function (number) {
  let currency = store.state.operations.appInfo.currency
  
  // Check if we're in RTL mode
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl' || 
               document.body.classList.contains('rtl')
  
  // RTL-aware position logic
  let effectivePosition = currency.position
  if (isRTL) {
    effectivePosition = currency.position === 'left' ? 'right' : 'left'
  }
  
  if (number > 0) {
    let newNumber = (Number(number).toFixed(2)).toLocaleString()
    return effectivePosition == 'left' ? currency.symbol + newNumber : newNumber + currency.symbol
  } else {
    let newNumber = (Number(number).toFixed(2)).toLocaleString()
    return effectivePosition == 'left' ? '-' + currency.symbol + Math.abs(number) : newNumber + currency.symbol
  }
})


// return code with prefix
Vue.filter('withPrefix', function (code, prefix) {
  return prefix + code;
})
