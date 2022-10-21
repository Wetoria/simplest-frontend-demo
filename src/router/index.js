import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import PageA from '../views/PageA.vue'
import PageB from '../views/PageB.vue'
import Login from '../views/Login.vue'
import Resume from '../views/Resume/Resume.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/pageA',
      component: PageA
    },
    {
      path: '/PageB',
      component: PageB
    },
    {
      path: '/Resume',
      component: Resume
    },
    {
      path: '/login',
      component: Login
    },
  ]
})

export default router
