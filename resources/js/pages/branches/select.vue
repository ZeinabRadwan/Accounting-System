<template>
  <div class="container py-4 branch-select-page">
    <div class="page-head d-flex align-items-center justify-content-between mb-4">
      <div>
        <h2 class="page-title mb-1">{{ `${$t('Select')} ${$t('Branch')}` }}</h2>
      </div>
    </div>

    <transition-group name="fade-list" tag="div" class="row">
      <div v-for="(branch, idx) in branches" :key="branch.id" class="col-xl-4 col-lg-6 col-md-6 mb-4">
        <div
          class="branch-card h-100"
          :class="cardTone(idx)"
          @click="setDefault(branch)"
          role="button"
          :aria-label="`${$t('Select Branch')}: ${branch.name}`"
        >
          <div class="branch-card__body">
            <div class="branch-card__icon">
              <i class="fas fa-code-branch"></i>
            </div>
            <div class="branch-card__content">
              <div class="branch-card__title text-truncate" :title="branch.name">
                {{ branch.name === 'Main Branch' ? (appInfo?.companyName || branch.name) : branch.name }}
              </div>
              <div class="branch-card__meta text-muted">{{ branch.code || $t('Branch') }}</div>
            </div>
            <div v-if="isSelected(branch)" class="branch-card__badge">
              <i class="fas fa-check"></i>
              <span>{{ $t('Selected') }}</span>
            </div>
          </div>
          <div class="branch-card__footer">
            <span>{{ isSelected(branch) ? $t('Selected') : $t('Select') }}</span>
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </transition-group>

    <div v-if="loading" class="row">
      <div v-for="n in 6" :key="n" class="col-xl-3 col-lg-4 col-md-6 mb-3">
        <div class="branch-card skeleton h-100">
          <div class="branch-card__body"></div>
          <div class="branch-card__footer"></div>
        </div>
      </div>
    </div>

    <div v-if="!loading && branches.length === 0" class="text-center text-muted py-5">
      {{ $t('no_data_found') }}
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
    cardTone (idx) {
      const tones = ['tone-blue', 'tone-green', 'tone-teal', 'tone-navy']
      return tones[idx % tones.length]
    },
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
  animation: fadeIn .3s ease;
}
.page-title {
  font-weight: 700;
}
.page-subtitle {
  font-size: .95rem;
}

.branch-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,.06);
  border: 1px solid #e9ecef;
  cursor: pointer;
  overflow: hidden;
  transition: transform .2s ease, box-shadow .2s ease;
  min-height: 160px;
}
.branch-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0,0,0,.10);
}
.branch-card__body {
  display: flex;
  align-items: center;
  padding: 28px 24px 18px 24px;
  position: relative;
}
.branch-card__icon {
  width: 64px;
  height: 64px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 22px;
}
.tone-blue .branch-card__icon { background: #33a0d91a; color: #33a0d9; }
.tone-green .branch-card__icon { background: #2ab9301a; color: #2ab930; }
.tone-teal .branch-card__icon { background: #449eae1a; color: #449eae; }
.tone-navy .branch-card__icon { background: #152a4a1a; color: #152a4a; }

.branch-card__content { flex: 1; min-width: 0; }
.branch-card__title { font-size: 1.2rem; font-weight: 700; color: #023033; margin-bottom: 4px; }
.branch-card__meta { font-size: 1rem; }

.branch-card__badge {
  position: absolute;
  top: 12px;
  right: 12px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #f6fef4;
  color: #2ab930;
  border: 1px solid #d7f2d9;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: .75rem;
  font-weight: 600;
}

.branch-card__footer {
  background: #f8fafc;
  border-top: 1px solid #edf2f7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 18px;
  font-weight: 600;
  color: #334155;
}

/* Skeleton loader */
.skeleton {
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, #f2f4f7 25%, #e9edf2 37%, #f2f4f7 63%);
  background-size: 400% 100%;
  animation: shimmer 1.2s ease infinite;
}

/* Transitions */
.fade-list-enter-active { transition: all .25s ease; }
.fade-list-leave-active { transition: all .2s ease; }
.fade-list-enter, .fade-list-leave-to { opacity: 0; transform: translateY(8px); }

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>


