<template>
<div>
    <div class="d-flex align-items-stretch flex-wrap">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import ProductCard from './ProductCard.vue'
export default {
  components: { 
    ProductCard 
  },

  computed: {
    ...mapState(['products'])
  },
  mounted() {
    this.getProducts();
},
  methods:{
    ...mapActions(['getProducts'])
  }
}
</script>

<style>

</style>