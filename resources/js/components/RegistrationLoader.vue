<template>
    <transition name="modal-fade">
        <div
            v-if="visible"
            class="registration-loader-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="loader-title"
            @keydown.esc="handleEscape"
            @click.self="handleBackdropClick"
        >
            <div class="loader-modal-content" ref="modalContent">
                <div class="loader-header">
                    <div class="header-content">
                        <div class="header-icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.3"/>
                                <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <h3 id="loader-title" class="loader-title">
                            {{ $t('Creating Your Account') }}
                        </h3>
                    </div>
                    <button
                        v-if="canCancel"
                        class="loader-close-btn"
                        @click="handleCancel"
                        aria-label="Close"
                        :disabled="!canCancel"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15 5L5 15M5 5L15 15"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            />
                        </svg>
                    </button>
                </div>

                <div class="loader-body">
                    <!-- Show only the active step -->
                    <div v-if="activeStep" class="active-step-container">
                        <div class="step-icon-large-wrapper">
                            <!-- Validating Input Icon -->
                            <svg
                                v-if="activeStep.label.includes('Validating') || activeStep.label.includes('التحقق')"
                                class="step-icon-large"
                                width="80"
                                height="80"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="12" cy="12" r="10" stroke="url(#gradient1)" stroke-width="2" fill="none" opacity="0.2"/>
                                <path d="M9 12L11 14L15 10" stroke="url(#gradient1)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
                                        <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <!-- Creating Database Icon -->
                            <svg
                                v-else-if="activeStep.label.includes('Creating database') || activeStep.label.includes('إنشاء قاعدة')"
                                class="step-icon-large"
                                width="80"
                                height="80"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <ellipse cx="12" cy="5" rx="8" ry="3" stroke="url(#gradient2)" stroke-width="2" fill="none" opacity="0.2"/>
                                <path d="M4 5V19C4 20.1 7.6 21 12 21C16.4 21 20 20.1 20 19V5" stroke="url(#gradient2)" stroke-width="2"/>
                                <path d="M4 12C4 13.1 7.6 14 12 14C16.4 14 20 13.1 20 12" stroke="url(#gradient2)" stroke-width="2"/>
                                <defs>
                                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
                                        <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <!-- Initializing Account Icon -->
                            <svg
                                v-else-if="activeStep.label.includes('Initializing') || activeStep.label.includes('تهيئة')"
                                class="step-icon-large"
                                width="80"
                                height="80"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="12" cy="12" r="10" stroke="url(#gradient3)" stroke-width="2" fill="none" opacity="0.2"/>
                                <path d="M12 2V6M12 18V22M4 12H8M16 12H20" stroke="url(#gradient3)" stroke-width="2" stroke-linecap="round"/>
                                <circle cx="12" cy="12" r="4" stroke="url(#gradient3)" stroke-width="2" fill="none"/>
                                <defs>
                                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style="stop-color:#f59e0b;stop-opacity:1" />
                                        <stop offset="100%" style="stop-color:#ef4444;stop-opacity:1" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <!-- Setting up Preferences Icon -->
                            <svg
                                v-else-if="activeStep.label.includes('Setting up') || activeStep.label.includes('إعداد')"
                                class="step-icon-large"
                                width="80"
                                height="80"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="12" cy="12" r="3" stroke="url(#gradient4)" stroke-width="2" fill="none"/>
                                <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="url(#gradient4)" stroke-width="2" stroke-linecap="round"/>
                                <circle cx="12" cy="12" r="10" stroke="url(#gradient4)" stroke-width="2" fill="none" opacity="0.2"/>
                                <defs>
                                    <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
                                        <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <!-- Finishing Icon -->
                            <svg
                                v-else-if="activeStep.label.includes('Finishing') || activeStep.label.includes('إنهاء')"
                                class="step-icon-large"
                                width="80"
                                height="80"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="12" cy="12" r="10" fill="url(#gradient5)" opacity="0.2"/>
                                <path d="M9 12L11 14L15 10" stroke="url(#gradient5)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <defs>
                                    <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style="stop-color:#10b981;stop-opacity:1" />
                                        <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            <!-- Default/In Progress Spinner -->
                            <svg
                                v-else
                                class="step-icon-large step-icon-spinner"
                                width="80"
                                height="80"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="url(#gradientDefault)"
                                    stroke-width="2"
                                    fill="none"
                                    stroke-dasharray="31.416"
                                    stroke-dashoffset="31.416"
                                >
                                    <animate
                                        attributeName="stroke-dasharray"
                                        values="0 31.416;15.708 15.708;0 31.416;0 31.416"
                                        dur="2s"
                                        repeatCount="indefinite"
                                    />
                                    <animate
                                        attributeName="stroke-dashoffset"
                                        values="0;-15.708;-31.416;-31.416"
                                        dur="2s"
                                        repeatCount="indefinite"
                                    />
                                </circle>
                                <defs>
                                    <linearGradient id="gradientDefault" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
                                        <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <div class="step-content-large">
                            <div class="step-label-large">{{ activeStep.label }}</div>
                            <div
                                v-if="activeStep.message"
                                class="step-message-large"
                                :class="{
                                    'step-message-error':
                                        activeStep.status === 'failed',
                                }"
                            >
                                {{ activeStep.message }}
                            </div>
                        </div>

                        <!-- Progress indicator -->
                        <div class="progress-indicator">
                            <div class="progress-bar">
                                <div 
                                    class="progress-fill" 
                                    :style="{ width: progressPercentage + '%' }"
                                ></div>
                            </div>
                            <div class="progress-text">
                                {{ currentStepIndex + 1 }} / {{ totalSteps }}
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="errorMessage" class="loader-footer">
                    <div class="error-message">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="10"
                                cy="10"
                                r="9"
                                stroke="currentColor"
                                stroke-width="2"
                                fill="none"
                            />
                            <path
                                d="M10 6V10M10 14H10.01"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            />
                        </svg>
                        <span>{{ errorMessage }}</span>
                    </div>
                    <button
                        class="btn-cancel"
                        @click="handleCancel"
                        ref="cancelButton"
                    >
                        {{ $t('Cancel') }}
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'RegistrationLoader',
    data() {
        return {
            visible: false,
            steps: [],
            errorMessage: null,
            canCancel: false,
            focusableElements: null,
            firstFocusable: null,
            lastFocusable: null,
        };
    },
    computed: {
        activeStep() {
            // Find the first step that is in-progress, or the first pending step
            const inProgress = this.steps.find(step => step.status === 'in-progress');
            if (inProgress) return inProgress;
            
            const pending = this.steps.find(step => step.status === 'pending');
            if (pending) return pending;
            
            // If no in-progress or pending, show the last step
            return this.steps[this.steps.length - 1] || null;
        },
        currentStepIndex() {
            return this.steps.findIndex(step => step === this.activeStep);
        },
        totalSteps() {
            return this.steps.length;
        },
        progressPercentage() {
            if (this.totalSteps === 0) return 0;
            const completed = this.steps.filter(step => step.status === 'done').length;
            const inProgress = this.steps.filter(step => step.status === 'in-progress').length;
            return ((completed + (inProgress * 0.5)) / this.totalSteps) * 100;
        },
    },
    mounted() {
        // Register global loader instance
        if (typeof window !== 'undefined') {
            window.registrationLoader = this;
        }
    },
    watch: {
        visible(newVal) {
            if (newVal) {
                this.$nextTick(() => {
                    this.setupFocusTrap();
                    this.focusFirstElement();
                });
            } else {
                this.removeFocusTrap();
            }
        },
    },
    methods: {
        show(stepsArray) {
            this.steps = stepsArray.map((step) => ({
                label: step.label || step,
                status: step.status || 'pending',
                message: step.message || '',
            }));
            this.visible = true;
            this.errorMessage = null;
            this.canCancel = false;
        },
        update(stepIndex, status, message = '') {
            if (this.steps[stepIndex]) {
                this.steps[stepIndex].status = status;
                if (message) {
                    this.steps[stepIndex].message = message;
                }
            }
        },
        hide() {
            this.visible = false;
            this.steps = [];
            this.errorMessage = null;
            this.canCancel = false;
        },
        setError(message) {
            this.errorMessage = message;
            this.canCancel = true;
        },
        handleCancel() {
            if (this.canCancel) {
                this.hide();
                this.$emit('cancel');
            }
        },
        handleEscape(event) {
            if (this.canCancel && event.key === 'Escape') {
                this.handleCancel();
            }
        },
        handleBackdropClick(event) {
            if (this.canCancel && event.target === event.currentTarget) {
                this.handleCancel();
            }
        },
        setupFocusTrap() {
            const modal = this.$refs.modalContent;
            if (!modal) return;

            // Get all focusable elements
            this.focusableElements = modal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

            if (this.focusableElements.length > 0) {
                this.firstFocusable = this.focusableElements[0];
                this.lastFocusable =
                    this.focusableElements[this.focusableElements.length - 1];

                // Add event listener for tab trapping
                modal.addEventListener('keydown', this.trapFocus);
            }
        },
        removeFocusTrap() {
            const modal = this.$refs.modalContent;
            if (modal) {
                modal.removeEventListener('keydown', this.trapFocus);
            }
            this.focusableElements = null;
            this.firstFocusable = null;
            this.lastFocusable = null;
        },
        trapFocus(event) {
            if (event.key !== 'Tab') return;

            if (event.shiftKey) {
                // Shift + Tab
                if (document.activeElement === this.firstFocusable) {
                    event.preventDefault();
                    this.lastFocusable.focus();
                }
            } else {
                // Tab
                if (document.activeElement === this.lastFocusable) {
                    event.preventDefault();
                    this.firstFocusable.focus();
                }
            }
        },
        focusFirstElement() {
            if (this.firstFocusable) {
                this.firstFocusable.focus();
            }
        },
    },
    beforeDestroy() {
        this.removeFocusTrap();
        if (typeof window !== 'undefined') {
            delete window.registrationLoader;
        }
    },
};
</script>

<style lang="scss" scoped>
.registration-loader-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    padding: 20px;
}

.loader-modal-content {
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    border-radius: 24px;
    box-shadow: 0 25px 80px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05);
    max-width: 600px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    outline: none;
    animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    border: 1px solid rgba(255, 255, 255, 0.8);
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px) scale(0.95);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.loader-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 32px 24px;
    border-bottom: 1px solid rgba(229, 231, 235, 0.8);
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.03) 0%, rgba(139, 92, 246, 0.03) 100%);
    border-radius: 24px 24px 0 0;
}

.header-content {
    display: flex;
    align-items: center;
    gap: 16px;
}

.header-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.loader-title {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.loader-close-btn {
    background: rgba(107, 114, 128, 0.1);
    border: none;
    cursor: pointer;
    padding: 10px;
    color: #6b7280;
    border-radius: 10px;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover:not(:disabled) {
        background-color: rgba(239, 68, 68, 0.1);
        color: #ef4444;
        transform: rotate(90deg);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
}

.loader-body {
    padding: 48px 32px;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.active-step-container {
    width: 100%;
    text-align: center;
    animation: fadeInScale 0.5s ease-out;
}

@keyframes fadeInScale {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.step-icon-large-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
    position: relative;
}

.step-icon-large {
    width: 120px;
    height: 120px;
    animation: float 3s ease-in-out infinite;
    filter: drop-shadow(0 10px 20px rgba(59, 130, 246, 0.2));
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
}

.step-icon-spinner {
    animation: spin 2s linear infinite, float 3s ease-in-out infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.step-content-large {
    margin-bottom: 40px;
}

.step-label-large {
    font-size: 28px;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 12px;
    background: linear-gradient(135deg, #1e293b 0%, #475569 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.step-message-large {
    font-size: 16px;
    color: #64748b;
    line-height: 1.6;
    margin-top: 8px;

    &.step-message-error {
        color: #dc2626;
        font-weight: 600;
    }
}

.progress-indicator {
    margin-top: 40px;
}

.progress-bar {
    width: 100%;
    height: 8px;
    background: #e2e8f0;
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 12px;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%);
    border-radius: 10px;
    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.4);
    position: relative;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        animation: shimmer 2s infinite;
    }
}

@keyframes shimmer {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}

.progress-text {
    font-size: 14px;
    color: #64748b;
    font-weight: 500;
}

.loader-footer {
    padding: 24px 32px 32px;
    border-top: 1px solid rgba(229, 231, 235, 0.8);
    display: flex;
    flex-direction: column;
    gap: 16px;
    background: linear-gradient(135deg, rgba(254, 242, 242, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%);
    border-radius: 0 0 24px 24px;
}

.error-message {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
    border: 1px solid #fecaca;
    border-radius: 12px;
    color: #dc2626;
    font-size: 15px;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.1);

    svg {
        flex-shrink: 0;
        color: #dc2626;
    }
}

.btn-cancel {
    padding: 14px 28px;
    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
    }

    &:active {
        transform: translateY(0);
    }
}

// Modal fade transition
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.3s ease;
}

.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-active .loader-modal-content,
.modal-fade-leave-active .loader-modal-content {
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
}

.modal-fade-enter .loader-modal-content,
.modal-fade-leave-to .loader-modal-content {
    transform: translateY(30px) scale(0.95);
    opacity: 0;
}

// Responsive design
@media (max-width: 640px) {
    .registration-loader-modal {
        padding: 10px;
    }

    .loader-modal-content {
        border-radius: 20px;
        max-width: 100%;
    }

    .loader-header {
        padding: 24px 24px 20px;
    }

    .header-icon {
        width: 40px;
        height: 40px;
    }

    .loader-title {
        font-size: 20px;
    }

    .loader-body {
        padding: 32px 24px;
        min-height: 300px;
    }

    .step-icon-large {
        width: 100px;
        height: 100px;
    }

    .step-label-large {
        font-size: 22px;
    }

    .step-message-large {
        font-size: 14px;
    }
}
</style>
