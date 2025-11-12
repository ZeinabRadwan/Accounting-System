<template>
  <div class="branch-select-page">
    <div class="page-header">
      <h1 class="page-title">{{ `${$t('Select')} ${$t('Branch')}` }}</h1>
    </div>

    <transition-group name="fade-list" tag="div" class="branches-grid">
      <div
        v-for="branch in branches"
        :key="branch.id"
        class="branch-card"
        :class="{ 'is-selected': isSelected(branch) }"
        @click="setDefault(branch)"
        role="button"
        tabindex="0"
        @keyup.enter="setDefault(branch)"
        :aria-label="`${$t('Select Branch')}: ${branch.name}`"
      >
        <div v-if="isSelected(branch)" class="branch-card__check">
          <i class="fas fa-check"></i>
        </div>
        <div class="branch-card__icon">
          <i class="fas fa-building"></i>
        </div>
        <h3 class="branch-card__title" :title="branch.name">
          {{ branch.name === 'Main Branch' ? (appInfo?.companyName || branch.name) : branch.name }}
        </h3>
        <p v-if="branch.code" class="branch-card__code">{{ branch.code }}</p>
      </div>
    </transition-group>

    <div v-if="loading" class="branches-grid">
      <div v-for="n in 6" :key="n" class="branch-card skeleton">
        <div class="branch-card__icon"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line skeleton-line--short"></div>
      </div>
    </div>

    <div v-if="!loading && branches.length === 0" class="empty-state">
      <i class="fas fa-building"></i>
      <p>{{ $t('No branches found') }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'SelectBranch',
  middleware: [],
  data () {
    return {
      branches: [],
      loading: false
    }
  },
  computed: {
    ...mapGetters('operations', ['appInfo']),
    user () { return this.$store.getters['auth/user'] || {} },
    userId () { return this.user?.id },
    selectedBranchId () { return Number(this.user?.default_branch_id || 0) }
  },
  async created () {
    await this.loadBranches()
  },
  methods: {
    async loadBranches () {
      try {
        this.loading = true
        const { data } = await axios.get(`/api/users/${this.userId}/branches`)
        this.branches = Array.isArray(data) ? data : (data?.data || [])
        
        // Auto-select branch if there's only one branch and no branch is currently selected
        if (this.branches.length === 1 && this.selectedBranchId === 0) {
          await this.setDefault(this.branches[0])
        }
      } catch (e) {
        // silently fail
      } finally {
        this.loading = false
      }
    },
    isSelected (branch) {
      return Number(branch.id) === this.selectedBranchId
    },
    async setDefault (branch) {
      try {
        await axios.post('/api/user-branches/set-default', { branch_id: branch.id })
        await this.$store.dispatch('auth/fetchUser')
        this.$router.push({ name: 'home' })
      } catch (e) {
        // silently fail
      }
    }
  }
}
</script>

<style scoped>
.branch-select-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.page-header {
  margin-bottom: 2rem;
}

.page-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.branches-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}

.branch-card {
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 180px;
}

.branch-card:hover {
  border-color: #33a0d9;
  box-shadow: 0 4px 12px rgba(51, 160, 217, 0.15);
  transform: translateY(-2px);
}

.branch-card:focus {
  outline: 2px solid #33a0d9;
  outline-offset: 2px;
}

.branch-card.is-selected {
  border-color: #33a0d9;
  background: #f0f8ff;
  box-shadow: 0 4px 12px rgba(51, 160, 217, 0.2);
}

.branch-card__icon {
  width: 80px;
  height: 80px;
  border-radius: 16px;
  background: #f5f5f5;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: 1.25rem;
  transition: all 0.2s ease;
}

.branch-card:hover .branch-card__icon {
  background: #e6f4fc;
  color: #33a0d9;
  transform: scale(1.05);
}

.branch-card.is-selected .branch-card__icon {
  background: #33a0d9;
  color: #ffffff;
}

.branch-card__title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.branch-card.is-selected .branch-card__title {
  color: #33a0d9;
}

.branch-card__code {
  font-size: 0.875rem;
  color: #999;
  margin: 0;
  line-height: 1.5;
}

.branch-card.is-selected .branch-card__code {
  color: #33a0d9;
}

.branch-card__check {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #33a0d9;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 600;
}

/* Skeleton loader */
.skeleton {
  pointer-events: none;
}

.skeleton .branch-card__icon {
  background: #f5f5f5;
}

.skeleton-line {
  height: 1rem;
  background: #f5f5f5;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  width: 100%;
}

.skeleton-line--short {
  width: 60%;
  margin: 0 auto;
}

/* Empty state */
.empty-state {
  text-align: center;
  padding: 3rem 2rem;
  color: #999;
}

.empty-state i {
  font-size: 3rem;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.empty-state p {
  font-size: 1rem;
  margin: 0;
}

/* Transitions */
.fade-list-enter-active {
  transition: all 0.3s ease;
}

.fade-list-leave-active {
  transition: all 0.2s ease;
}

.fade-list-enter,
.fade-list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Responsive */
@media (max-width: 768px) {
  .branch-select-page {
    padding: 1.5rem 1rem;
  }

  .page-title {
    font-size: 1.5rem;
  }

  .branches-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .branch-card {
    padding: 1.5rem 1rem;
    min-height: 160px;
  }

  .branch-card__icon {
    width: 64px;
    height: 64px;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
}
</style>


