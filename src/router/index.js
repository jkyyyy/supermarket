// import Vue from 'vue'
// import VueRouter from 'vue-router'

import {createRouter, createWebHistory} from 'vue-router'

const routerHistory = createWebHistory()

const Home = () => import('views/home/home')
const Category = () => import('views/category/category')
const Shopcart = () => import('views/shopcart/shopcart')
const Profile = () => import('views/profile/profile')

// 1.安装插件
// Vue.use(VueRouter)
// vue add VueRouter

// 2.创建router
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
const router = new createRouter({
  routes,
  // mode: 'history'
  history: routerHistory
})


export default router
