import { createRouter, createWebHistory } from 'vue-router'
// import Vue from 'vue'
const Home=() => import("../views/home//Home")
const Category=() => import("../views/category/Category")
const Profile=() => import("../views/profile/Profile")
const Shopcart=() => import("../views/shopcart/Shopcart")
const Detail=() => import("../views/detail/Detail")
const DetailEnter=() => import("../views/detail/DetailEnter")
// 安装插件
// Vue.useContext(VueRouter)

    const routes = [
        {
            path:"",
            redirect:"/home",
          },
          {
            path:"/home",
            name:"Home",
            component:Home,
          },
          {
            path:"/category",
            name:"Category",
            component:Category,
          },
          {
            path:"/profile",
            name:"Profile",
            component:Profile,
          },
          {
            path:"/shopcart",
            name:"Shopcart",
            component:Shopcart,
          },
          {
            path:"/detail:iid",
            name:"Detail",
            component:Detail,
          },
          {
            path:"/detailenter:iid",
            name:"DetailEnter",
            component:DetailEnter,
          }
    ]
    // 2,创建router
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
       routes
    })

    export default router