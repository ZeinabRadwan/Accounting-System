# Currency SVG Implementation

This document explains the implementation of SVG currency symbols in the accounting system, specifically for the Saudi Riyal (SAR) currency.

## Overview

The system has been updated to support SVG currency symbols instead of Unicode text symbols. This provides better visual consistency and scalability across different devices and browsers.

## Files Modified

### 1. SVG Asset
- **File**: `public/images/riyal-symbol.svg`
- **Description**: The SVG file containing the Saudi Riyal symbol with proper dimensions and styling

### 2. Database Seeders
- **Files**: 
  - `database/seeders/CurrencySeeder.php`
  - `database/seeders/CentralCurrencySeeder.php`
  - `database/seeders/Demo/DemoCurrenciesTableSeeder.php`
- **Changes**: Updated SAR currency symbol from Unicode `﷼` to `riyal-symbol.svg`

### 3. Vue Components
- **File**: `resources/js/components/CurrencySymbol.vue`
- **Description**: A reusable Vue component that renders either SVG or text currency symbols

### 4. Helper Functions
- **File**: `resources/js/helpers/currency.js`
- **Description**: Utility functions for currency formatting with SVG support

### 5. Vue Mixin
- **File**: `resources/js/mixins/currencyMixin.js`
- **Description**: Global mixin providing currency-related methods to all Vue components

### 6. Vue Filters
- **File**: `resources/js/plugins/filter.js`
- **Description**: Updated currency filters to handle SVG symbols

### 7. Global Registration
- **Files**: 
  - `resources/js/components/index.js`
  - `resources/js/tenant.js`
  - `resources/js/central.js`
- **Description**: Registered CurrencySymbol component and currencyMixin globally

## Usage

### In Vue Templates

```vue
<template>
  <!-- Using the CurrencySymbol component -->
  <currency-symbol 
    :symbol="currency.symbol"
    :currency-code="currency.code"
    :width="20"
    :height="20"
  />
  
  <!-- Using the mixin method -->
  <span v-if="isSvgCurrencySymbol(currency.symbol, currency.code)">
    <img :src="getSvgCurrencyPath(currency.symbol)" alt="Currency Symbol" />
  </span>
  <span v-else>{{ currency.symbol }}</span>
</template>
```

### In JavaScript

```javascript
// Check if currency should use SVG
if (this.isSvgCurrencySymbol(currency.symbol, currency.code)) {
  // Handle SVG currency
  const symbolPath = this.getSvgCurrencyPath(currency.symbol);
}

// Format currency with symbol
const formatted = this.formatCurrencyWithSymbol(amount, currency);
```

### Using Vue Filters

```vue
<template>
  <!-- The filter automatically handles SVG symbols -->
  <span>{{ amount | withCurrency }}</span>
</template>
```

## Supported Currencies

Currently, the following currencies are configured to use SVG symbols:
- **SAR** (Saudi Riyal) - uses `riyal-symbol.svg`
- **RY** (Riyal) - uses `riyal-symbol.svg`

## Adding New SVG Currency Symbols

To add a new SVG currency symbol:

1. Add the SVG file to `public/images/`
2. Update the `getSvgSymbolPath()` function in `resources/js/helpers/currency.js`
3. Update the `shouldUseSvgSymbol()` function in the same file
4. Update the database seeder for the new currency

## SVG Specifications

- **ViewBox**: `0 0 1124.14 1256.39`
- **Default Fill**: `#231f20` (dark gray)
- **Recommended Size**: 16x16 to 24x24 pixels for most use cases
- **Format**: Optimized SVG with proper styling

## Browser Support

The SVG implementation supports all modern browsers:
- Chrome 4+
- Firefox 3+
- Safari 3.2+
- IE 9+
- Edge (all versions)

## Performance Considerations

- SVG files are cached by the browser
- The CurrencySymbol component includes proper loading states
- Fallback to text symbols if SVG fails to load
- Minimal impact on bundle size

## Testing

To test the implementation:

1. Run the database seeders to update currency symbols
2. Check currency display in the admin panel
3. Verify SVG rendering in different browsers
4. Test responsive behavior on different screen sizes

## Troubleshooting

### SVG Not Displaying
- Check if the SVG file exists in `public/images/`
- Verify the file path in the database
- Check browser console for 404 errors

### Styling Issues
- Ensure proper CSS styling for the SVG
- Check if the SVG has proper viewBox settings
- Verify color inheritance from parent elements

### Performance Issues
- Check if SVG files are properly cached
- Verify no duplicate SVG requests
- Monitor network tab for loading times
