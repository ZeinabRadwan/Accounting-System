<template>
  <div class="mb-50">
    <product-form
      mode="page"
      :form-id="'productCreateForm'"
    />
  </div>
</template>

<script>
import ProductForm from '../../components/ProductForm.vue'

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Create Item') }
  },
  components: {
    ProductForm
  }
}
</script>

<style scoped>
/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
}

/* Header buttons styling */
.header-buttons {
  margin-bottom: 15px;
}

/* Footer buttons styling */
.footer-buttons {
  gap: 10px;
  display: flex;
}

.footer-buttons .btn {
  margin-right: 10px;
}

.footer-buttons .btn:last-child {
  margin-right: 0;
}

.card {
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA;
}

.card-body {
  padding: 1.25rem;
}

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

/* Form Control Styling */
.form-control {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  padding: 10px 16px;
  font-size: 14px;
}

.form-control:focus {
  border-color: #33a0d9;
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25);
}

/* Form Group Labels */
.form-group label {
  font-weight: 500;
  color: #374151;
  margin: 0 20px;
  display: block;
}

.required {
  color: #DC3545;
  font-weight: bold;
}

/* Button Styling */
.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
  font-weight: 500;
}

.btn-primary:hover {
  background: #229A26 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(42, 185, 48, 0.3);
}

.btn-secondary {
  background: #33a0d9 !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
  font-weight: 500;
  margin-right: 10px;
}

.btn-secondary:hover {
  background: #2a8bc4 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(51, 160, 217, 0.3);
}

/* Invalid Form Control */
.is-invalid {
  border-color: #DC3545 !important;
}

/* Textarea Styling */
textarea.form-control {
  min-height: 100px;
  resize: vertical;
}

/* V-Select Styling */
.v-select {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
}

.v-select .vs__dropdown-toggle {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  padding: 10px 16px;
}

.v-select .vs__search::placeholder {
  color: #6B7280;
}

.v-select .vs__selected {
  color: #374151;
}

.v-select .vs__dropdown-menu {
  border-radius: 10px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

/* Custom File Input Styling */
.custom-file-input {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  padding: 10px 16px;
}

.custom-file-label {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  padding: 10px 16px;
  color: #374151;
}

.custom-file-input:focus ~ .custom-file-label {
  border-color: #33a0d9;
  box-shadow: 0 0 0 0.2rem rgba(51, 160, 217, 0.25);
}

/* Image Preview Styling */
.bg-light {
  background-color: #F8F9FA !important;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid #E5E7EB;
}

.img-fluid {
  border-radius: 8px;
  max-width: 100%;
  height: auto;
}

/* Form Check Styling */
.form-check-input {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  border-radius: 4px;
}

.form-check-input:checked {
  background-color: #2AB930 !important;
  border-color: #2AB930 !important;
}

.form-check-label {
  color: #374151;
  font-weight: 500;
}

/* Input Group Styling */
.input-group-text {
  background: #fff !important;
  border: 1px solid #E5E7EB;
  color: #374151;
  font-weight: 500;
}

/* Button Group Toggle Styling */
.btn-outline-custom {
  color: #33a0d9;
  border-color: #33a0d9;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  border-radius: 10px;
  padding: 8px 16px;
  font-weight: 500;
}

.btn-outline-custom:hover,
.btn-custom-active {
  background-color: #33a0d9;
  color: #fff;
  border-color: #33a0d9;
}

/* Ensure toggle labels override the generic .form-group label color */
.form-group .btn-outline-custom {
  color: #33a0d9;
  border-color: #33a0d9;
}

.form-group .btn-custom-active {
  background-color: #33a0d9;
  color: #fff;
  border-color: #33a0d9;
}

/* Row Spacing */
.row {
  margin-bottom: 1rem;
}

/* Form Text Styling */
.form-text {
  color: #6B7280;
  font-size: 0.875rem;
}

.text-muted {
  color: #6B7280 !important;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-footer {
    flex-direction: column;
    gap: 10px;
  }
  
  .card-footer .btn {
    width: 100%;
    margin-right: 0 !important;
  }
  
  .card-footer div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
