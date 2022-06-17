import { createRouter, createWebHashHistory } from "vue-router";
import localCache from "@/utils/cache.js";

import MainHome from "@/views/main/MainHome.vue";
import Login from "@/views/login/login.vue";
import NotFound from "@/views/notFound/notFound.vue";
import Home from "@/views/main//home/Home.vue";
import Overview from "@/views/main/analysis/overview/Overview.vue";
import Dashboard from "@/views/main/analysis/dashboard/Dashboard.vue";
import User from "@/views/main/system/user/User.vue";
import Department from "@/views/main/system/department/Department.vue";
import Menu from "@/views/main/system/menu/Menu.vue";
import Role from "@/views/main/system/role/Role.vue";
import Category from "@/views/main/product/category/Category.vue";
import Goods from "@/views/main/product/goods/Goods.vue";
import Chat from "@/views/main/story/chat/Chat.vue";
import List from "@/views/main/story/list/List.vue";




const routes = [
  {
    path: "/",
    name: "MainHome",
    component: MainHome,
    children: [
      {
        path:"/",
        redirect:"/main/home",
      },
      {
        path: "/main/home",
        component:Home,
      },
      {
        path: "/main/analysis/overview",
        name: "Overview",
        component:Overview,
        meta: {
          keepAlive: true,
        },
      },
      {
        path: "/main/analysis/dashboard",
        component:Dashboard,
        name: "Dashboard",
        meta: {
          keepAlive: true,
        },
      },
      {
        path: "/main/system/user",
        component:User,
        name: "User",
        meta: {
          keepAlive: true,
        },
      },
      {
        path: "/main/system/department",
        component:Department,
        name: "Department",
        meta: {
          keepAlive: true,
        },
      },
      {
        path: "/main/system/menu",
        component:Menu,
        name: "Menu",
        meta: {
          keepAlive: true,
        },
      },
      {
        path: "/main/system/role",
        component:Role,
        name: "Role",
        meta: {
          keepAlive: true,
        },
      },
      {
        path: "/main/product/category",
        component:Category,
        name: "Category",
        meta: {
          keepAlive: true,
        },
      },
      {
        path: "/main/product/goods",
        component:Goods,
        name: "Goods",
        meta: {
          keepAlive: true,
        },
      },
      {
        path: "/main/story/chat",
        component:Chat,
        name: "Chat",
        meta: {
          keepAlive: true,
        },
      },
      {
        path: "/main/story/list",
        component:List,
        name: "List",
        meta: {
          keepAlive: true,
        },
      },
    ],
  },
  {
    path: "/notFound",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  // {
  //   path: "/detail/:iid",
  //   name: "Detail",
  //   component: Detail,
  //   meta: {
  //     keepAlive: false,
  //   },
  // },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to,from,next)=>{
  //判断是否登录
  if (!localCache.getCache("token")) {
    if (to.name === "Login") {
      next();
    }else{
      next({ name: 'Login'})
    }
  }else{
    next()
  }
  // console.log(to);
  // if (!to.name) {
  //   next({ name: '404'})
  //   console.log(to);
  // }
})

export default router;
