<template>
        <div class="col-3 mt-3">
          <div class="card h-100 text-left">
            <img class="w-100" :src="product.Image" alt >
            <div class="card-body">
              <h4 class="card-title">
                <router-link :to="{name: 'product', params: {id: Products.id}}">{{Products.Title}}</router-link>
              </h4>
              <strong>{{ Products.Price}}</strong>
              <p class="card-text">{{Products.Description}}</p>
            </div>
            <div class="px-4 pb-3">
                <button class="btn btn-secondary"> Add to Cart</button>
            </div>
          </div>
      </div>
</template>

<script>
export default {
  prop: ["Products"]
}
</script>

<style>

</style>