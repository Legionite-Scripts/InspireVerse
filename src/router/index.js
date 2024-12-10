// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import HomeView from '../views/index.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeView
      },
      // Add other routes that will use this layout
      {
        path: '/about',
        name: 'About',
        // component: () => import('../views/AboutView.vue')
      },
      {
        path: '/services',
        name: 'Services',
        // component: () => import('../views/ServicesView.vue')
      },
      {
        path: '/contact',
        name: 'Contact',
        // component: () => import('../views/ContactView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router