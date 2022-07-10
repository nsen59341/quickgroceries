<template>
  <div class="card">
    <div class="card-title">
      {{item.name}}
    </div>
    <div class="card-body">
      <i class="icofont-10x" :class="get_icon(item.icon)"></i>
      <form>
        <div class="row">
          <!-- <slot name="slot1" :firstname="'John'"></slot> -->
          <div class="cell">
            <label>Type:</label>
          </div>
          <div class="cell">
            <em>{{item.type}}</em>
          </div>
        </div>
        <div class="row">
          <!-- <slot name="slot2" :lastname="'Doe'"></slot> -->
          <div class="cell">
            <label>Price:</label>
          </div>
          <div class="cell">
            ${{item.price.USD}}
          </div>
        </div>
        <div class="row">
          <div class="cell">
            <label>Quantity:</label>
          </div>
          <div class="cell">
            <input type="number" min="0" v-model="quantity" @keyup="showQty">
          </div>
        </div>
      </form>
    </div>
    <div class="card-footer">
      <button @click="addToCart(item.name, quantity)" class="btn btn-light">
        Add to cart
      </button>
    </div>
  </div>
</template>   

<script lang="ts">
  export default {
    props: ['item','cart','get_icon','addToCart'],
    data() {
      return {
        quantity: 0
      }
    },
    methods: {
      showQty() {
        console.log(this.quantity)
      }
    }
  }
</script>