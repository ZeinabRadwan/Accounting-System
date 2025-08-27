import axios from 'axios'

const state = {
  chartOfAccounts: [],
  loading: false,
  error: null
}

const getters = {
  getChartOfAccounts: state => state.chartOfAccounts,
  getChartOfAccountsByType: state => type => {
    return state.chartOfAccounts.filter(account => account.type === type)
  },
  getChartOfAccountsByParent: state => parentId => {
    return state.chartOfAccounts.filter(account => account.parent_id === parentId)
  },
  isLoading: state => state.loading,
  getError: state => state.error
}

const actions = {
  async fetchChartOfAccounts({ commit }) {
    commit('SET_LOADING', true)
    commit('CLEAR_ERROR')
    
    try {
      const response = await axios.get('/api/chart-of-accounts')
      const accounts = response.data.data || []
      
      // Transform accounts to include type name
      const transformedAccounts = accounts.map(account => ({
        ...account,
        type: account.type ? account.type.name : 'Unknown'
      }))
      
      commit('SET_CHART_OF_ACCOUNTS', transformedAccounts)
    } catch (error) {
      console.error('Error fetching chart of accounts:', error)
      commit('SET_ERROR', error.response?.data?.message || 'Failed to fetch chart of accounts')
    } finally {
      commit('SET_LOADING', false)
    }
  },

  async createChartOfAccount({ commit, dispatch }, accountData) {
    commit('SET_LOADING', true)
    commit('CLEAR_ERROR')
    
    try {
      const response = await axios.post('/api/chart-of-accounts', accountData)
      await dispatch('fetchChartOfAccounts')
      return response.data
    } catch (error) {
      console.error('Error creating chart of account:', error)
      commit('SET_ERROR', error.response?.data?.message || 'Failed to create chart of account')
      throw error
    } finally {
      commit('SET_LOADING', false)
    }
  },

  async updateChartOfAccount({ commit, dispatch }, { id, data }) {
    commit('SET_LOADING', true)
    commit('CLEAR_ERROR')
    
    try {
      const response = await axios.put(`/api/chart-of-accounts/${id}`, data)
      await dispatch('fetchChartOfAccounts')
      return response.data
    } catch (error) {
      console.error('Error updating chart of account:', error)
      commit('SET_ERROR', error.response?.data?.message || 'Failed to update chart of account')
      throw error
    } finally {
      commit('SET_LOADING', false)
    }
  },

  async deleteChartOfAccount({ commit, dispatch }, id) {
    commit('SET_LOADING', true)
    commit('CLEAR_ERROR')
    
    try {
      const response = await axios.delete(`/api/chart-of-accounts/${id}`)
      await dispatch('fetchChartOfAccounts')
      return response.data
    } catch (error) {
      console.error('Error deleting chart of account:', error)
      commit('SET_ERROR', error.response?.data?.message || 'Failed to delete chart of account')
      throw error
    } finally {
      commit('SET_LOADING', false)
    }
  }
}

const mutations = {
  SET_CHART_OF_ACCOUNTS(state, accounts) {
    state.chartOfAccounts = accounts
  },
  
  SET_LOADING(state, loading) {
    state.loading = loading
  },
  
  SET_ERROR(state, error) {
    state.error = error
  },
  
  CLEAR_ERROR(state) {
    state.error = null
  },
  
  ADD_CHART_OF_ACCOUNT(state, account) {
    state.chartOfAccounts.push(account)
  },
  
  UPDATE_CHART_OF_ACCOUNT(state, updatedAccount) {
    const index = state.chartOfAccounts.findIndex(account => account.id === updatedAccount.id)
    if (index !== -1) {
      state.chartOfAccounts.splice(index, 1, updatedAccount)
    }
  },
  
  REMOVE_CHART_OF_ACCOUNT(state, id) {
    state.chartOfAccounts = state.chartOfAccounts.filter(account => account.id !== id)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
