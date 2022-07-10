import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import PastOrdersView from '../views/PastOrdersView.vue'
import CheckoutView from '../views/CheckoutView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsView
  },
  {
    path: '/past-orders',
    name: 'Past Orders',
    component: PastOrdersView
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
