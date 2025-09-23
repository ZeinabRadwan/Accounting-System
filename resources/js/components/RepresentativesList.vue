<template>
  <div class="representatives-list">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h6 class="mb-0">
        <i class="fas fa-users mr-2"></i>
        {{ $t("Representatives") }} ({{ representatives.length }})
      </h6>
      <button 
        type="button" 
        class="btn btn-sm btn-primary" 
        @click="showAddForm = true"
        v-if="!showAddForm"
      >
        <i class="fas fa-plus mr-1"></i>
        {{ $t("Add Representative") }}
      </button>
    </div>

    <!-- Add/Edit Form -->
                <RepresentativeForm 
              v-if="showAddForm"
              :is-editing="isEditing"
              :initial-data="editingRepresentative"
              @add-representative="handleAddRepresentative"
              @update-representative="handleEditRepresentative"
              @cancel="handleCancel"
            />

    <!-- Representatives List -->
    <div v-if="representatives.length > 0" class="representatives-table">
      <div class="table-responsive">
        <table class="table table-sm table-bordered">
          <thead class="thead-light">
            <tr>
              <th>{{ $t("Name") }}</th>
              <th>{{ $t("Position") }}</th>
              <th>{{ $t("Email") }}</th>
              <th>{{ $t("Phone") }}</th>
              <th>{{ $t("Primary") }}</th>
              <th>{{ $t("Actions") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="rep in representatives" :key="rep.id" :class="{ 'table-primary': rep.is_primary }">
              <td>
                <strong>{{ rep.name }}</strong>
                <span v-if="rep.is_primary" class="badge badge-success ml-2">{{ $t("Primary") }}</span>
              </td>
              <td>{{ rep.position || '-' }}</td>
              <td>
                <a v-if="rep.email" :href="`mailto:${rep.email}`" class="text-primary">
                  {{ rep.email }}
                </a>
                <span v-else>-</span>
              </td>
              <td>
                <a v-if="rep.phone" :href="`tel:${rep.phone}`" class="text-primary">
                  {{ rep.phone }}
                </a>
                <span v-else>-</span>
              </td>
              <td>
                <span v-if="rep.is_primary" class="text-success">
                  <i class="fas fa-check-circle"></i>
                </span>
                <span v-else>-</span>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <button 
                    type="button" 
                    class="btn btn-outline-primary" 
                    @click="editRepresentative(rep)"
                    :title="$t('Edit')"
                  >
                    <i class="fas fa-edit"></i>
                  </button>
                  <button 
                    type="button" 
                    class="btn btn-outline-danger" 
                    @click="deleteRepresentative(rep)"
                    :title="$t('Delete')"
                  >
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Empty State -->
    <div v-else-if="!showAddForm" class="text-center py-4 text-muted">
      <i class="fas fa-users fa-3x mb-3"></i>
      <p>{{ $t("No representatives added yet") }}</p>
      <!-- <button 
        type="button" 
        class="btn btn-primary" 
        @click="showAddForm = true"
      >
        <i class="fas fa-plus mr-1"></i>
        {{ $t("Add First Representative") }}
      </button> -->
    </div>

    <!-- Notes for representatives -->
    <div v-if="representatives.length > 0" class="mt-3">
      <small class="text-muted">
        <i class="fas fa-info-circle mr-1"></i>
        {{ $t("Primary representatives are highlighted and will be marked as the main contact person") }}
      </small>
    </div>
  </div>
</template>

<script>
import RepresentativeForm from './RepresentativeForm.vue';

export default {
  name: "RepresentativesList",
  components: {
    RepresentativeForm
  },
  props: {
    // Array of representatives
    representatives: {
      type: Array,
      default: () => []
    }
  },
  watch: {
    representatives: {
      handler(newRepresentatives) {
        console.log('=== REPRESENTATIVESLIST WATCHER ===');
        console.log('RepresentativesList: representatives prop changed');
        console.log('New representatives:', newRepresentatives);
        console.log('New representatives length:', newRepresentatives ? newRepresentatives.length : 'undefined');
        console.log('New representatives type:', typeof newRepresentatives);
        console.log('Is array:', Array.isArray(newRepresentatives));
        console.log('=== END REPRESENTATIVESLIST WATCHER ===');
      },
      immediate: true,
      deep: true
    }
  },
  data() {
    return {
      showAddForm: false,
      isEditing: false,
      editingRepresentative: {},
      loading: false
    };
  },
  methods: {
    // Handle adding new representative locally
    handleAddRepresentative(representativeData) {
      // Generate a temporary ID for new representatives
      const newRepresentative = {
        ...representativeData,
        id: 'temp_' + Date.now(),
        temp: true
      };

      // If this is a primary representative, unset others
      if (newRepresentative.is_primary) {
        this.representatives.forEach(rep => rep.is_primary = false);
      }

      // Add to local list
      this.representatives.push(newRepresentative);
      
      // Reset form state
      this.showAddForm = false;
      this.isEditing = false;
      this.editingRepresentative = {};
      
      // Emit the updated representatives array to parent
      this.$emit('representatives-changed', this.representatives);
    },

    editRepresentative(representative) {
      this.editingRepresentative = { ...representative };
      this.isEditing = true;
      this.showAddForm = true;
    },

    // Handle editing representative locally
    handleEditRepresentative(representativeData) {
      // Find and update the representative in the local list
      const index = this.representatives.findIndex(rep => rep.id === this.editingRepresentative.id);
      if (index !== -1) {
        // If this is a primary representative, unset others
        if (representativeData.is_primary) {
          this.representatives.forEach(rep => rep.is_primary = false);
        }
        
        this.representatives[index] = { ...representativeData, id: this.editingRepresentative.id };
      }
      
      // Reset form state
      this.showAddForm = false;
      this.isEditing = false;
      this.editingRepresentative = {};
      
      // Emit the updated representatives array to parent
      this.$emit('representatives-changed', this.representatives);
    },

    // Handle deleting representative locally
    deleteRepresentative(representative) {
      if (!confirm(this.$t('Are you sure you want to delete this representative?'))) {
        return;
      }

      // Remove from local list
      const index = this.representatives.findIndex(rep => rep.id === representative.id);
      if (index !== -1) {
        this.representatives.splice(index, 1);
        
        // Emit the updated representatives array to parent
        this.$emit('representatives-changed', this.representatives);
      }
    },

    handleCancel() {
      this.showAddForm = false;
      this.isEditing = false;
      this.editingRepresentative = {};
    }
  }
};
</script>

<style scoped>
.representatives-list {
  margin-top: 20px;
}

.representatives-table {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.table th {
  border-top: none;
  font-weight: 600;
  font-size: 0.9rem;
}

.table td {
  vertical-align: middle;
  font-size: 0.9rem;
}

.btn-group-sm .btn {
  padding: 0.25rem 0.5rem;
}

.badge {
  font-size: 0.7rem;
}

.table-primary {
  background-color: #e3f2fd !important;
}

/* Make the primary button green within this component */
.btn-primary {
  background-color: rgb(40, 167, 69) !important;
  border-color: rgb(40, 167, 69) !important;
}

.btn-primary:hover,
.btn-primary:focus {
  background-color: rgb(33, 136, 56) !important; /* slightly darker */
  border-color: rgb(33, 136, 56) !important;
}
</style>
