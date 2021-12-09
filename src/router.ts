import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/HomePage.vue'
import Login from './pages/LoginPage.vue'
import Signup from './pages/SignupPage.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/signin',
    component: Signup,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
