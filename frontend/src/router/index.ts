import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import ClientesView from '../views/ClientesView.vue'
import LoginViews from '../views/LoginViews.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/clientes',
    name: 'clientes',
    component: ClientesView
  },
  {
    path: '/',
    name: 'login',
    component: LoginViews
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
