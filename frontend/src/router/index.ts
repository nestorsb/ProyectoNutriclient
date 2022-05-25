import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import ClientesView from '../views/ClientesView.vue'
import LoginViews from '../views/LoginViews.vue'
import ConsultasView from '../views/ConsultasView.vue'

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
    path: '/consultas',
    name: 'consultas',
    component: ConsultasView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
