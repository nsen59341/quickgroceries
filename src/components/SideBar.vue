<template>
    <aside class="cart-container">
        <div class="cart">
            <h1 class="cart-title spread">
            <span>
                Cart
                <i class="icofont-cart-alt icofont-1x"></i>
            </span>
            <button class="cart-close" @click="toggle">&times;</button>
            </h1>

            <div class="cart-body">
            <table class="cart-table">
                <thead>
                <tr>
                    <th><span class="sr-only">Product Image</span></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th><span class="sr-only">Actions</span></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(qnt,k,i) in cart" :key="i">
                    <td><i class="icofont-3x" :class="get_icon(k)"></i></td>
                    <td>{{k}}</td>
                    <td>${{get_price(k)}}</td>
                    <td class="center">{{qnt}}</td>
                    <td>${{get_price(k) * qnt}}</td>
                    <td class="center">
                    <button @click="remove(k)" class="btn btn-light cart-remove">
                        &times;
                    </button>
                    </td>
                </tr>
                </tbody>
            </table>

            <p class="center" v-if="get_total_price()==0"><em>No items in cart</em></p>
            <br>
            <div class="spread">
                <span><strong>Total:</strong> ${{get_total_price()}}</span>
                <!-- <button class="btn btn-light" @click="checkout()">Checkout</button> -->
            </div>
            </div>
        </div>
    </aside>
</template>

<script lang="ts">
import axios from 'axios'
import { response } from 'express'

  export default {
    props: ['toggle', 'cart', 'items', 'remove'],
    data() {
      return {
        total: 0
      }
    },
    methods: {
      get_price (nm: any): any {
        const prod = this.items.find((p) => {
          return p.name === nm
        })
          return Number.parseFloat(prod.price.USD).toFixed(2)
      },
      get_icon (nm: any): any {
        const prod = this.items.find((p) => {
          return p.name === nm
        })
          return 'icofont-' + prod.icon
      },
      get_total_price (): any {
        const total = Object.entries(this.cart).reduce((acc:number, curr:any, index:number) => {
           console.log("acc "+ acc);
            console.log("curr "+ curr);
            return acc + curr[1] * this.get_price(curr[0])
        }, 0)
        this.total = total;
        return Number.parseFloat(total.toFixed(2))
      }
      // checkout (): any {
      //   if (this.total > 0)
      //   {
      //       axios.post("/statics/addorder.php", JSON.stringify(this.cart))
      //      .then(response => (console.log(response)))
      //       // this.$router.push('checkout')
      //   }  
      //   else{
       
      //     alert("Select atleast one product")
      //   }
      // }
    }
  }
</script>
