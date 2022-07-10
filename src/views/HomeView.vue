<template v-slot:slot1>
  <div class="splash-container">
      <div class="splash">
        <h1>Splendid Food</h1>
      </div>
    </div>
    <main class="wrapper">
      <h2>Recommended</h2>
      <div class="recommended">
        <ProductCart 
        v-for="item in items.slice(0,3)"  
        class="card"
        :item="item"
        :cart="cart"
        :addToCart="addToCart"
        :get_icon="get_icon"
        >
        <template v-slot:slot2>
        <h1>Home page</h1>
        </template>
        </ProductCart>
      </div>
    </main>
</template>

<script lang="ts">
import ProductCart from '@/components/ProductCart.vue'
export default {
  name: 'HomeView',
  props: ['items', 'get_icon', 'addToCart', 'cart'],
  components: {
    ProductCart
  }
}
</script>
