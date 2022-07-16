import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Test from '../pages/Test.vue'
import Counter from '../pages/Counter.vue' //追加

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Test',
    component: Test,
  },
  {
    path: '/counter',    // 追加
    name: 'Counter',     // 追加
    component: Counter,  // 追加
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
