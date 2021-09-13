<template>
  <div class="d-flex align-items-stretch flex-wrap">
      <product-card v-for="Product in Products" :key="Product.id" :Products="products"/>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'
export default {
  components: { 
    ProductCard 
  },

  computed: {
    Products() {
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