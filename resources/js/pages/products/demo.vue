<template>
  <div class="mb-50">
    <div class="row">
      <div class="col-lg-12">
        <div class="card custom-card w-100">
          <div class="card-header setings-header">
            <h3>{{ $t('Product Form Demo') }}</h3>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-6">
                <h4>{{ $t('Page Mode (Create)') }}</h4>
                <p>{{ $t('This shows the form in page mode for creating a new product.') }}</p>
                <router-link :to="{ name: 'products.create-new' }" class="btn btn-primary">
                  <i class="fas fa-plus"></i> {{ $t('Create Product (Page Mode)') }}
                </router-link>
              </div>
              <div class="col-md-6">
                <h4>{{ $t('Modal Mode') }}</h4>
                <p>{{ $t('This shows the form in modal mode.') }}</p>
                <product-form mode="modal">
                  <button class="btn btn-success">
                    <i class="fas fa-plus"></i> {{ $t('Create Product (Modal Mode)') }}
                  </button>
                </product-form>
              </div>
            </div>
            
            <hr>
            
            <div class="row">
              <div class="col-md-12">
                <h4>{{ $t('Edit Mode') }}</h4>
                <p>{{ $t('This shows the form in page mode for editing an existing product.') }}</p>
                <p class="text-muted">{{ $t('Note: You need to provide a valid product slug in the URL.') }}</p>
                <router-link :to="{ name: 'products.edit-new', params: { slug: 'sample-product' } }" class="btn btn-warning">
                  <i class="fas fa-edit"></i> {{ $t('Edit Product (Page Mode)') }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductForm from '../../components/ProductForm.vue'

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Product Form Demo') }
  },
  components: {
    ProductForm
  }
}
</script>

<style scoped>
.card {
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA;
}

.card-header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  padding: 1rem 1.25rem;
  border-radius: 20px 20px 0 0;
}

.card-body {
  padding: 1.25rem;
}

.btn {
  margin: 5px;
}

hr {
  margin: 2rem 0;
}
</style>
