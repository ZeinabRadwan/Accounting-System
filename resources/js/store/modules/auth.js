import axios from 'axios'
import Cookies from 'js-cookie'
import * as types from '../mutation-types'

// state
export const state = {
  user: null,
  token: Cookies.get('token')
}

// getters
export const getters = {
  user: state => state.user,
  token: state => state.token,
  check: state => state.user !== null
}

// mutations
export const mutations = {
  [types.SAVE_TOKEN] (state, { token, remember }) {
    state.token = token
    Cookies.set('token', token, { expires: remember ? 365 : null })
  },

  [types.FETCH_USER_SUCCESS] (state, { user }) {
    state.user = user
  },

  [types.FETCH_USER_FAILURE] (state) {
    state.token = null
    Cookies.remove('token')
  },

  [types.LOGOUT] (state) {
    state.user = null
    state.token = null

    Cookies.remove('token')
  },

  [types.UPDATE_USER] (state, { user }) {
    state.user = user
  }
}

// actions
export const actions = {
  saveToken ({ commit, dispatch }, payload) {
    commit(types.SAVE_TOKEN, payload)
  },

  async fetchUser ({ commit, dispatch }) {
    try {
      const { data } = await axios.get('/api/user')
      const user = data.data
      
      commit(types.FETCH_USER_SUCCESS, { user })
      
      // Automatically set language based on user's locale
      if (user.locale && user.locale !== 'en') {
        try {
          // Import dynamically to avoid circular dependency
          const { loadMessages } = await import('~/plugins/i18n')
          const i18n = await import('~/plugins/i18n').then(m => m.default)
          
          // Load messages for the user's locale
          await loadMessages(user.locale)
          
          // Update the Vuex store locale
          dispatch('lang/setLocale', { locale: user.locale }, { root: true })
          
          // Set the i18n locale
          i18n.locale = user.locale
        } catch (error) {
          console.warn('Failed to set user locale:', error)
        }
      }
    } catch (e) {
      commit(types.FETCH_USER_FAILURE)
    }
  },

  updateUser ({ commit }, payload) {
    commit(types.UPDATE_USER, payload)
  },

  async logout ({ commit }) {
    try {
      await axios.post('/api/logout')
    } catch (e) { }

    commit(types.LOGOUT)
  },

  async fetchOauthUrl (ctx, { provider }) {
    const { data } = await axios.post(`/api/oauth/${provider}`)

    return data.url
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}