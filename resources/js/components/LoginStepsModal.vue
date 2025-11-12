<template>
  <div v-if="show" class="login-steps-modal-overlay" @click.self="false">
    <div class="login-steps-modal">
      <div class="modal-content">
        <!-- Logo if available -->
        <div v-if="appInfo" class="text-center mb-4">
          <img :src="appInfo.blackLogo" :alt="appInfo.companyName" class="modal-logo" />
        </div>

        <!-- Steps Container -->
        <div class="steps-container">
          <!-- Step 1: Account Identification -->
          <div class="step-item" :class="{ 'active': currentStep >= 1, 'completed': currentStep > 1 }">
            <div class="step-icon">
              <i v-if="currentStep > 1" class="fas fa-check-circle text-success"></i>
              <i v-else-if="currentStep === 1" class="fas fa-spinner fa-spin text-primary"></i>
              <i v-else class="fas fa-circle pending-icon"></i>
            </div>
            <div class="step-content">
              <h5 class="step-title">{{ $t('Finding Your Account') }}</h5>
              <p class="step-description">{{ $t('Searching for your account') }}</p>
            </div>
          </div>

          <!-- Step 2: Verifying Password -->
          <div class="step-item" :class="{ 'active': currentStep >= 2, 'completed': currentStep > 2 }">
            <div class="step-icon">
              <i v-if="currentStep > 2" class="fas fa-check-circle text-success"></i>
              <i v-else-if="currentStep === 2" class="fas fa-spinner fa-spin text-primary"></i>
              <i v-else class="fas fa-circle pending-icon"></i>
            </div>
            <div class="step-content">
              <h5 class="step-title">{{ $t('Verifying Password') }}</h5>
              <p class="step-description">{{ $t('Checking your email and password') }}</p>
            </div>
          </div>

          <!-- Step 3: Preparing Your Account -->
          <div class="step-item" :class="{ 'active': currentStep >= 3, 'completed': currentStep > 3 }">
            <div class="step-icon">
              <i v-if="currentStep > 3" class="fas fa-check-circle text-success"></i>
              <i v-else-if="currentStep === 3" class="fas fa-spinner fa-spin text-primary"></i>
              <i v-else class="fas fa-circle pending-icon"></i>
            </div>
            <div class="step-content">
              <h5 class="step-title">{{ $t('Preparing Your Account') }}</h5>
              <p class="step-description">{{ $t('Setting up your dashboard') }}</p>
            </div>
          </div>

          <!-- Step 4: Redirecting -->
          <div class="step-item" :class="{ 'active': currentStep >= 4, 'completed': currentStep > 4 }">
            <div class="step-icon">
              <i v-if="currentStep > 4" class="fas fa-check-circle text-success"></i>
              <i v-else-if="currentStep === 4" class="fas fa-spinner fa-spin text-primary"></i>
              <i v-else class="fas fa-circle pending-icon"></i>
            </div>
            <div class="step-content">
              <h5 class="step-title">{{ $t('Redirecting to Dashboard') }}</h5>
              <p class="step-description">{{ $t('Almost done!') }}</p>
            </div>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="progress-container mt-4">
          <div class="progress" style="height: 6px;">
            <div 
              class="progress-bar progress-bar-striped progress-bar-animated bg-primary" 
              role="progressbar" 
              :style="{ width: progressPercentage + '%' }"
              :aria-valuenow="progressPercentage" 
              aria-valuemin="0" 
              aria-valuemax="100">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LoginStepsModal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    currentStep: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapGetters('operations', ['appInfo']),
    progressPercentage() {
      // Calculate progress based on current step (4 steps total)
      return (this.currentStep / 4) * 100
    }
  }
}
</script>

<style scoped>
.login-steps-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease-in;
}

.login-steps-modal {
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  animation: slideUp 0.3s ease-out;
}

.modal-content {
  padding: 2.5rem;
}

.modal-logo {
  max-height: 60px;
  width: auto;
  margin-bottom: 1rem;
}

.steps-container {
  margin: 2rem 0;
}

.step-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

.step-item.active {
  opacity: 1;
}

.step-item.completed {
  opacity: 0.75;
}

.pending-icon {
  color: #dee2e6;
  font-size: 1.2rem;
}

.step-icon {
  font-size: 1.5rem;
  margin-right: 1rem;
  min-width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-content {
  flex: 1;
}

.step-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #333;
}

.step-item.active .step-title {
  color: #007bff;
}

.step-description {
  font-size: 0.875rem;
  color: #6c757d;
  margin-bottom: 0;
}

.progress-container {
  margin-top: 1.5rem;
}

.progress {
  border-radius: 10px;
  overflow: hidden;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 576px) {
  .modal-content {
    padding: 1.5rem;
  }

  .step-icon {
    font-size: 1.25rem;
  }

  .step-title {
    font-size: 0.9rem;
  }

  .step-description {
    font-size: 0.8rem;
  }
}
</style>

