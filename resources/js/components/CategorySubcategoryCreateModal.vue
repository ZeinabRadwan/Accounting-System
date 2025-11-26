<template>
  <div>
    <VModal v-model="showModal" @close="closeModal">
      <template v-slot:title>{{ $t("Create Category / Subcategory") }}</template>
      <div class="w-100" @click.stop>
        <!-- Tabs Navigation -->
        <ul class="nav nav-tabs mb-3" role="tablist">
            <li class="nav-item">
              <a class="nav-link" :class="{ active: activeTab === 'subcategory' }" 
                 @click="activeTab = 'subcategory'" 
                 href="#" 
                 @click.prevent>
                <i class="fas fa-folder-open mr-2"></i>
                {{ $t("Subcategory") }}
              </a>
            </li>
          <li class="nav-item">
            <a class="nav-link" :class="{ active: activeTab === 'category' }" 
               @click="activeTab = 'category'" 
               href="#" 
               @click.prevent>
              <i class="fas fa-folder mr-2"></i>
              {{ $t("Main Category") }}
            </a>
          </li>
        </ul>

        <!-- Tab Content -->
        <div class="tab-content">
          <!-- Category Tab -->
          <div v-show="activeTab === 'category'" class="tab-pane fade" :class="{ 'show active': activeTab === 'category' }">
            <form role="form" @keydown="categoryForm.onKeydown($event)" @submit.prevent.stop>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="categoryName">{{ $t('Name') }}
                    <span class="required">*</span></label>
                  <input id="categoryName" v-model="categoryForm.name" type="text" class="form-control"
                    :class="{ 'is-invalid': categoryForm.errors.has('name') }" name="name"
                    :placeholder="$t('Enter a name')" />
                  <has-error :form="categoryForm" field="name" />
                </div>
                <div class="form-group col-md-6">
                  <label for="categoryStatus">{{ $t('Status') }}</label>
                  <select id="categoryStatus" v-model="categoryForm.status" class="form-control"
                    :class="{ 'is-invalid': categoryForm.errors.has('status') }">
                    <option value="1">{{ $t('Active') }}</option>
                    <option value="0">{{ $t('Inactive') }}</option>
                  </select>
                  <has-error :form="categoryForm" field="status" />
                </div>
              </div>
              <div class="form-group">
                <label for="categoryNote">{{ $t('Note') }}</label>
                <textarea id="categoryNote" v-model="categoryForm.note" class="form-control"
                  :class="{ 'is-invalid': categoryForm.errors.has('note') }" 
                  :placeholder="$t('Write your note here!')" rows="3"></textarea>
                <has-error :form="categoryForm" field="note" />
              </div>
            </form>
          </div>

          <!-- Subcategory Tab -->
          <div v-show="activeTab === 'subcategory'" class="tab-pane fade" :class="{ 'show active': activeTab === 'subcategory' }">
            <form role="form" @keydown="subcategoryForm.onKeydown($event)" @submit.prevent.stop>
              <div class="form-group">
                <label for="subcategoryName">{{ $t('Name') }}
                  <span class="required">*</span></label>
                <input id="subcategoryName" v-model="subcategoryForm.name" type="text" class="form-control"
                  :class="{ 'is-invalid': subcategoryForm.errors.has('name') }" name="name"
                  :placeholder="$t('Enter a name')" />
                <has-error :form="subcategoryForm" field="name" />
              </div>
              <div class="row">
                <div v-if="categories" class="form-group col-md-6">
                  <label for="subcategoryCategory">{{ $t('Category Name') }}
                    <span class="required">*</span></label>
                  <div class="d-flex w-100">
                    <v-select class="flex-grow-1 category-select" v-model="subcategoryForm.category" :options="categories" label="name"
                      :class="{ 'is-invalid': subcategoryForm.errors.has('category') }" name="category"
                      :placeholder="$t('Select a category')" />
                    <div class="input-group-text create-btn" @click="activeTab = 'category'" style="cursor: pointer;">
                      <i class="fas fa-solid fa-plus-circle"></i>
                    </div>
                  </div>
                  <has-error :form="subcategoryForm" field="category" />
                </div>
                <div class="form-group col-md-6">
                  <label for="subcategoryStatus">{{ $t('Status') }}</label>
                  <select id="subcategoryStatus" v-model="subcategoryForm.status" class="form-control"
                    :class="{ 'is-invalid': subcategoryForm.errors.has('status') }">
                    <option value="1">{{ $t('Active') }}</option>
                    <option value="0">{{ $t('Inactive') }}</option>
                  </select>
                  <has-error :form="subcategoryForm" field="status" />
                </div>
              </div>
              <div class="form-group">
                <label for="subcategoryNote">{{ $t('Note') }}</label>
                <textarea id="subcategoryNote" v-model="subcategoryForm.note" class="form-control"
                  :class="{ 'is-invalid': subcategoryForm.errors.has('note') }" 
                  :placeholder="$t('Write your note here!')" rows="3"></textarea>
                <has-error :form="subcategoryForm" field="note" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div slot="modal-footer">
        <button @click.stop="saveCurrent" :loading="categoryForm.busy || subcategoryForm.busy" class="btn btn-success">
          <i class="fas fa-save" /> {{ $t("Save") }}
        </button>
        <button @click.stop="closeModal" class="btn btn-secondary ml-2">
          {{ $t("Cancel") }}
        </button>
      </div>
    </VModal>
    <a @click="toggleModal" class="create-button">
      <slot></slot>
    </a>
  </div>
</template>

<script>
import Form from 'vform'
import axios from 'axios'

export default {
  middleware: ["auth", "check-permissions"],
  computed: {
    // Use local categories state instead of shared Vuex items
    // This prevents overwriting clients/other data in the store
  },
  data: () => ({
    showModal: false,
    activeTab: 'subcategory',
    categories: [], // Local state for categories instead of Vuex
    categoryForm: new Form({
      name: '',
      note: '',
      status: 1,
    }),
    subcategoryForm: new Form({
      name: '',
      note: '',
      status: 1,
      category: null,
    }),
  }),
  created() {
    this.getCategories()
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
      if (this.showModal) {
        // Reset forms when opening modal
        this.resetForms()
        this.activeTab = 'subcategory'
        // Refresh categories list
        this.getCategories()
      }
    },

    closeModal(event) {
      // Stop event propagation to prevent closing parent modals
      if (event) {
        event.stopPropagation()
        event.preventDefault()
      }
      this.showModal = false
      this.resetForms()
    },

    resetForms() {
      this.categoryForm.reset()
      this.subcategoryForm.reset()
      this.categoryForm.status = 1
      this.subcategoryForm.status = 1
      this.subcategoryForm.category = null
    },

    // Get all product categories for subcategory form
    // Uses local state instead of Vuex to avoid overwriting other data (like clients)
    async getCategories() {
      try {
        const { data } = await axios.get(window.location.origin + '/api/all-product-categories')
        this.categories = data.data || []
      } catch (error) {
        console.error('Error loading categories:', error)
        this.categories = []
      }
    },

    // Save based on active tab
    async saveCurrent(event) {
      // Stop event propagation to prevent closing parent modals
      if (event) {
        event.stopPropagation()
        event.preventDefault()
      }
      if (this.activeTab === 'category') {
        await this.saveCategory()
      } else {
        await this.saveSubCategory()
      }
    },

    // Save category
    async saveCategory() {
      // Store the category name before saving
      const categoryName = this.categoryForm.name
      
      await this.categoryForm
        .post(window.location.origin + '/api/product-categories')
        .then(async () => {
          toast.fire({
            type: 'success',
            title: this.$t('Category added successfully'),
          })
          // Refresh categories list for subcategory form
          await this.getCategories()
          // Create a simple object with the name for parent to find it
          const createdCategory = { name: categoryName }
          // Emit event with created category data to refresh in parent
          this.$emit('categoryCreated', createdCategory)
          // Reset category form
          this.categoryForm.reset()
          this.categoryForm.status = 1
          // Navigate to subcategory tab instead of closing modal
          this.activeTab = 'subcategory'
          // Auto-select the newly created category in subcategory form
          await this.$nextTick()
          const newCategory = this.categories.find(cat => cat.name === categoryName)
          if (newCategory) {
            this.subcategoryForm.category = newCategory
          }
        })
        .catch((error) => {
          // Check if this is a validation error (status 422)
          const status = error && error.response && error.response.status
          const serverErrors = error && error.response && error.response.data && error.response.data.errors
          
          if (status === 422 && serverErrors) {
            // Show toast notification for validation errors
            toast.fire({
              type: 'error',
              title: this.$t('Validation Error'),
              text: this.$t('Please check the form for errors and try again.'),
            })
            
            // Scroll to the first invalid input in the modal after DOM updates
            this.$nextTick(() => {
              // Wait a bit more to ensure vform has added the is-invalid class
              setTimeout(() => {
                const invalid = this.$el.querySelector('.is-invalid')
                if (invalid && typeof invalid.scrollIntoView === 'function') {
                  invalid.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }
              }, 100)
            })
          } else {
            // For other errors, show generic error message
            toast.fire({ type: 'error', title: this.$t('Please check your input and try again.') })
          }
        })
    },

    // Save subcategory
    async saveSubCategory() {
      // Store the subcategory name before saving
      const subcategoryName = this.subcategoryForm.name
      
      await this.subcategoryForm
        .post(window.location.origin + '/api/product-sub-categories')
        .then(async () => {
          toast.fire({
            type: 'success',
            title: this.$t('Sub category added successfully'),
          })
          // Create a simple object with the name for parent to find it
          const createdSubcategory = { name: subcategoryName }
          // Emit event with created subcategory data to refresh and select in parent
          this.$emit('subcategoryCreated', createdSubcategory)
          // Reset form
          this.subcategoryForm.reset()
          this.subcategoryForm.status = 1
          this.subcategoryForm.category = null
          // Close only this modal, not parent modals
          this.showModal = false
          this.resetForms()
        })
        .catch((error) => {
          // Check if this is a validation error (status 422)
          const status = error && error.response && error.response.status
          const serverErrors = error && error.response && error.response.data && error.response.data.errors
          
          if (status === 422 && serverErrors) {
            // Show toast notification for validation errors
            toast.fire({
              type: 'error',
              title: this.$t('Validation Error'),
              text: this.$t('Please check the form for errors and try again.'),
            })
            
            // Scroll to the first invalid input in the modal after DOM updates
            this.$nextTick(() => {
              // Wait a bit more to ensure vform has added the is-invalid class
              setTimeout(() => {
                const invalid = this.$el.querySelector('.is-invalid')
                if (invalid && typeof invalid.scrollIntoView === 'function') {
                  invalid.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }
              }, 100)
            })
          } else {
            // For other errors, show generic error message
            toast.fire({ type: 'error', title: this.$t('Please check your input and try again.') })
          }
        })
    },
  },
}
</script>

<style scoped>
/* Tab Navigation Styling */
.nav-tabs {
  border-bottom: 2px solid #dee2e6;
  margin-bottom: 1.5rem;
}

.nav-tabs .nav-item {
  margin-bottom: -2px;
}

.nav-tabs .nav-link {
  color: #495057;
  background-color: transparent;
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
}

.nav-tabs .nav-link:hover {
  border-color: #e9ecef #e9ecef #dee2e6;
  color: #33a0d9;
}

.nav-tabs .nav-link.active {
  color: #33a0d9;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
  border-bottom-color: transparent;
  font-weight: 600;
}

.nav-tabs .nav-link i {
  margin-right: 0.5rem;
}

/* Tab Content */
.tab-content {
  min-height: 200px;
}

.tab-pane {
  padding: 0;
}

/* Form Styling */
.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  font-weight: 500;
  color: #495057;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
}

.required {
  color: #dc3545;
  font-weight: bold;
}

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

.is-invalid {
  border-color: #DC3545 !important;
}

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

/* Button Styling */
.btn-success {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
  font-weight: 500;
}

.btn-success:hover {
  background: #229A26 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(42, 185, 48, 0.3);
}

.btn-secondary {
  background: #6c757d !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
  font-weight: 500;
}

.btn-secondary:hover {
  background: #5a6268 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(108, 117, 125, 0.3);
}

/* Create button styling */
.create-button {
  text-decoration: none;
  cursor: pointer;
}

.create-btn {
  padding: 11px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-left: none;
  border-radius: 0 0.25rem 0.25rem 0;
}

.create-btn:hover {
  background-color: #e9ecef;
}

/* Category select with create button styling */
.category-select {
  margin-right: 0 !important;
}

.category-select .vs__dropdown-toggle {
  border-right: none !important;
  border-radius: 0.25rem 0 0 0.25rem !important;
}

[dir="rtl"] .category-select .vs__dropdown-toggle {
  border-right: 1px solid #ced4da !important;
  border-left: none !important;
  border-radius: 0 0.25rem 0.25rem 0 !important;
}

/* RTL adjustments for create button */
[dir="rtl"] .create-btn {
  border-left: none;
  border-right: 1px solid #ced4da;
  border-radius: 0.25rem 0 0 0.25rem;
}

[dir="ltr"] .create-btn {
  border-left: 1px solid #ced4da;
  border-right: none;
  border-radius: 0 0.25rem 0.25rem 0;
}

/* Row spacing */
.row {
  margin-bottom: 1rem;
}

.row:last-child {
  margin-bottom: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .nav-tabs .nav-link {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  
  .tab-content {
    padding: 0.5rem;
  }
}
</style>

