import axios from 'axios'
import * as types from '../mutation-types'

// state
export const state = {
  loading: true,
  items: null,
  appInfo: null,
  tenant: null,
  subscription_limit_message: null,
  demo_message: null,
  showPlan: false,
}

// getters
export const getters = {
  loading: (state) => state.loading,
  items: (state) => (state.items ? state.items.data : ''),
  pagination: (state) => (state.items ? state.items.meta : { current_page: 1 }),
  appInfo: (state) => state.appInfo,
  tenant: (state) => state.tenant,
  subscription_limit_message: (state) => state.subscription_limit_message,
  demo_message: (state) => state.demo_message,
}

// mutations
export const mutations = {
  // Items Mutations
  [types.FETCH_DATA](state, { items, loading }) {
    state.items = items
    state.loading = loading || false
  },
  [types.DELETE_DATA](state, { slug }) {
    state.items.data = state.items.data.filter((data) => data.slug !== slug)
  },

  [types.FETCH_APPINFO](state, { appInfo }) {
    state.appInfo = appInfo
  },

  [types.FETCH_TENANT](state, { tenant }) {
    state.tenant = tenant
  },

  [types.SET_SUBSCRIPTION_LIMIT_MESSAGE](state, subscription_limit_message) {
    state.subscription_limit_message = subscription_limit_message
  },

  [types.SET_DEMO_MESSAGE](state, demo_message) {
    state.demo_message = demo_message
  },

  [types.SET_SHOW_PLAN](state, showPlan) {
    state.showPlan = showPlan
  },
}

// Actions
// @ts-ignore
// @ts-ignore
export const actions = {
  // toggle show plan
  setShowPlan({ commit }, showPlan) {
    commit(types.SET_SHOW_PLAN, showPlan)
  },

  // Fetch Data
  async fetchData({ commit }, { path, currentPage }) {
    const { data } = await axios.get(
      window.location.origin + path + currentPage
    )
    commit(types.FETCH_DATA, { items: data, loading: false })
  },

  // Fetch Specific Logs
  async fetchSpecificLogs({ commit }, { path, currentPage, term = '', slug = null, modelName = null }) {
    let apiUrl = window.location.origin + path + currentPage;
    
    if (term !== '') {
      apiUrl += `&term=${term}`;
    }

    if (slug !== null && modelName !== null) {
      apiUrl += `&slug=${slug}&modelName=${modelName}`;
    }
    const { data } = await axios.get(apiUrl);
    commit(types.FETCH_DATA, { items: data, loading: false });
  },

  // APPINFO Data
  async fetchSettingData({ commit }) {
    const { data } = await axios.get(
      window.location.origin + '/api/general-settings'
    )
    commit(types.FETCH_APPINFO, { appInfo: data })
  },

  // Tenant Data
  async fetchTenant({ commit }) {
    const { data } = await axios.get(window.location.origin + '/api/tenant/me')
    commit(types.FETCH_TENANT, { tenant: data.data })
  },

  setSubscriptionLimitMessage({ commit }, subscription_limit_message) {
    commit(types.SET_SUBSCRIPTION_LIMIT_MESSAGE, subscription_limit_message)
  },

  setDemoMessage({ commit }, demo_message) {
    commit(types.SET_DEMO_MESSAGE, demo_message)
  },

  // Search Data
  async searchData(
    { commit },
    { path, currentPage, term = '', startDate = '', endDate = '', type = '' }
  ) {
    let apiUrl = window.location.origin + path + '?term=' + term + '&page=' + currentPage + '&startDate=' + startDate + '&endDate=' + endDate;
    
    if (type) {
      apiUrl += '&type=' + type;
    }
    
    const { data } = await axios.get(apiUrl)
    commit(types.FETCH_DATA, { items: data })
  },
  // Get All Data
  async allData({ commit }, { path }) {
    try {
      const { data } = await axios.get(window.location.origin + path)
      commit(types.FETCH_DATA, { items: data })
    } catch (error) {
      console.error('Error in allData action:', error)
      // Don't throw error, just log it
      // Return empty data to prevent crashes
      commit(types.FETCH_DATA, { items: { data: [] } })
    }
  },
  // Delete Data
  async deleteData({ commit }, { path, slug }) {
    try {
      const { data } = await axios.delete(window.location.origin + path + slug)
      commit(types.DELETE_DATA, { slug: slug })
      return data.success
    } catch (error) {
      // Return error message from API response if available
      if (error.response && error.response.data) {
        const errorData = error.response.data;
        if (errorData.message) {
          return { success: false, message: errorData.message }
        }
      }
      // Fallback to generic error message
      return { success: false, message: error.message || 'An error occurred while deleting the item.' }
    }
  },

  // Fetch Data by Type
  async fetchDataByType({ commit }, {
    path,
    currentPage,
    typeName = '',
    typeValue = '',
  }) {
    const { data } = await axios.get(
      window.location.origin + path + currentPage + '&' + typeName + '=' + typeValue
    )
    commit(types.FETCH_DATA, { items: data, loading: false })
  },

  // Search Data with Filter type
  async searchDataWithFilterType ({ commit }, { query, path, currentPage, term = '', startDate = '', endDate = '', filterType = '' }) {
    try {
      const { data } = await axios.get(window.location.origin + path + '?term=' + term + '&page=' + currentPage + '&startDate=' + startDate + '&endDate=' + endDate + '&filterType=' + filterType)
      
      // Transform response if it's in custom format (inventory history)
      let items = data
      if (data.data && typeof data.current_page !== 'undefined' && !data.meta) {
        // Transform custom pagination format to Laravel format
        items = {
          data: data.data,
          meta: {
            current_page: data.current_page || 1,
            per_page: data.per_page || 10,
            total: data.total || 0,
            last_page: data.last_page || 1,
            from: data.from || 0,
            to: data.to || 0,
          }
        }
      }
      
      commit(types.FETCH_DATA, { items, loading: false })
    } catch (error) {
      console.error('Error in searchDataWithFilterType:', error)
      commit(types.FETCH_DATA, { items: { data: [], meta: { current_page: 1, per_page: 10, total: 0, last_page: 1 } }, loading: false })
    }
  },

  // Search Data by Type
  async searchDataByType(
    { commit },
    {
      path,
      currentPage,
      term = '',
      startDate = '',
      endDate = '',
      typeName = '',
      typeValue = '',
    }
  ) {
    const { data } = await axios.get(
      window.location.origin +
      path +
      '?term=' +
      term +
      '&page=' +
      currentPage +
      '&startDate=' +
      startDate +
      '&endDate=' +
      endDate +
      '&' + typeName + '=' +
      typeValue
    )
    commit(types.FETCH_DATA, { items: data })
  },
}
