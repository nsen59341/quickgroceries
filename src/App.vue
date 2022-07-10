<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/products" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <!-- <router-link to="/past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </router-link> -->
    </nav>
    <div @click="togglecart" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{totalQuantity}})</span>
    </div>
  </header>
  <router-view
  :items="items"
  :get_icon="get_icon"
  :addToCart="addToCart"
  :cart="incart" />

  <SideBar v-if="showcart"
  :toggle="togglecart"
  :cart="incart"
  :items="items"
  :remove="removeItem"
  ></SideBar>
</template>

<script lang="ts">
import SideBar from '@/components/SideBar.vue'
import food from '@/assets/food.json'
export default {
  components: {
    SideBar
  },
  data () {
    return {
      showcart: false,
      items: food,
      incart: {}
    }
  },
  computed: {
    totalQuantity (): any {
      const totalQty = Object.values(this.incart).reduce((acc: number, curr:number) => {
        return acc + curr
      }, 0)
      console.log(totalQty)
      return totalQty
    }
  },
  methods: {
    addToCart (nm, qty) {
      if (qty>0)
      {
        if (!this.incart[nm]) this.incart[nm] = 0
        console.log("qty "+qty)
      
        this.incart[nm] += qty
      
        console.log("incart  "+this.incart)
      }
      else{
        alert("Select atleast one quantity");
      }
    },
    togglecart () {
      this.showcart = !this.showcart
    },
    get_icon (ico: string) {
      return 'icofont-' + ico
    },
    removeItem (nm: string | number) {
      delete this.incart[nm]
    }
  }
}
</script>
