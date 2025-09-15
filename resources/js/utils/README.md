# Error Handling System

This directory contains utilities for consistent error handling across the application.

## ErrorHandler Class

The `ErrorHandler` class provides centralized error handling for API requests and other errors.

### Usage

#### Basic API Error Handling

```javascript
import ErrorHandler from '~/utils/errorHandler'

try {
  const response = await this.$http.post('/api/endpoint', data)
  // Handle success
} catch (error) {
  ErrorHandler.handleApiError(error, {
    showValidationErrors: true
  })
}
```

#### Options

- `showValidationErrors` (boolean): Whether to show validation errors. Default: `true`
- `customMessage` (string): Custom error message to display
- `title` (string): Custom title for the error dialog
- `timer` (number): Auto-close timer in milliseconds. Default: `6000`
- `showTimerProgressBar` (boolean): Whether to show progress bar. Default: `true`

#### Manual Error Display

```javascript
// Show error message
ErrorHandler.showError('Error Title', 'Error message')

// Show success message
ErrorHandler.showSuccess('Success', 'Operation completed successfully')

// Show warning message
ErrorHandler.showWarning('Warning', 'Please check your input')
```

### Error Types Handled

1. **400 Bad Request**: Shows validation errors or custom message
2. **401 Unauthorized**: Shows authentication error
3. **403 Forbidden**: Shows permission error
4. **404 Not Found**: Shows resource not found error
5. **409 Conflict**: Shows data conflict error
6. **422 Validation**: Shows validation errors in a formatted list
7. **5xx Server Errors**: Shows server error with support message
8. **Network Errors**: Shows connection error message

### Migration from Old Error Handling

Replace old error handling patterns:

**Before:**
```javascript
catch (error) {
  toast.fire({
    type: "error",
    title: this.$t("Oops...something went wrong"),
    text: error.message || this.$t("Please try again")
  })
}
```

**After:**
```javascript
catch (error) {
  const ErrorHandler = require('~/utils/errorHandler').default
  ErrorHandler.handleApiError(error, {
    showValidationErrors: true
  })
}
```

### Benefits

1. **Consistent Error Messages**: All errors are displayed consistently across the application
2. **Better User Experience**: Users see specific error messages instead of generic ones
3. **Centralized Logic**: Error handling logic is centralized and easy to maintain
4. **Internationalization**: All error messages support multiple languages
5. **Validation Error Handling**: Special handling for validation errors with formatted display
