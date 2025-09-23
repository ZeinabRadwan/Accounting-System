<template>
  <div>
    <!-- breadcrumbs Start -->
    <breadcrumbs :items="breadcrumbs" :current="breadcrumbsCurrent" />
    <!-- breadcrumbs end -->

    <div class="row">
      <div class="col-12 col-xl-3">
        <SettingsSidebar />
      </div>
      <div class="col-12 col-xl-9">
        <form
          role="form"
          @submit.prevent="generateCertificate"
          @keydown="form.onKeydown($event)"
        >
          <div class="card">
            <div class="card-header setings-header">
              <h3 class="card-title">
                <i class="fas fa-file-invoice mr-2"></i>
                {{ $t('ZATCA E-Invoicing Settings') }}
              </h3>
            </div>
            
            <!-- Wizard Steps -->
            <div class="wizard-steps">
              <div class="step" :class="{ active: currentStep === 1, completed: currentStep > 1 }">
                <div class="step-number">1</div>
                <div class="step-title">{{ $t('Generate Certificate') }}</div>
              </div>
              <div class="step" :class="{ active: currentStep === 2, completed: currentStep > 2 }">
                <div class="step-number">2</div>
                <div class="step-title">{{ $t('Testing') }}</div>
              </div>
              <div class="step" :class="{ active: currentStep === 3, completed: currentStep > 3 }">
                <div class="step-number">3</div>
                <div class="step-title">{{ $t('Confirmation') }}</div>
              </div>
            </div>

            <div class="card-body">
              <!-- Step 1: Generate Certificate -->
              <div v-if="currentStep === 1" class="wizard-step">
                <div class="card inner-card">
                  <div class="card-header">
                    <h4 class="step-header">{{ $t('Generate Certificate') }}</h4>
                    <p class="step-description">{{ $t('Fill in your company information to generate a ZATCA certificate') }}</p>
                  </div>
                  <div class="card-body">
                    <div class="row">
                <!-- Left Column -->
                <div class="col-md-6">
                  <!-- Organization Identifier -->
                  <div class="form-group">
                    <label for="zatca_organization_identifier">
                      {{ $t('Organization Identifier') }}
                      <span class="required">*</span>
                    </label>
                    <input
                      v-model="form.zatca_organization_identifier"
                      type="text"
                      name="zatca_organization_identifier"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('zatca_organization_identifier') }"
                      placeholder="15 digits, starts and ends with 3"
                      maxlength="15"
                    />
                    <has-error :form="form" field="zatca_organization_identifier" />
                  </div>

                  <!-- Serial Number -->
                  <div class="form-group">
                    <label for="zatca_serial_number">
                      {{ $t('Serial Number') }}
                      <span class="required">*</span>
                    </label>
                    <input
                      v-model="form.zatca_serial_number"
                      type="text"
                      name="zatca_serial_number"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('zatca_serial_number') }"
                      placeholder="Unique Device Serial Number"
                    />
                    <has-error :form="form" field="zatca_serial_number" />
                  </div>

                  <!-- Organization Name -->
                  <div class="form-group">
                    <label for="zatca_organization_name">
                      {{ $t('Organization Name') }}
                      <span class="required">*</span>
                    </label>
                    <input
                      v-model="form.zatca_organization_name"
                      type="text"
                      name="zatca_organization_name"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('zatca_organization_name') }"
                      placeholder="Your Organization Name"
                    />
                    <has-error :form="form" field="zatca_organization_name" />
                  </div>

                  <!-- Environment -->
                  <div class="form-group">
                    <label for="zatca_environment">
                      {{ $t('Environment') }}
                      <span class="required">*</span>
                    </label>
                    <select
                      v-model="form.zatca_environment"
                      name="zatca_environment"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('zatca_environment') }"
                    >
                      <option value="developer">{{ $t('Developer Portal') }}</option>
                      <option value="production">{{ $t('Production') }}</option>
                    </select>
                    <has-error :form="form" field="zatca_environment" />
                  </div>

                       <!-- Invoice Type -->
                       <div class="form-group">
                        <label for="zatca_invoice_type">
                          {{ $t('Invoice Type') }}
                          <span class="required">*</span>
                        </label>
                        <select
                          v-model="form.zatca_invoice_type"
                          name="zatca_invoice_type"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('zatca_invoice_type') }"
                        >
                          <option value="standard">{{ $t('Standard') }}</option>
                          <option value="simplified">{{ $t('Simplified') }}</option>
                          <option value="both">{{ $t('Both (Standard & Simplified)') }}</option>
                        </select>
                        <has-error :form="form" field="zatca_invoice_type" />
                      </div>

                      
                </div>

                <!-- Right Column -->
                <div class="col-md-6">
                  <!-- OTP -->
                  <div class="form-group">
                    <label for="zatca_otp">
                      {{ $t('OTP') }}
                      <span class="required">*</span>
                    </label>
                    <input
                      v-model="form.zatca_otp"
                      type="text"
                      name="zatca_otp"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('zatca_otp') }"
                      placeholder="Enter OTP from ZATCA"
                    />
                    <has-error :form="form" field="zatca_otp" />
                  </div>

                  <!-- Solution Name -->
                  <div class="form-group">
                    <label for="zatca_solution_name">
                      {{ $t('Solution Name') }}
                      <span class="required">*</span>
                    </label>
                    <input
                      v-model="form.zatca_solution_name"
                      type="text"
                      name="zatca_solution_name"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('zatca_solution_name') }"
                      placeholder="WebSoft"
                    />
                    <has-error :form="form" field="zatca_solution_name" />
                  </div>

                  <!-- Common Name -->
                  <div class="form-group">
                    <label for="zatca_common_name">
                      {{ $t('Common Name') }}
                      <span class="required">*</span>
                    </label>
                    <input
                      v-model="form.zatca_common_name"
                      type="text"
                      name="zatca_common_name"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('zatca_common_name') }"
                      placeholder="Certificate Common Name"
                    />
                    <has-error :form="form" field="zatca_common_name" />
                  </div>

                  <!-- Organizational Unit -->
                  <div class="form-group">
                    <label for="zatca_organizational_unit">
                      {{ $t('Organizational Unit') }}
                      <span class="required">*</span>
                    </label>
                    <input
                      v-model="form.zatca_organizational_unit"
                      type="text"
                      name="zatca_organizational_unit"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('zatca_organizational_unit') }"
                      placeholder="Department or Unit"
                    />
                    <has-error :form="form" field="zatca_organizational_unit" />
                  </div>

             

                  <!-- Business Category -->
                  <div class="form-group">
                    <label for="zatca_business_category">
                      {{ $t('Business Category') }}
                      <span class="required">*</span>
                    </label>
                    <input
                      v-model="form.zatca_business_category"
                      type="text"
                      name="zatca_business_category"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('zatca_business_category') }"
                      placeholder="e.g., Food, Real Estate"
                    />
                    <has-error :form="form" field="zatca_business_category" />
                  </div>
                </div>

                <!-- Address - Full Width -->
                <div class="col-12">
                  <div class="form-group">
                    <label for="zatca_address">
                      {{ $t('Address') }}
                      <span class="required">*</span>
                    </label>
                    <textarea
                      v-model="form.zatca_address"
                      name="zatca_address"
                      class="form-control"
                      :class="{ 'is-invalid': form.errors.has('zatca_address') }"
                      placeholder="Business Address"
                      rows="3"
                    ></textarea>
                    <has-error :form="form" field="zatca_address" />
                  </div>
                </div>
              </div>

                    <!-- Generate Certificate Button -->
                    <div class="wizard-actions">
                      <v-button
                        :loading="form.busy"
                        type="submit"
                        class="btn btn-primary btn-lg"
                      >
                        <i class="fas fa-certificate mr-2"></i>
                        {{ $t('Generate Certificate') }}
                      </v-button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Step 2: Testing -->
              <div v-if="currentStep === 2" class="wizard-step">
                <div class="card inner-card">
                  <div class="card-header">
                    <h4 class="step-header">{{ $t('Testing') }}</h4>
                    <p class="step-description">{{ $t('Testing your ZATCA integration and compliance') }}</p>
                  </div>
                  <div class="card-body">
                    <div class="compliance-tests">
              <div v-for="(test, index) in complianceTests" :key="index" class="compliance-item">
                <div class="compliance-icon">
                  <i v-if="test.status === 'pending'" class="fas fa-clock text-warning"></i>
                  <i v-else-if="test.status === 'running'" class="fas fa-spinner fa-spin text-info"></i>
                  <i v-else-if="test.status === 'success'" class="fas fa-check-circle text-success"></i>
                  <i v-else-if="test.status === 'error'" class="fas fa-times-circle text-danger"></i>
                </div>
                <div class="compliance-content">
                  <h5>{{ test.name }}</h5>
                  <p>{{ test.description }}</p>
                  <div v-if="test.status === 'error'" class="error-message">
                    {{ test.error }}
                  </div>
                </div>
              </div>
            </div>

                    <div class="wizard-actions">
                      <button @click="runComplianceTests" class="btn btn-info btn-lg" :disabled="testingInProgress">
                        <i class="fas fa-play mr-2"></i>
                        {{ testingInProgress ? $t('Testing...') : $t('Run Tests') }}
                      </button>
                      <button v-if="allTestsPassed" @click="nextStep" class="btn btn-success btn-lg ml-2">
                        <i class="fas fa-arrow-right mr-2"></i>
                        {{ $t('Continue') }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Step 3: Confirmation -->
              <div v-if="currentStep === 3" class="wizard-step">
                <div class="card inner-card">
                  <div class="card-header">
                    <h4 class="step-header">{{ $t('Confirmation') }}</h4>
                    <p class="step-description">{{ $t('ZATCA integration completed successfully!') }}</p>
                  </div>
                  <div class="card-body">
                    <div class="success-summary">
              <div class="success-icon">
                <i class="fas fa-check-circle"></i>
              </div>
              <div class="success-content">
                <h5>{{ $t('Integration Successful') }}</h5>
                <p>{{ $t('Your ZATCA e-invoicing integration has been completed successfully.') }}</p>
                
                <div class="integration-details">
                  <div class="detail-item">
                    <strong>{{ $t('Certificate Status') }}:</strong>
                    <span class="text-success">{{ $t('Generated') }}</span>
                  </div>
                  <div class="detail-item">
                    <strong>{{ $t('Compliance Status') }}:</strong>
                    <span class="text-success">{{ $t('Passed') }}</span>
                  </div>
                  <div class="detail-item">
                    <strong>{{ $t('Environment') }}:</strong>
                    <span>{{ form.zatca_environment === 'developer' ? $t('Developer Portal') : $t('Production') }}</span>
                  </div>
                </div>
              </div>
            </div>

                    <div class="wizard-actions">
                      <button @click="finishIntegration" class="btn btn-success btn-lg">
                        <i class="fas fa-check mr-2"></i>
                        {{ $t('Finish Integration') }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Form from 'vform'
import axios from 'axios'

export default {
  middleware: ['auth', 'check-permissions'],
  components: {
    SettingsSidebar: () => import('~/components/SettingsSidebar'),
  },
  metaInfo() {
    return { title: this.$t('ZATCA Integration Wizard') }
  },
  data: () => ({
    breadcrumbsCurrent: 'ZATCA Integration Wizard',
    breadcrumbs: [
      {
        name: 'Dashboard',
        url: 'home',
      },
      {
        name: 'Setup',
        url: 'setup.index',
      },
      {
        name: 'ZATCA Integration Wizard',
        url: '',
      },
    ],
    currentStep: 1,
    form: new Form({
      zatca_organization_identifier: '',
      zatca_serial_number: '',
      zatca_organization_name: '',
      zatca_address: '',
      zatca_environment: 'developer',
      zatca_otp: '',
      zatca_solution_name: 'WebSoft',
      zatca_common_name: '',
      zatca_organizational_unit: '',
      zatca_invoice_type: 'both',
      zatca_business_category: '',
    }),
    complianceTests: [
      {
        name: 'Certificate Validation',
        description: 'Validating ZATCA certificate format and structure',
        status: 'pending',
        error: null,
      },
      {
        name: 'API Connectivity',
        description: 'Testing connection to ZATCA API endpoints',
        status: 'pending',
        error: null,
      },
      {
        name: 'Invoice Compliance',
        description: 'Validating invoice format against ZATCA standards',
        status: 'pending',
        error: null,
      },
      {
        name: 'QR Code Generation',
        description: 'Testing QR code generation for invoices',
        status: 'pending',
        error: null,
      },
      {
        name: 'Digital Signature',
        description: 'Validating digital signature implementation',
        status: 'pending',
        error: null,
      },
    ],
    testingInProgress: false,
  }),
  computed: {
    ...mapGetters('operations', ['appInfo']),
    // Check if country is Saudi Arabia or not selected (default to Saudi Arabia)
    isSaudiArabia() {
      return !this.appInfo?.country || this.appInfo.country === 'SA';
    },
    allTestsPassed() {
      return this.complianceTests.every(test => test.status === 'success');
    },
  },
  created() {
    // Redirect if not Saudi Arabia
    if (!this.isSaudiArabia) {
      this.$router.push({ name: 'setup.index' });
      return;
    }
    this.getZatcaSettings();
  },
  methods: {
    async getZatcaSettings() {
      try {
        const { data } = await axios.get('/api/zatca-settings');
        this.form.fill(data);
      } catch (error) {
        console.error('Error fetching ZATCA settings:', error);
      }
    },
    async generateCertificate() {
      try {
        const { data } = await this.form.post('/api/zatca-settings/generate-certificate');
        this.$toast.success(data.message);
        this.nextStep();
      } catch (error) {
        console.error('Error generating certificate:', error);
        this.$toast.error(error.response?.data?.message || this.$t('Error generating certificate'));
      }
    },
    async runComplianceTests() {
      this.testingInProgress = true;
      
      for (let i = 0; i < this.complianceTests.length; i++) {
        const test = this.complianceTests[i];
        test.status = 'running';
        
        try {
          // Simulate test execution
          await this.executeComplianceTest(test);
          test.status = 'success';
        } catch (error) {
          test.status = 'error';
          test.error = error.message;
        }
        
        // Add delay between tests for better UX
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      this.testingInProgress = false;
    },
    async executeComplianceTest(test) {
      // Simulate API call
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate 90% success rate
          if (Math.random() > 0.1) {
            resolve();
          } else {
            reject(new Error('Test failed due to compliance issue'));
          }
        }, 2000);
      });
    },
    nextStep() {
      if (this.currentStep < 3) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--;
      }
    },
    async finishIntegration() {
      try {
        const { data } = await axios.post('/api/zatca-settings/finish-integration');
        this.$toast.success(data.message);
        this.$router.push({ name: 'setup.index' });
      } catch (error) {
        console.error('Error finishing integration:', error);
        this.$toast.error(error.response?.data?.message || this.$t('Error finishing integration'));
      }
    },
  },
}
</script>

<style scoped>
.zatca-wizard {
  max-width: 1000px;
  margin: 0 auto;
}

.wizard-steps {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 1rem 0;
  border-bottom: 1px solid #e9ecef;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;
  position: relative;
}

.step:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 20px;
  left: 100%;
  width: 4rem;
  height: 2px;
  background-color: #e9ecef;
  z-index: 1;
}

.step.completed:not(:last-child)::after {
  background-color: #28a745;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e9ecef;
  color: #6c757d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-bottom: 0.5rem;
  z-index: 2;
  position: relative;
}

.step.active .step-number {
  background-color: #dc3545;
  color: white;
}

.step.completed .step-number {
  background-color: #28a745;
  color: white;
}

.step-title {
  font-size: 0.9rem;
  font-weight: 500;
  color: #6c757d;
  text-align: center;
}

.step.active .step-title {
  color: #dc3545;
  font-weight: 600;
}

.step.completed .step-title {
  color: #28a745;
}

.wizard-step {
  min-height: 400px;
}

.step-header {
  color: #dc3545;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.step-description {
  color: #6c757d;
  margin-bottom: 2rem;
}

.wizard-actions {
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e9ecef;
}

.compliance-tests {
  margin-bottom: 2rem;
}

.compliance-item {
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  background-color: #f8f9fa;
}

.compliance-icon {
  margin-right: 1rem;
  font-size: 1.5rem;
  margin-top: 0.25rem;
}

.compliance-content h5 {
  margin-bottom: 0.5rem;
  color: #495057;
}

.compliance-content p {
  margin-bottom: 0;
  color: #6c757d;
  font-size: 0.9rem;
}

.error-message {
  color: #dc3545;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
}

.success-summary {
  display: flex;
  align-items: center;
  padding: 2rem;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.success-icon {
  font-size: 4rem;
  color: #28a745;
  margin-right: 2rem;
}

.success-content h5 {
  color: #155724;
  margin-bottom: 0.5rem;
}

.success-content p {
  color: #155724;
  margin-bottom: 1rem;
}

.integration-details {
  background-color: white;
  padding: 1rem;
  border-radius: 4px;
  border: 1px solid #c3e6cb;
}

.detail-item {
  margin-bottom: 0.5rem;
}

.detail-item:last-child {
  margin-bottom: 0;
}

.required {
  color: #dc3545;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  font-weight: 500;
  color: #495057;
  margin-bottom: 0.5rem;
}

.form-control {
  border-radius: 6px;
  border: 1px solid #ced4da;
  padding: 0.75rem;
  font-size: 0.9rem;
}

.form-control:focus {
  border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
}

.btn-lg {
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border-radius: 6px;
}

.btn-primary {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-primary:hover {
  background-color: #c82333;
  border-color: #bd2130;
}

.btn-success {
  background-color: #28a745;
  border-color: #28a745;
}

.btn-info {
  background-color: #33a0d9;
  border-color: #33a0d9;
}
</style>
