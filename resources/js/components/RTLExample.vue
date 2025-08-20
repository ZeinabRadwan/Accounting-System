<template>
  <div class="rtl-example" :class="rtlClasses">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">{{ $t('RTL Example') }}</h3>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>{{ $t('Text Input') }}</label>
              <input type="text" class="form-control" :placeholder="$t('Enter text here')" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label>{{ $t('Select Option') }}</label>
              <select class="form-control">
                <option>{{ $t('Option 1') }}</option>
                <option>{{ $t('Option 2') }}</option>
                <option>{{ $t('Option 3') }}</option>
              </select>
            </div>
          </div>
        </div>
        
        <div class="row mt-3">
          <div class="col-12">
            <div class="alert alert-info">
              <strong>{{ $t('Current Language') }}:</strong> {{ currentLocale }}
              <br>
              <strong>{{ $t('RTL Mode') }}:</strong> {{ isRTL ? $t('Enabled') : $t('Disabled') }}
            </div>
          </div>
        </div>
        
        <div class="row mt-3">
          <div class="col-12">
            <button class="btn btn-primary" @click="toggleRTL">
              {{ isRTL ? $t('Switch to LTR') : $t('Switch to RTL') }}
            </button>
            <button class="btn btn-secondary ml-2" @click="resetToEnglish">
              {{ $t('Reset to English') }}
            </button>
          </div>
        </div>
        
        <div class="row mt-3">
          <div class="col-12">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>{{ $t('Property') }}</th>
                  <th>{{ $t('Value') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{ $t('Text Alignment') }}</td>
                  <td>{{ textAlign }}</td>
                </tr>
                <tr>
                  <td>{{ $t('Float Direction') }}</td>
                  <td>{{ floatDirection }}</td>
                </tr>
                <tr>
                  <td>{{ $t('CSS Direction') }}</td>
                  <td>{{ isRTL ? 'rtl' : 'ltr' }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RTLMixin from '~/mixins/RTLMixin'

export default {
  name: 'RTLExample',
  mixins: [RTLMixin],
  
  data() {
    return {
      // Data will be inherited from RTLMixin
    }
  },
  
  methods: {
    toggleRTL() {
      if (this.isRTL) {
        this.setRTLMode('en')
      } else {
        this.setRTLMode('ar')
      }
    },
    
    resetToEnglish() {
      this.setRTLMode('en')
    }
  }
}
</script>

<style scoped>
.rtl-example {
  direction: inherit;
}

.rtl-example .card {
  margin: 20px 0;
}

.rtl-example .btn {
  margin: 5px;
}

.rtl-example .table th,
.rtl-example .table td {
  text-align: inherit;
}

/* RTL-specific adjustments */
[dir="rtl"] .rtl-example .btn {
  margin: 5px;
}

[dir="rtl"] .rtl-example .ml-2 {
  margin-left: 0 !important;
  margin-right: 0.5rem !important;
}
</style>
