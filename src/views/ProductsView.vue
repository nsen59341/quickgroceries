<template>
    <main class="wrapper">
        <h1>Products</h1>
        <div class="card-container">
          <ProductCart 
          v-for="item in items"  
          class="card"
          :item="item"
          :cart="cart"
          :addToCart="addToCart"
          :get_icon="get_icon"
          >
          <template v-slot:slot2="slotProps">
          <h1>Hi, {{slotProps.firstname}} {{slotProps.lastname}}</h1>
          </template>
          </ProductCart>
        </div>
      </main>
</template>
<script lang="ts">
import ProductCart from '@/components/ProductCart.vue'
export default {
  name: 'ProductsView',
  props: ['items','get_icon','addToCart','cart'],
  components: {
    ProductCart
  }
}

</script>
