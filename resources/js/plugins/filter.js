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
    return Number(number).toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    });
  }
  return '0.00';
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
  
  // Keep the original symbol - the SaudiRiyalSymbol font will handle the 'ê' character display
  let displaySymbol = currency.symbol
  
  // Check if we're in RTL mode
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl' || 
               document.body.classList.contains('rtl')
  
  // RTL-aware position logic
  let effectivePosition = currency.position
  if (isRTL) {
    effectivePosition = currency.position === 'left' ? 'right' : 'left'
  }
  
  if (number > 0) {
    // Fix: Apply toLocaleString() to the number first, then format
    let numValue = Number(number)
    let newNumber = numValue.toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    })
    return effectivePosition == 'left' ? displaySymbol + newNumber : newNumber + displaySymbol
  } else {
    return effectivePosition == 'left' ? displaySymbol + '0.00' : '0.00' + displaySymbol
  }
})

// return central admin active formatted currency
Vue.filter('withCentralAdminCurrency', function (number) {
  let currency = store.state.operations.appInfo.centralAdminCurrency
  
  // Keep the original symbol - the SaudiRiyalSymbol font will handle the 'ê' character display
  let displaySymbol = currency.symbol
  
  // Check if we're in RTL mode
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl' || 
               document.body.classList.contains('rtl')
  
  // RTL-aware position logic
  let effectivePosition = currency.position
  if (isRTL) {
    effectivePosition = currency.position === 'left' ? 'right' : 'left'
  }
  
  if (number > 0) {
    // Fix: Apply toLocaleString() to the number first, then format
    let numValue = Number(number)
    let newNumber = numValue.toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    })
    return effectivePosition == 'left' ? displaySymbol + newNumber : newNumber + displaySymbol
  } else {
    return effectivePosition == 'left' ? displaySymbol + '0.00' : '0.00' + displaySymbol
  }
})


// return formatted currency
Vue.filter('withAbsoluteCurrency', function (number) {
  let currency = store.state.operations.appInfo.currency
  
  // Keep the original symbol - the SaudiRiyalSymbol font will handle the 'ê' character display
  let displaySymbol = currency.symbol
  
  // Check if we're in RTL mode
  const isRTL = document.documentElement.getAttribute('dir') === 'rtl' || 
               document.body.classList.contains('rtl')
  
  // RTL-aware position logic
  let effectivePosition = currency.position
  if (isRTL) {
    effectivePosition = currency.position === 'left' ? 'right' : 'left'
  }
  
  if (number > 0) {
    // Fix: Apply toLocaleString() to the number first, then format
    let numValue = Number(number)
    let newNumber = numValue.toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    })
    return effectivePosition == 'left' ? displaySymbol + newNumber : newNumber + displaySymbol
  } else {
    // Fix: Format negative numbers properly
    let numValue = Number(number)
    let absValue = Math.abs(numValue)
    let newNumber = absValue.toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    })
    return effectivePosition == 'left' ? '-' + displaySymbol + newNumber : '-' + newNumber + displaySymbol
  }
})


// return code with prefix
Vue.filter('withPrefix', function (code, prefix) {
  return prefix + code;
})
