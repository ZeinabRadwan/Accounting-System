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
                  <v-select v-model="subcategoryForm.category" :options="categories" label="name"
                    :class="{ 'is-invalid': subcategoryForm.errors.has('category') }" name="category"
                    :placeholder="$t('Select a category')" />
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
import { mapGetters } from 'vuex'

export default {
  middleware: ["auth", "check-permissions"],
  computed: {
    ...mapGetters("operations", ["items"]),
    categories() {
      return this.items || []
    }
  },
  data: () => ({
    showModal: false,
    activeTab: 'subcategory',
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
    async getCategories() {
      await this.$store.dispatch('operations/allData', {
        path: '/api/all-product-categories',
      })
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
          // Reset form
          this.categoryForm.reset()
          this.categoryForm.status = 1
          // Close only this modal, not parent modals
          this.showModal = false
          this.resetForms()
        })
        .catch(() => {
          toast.fire({ type: 'error', title: this.$t('Please check your input and try again.') })
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
        .catch(() => {
          toast.fire({ type: 'error', title: this.$t('Please check your input and try again.') })
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

