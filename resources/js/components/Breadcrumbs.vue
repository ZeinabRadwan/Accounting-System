<template>
  <div class="content-header">
    <div class="row align-items-center breadcrumbs-style">
      <div class="col-sm-6">
        <h3 class="m-0">
          {{ $t(current) }}
        </h3>
      </div>
      <!-- /.col -->
      <div class="col-sm-6">
        <ol class="breadcrumb" :class="breadcrumbClass">
          <li v-for="(data, index) in items" v-show="items" :key="index" class="breadcrumb-item">
            <router-link v-show="data.url" :to="{ name: data.url }">
              {{ $t(data.name) }}
            </router-link>
            <span v-show="!data.url" href="#">{{ $t(data.name) }}</span>
          </li>
        </ol>
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->
  </div>
</template>

<script>
export default {
  name: 'Breadcrumbs',

  props: ['items', 'current'],

  computed: {
    breadcrumbClass() {
      // Check if current locale is RTL
      const isRTL = this.$i18n && this.$i18n.locale && ['ar', 'fa', 'he', 'ur', 'ku', 'ps', 'sd', 'yi'].includes(this.$i18n.locale);
      
      if (isRTL) {
        return 'float-sm-left breadcrumb-rtl';
      }
      return 'float-sm-right';
    }
  }
}
</script>

<style scoped>
.content-header {
  padding: 25px 0;
}

.breadcrumb-item+.breadcrumb-item::before {
  content: '>';
}

/* RTL-specific breadcrumb styles */
.breadcrumb-rtl {
  direction: rtl;
  text-align: right;
}

.breadcrumb-rtl .breadcrumb-item+.breadcrumb-item::before {
  content: '<';
  float: right;
  padding-left: 0.5rem;
  padding-right: 0;
  direction: ltr;
}

.breadcrumb-rtl .breadcrumb-item {
  float: right;
}

.breadcrumb-rtl .breadcrumb-item:first-child {
  padding-right: 0;
}

.breadcrumb-rtl .breadcrumb-item:last-child {
  padding-left: 0;
}

/* Responsive RTL adjustments */
@media (max-width: 575.98px) {
  .breadcrumb-rtl {
    float: none !important;
    text-align: center;
    margin-top: 1rem;
  }
  
  .breadcrumb-rtl .breadcrumb-item {
    float: none;
    display: inline-block;
  }
}

/* Ensure proper spacing in both LTR and RTL */
.breadcrumb {
  margin-bottom: 0;
}

.breadcrumb-item {
  display: inline-block;
}

.breadcrumb-item a {
  color: #6366f1;
  text-decoration: none;
}

.breadcrumb-item a:hover {
  color: #4f46e5;
  text-decoration: underline;
}

.breadcrumb-item span {
  color: #6c757d;
}
</style>
