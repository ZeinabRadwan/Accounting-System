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
  content: '';
  display: inline-block;
  width: 8px;
  height: 12px;
  margin: 0 8px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='12' viewBox='0 0 8 12' fill='none'%3E%3Cpath d='M1.53025 0.00185199L1 0.532102L1.00224 0.534352L0.47399 1.0621L5.41025 5.9981L0.47025 10.9381L1.53125 11.9984L1.5325 11.9969L1.5335 11.9979L6.95075 6.58035L6.954 6.5841L7.52975 6.00835L7.52625 6.0051L7.52975 6.0016L7.27325 5.74485L7.276 5.74285L1.53524 0.00185199L1.53274 0.00460239L1.53025 0.00185199Z' fill='%2333A0D9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
}

/* RTL-specific breadcrumb styles */
.breadcrumb-rtl {
  direction: rtl;
  text-align: right;
}

.breadcrumb-rtl .breadcrumb-item+.breadcrumb-item::before {
  content: '';
  display: inline-block;
  width: 8px;
  height: 12px;
  margin: 0 8px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='12' viewBox='0 0 8 12' fill='none'%3E%3Cpath d='M6.46975 0.00185199L7.00001 0.532102L6.99776 0.534352L7.52601 1.0621L2.58975 5.9981L7.52975 10.9381L6.46875 11.9984L6.4675 11.9969L6.4665 11.9979L1.04925 6.58035L1.046 6.5841L0.470255 6.00835L0.473755 6.0051L0.470255 6.0016L0.726755 5.74485L0.724005 5.74285L6.46476 0.00185199L6.46726 0.00460239L6.46975 0.00185199Z' fill='%2333A0D9'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
}

.breadcrumb-rtl .breadcrumb-item {
  display: inline-block;
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
  line-height: .8rem;
}

.breadcrumb-item {
  display: inline-block;
}

.breadcrumb-item a {
  color: #33A0D9;
  text-decoration: none;
}

.breadcrumb-item a:hover {
  color: #4f46e5;
  text-decoration: underline;
}

.breadcrumb-item span {
  color: #6c757d;
}

.breadcrumbs-style h3 {
  font-size: 32px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 10px;
}

.breadcrumbs-style h3::before {
  content: '';
  display: inline-block;
  width: 24px;
  height: 10px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='10' viewBox='0 0 24 10' fill='none'%3E%3Crect x='24' y='0.5' width='9' height='24' rx='4.5' transform='rotate(90 24 0.5)' fill='%231B7CAD'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  flex-shrink: 0;
}

/* RTL h3 styles */
[dir="rtl"] .breadcrumbs-style h3 {
  text-align: right;
  flex-direction: row-reverse;
  justify-content: flex-sta;
}

[dir="rtl"] .breadcrumbs-style h3::before {
  order: 2;
  margin-left: 10px;
  margin-right: 0;
}

/* LTR h3 styles */
[dir="ltr"] .breadcrumbs-style h3 {
  text-align: left;
  flex-direction: row-reverse;
  justify-content: flex-end;
}

[dir="ltr"] .breadcrumbs-style h3::before {
  order: 1;
  margin-right: 10px;
  margin-left: 0;
}
</style>
