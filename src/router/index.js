import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from "@/views/Home.vue";

Vue.use(VueRouter)

export const constRoutes = [
  {
    path: "/login",
    component: () => import("@/views/Login.vue"),
    name: "login",
  }
]

export const aysncRoutes = [
  {
    path: "/",
    component: Home,
    redirect: "/about",
    name: "Dashboard",
    meta: {
      roles: ["admin"]
    },
    children: [
      {
        path: "about",
        component: () => import("@/views/About.vue"),
        name: "about",
        meta: {
          roles: ["admin"]
        },
        children: [
          {
            path: "page1",
            component: () => import("@/views/About.vue"),
            name: "page1",
            meta: {
              roles: ["admin"]
            }
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constRoutes
})

export default router
