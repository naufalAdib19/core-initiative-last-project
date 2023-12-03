import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '../views/Product.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProductView
    },
  ]
})

export default router
