import { createRouter, createWebHistory } from 'vue-router'
// import Vue from 'vue'
const Home=() => import("../views/home//Home")
const Category=() => import("../views/category/Category")
const Profile=() => import("../views/profile/Profile")
const Shopcart=() => import("../views/shopcart/Shopcart")
// 安装插件
// Vue.useContext(VueRouter)

    const routes = [
        {
            path:"",
            redirect:"/home"
          },
          {
            path:"/home",
            component:Home
          },
          {
            path:"/category",
            component:Category
          },
          {
            path:"/profile",
            component:Profile
          },
          {
            path:"/shopcart",
            component:Shopcart
          }
    ]
    // 2,创建router
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes
    })

    export default router