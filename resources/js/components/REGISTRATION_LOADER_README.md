# Registration Loader Modal

A modern, accessible registration loader modal component for the `/register` page. Displays sequential steps with inline SVG icons, smooth animations, and full accessibility support.

## Features

- ✅ **Centered Modal Loader** - Prevents page from appearing frozen during registration
- ✅ **Sequential Steps** - Shows 3-5 steps with status indicators (pending, in-progress, done, failed)
- ✅ **Inline SVG Icons** - Embedded SVG icons for each step status
- ✅ **Modern Styling** - Rounded cards, soft shadows, smooth animations
- ✅ **Accessibility** - Screen-reader friendly, keyboard focus trap, ARIA labels
- ✅ **Error Handling** - Ability to cancel on error with clear error messages
- ✅ **Simple API** - Easy-to-use programmatic control

## Components

### 1. RegistrationLoader.vue
The main modal component located at `resources/js/components/RegistrationLoader.vue`.

### 2. registrationLoader.js
The service utility located at `resources/js/utils/registrationLoader.js` that provides the simple API.

## API Reference

### `loader.show(stepsArray)`

Display the loader modal with steps.

**Parameters:**
- `stepsArray` (Array): Array of step objects or strings
  - If string: `'Step name'` - Creates a step with label and 'pending' status
  - If object: `{ label: 'Step name', status: 'pending', message: '' }`

**Example:**
```javascript
import loader from '@/utils/registrationLoader';

// Simple array of strings
loader.show([
    'Validating input',
    'Creating database',
    'Initializing account',
    'Finishing'
]);

// Array of objects with full control
loader.show([
    { label: 'Validating input', status: 'pending' },
    { label: 'Creating database', status: 'pending' },
    { label: 'Initializing account', status: 'pending' },
    { label: 'Setting up preferences', status: 'pending' },
    { label: 'Finishing', status: 'pending' }
]);
```

### `loader.update(stepIndex, status, message)`

Update a step's status.

**Parameters:**
- `stepIndex` (number): Zero-based index of the step to update
- `status` (string): One of: `'pending'`, `'in-progress'`, `'done'`, `'failed'`
- `message` (string, optional): Optional message to display below the step label

**Example:**
```javascript
// Mark step 0 as in-progress
loader.update(0, 'in-progress');

// Mark step 0 as done with a message
loader.update(0, 'done', 'Input validated successfully');

// Mark step 1 as failed with error message
loader.update(1, 'failed', 'Database connection failed');
```

### `loader.hide()`

Hide the loader modal.

**Example:**
```javascript
loader.hide();
```

### `loader.setError(message)`

Display an error message in the loader footer and enable the cancel button.

**Parameters:**
- `message` (string): Error message to display

**Example:**
```javascript
loader.setError('Registration failed. Please try again.');
```

## Integration with Laravel/Vue.js

### Step 1: Import the Component and Service

In your Vue component (e.g., `register.vue`):

```javascript
import RegistrationLoader from '@/components/RegistrationLoader.vue';
import loader from '@/utils/registrationLoader';

export default {
    components: {
        RegistrationLoader,
    },
    // ... rest of component
}
```

### Step 2: Add Component to Template

Add the loader component to your template:

```vue
<template>
    <div>
        <!-- Your form content -->
        
        <!-- Registration Loader Modal -->
        <registration-loader @cancel="handleLoaderCancel" />
    </div>
</template>
```

### Step 3: Hook into Form Submit

Modify your form submission method to use the loader:

```javascript
methods: {
    async handleSubmit() {
        // Define your steps
        const steps = [
            { label: this.$t('Validating input'), status: 'pending' },
            { label: this.$t('Creating database'), status: 'pending' },
            { label: this.$t('Initializing account'), status: 'pending' },
            { label: this.$t('Setting up preferences'), status: 'pending' },
            { label: this.$t('Finishing'), status: 'pending' },
        ];

        // Show loader
        loader.show(steps);

        try {
            // Step 1: Validating input
            loader.update(0, 'in-progress');
            await this.delay(300); // Simulate validation
            loader.update(0, 'done', this.$t('Input validated successfully'));

            // Step 2: Creating database
            loader.update(1, 'in-progress');
            await this.delay(400);

            // Step 3: Initializing account (during API call)
            loader.update(2, 'in-progress');

            // Make your API call
            const { data } = await this.form.post('/api/register');

            loader.update(1, 'done', this.$t('Database created successfully'));
            loader.update(2, 'done', this.$t('Account initialized'));

            // Step 4: Setting up preferences
            loader.update(3, 'in-progress');
            await this.delay(300);
            loader.update(3, 'done', this.$t('Preferences configured'));

            // Step 5: Finishing
            loader.update(4, 'in-progress');
            await this.delay(200);
            loader.update(4, 'done', this.$t('Registration complete!'));

            // Hide loader after a brief delay
            await this.delay(500);
            loader.hide();

            // Handle success (e.g., redirect, show success message)
            if (data) {
                // Your success handling code
            }
        } catch (error) {
            // Mark current step as failed
            const currentStep = this.getCurrentStepIndex();
            if (currentStep >= 0) {
                loader.update(currentStep, 'failed', this.$t('An error occurred'));
            }

            // Show error in loader
            const errorMessage = this.getErrorMessage(error);
            loader.setError(errorMessage);

            // Handle error normally for form display
            this.handleSubmitError(error);
        }
    },

    getCurrentStepIndex() {
        const instance = loader.getInstance();
        if (instance && instance.steps) {
            for (let i = 0; i < instance.steps.length; i++) {
                if (
                    instance.steps[i].status === 'in-progress' ||
                    instance.steps[i].status === 'pending'
                ) {
                    return i;
                }
            }
        }
        return -1;
    },

    getErrorMessage(error) {
        if (error?.response?.status === 422) {
            const errorData = error.response.data;
            if (errorData.message) {
                return errorData.message;
            }
            if (errorData.errors) {
                const firstError = Object.values(errorData.errors)[0];
                if (firstError && firstError.length > 0) {
                    return firstError[0];
                }
            }
        }
        if (error?.response?.data?.message) {
            return error.response.data.message;
        }
        return this.$t('An error occurred during registration. Please try again.');
    },

    handleLoaderCancel() {
        loader.hide();
        // Optionally reset form or show a message
    },

    delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    },
}
```

### Step 4: Laravel Backend Integration

The loader works with your existing Laravel API endpoints. No backend changes are required. The loader simply provides visual feedback during the registration process.

If you want to provide more granular step updates from the backend, you could use Laravel's event broadcasting or WebSockets, but the current implementation works well with standard HTTP requests.

## Step Statuses

- **`pending`** - Step is waiting to be executed (gray circle icon)
- **`in-progress`** - Step is currently executing (animated spinner icon)
- **`done`** - Step completed successfully (green checkmark icon)
- **`failed`** - Step failed (red X icon)

## Accessibility Features

- **ARIA Labels**: Modal has proper `role="dialog"`, `aria-modal="true"`, and `aria-labelledby`
- **Keyboard Navigation**: 
  - `Esc` key closes modal (when cancel is enabled)
  - Tab key is trapped within the modal
  - Focus management ensures first focusable element receives focus
- **Screen Reader Support**: All status changes are announced
- **Focus Trap**: Prevents focus from leaving the modal

## Styling

The component uses scoped SCSS styles with:
- Modern rounded corners (16px border-radius)
- Soft shadows for depth
- Smooth CSS animations and transitions
- Responsive design for mobile devices
- Color-coded status indicators

## Customization

### Changing Step Icons

The SVG icons are embedded inline in the component. To customize them, edit the `<svg>` elements in `RegistrationLoader.vue` within the `step-icon-wrapper` section.

### Changing Colors

Modify the SCSS variables in the `<style>` section:
- Pending: `#9ca3af` (gray)
- In-progress: `#3b82f6` (blue)
- Done: `#10b981` (green)
- Failed: `#ef4444` (red)

### Changing Animation Speed

Adjust the `transition` and `animation` durations in the SCSS:
```scss
transition: all 0.3s ease; // Change 0.3s to your desired duration
```

## Example: Simulated Flow

The service includes a `simulateFlow` method for testing:

```javascript
import loader from '@/utils/registrationLoader';

loader.simulateFlow(
    () => {
        console.log('Flow completed!');
        loader.hide();
    },
    (error) => {
        console.error('Flow failed:', error);
        loader.setError('Simulation failed');
    }
);
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- The loader automatically registers itself globally as `window.registrationLoader` for the service to access
- The service is also available globally as `window.registrationLoaderService`
- All delays in the example are for demonstration purposes - adjust based on your actual API response times
- The component handles cleanup automatically when destroyed

## Troubleshooting

### Loader not showing
- Ensure `RegistrationLoader` component is added to your template
- Check that the component is imported and registered in your Vue component
- Verify the service is imported: `import loader from '@/utils/registrationLoader';`

### Steps not updating
- Ensure you're calling `loader.update()` with the correct step index (0-based)
- Check that the status is one of: `'pending'`, `'in-progress'`, `'done'`, `'failed'`
- Verify the loader instance is available: `loader.getInstance()`

### Accessibility issues
- Ensure your Vue app has proper ARIA support
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Verify keyboard navigation works (Tab, Esc)

## License

Part of the Accounting System project.

