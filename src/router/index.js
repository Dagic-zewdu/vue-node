import HomeViewVue from '@/views/HomeView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import UpdateProfileView from '../views/UpdateProfile.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeViewVue
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/updateProfile',
    name: 'updateProfile',
    component: UpdateProfileView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
