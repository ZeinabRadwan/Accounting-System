import axios from 'axios'

class TenantActivityService {
  constructor() {
    this.sessionId = null
    this.heartbeatInterval = null
    this.activityTimeout = null
    this.lastActivityTime = Date.now()
    this.heartbeatIntervalMs = 30 * 1000 // 30 seconds - more frequent updates
    this.inactivityTimeoutMs = 10 * 60 * 1000 // 10 minutes
    this.isActive = false
    this.activityEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click']
  }

  /**
   * Start tracking user activity
   */
  start() {
    if (this.isActive) {
      return
    }

    this.isActive = true
    this.lastActivityTime = Date.now()

    // Set up activity listeners
    this.setupActivityListeners()

    // Send initial heartbeat
    this.sendHeartbeat()

    // Set up periodic heartbeat
    this.heartbeatInterval = setInterval(() => {
      this.sendHeartbeat()
    }, this.heartbeatIntervalMs)

    // Set up inactivity timeout
    this.resetInactivityTimeout()
  }

  /**
   * Stop tracking user activity
   */
  stop() {
    this.isActive = false

    // Clear intervals
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval)
      this.heartbeatInterval = null
    }

    if (this.activityTimeout) {
      clearTimeout(this.activityTimeout)
      this.activityTimeout = null
    }

    // Remove activity listeners
    this.removeActivityListeners()
  }

  /**
   * Set up activity event listeners
   */
  setupActivityListeners() {
    this.activityEvents.forEach(event => {
      document.addEventListener(event, this.handleActivity.bind(this), true)
    })

    // Also track visibility changes
    document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this))
  }

  /**
   * Remove activity event listeners
   */
  removeActivityListeners() {
    this.activityEvents.forEach(event => {
      document.removeEventListener(event, this.handleActivity.bind(this), true)
    })

    document.removeEventListener('visibilitychange', this.handleVisibilityChange.bind(this))
  }

  /**
   * Handle user activity
   */
  handleActivity() {
    if (!this.isActive) {
      return
    }

    const now = Date.now()
    const timeSinceLastActivity = now - this.lastActivityTime

    // Only update if there's been significant activity (more than 1 second)
    // This prevents too many updates
    if (timeSinceLastActivity > 1000) {
      this.lastActivityTime = now
      this.resetInactivityTimeout()
    }
  }

  /**
   * Handle visibility change (tab focus/blur)
   */
  handleVisibilityChange() {
    if (!this.isActive) {
      return
    }

    if (document.hidden) {
      // Tab is hidden, stop tracking
      this.stop()
    } else {
      // Tab is visible again, resume tracking
      this.start()
    }
  }

  /**
   * Reset inactivity timeout
   */
  resetInactivityTimeout() {
    if (this.activityTimeout) {
      clearTimeout(this.activityTimeout)
    }

    this.activityTimeout = setTimeout(() => {
      // Session expired due to inactivity
      this.stop()
    }, this.inactivityTimeoutMs)
  }

  /**
   * Send heartbeat to server
   */
  async sendHeartbeat() {
    if (!this.isActive) {
      return
    }

    try {
      const response = await axios.post('/api/activity/heartbeat', {
        session_id: this.sessionId
      })

      if (response.data.success) {
        // Store session ID for future heartbeats
        if (response.data.session_id) {
          this.sessionId = response.data.session_id
        }
      }
    } catch (error) {
      // Silently fail - don't interrupt user experience
      console.debug('Activity heartbeat failed:', error)
    }
  }
}

// Create singleton instance
const tenantActivityService = new TenantActivityService()

export default tenantActivityService

