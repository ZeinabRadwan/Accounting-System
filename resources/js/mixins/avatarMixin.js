export default {
  methods: {
    /**
     * Get avatar with fallback to default avatar if image doesn't exist
     * @param {string|null} imagePath - The image path (can be null or empty)
     * @param {string} directory - The directory where the image is stored (e.g., 'clients', 'suppliers', 'employees')
     * @param {string} defaultAvatar - The default avatar filename (defaults to 'default-avatar.jpeg')
     * @returns {string} The full URL to the avatar image
     */
    getAvatarWithFallback(imagePath, directory = '', defaultAvatar = 'default-avatar.jpeg') {
      // If no image path provided, return default avatar
      if (!imagePath || imagePath.trim() === '') {
        return window.location.origin + '/images/' + defaultAvatar;
      }
      
      // Build the full image path
      const fullImagePath = directory ? `images/${directory}/${imagePath}` : `images/${imagePath}`;
      const fullUrl = window.location.origin + '/' + fullImagePath;
      
      // Return the image URL - the browser will handle 404s and show broken image icon
      // We could implement a more sophisticated check here, but for now we'll rely on the backend
      // to provide the correct fallback URL through the Resource classes
      return fullUrl;
    },

    /**
     * Handle image error by setting src to default avatar
     * @param {Event} event - The error event from the img element
     * @param {string} directory - The directory where the image is stored
     * @param {string} defaultAvatar - The default avatar filename
     */
    handleImageError(event, directory = '', defaultAvatar = 'default-avatar.jpeg') {
      const img = event.target;
      img.src = window.location.origin + '/images/' + defaultAvatar;
      img.onerror = null; // Prevent infinite loop
    },

    /**
     * Get avatar URL for display with error handling
     * @param {string|null} imagePath - The image path
     * @param {string} directory - The directory where the image is stored
     * @param {string} defaultAvatar - The default avatar filename
     * @returns {Object} Object with src and onerror handler
     */
    getAvatarProps(imagePath, directory = '', defaultAvatar = 'default-avatar.jpeg') {
      return {
        src: this.getAvatarWithFallback(imagePath, directory, defaultAvatar),
        onerror: (event) => this.handleImageError(event, directory, defaultAvatar)
      };
    }
  }
};
