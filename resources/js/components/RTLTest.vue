<template>
  <div class="rtl-test-component" :class="rtlClasses">
    <div class="card">
      <div class="card-header">
        <h3>RTL Test Component</h3>
      </div>
      <div class="card-body">
        <p><strong>Current Locale:</strong> {{ currentLocale }}</p>
        <p><strong>RTL Status:</strong> {{ isRTL ? 'RTL (Right-to-Left)' : 'LTR (Left-to-Right)' }}</p>
        <p><strong>Text Alignment:</strong> {{ textAlign }}</p>
        <p><strong>Float Direction:</strong> {{ floatDirection }}</p>
        
        <div class="test-elements">
          <div class="form-group">
            <label>Test Label</label>
            <input type="text" class="form-control" placeholder="Test input" />
          </div>
          
          <div class="btn-group">
            <button class="btn btn-primary">Button 1</button>
            <button class="btn btn-secondary">Button 2</button>
            <button class="btn btn-success">Button 3</button>
          </div>
          
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Column 1</th>
                  <th>Column 2</th>
                  <th>Column 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data 1</td>
                  <td>Data 2</td>
                  <td>Data 3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="mt-3">
          <button @click="toggleRTL" class="btn btn-info">
            Toggle RTL Mode
          </button>
          <button @click="setArabic" class="btn btn-warning ml-2">
            Set Arabic (RTL)
          </button>
          <button @click="setEnglish" class="btn btn-success ml-2">
            Set English (LTR)
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RTLMixin from '~/mixins/RTLMixin'

export default {
  name: 'RTLTest',
  mixins: [RTLMixin],
  
  methods: {
    toggleRTL() {
      this.setRTLMode(this.currentLocale)
    },
    
    setArabic() {
      this.setRTLMode('ar')
    },
    
    setEnglish() {
      this.setRTLMode('en')
    }
  }
}
</script>

<style scoped>
.rtl-test-component {
  padding: 20px;
}

.test-elements {
  margin: 20px 0;
}

.test-elements .form-group {
  margin-bottom: 15px;
}

.test-elements .btn-group {
  margin-bottom: 15px;
}

.test-elements .table {
  margin-bottom: 15px;
}

.ml-2 {
  margin-left: 0.5rem;
}

[dir="rtl"] .ml-2 {
  margin-left: 0;
  margin-right: 0.5rem;
}
</style>
