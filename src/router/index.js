import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import MangementLayout from '../components/Layout/ManagementLayout.vue'
import PageA from '../views/PageA.vue'
import PageB from '../views/PageB.vue'
import Login from '../views/Login.vue'
import Resume from '../views/Resume/Resume.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MangementLayout,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/pageA',
          name: 'pageA',
          component: PageA
        },
        {
          path: '/PageB',
          name: 'pageB',
          component: PageB
        },
        {
          path: '/Resume',
          name: 'resume',
          component: Resume
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
  ]
})

router.beforeEach((to, from, next) => {
  const shifoudenglu = localStorage.getItem('已登录')
  const dontNeedLoginPageNames = ['Login']
  if (shifoudenglu !== '是' && !dontNeedLoginPageNames.includes(to.name)) {
    next({
      name: 'Login',
    })
  } else {
    next()
  }
})

export default router
