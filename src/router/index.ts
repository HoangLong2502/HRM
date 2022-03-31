import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PerView from '../views/PerView.vue'
import DetailPerView from '../views/DetailPerView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/personnel',
    name: 'personnel',
    component: PerView
  },
  {
    path: '/detail',
    name: 'detail',
    component: DetailPerView
  }
]

const router = new VueRouter({
  routes
})

export default router
