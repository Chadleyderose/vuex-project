<template>
<div>
    <div class="d-flex align-items-stretch flex-wrap">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  components: { 
    ProductCard 
  },

  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  mounted() {
    this.$store.dispatch('getProducts');
  }
}
</script>

<style>

</style>