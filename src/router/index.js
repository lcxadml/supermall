import { createRouter, createWebHistory } from 'vue-router'
// import Vue from 'vue'
const Home=() => import("../views/home//Home")
const Category=() => import("../views/category/Category")
const Profile=() => import("../views/profile/Profile")
const Shopcart=() => import("../views/shopcart/Shopcart")
const Detail=() => import("../views/detail/Detail")
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
            meta:{keepAlive:true}
          },
          {
            path:"/category",
            name:"Category",
            component:Category,
            meta:{keepAlive:true}
          },
          {
            path:"/profile",
            name:"Profile",
            component:Profile,
            meta:{keepAlive:true}
          },
          {
            path:"/shopcart",
            name:"Shopcart",
            component:Shopcart,
            meta:{keepAlive:true}
          },
          {
            path:"/detail:iid",
            name:"Detail",
            component:Detail,
            meta:{keepAlive:true}
          }
    ]
    // 2,创建router
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes
    })

    export default router