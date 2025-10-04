<template>
  <div class="mb-50">
    <product-form
      mode="page"
      :product="product"
      :form-id="'productEditForm'"
    />
  </div>
</template>

<script>
import ProductForm from '../../components/ProductForm.vue'
import axios from 'axios'

export default {
  middleware: ['auth', 'check-permissions'],
  metaInfo() {
    return { title: this.$t('Edit Item') }
  },
  components: {
    ProductForm
  },
  data() {
    return {
      product: null
    }
  },
  async created() {
    await this.getProduct()
  },
  methods: {
    async getProduct() {
      try {
        const { data } = await axios.get(
          window.location.origin + '/api/products/' + this.$route.params.slug
        )
        this.product = data.data
      } catch (error) {
        console.error('Error fetching product:', error)
        this.$router.push({ name: 'products.index' })
      }
    }
  }
}
</script>

<style scoped>
/* Space between action buttons */
.btn-group.c-w-100 {
  gap: 10px;
}

/* Header buttons styling */
.header-buttons {
  margin-bottom: 15px;
}

/* Footer buttons styling */
.footer-buttons {
  gap: 10px;
  display: flex;
}

.footer-buttons .btn {
  margin-right: 10px;
}

.footer-buttons .btn:last-child {
  margin-right: 0;
}

.card {
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0px 8px 20px 0px #00000014;
  border: 1px solid #CED4DA;
}

.card-footer {
  background-color: white;
  border-top: 1px solid #CED4DA;
  padding: 0 1.25rem 0.625rem 1.25rem;
  border-radius: 0 0 20px 20px;
}

/* Search Input Background Override */
.form-control{
  background: #fff !important;
}

.btn-primary {
  background: #2AB930 !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
}

.btn-secondary {
  background: #33a0d9 !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
}

.btn-secondary:hover {
  background: #2a8bc4 !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(51, 160, 217, 0.3);
}

.btn-outline-custom {
  color: #33a0d9;
  border-color: #33a0d9;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  border-radius: 10px;
  padding: 8px 16px;
  font-weight: 500;
}

.btn-outline-custom:hover,
.btn-custom-active {
  background-color: #33a0d9;
  color: #fff;
  border-color: #33a0d9;
}

h1, h2 {
  font-weight: normal;
}
 
ul {
  list-style-type: none;
  padding: 0;
}
 
li {
  display: inline-block;
  margin: 0 10px;
}
 
a {
  color: #42b983;
}
</style>
