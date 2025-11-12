/**
 * Registration Loader Service
 * 
 * Simple API to control the registration loader modal:
 * - loader.show(stepsArray) - Display loader with steps
 * - loader.update(stepIndex, status, message) - Update a step's status
 * - loader.hide() - Hide the loader
 * - loader.setError(message) - Show error message and enable cancel
 * 
 * @example
 * // Show loader with steps
 * loader.show([
 *   { label: 'Validating input', status: 'pending' },
 *   { label: 'Creating database', status: 'pending' },
 *   { label: 'Initializing account', status: 'pending' },
 *   { label: 'Finishing', status: 'pending' }
 * ]);
 * 
 * // Update step status
 * loader.update(0, 'in-progress');
 * loader.update(0, 'done');
 * loader.update(1, 'in-progress');
 * 
 * // Show error
 * loader.setError('Registration failed. Please try again.');
 * 
 * // Hide loader
 * loader.hide();
 */

class RegistrationLoaderService {
    constructor() {
        this.instance = null;
        this.steps = [];
    }

    /**
     * Get the loader component instance
     * @returns {Object|null} The loader component instance
     */
    getInstance() {
        if (typeof window !== 'undefined') {
            return window.registrationLoader || null;
        }
        return null;
    }

    /**
     * Show the loader with steps
     * @param {Array} stepsArray - Array of step objects or strings
     * @example
     * loader.show([
     *   'Validating input',
     *   'Creating database',
     *   'Initializing account',
     *   'Finishing'
     * ]);
     * 
     * // Or with objects
     * loader.show([
     *   { label: 'Validating input', status: 'pending' },
     *   { label: 'Creating database', status: 'pending' }
     * ]);
     */
    show(stepsArray) {
        const instance = this.getInstance();
        if (instance) {
            instance.show(stepsArray);
            this.steps = stepsArray;
        } else {
            console.warn('RegistrationLoader component not found. Make sure it is mounted.');
        }
    }

    /**
     * Update a step's status
     * @param {number} stepIndex - Zero-based index of the step
     * @param {string} status - Status: 'pending', 'in-progress', 'done', or 'failed'
     * @param {string} message - Optional message to display
     * @example
     * loader.update(0, 'in-progress');
     * loader.update(0, 'done', 'Input validated successfully');
     * loader.update(1, 'failed', 'Database connection failed');
     */
    update(stepIndex, status, message = '') {
        const instance = this.getInstance();
        if (instance) {
            instance.update(stepIndex, status, message);
        } else {
            console.warn('RegistrationLoader component not found.');
        }
    }

    /**
     * Hide the loader
     */
    hide() {
        const instance = this.getInstance();
        if (instance) {
            instance.hide();
            this.steps = [];
        }
    }

    /**
     * Set error message and enable cancel button
     * @param {string} message - Error message to display
     */
    setError(message) {
        const instance = this.getInstance();
        if (instance) {
            instance.setError(message);
        }
    }

    /**
     * Simulate a registration flow (for testing/demo)
     * @param {Function} onComplete - Callback when flow completes
     * @param {Function} onError - Callback when flow fails
     */
    async simulateFlow(onComplete, onError) {
        const steps = [
            { label: 'Validating input', status: 'pending' },
            { label: 'Creating database', status: 'pending' },
            { label: 'Initializing account', status: 'pending' },
            { label: 'Setting up preferences', status: 'pending' },
            { label: 'Finishing', status: 'pending' },
        ];

        this.show(steps);

        try {
            // Step 1: Validating input
            this.update(0, 'in-progress');
            await this.delay(800);
            this.update(0, 'done', 'Input validated successfully');

            // Step 2: Creating database
            this.update(1, 'in-progress');
            await this.delay(1200);
            this.update(1, 'done', 'Database created successfully');

            // Step 3: Initializing account
            this.update(2, 'in-progress');
            await this.delay(1000);
            this.update(2, 'done', 'Account initialized');

            // Step 4: Setting up preferences
            this.update(3, 'in-progress');
            await this.delay(600);
            this.update(3, 'done', 'Preferences configured');

            // Step 5: Finishing
            this.update(4, 'in-progress');
            await this.delay(500);
            this.update(4, 'done', 'Registration complete!');

            await this.delay(500);
            if (onComplete) onComplete();
        } catch (error) {
            if (onError) onError(error);
        }
    }

    /**
     * Helper method to create delays
     * @private
     */
    delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}

// Create singleton instance
const loader = new RegistrationLoaderService();

// Export for use in Vue components
export default loader;

// Also make available globally for convenience
if (typeof window !== 'undefined') {
    window.registrationLoaderService = loader;
}

