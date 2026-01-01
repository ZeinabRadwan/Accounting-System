<template>
  <div class="info-alert">
    <i :class="iconClass"></i>
    <span>{{ message }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: 'info',
  },
});

const iconClass = computed(() => {
  const iconMap = {
    info: 'fas fa-exclamation-circle',
    warning: 'fas fa-exclamation-triangle',
    error: 'fas fa-exclamation-circle',
    success: 'fas fa-check-circle',
  };
  return iconMap[props.icon] || iconMap.info;
});
</script>

<style scoped>
.info-alert {
  background: #FFF5F5;
  border: 1px solid #D64545;
  border-radius: 10px;
  margin: 20px;
  padding: 15px 20px;
  color: #000000;
  font-family: DINNextLTArabic;
  font-weight: 700;
  font-style: Bold;
  font-size: 14px;
  display: flex;
  align-items: center;
}

.info-alert i {
  margin-right: 10px;
  color: #D64545;
  font-size: 16px;
}

[dir="rtl"] .info-alert i {
  margin-right: 0;
  margin-left: 10px;
}

@media only screen and (max-width: 767px) {
  .info-alert {
    display: block !important;
  }

  .info-alert i {
    margin-right: 8px;
  }

  [dir="rtl"] .info-alert i {
    margin-right: 0;
    margin-left: 8px;
  }
}
</style>
