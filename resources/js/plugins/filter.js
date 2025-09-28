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
  
  // Use the original symbol from the store - the SaudiRiyalSymbol font will handle the 'ê' character display
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
    // Apply toLocaleString() to the number first, then format with max 2 decimal places
    let numValue = Number(number)
    let newNumber = numValue.toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    })
    
    // Wrap the symbol in saudi-riyal class for proper display
    let symbolWithClass = `<span class="saudi-riyal">${displaySymbol}</span>`
    
    return effectivePosition == 'left' ? symbolWithClass + newNumber : newNumber + symbolWithClass
  } else {
    // Wrap the symbol in saudi-riyal class for proper display
    let symbolWithClass = `<span class="saudi-riyal">${displaySymbol}</span>`
    
    return effectivePosition == 'left' ? symbolWithClass + '0.00' : '0.00' + symbolWithClass
  }
})

// return central admin active formatted currency
Vue.filter('withCentralAdminCurrency', function (number) {
  let currency = store.state.operations.appInfo.centralAdminCurrency
  
  // Use the original symbol from the store - the SaudiRiyalSymbol font will handle the 'ê' character display
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
    // Apply toLocaleString() to the number first, then format with max 2 decimal places
    let numValue = Number(number)
    let newNumber = numValue.toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    })
    
    // Wrap the symbol in saudi-riyal class for proper display
    let symbolWithClass = `<span class="saudi-riyal">${displaySymbol}</span>`
    
    return effectivePosition == 'left' ? symbolWithClass + newNumber : newNumber + symbolWithClass
  } else {
    // Wrap the symbol in saudi-riyal class for proper display
    let symbolWithClass = `<span class="saudi-riyal">${displaySymbol}</span>`
    
    return effectivePosition == 'left' ? symbolWithClass + '0.00' : '0.00' + symbolWithClass
  }
})


// return formatted currency
Vue.filter('withAbsoluteCurrency', function (number) {
  let currency = store.state.operations.appInfo.currency
  
  // Use the original symbol from the store - the SaudiRiyalSymbol font will handle the 'ê' character display
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
    // Apply toLocaleString() to the number first, then format with max 2 decimal places
    let numValue = Number(number)
    let newNumber = numValue.toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    })
    
    // Wrap the symbol in saudi-riyal class for proper display
    let symbolWithClass = `<span class="saudi-riyal">${displaySymbol}</span>`
    
    return effectivePosition == 'left' ? symbolWithClass + newNumber : newNumber + symbolWithClass
  } else {
    // Format negative numbers properly with max 2 decimal places
    let numValue = Number(number)
    let absValue = Math.abs(numValue)
    let newNumber = absValue.toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    })
    
    // Wrap the symbol in saudi-riyal class for proper display
    let symbolWithClass = `<span class="saudi-riyal">${displaySymbol}</span>`
    
    return effectivePosition == 'left' ? '-' + symbolWithClass + newNumber : '-' + newNumber + symbolWithClass
  }
})


// return code with prefix
Vue.filter('withPrefix', function (code, prefix) {
  return prefix + code;
})
