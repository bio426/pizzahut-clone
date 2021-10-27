import {createRouter,createWebHistory,RouteRecordRaw} from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {path: "/", name: "index", component:()=>import("./views/index.vue")},
  {path: "/menu", name: "menu", component:()=>import("./views/menu.vue")},
  {path: "/order", name: "order", component:()=>import("./views/order.vue")}
]

export default createRouter({
  routes,
  history: createWebHistory()
})
