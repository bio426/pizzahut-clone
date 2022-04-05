import {createRouter,createWebHistory,RouteRecordRaw} from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {path: "/", name: "index", component:()=>import("./views/index.vue")},
  {path: "/menu", name: "menu", component:()=>import("./views/menu.vue")},
  {path: "/order", name: "order", component:()=>import("./views/order.vue")},
  {path: "/login", name: "login", component:()=>import("./views/login.vue")},
  {path: "/cart", name: "cart", component:()=>import("./views/cart.vue")},
  {path: "/payment", name: "payment", component:()=>import("./views/payment.vue")}
]

export default createRouter({
  routes,
  history: createWebHistory()
})
