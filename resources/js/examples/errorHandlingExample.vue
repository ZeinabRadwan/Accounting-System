<template>
  <div>
    <!-- Example form with enhanced error handling -->
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input 
          id="name" 
          v-model="form.name" 
          type="text" 
          class="form-control"
          :class="{ 'is-invalid': form.errors.has('name') }"
        >
        <div v-if="form.errors.has('name')" class="invalid-feedback">
          {{ form.errors.get('name') }}
        </div>
      </div>
      
      <button type="submit" :disabled="loading" class="btn btn-primary">
        {{ loading ? 'Saving...' : 'Save' }}
      </button>
    </form>
  </div>
</template>

<script>
import errorHandling from '~/mixins/errorHandling'

export default {
  name: 'ErrorHandlingExample',
  
  mixins: [errorHandling],
  
  data() {
    return {
      loading: false,
      form: {
        name: '',
        errors: new this.$form({
          name: ''
        })
      }
    }
  },
  
  methods: {
    async submitForm() {
      this.loading = true
      
      try {
        // Make API call
        const response = await this.$axios.post('/api/example-endpoint', {
          name: this.form.name
        })
        
        // Handle success
        this.$toast.fire({
          type: 'success',
          title: this.$t('Success'),
          text: this.$t('Data saved successfully!')
        })
        
      } catch (error) {
        // Use enhanced error handling
        this.handleError(error, {
          context: 'Form Submission - Example',
          showValidationErrors: true,
          customMessage: null, // Use backend message
          title: null, // Use default title
          timer: 6000,
          showTimerProgressBar: true
        })
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
