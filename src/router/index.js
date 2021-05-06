import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/home.vue')
const Category = () => import('../views/category/category.vue')
const Shopcart = () => import('../views/shopcart/shopcart.vue')
const Profile = () => import('../views/profile/profile.vue')
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile
  }
]

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router