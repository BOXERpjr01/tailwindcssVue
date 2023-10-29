import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import header from '../views/header.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: header
    },

  ]
})

export default router
