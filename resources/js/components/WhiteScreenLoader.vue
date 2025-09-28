<template>
  <div class="white-screen-loader">
    <div class="loading-content">
      <div class="spinner-container">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div class="loading-text">
        <h4>{{ loadingText }}</h4>
        <p class="text-muted">{{ subText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhiteScreenLoader',
  props: {
    loadingText: {
      type: String,
      default: 'Logging in...'
    },
    subText: {
      type: String,
      default: 'Please wait while we redirect you to your dashboard'
    }
  }
}
</script>

<style scoped>
.white-screen-loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

.loading-content {
  text-align: center;
  max-width: 400px;
  padding: 2rem;
}

.spinner-container {
  margin-bottom: 2rem;
}

.spinner-border {
  width: 3rem;
  height: 3rem;
  border-width: 0.3em;
}

.loading-text h4 {
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.loading-text p {
  margin-bottom: 0;
  font-size: 0.9rem;
}

/* Animation for the spinner */
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.spinner-border {
  animation: spin 1s linear infinite;
}

/* Fade in animation for the content */
.loading-content {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
