# RTL (Right-to-Left) Support for Accounting System

This implementation provides comprehensive RTL support for Arabic and other RTL languages in the Accounting System.

## Features

- **Automatic RTL Detection**: Automatically detects RTL locales and applies appropriate styling
- **Comprehensive CSS Support**: Full RTL styling for all UI components
- **Vue.js Integration**: Seamless integration with Vue components
- **Persistent Settings**: RTL preferences are saved in localStorage
- **Responsive Design**: RTL support works on all screen sizes

## Supported RTL Languages

The following locales automatically trigger RTL mode:
- Arabic (ar)
- Persian/Farsi (fa)
- Hebrew (he)
- Urdu (ur)
- Kurdish (ku)
- Pashto (ps)
- Sindhi (sd)
- Yiddish (yi)

## How It Works

### 1. Automatic RTL Detection

When a user selects an RTL language (e.g., Arabic), the system automatically:
- Sets the `dir` attribute to "rtl" on HTML and body elements
- Applies RTL-specific CSS classes
- Updates CSS custom properties for RTL-aware styling
- Emits events for components to react to RTL changes

### 2. CSS Implementation

The RTL styles are implemented using CSS attribute selectors:
```css
[dir="rtl"] {
  direction: rtl;
  text-align: right;
}
```

This approach ensures that RTL styles are only applied when needed and can be easily overridden.

## Usage

### Basic Usage in Components

```vue
<template>
  <div class="my-component" :class="rtlClasses">
    <h1>{{ $t('Title') }}</h1>
    <p :style="{ textAlign: textAlign }">{{ $t('Content') }}</p>
  </div>
</template>

<script>
import RTLMixin from '~/mixins/RTLMixin'

export default {
  mixins: [RTLMixin],
  // ... rest of component
}
</script>
```

### Using RTL Service Directly

```javascript
import rtlService from '~/services/RTLService'

// Check if current locale is RTL
const isRTL = rtlService.isRTLLocale('ar') // true

// Set RTL mode for a specific locale
rtlService.setRTLMode('ar')

// Get current RTL status
const status = rtlService.getRTLStatus() // true/false
```

### RTL-Aware CSS Classes

The RTLMixin provides computed properties for RTL-aware styling:

```vue
<template>
  <div :class="rtlClasses">
    <button :class="getRTLSpacingClasses('ml', '3')">Button</button>
  </div>
</template>
```

## Available Mixin Properties

### Computed Properties

- `isRTL`: Boolean indicating if RTL mode is active
- `currentLocale`: Current locale string
- `rtlClasses`: Object with RTL-aware CSS classes
- `textAlign`: RTL-aware text alignment ('right' or 'left')
- `floatDirection`: RTL-aware float direction ('right' or 'left')

### Methods

- `setRTLMode(locale)`: Set RTL mode for a specific locale
- `isCurrentLocaleRTL()`: Check if current locale is RTL
- `getRTLSpacingClasses(baseClass, size)`: Get RTL-aware spacing classes
- `getRTLBorderClasses(baseClass, side)`: Get RTL-aware border classes

## CSS Custom Properties

The RTL service automatically sets CSS custom properties for RTL-aware styling:

```css
:root {
  --text-align: right;        /* RTL mode */
  --float-start: right;       /* RTL mode */
  --float-end: left;          /* RTL mode */
  --margin-start: margin-right; /* RTL mode */
  --margin-end: margin-left;    /* RTL mode */
}
```

## Event System

The RTL service emits custom events that components can listen to:

```javascript
window.addEventListener('rtl-changed', (event) => {
  const { isRTL, locale } = event.detail
  console.log(`RTL mode changed: ${isRTL}, Locale: ${locale}`)
})
```

## Component Integration

### Using the RTL Directive

```vue
<template>
  <div v-rtl>
    This content will automatically get RTL styling when RTL mode is active
  </div>
</template>
```

### Using the RTL Filter

```vue
<template>
  <span>{{ 'Hello' | rtl(currentLocale) }}</span>
</template>
```

## Styling Guidelines

### 1. Use CSS Custom Properties

Instead of hardcoding left/right values, use the CSS custom properties:

```css
.my-element {
  margin-left: var(--margin-start);
  padding-right: var(--padding-end);
}
```

### 2. Use Attribute Selectors

Always use attribute selectors for RTL-specific styles:

```css
[dir="rtl"] .my-element {
  text-align: right;
}
```

### 3. Avoid Hardcoded Directions

Don't use hardcoded left/right values in CSS:

```css
/* ❌ Bad */
.my-element {
  margin-left: 10px;
}

/* ✅ Good */
.my-element {
  margin-inline-start: 10px;
}
```

## Testing RTL

### Manual Testing

1. Change language to Arabic in the locale dropdown
2. Verify that the entire interface switches to RTL
3. Check that text alignment, margins, and layout are correct
4. Test responsive behavior on mobile devices

### Automated Testing

```javascript
// Test RTL service
import rtlService from '~/services/RTLService'

test('RTL service detects Arabic locale', () => {
  expect(rtlService.isRTLLocale('ar')).toBe(true)
})

test('RTL service sets RTL mode correctly', () => {
  rtlService.setRTLMode('ar')
  expect(rtlService.getRTLStatus()).toBe(true)
})
```

## Troubleshooting

### Common Issues

1. **RTL not working**: Check if the RTL CSS is imported and the service is initialized
2. **Layout broken**: Ensure all components use the RTLMixin or listen to RTL events
3. **Styles not applied**: Verify that CSS selectors use the correct attribute syntax

### Debug Mode

Enable debug logging in the RTL service:

```javascript
// In RTLService.js
setRTLMode(locale) {
  console.log('Setting RTL mode:', locale, this.isRTLLocale(locale))
  // ... rest of method
}
```

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Performance Considerations

- RTL styles are loaded only when needed
- CSS custom properties provide efficient RTL switching
- Event system minimizes unnecessary re-renders
- localStorage caching reduces initialization overhead

## Future Enhancements

- [ ] RTL-aware animations and transitions
- [ ] RTL support for custom fonts
- [ ] RTL-aware grid systems
- [ ] RTL support for charts and graphs
- [ ] RTL-aware print styles

## Contributing

When adding new components or styles:

1. Always consider RTL support
2. Use the RTLMixin for new components
3. Test with both LTR and RTL modes
4. Follow the CSS guidelines above
5. Add RTL-specific tests

## License

This RTL implementation is part of the Accounting System and follows the same license terms.
