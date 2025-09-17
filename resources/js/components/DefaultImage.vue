<template>
  <div class="default-image-container">
    <img
      v-if="imageSrc && !imageError"
      :src="imageSrc"
      :alt="alt"
      :class="imageClass"
      @error="handleImageError"
      @load="handleImageLoad"
      :loading="loading"
    />
    <div
      v-else
      :class="placeholderClass"
      :style="placeholderStyle"
    >
      <i v-if="showIcon" :class="iconClass"></i>
      <span v-if="showText" class="placeholder-text">{{ placeholderText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultImage',
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: 'Image'
    },
    type: {
      type: String,
      default: 'avatar', // avatar, employee, client, supplier, product, brand, company
      validator: value => ['avatar', 'employee', 'client', 'supplier', 'product', 'brand', 'company'].includes(value)
    },
    size: {
      type: String,
      default: 'medium', // small, medium, large
      validator: value => ['small', 'medium', 'large'].includes(value)
    },
    shape: {
      type: String,
      default: 'circle', // circle, rounded, square
      validator: value => ['circle', 'rounded', 'square'].includes(value)
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    showText: {
      type: Boolean,
      default: true
    },
    customClass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      imageError: false,
      imageLoaded: false
    }
  },
  computed: {
    imageSrc() {
      if (!this.src || this.imageError) {
        return this.getDefaultImage()
      }
      return this.src
    },
    defaultImage() {
      const defaultImages = {
        avatar: 'default-avatar.png',
        employee: 'default-employee.png',
        client: 'default-client.png',
        supplier: 'default-supplier.png',
        product: 'default-product.png',
        brand: 'default-brand.png',
        company: 'default-company.png'
      }
      return defaultImages[this.type] || 'default-avatar.png'
    },
    imageClass() {
      const baseClass = 'default-image'
      const sizeClass = `default-image-${this.size}`
      const shapeClass = `default-image-${this.shape}`
      return `${baseClass} ${sizeClass} ${shapeClass} ${this.customClass}`.trim()
    },
    placeholderClass() {
      const baseClass = 'default-image-placeholder'
      const sizeClass = `default-image-placeholder-${this.size}`
      const shapeClass = `default-image-placeholder-${this.shape}`
      return `${baseClass} ${sizeClass} ${shapeClass} ${this.customClass}`.trim()
    },
    placeholderStyle() {
      return {
        backgroundColor: this.getBackgroundColor(),
        color: this.getTextColor()
      }
    },
    iconClass() {
      const icons = {
        avatar: 'fas fa-user',
        employee: 'fas fa-user-tie',
        client: 'fas fa-user-friends',
        supplier: 'fas fa-truck',
        product: 'fas fa-box',
        brand: 'fas fa-tag',
        company: 'fas fa-building'
      }
      return icons[this.type] || 'fas fa-image'
    },
    placeholderText() {
      if (!this.showText) return ''
      const texts = {
        avatar: this.$t('No Avatar'),
        employee: this.$t('No Photo'),
        client: this.$t('No Photo'),
        supplier: this.$t('No Logo'),
        product: this.$t('No Image'),
        brand: this.$t('No Logo'),
        company: this.$t('No Logo')
      }
      return texts[this.type] || this.$t('No Image')
    },
    loading() {
      return this.imageLoaded ? 'eager' : 'lazy'
    }
  },
  methods: {
    getDefaultImage() {
      return `/images/${this.defaultImage}`
    },
    handleImageError() {
      this.imageError = true
      this.$emit('error')
    },
    handleImageLoad() {
      this.imageLoaded = true
      this.$emit('load')
    },
    getBackgroundColor() {
      const colors = {
        avatar: '#6c757d',
        employee: '#007bff',
        client: '#28a745',
        supplier: '#ffc107',
        product: '#17a2b8',
        brand: '#6f42c1',
        company: '#343a40'
      }
      return colors[this.type] || '#6c757d'
    },
    getTextColor() {
      return '#ffffff'
    }
  },
  watch: {
    src() {
      this.imageError = false
      this.imageLoaded = false
    }
  }
}
</script>

<style scoped>
.default-image-container {
  display: inline-block;
  position: relative;
}

.default-image {
  display: block;
  object-fit: cover;
}

.default-image-circle {
  border-radius: 50%;
}

.default-image-rounded {
  border-radius: 0.375rem;
}

.default-image-square {
  border-radius: 0;
}

.default-image-small {
  width: 32px;
  height: 32px;
}

.default-image-medium {
  width: 64px;
  height: 64px;
}

.default-image-large {
  width: 128px;
  height: 128px;
}

.default-image-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.default-image-placeholder-circle {
  border-radius: 50%;
}

.default-image-placeholder-rounded {
  border-radius: 0.375rem;
}

.default-image-placeholder-square {
  border-radius: 0;
}

.default-image-placeholder-small {
  width: 32px;
  height: 32px;
  font-size: 12px;
}

.default-image-placeholder-medium {
  width: 64px;
  height: 64px;
  font-size: 16px;
}

.default-image-placeholder-large {
  width: 128px;
  height: 128px;
  font-size: 24px;
}

.placeholder-text {
  font-size: 0.75em;
  font-weight: 500;
  line-height: 1;
  margin-top: 2px;
}

.default-image-placeholder-small .placeholder-text {
  font-size: 0.6em;
}

.default-image-placeholder-large .placeholder-text {
  font-size: 0.8em;
}
</style>
