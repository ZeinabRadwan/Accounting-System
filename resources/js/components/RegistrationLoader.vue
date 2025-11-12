<template>
    <transition name="modal-fade">
        <div
            v-if="visible"
            class="registration-loader-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="loader-title"
        >
            <div class="loader-content" ref="modalContent">
                <!-- Background Pattern -->
                <div class="background-pattern"></div>
                
                <!-- Main Content -->
                <div class="loader-main">
                    <!-- Icon -->
                    <div class="step-icon-wrapper">
                        <!-- Validating Input -->
                        <svg
                            v-if="activeStep && (activeStep.label.includes('Validating') || activeStep.label.includes('التحقق'))"
                            class="step-icon-large"
                            width="120"
                            height="120"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="12" cy="12" r="10" stroke="url(#gradient1)" stroke-width="2.5" fill="none" opacity="0.3"/>
                            <path d="M8 12L11 15L16 9" stroke="url(#gradient1)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#33a0d9;stop-opacity:1" />
                                    <stop offset="100%" style="stop-color:#5558e5;stop-opacity:1" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <!-- Creating Database -->
                        <svg
                            v-else-if="activeStep && (activeStep.label.includes('Creating database') || activeStep.label.includes('إنشاء قاعدة'))"
                            class="step-icon-large"
                            width="120"
                            height="120"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <ellipse cx="12" cy="6" rx="9" ry="3.5" stroke="url(#gradient2)" stroke-width="2.5" fill="none" opacity="0.3"/>
                            <path d="M3 6V18C3 19.1 6.6 20 12 20C17.4 20 21 19.1 21 18V6" stroke="url(#gradient2)" stroke-width="2.5"/>
                            <path d="M3 12C3 13.1 6.6 14 12 14C17.4 14 21 13.1 21 12" stroke="url(#gradient2)" stroke-width="2.5"/>
                            <defs>
                                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#33a0d9;stop-opacity:1" />
                                    <stop offset="100%" style="stop-color:#3865f2;stop-opacity:1" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <!-- Initializing Account -->
                        <svg
                            v-else-if="activeStep && (activeStep.label.includes('Initializing') || activeStep.label.includes('تهيئة'))"
                            class="step-icon-large"
                            width="120"
                            height="120"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="12" cy="12" r="10" stroke="url(#gradient3)" stroke-width="2.5" fill="none" opacity="0.3"/>
                            <path d="M12 2V7M12 17V22M5 12H9M15 12H19" stroke="url(#gradient3)" stroke-width="2.5" stroke-linecap="round"/>
                            <circle cx="12" cy="12" r="4.5" stroke="url(#gradient3)" stroke-width="2.5" fill="none"/>
                            <circle cx="12" cy="12" r="1.5" fill="url(#gradient3)"/>
                            <defs>
                                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#33a0d9;stop-opacity:1" />
                                    <stop offset="100%" style="stop-color:#5558e5;stop-opacity:1" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <!-- Setting up Preferences -->
                        <svg
                            v-else-if="activeStep && (activeStep.label.includes('Setting up') || activeStep.label.includes('إعداد'))"
                            class="step-icon-large"
                            width="120"
                            height="120"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="12" cy="12" r="3.5" stroke="url(#gradient4)" stroke-width="2.5" fill="none"/>
                            <path d="M12 1V4M12 20V23M4.22 4.22L6.36 6.36M17.64 17.64L19.78 19.78M1 12H4M20 12H23M4.22 19.78L6.36 17.64M17.64 6.36L19.78 4.22" stroke="url(#gradient4)" stroke-width="2" stroke-linecap="round"/>
                            <circle cx="12" cy="12" r="10" stroke="url(#gradient4)" stroke-width="2.5" fill="none" opacity="0.3"/>
                            <defs>
                                <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#33a0d9;stop-opacity:1" />
                                    <stop offset="100%" style="stop-color:#5558e5;stop-opacity:1" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <!-- Finishing -->
                        <svg
                            v-else-if="activeStep && (activeStep.label.includes('Finishing') || activeStep.label.includes('إنهاء'))"
                            class="step-icon-large"
                            width="120"
                            height="120"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="12" cy="12" r="10" fill="url(#gradient5)" opacity="0.2"/>
                            <circle cx="12" cy="12" r="10" stroke="url(#gradient5)" stroke-width="2.5" fill="none"/>
                            <path d="M8 12L11 15L16 9" stroke="url(#gradient5)" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <defs>
                                <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#33a0d9;stop-opacity:1" />
                                    <stop offset="100%" style="stop-color:#3865f2;stop-opacity:1" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <!-- Default Spinner -->
                        <svg
                            v-else
                            class="step-icon-large step-icon-spinner"
                            width="120"
                            height="120"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="url(#gradientDefault)"
                                stroke-width="2.5"
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
                                    <stop offset="0%" style="stop-color:#33a0d9;stop-opacity:1" />
                                    <stop offset="100%" style="stop-color:#5558e5;stop-opacity:1" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <!-- Title -->
                    <h2 class="loader-title" id="loader-title">
                        {{ $t('Creating Your Account') }}
                    </h2>

                    <!-- Step Label -->
                    <div v-if="activeStep" class="step-label">
                        {{ activeStep.label }}
                    </div>

                    <!-- Step Message -->
                    <div
                        v-if="activeStep && activeStep.message"
                        class="step-message"
                        :class="{ 'step-message-error': activeStep.status === 'failed' }"
                    >
                        {{ activeStep.message }}
                    </div>

                    <!-- Progress Bar -->
                    <div class="progress-container">
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

                <!-- Error Message -->
                <div v-if="errorMessage" class="error-container">
                    <div class="error-message">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
                            <path d="M12 8V12M12 16H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        <span>{{ errorMessage }}</span>
                    </div>
                    <button class="btn-cancel" @click="handleCancel" ref="cancelButton">
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
            const inProgress = this.steps.find(step => step.status === 'in-progress');
            if (inProgress) return inProgress;
            
            const pending = this.steps.find(step => step.status === 'pending');
            if (pending) return pending;
            
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
        if (typeof window !== 'undefined') {
            window.registrationLoader = this;
        }
    },
    watch: {
        visible(newVal) {
            if (newVal) {
                document.body.style.overflow = 'hidden';
                this.$nextTick(() => {
                    this.setupFocusTrap();
                });
            } else {
                document.body.style.overflow = '';
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
        setupFocusTrap() {
            const modal = this.$refs.modalContent;
            if (!modal) return;

            this.focusableElements = modal.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

            if (this.focusableElements.length > 0) {
                this.firstFocusable = this.focusableElements[0];
                this.lastFocusable = this.focusableElements[this.focusableElements.length - 1];
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
                if (document.activeElement === this.firstFocusable) {
                    event.preventDefault();
                    this.lastFocusable.focus();
                }
            } else {
                if (document.activeElement === this.lastFocusable) {
                    event.preventDefault();
                    this.firstFocusable.focus();
                }
            }
        },
    },
    beforeDestroy() {
        document.body.style.overflow = '';
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
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, #33a0d9 0%, #33a0d9 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99999;
    overflow: hidden;
}

.background-pattern {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%);
    opacity: 0.6;
    animation: patternMove 25s ease-in-out infinite;
}

@keyframes patternMove {
    0%, 100% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(-30px, -30px);
    }
}

.loader-content {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    z-index: 1;
}

.loader-main {
    text-align: center;
    max-width: 500px;
    width: 100%;
    animation: fadeInUp 0.6s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.step-icon-wrapper {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
}

.step-icon-large {
    width: 140px;
    height: 140px;
    animation: float 3s ease-in-out infinite;
    filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.25));
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-15px);
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

.loader-title {
    font-size: 36px;
    font-weight: 700;
    color: white;
    margin: 0 0 20px 0;
    text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
    letter-spacing: -0.5px;
}

.step-label {
    font-size: 22px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.95);
    margin-bottom: 16px;
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
}

.step-message {
    font-size: 17px;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 45px;
    line-height: 1.6;
    min-height: 26px;
    font-weight: 400;

    &.step-message-error {
        color: #fee2e2;
        font-weight: 500;
    }
}

.progress-container {
    margin-top: 45px;
}

.progress-bar {
    width: 100%;
    height: 8px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 18px;
    backdrop-filter: blur(10px);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%);
    border-radius: 10px;
    transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.6);
    position: relative;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
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
    font-size: 15px;
    color: rgba(255, 255, 255, 0.85);
    font-weight: 500;
    letter-spacing: 0.5px;
}

.error-container {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 500px;
    padding: 0 40px;
    animation: slideUp 0.4s ease-out;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateX(-50%) translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }
}

.error-message {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 18px 24px;
    background: rgba(239, 68, 68, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(239, 68, 68, 0.4);
    border-radius: 12px;
    color: #fee2e2;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 16px;
    box-shadow: 0 4px 20px rgba(239, 68, 68, 0.25);

    svg {
        flex-shrink: 0;
        color: #fee2e2;
    }
}

.btn-cancel {
    width: 100%;
    padding: 16px 28px;
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(10px);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);

    &:hover {
        background: rgba(255, 255, 255, 0.35);
        transform: translateY(-2px);
        box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
    }

    &:active {
        transform: translateY(0);
    }
}

// Modal fade transition
.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.4s ease;
}

.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}

// Responsive design
@media (max-width: 640px) {
    .loader-content {
        padding: 20px;
    }

    .loader-main {
        max-width: 100%;
    }

    .step-icon-large {
        width: 120px;
        height: 120px;
    }

    .loader-title {
        font-size: 28px;
    }

    .step-label {
        font-size: 20px;
    }

    .step-message {
        font-size: 15px;
    }

    .error-container {
        bottom: 20px;
        padding: 0 20px;
    }
}
</style>
