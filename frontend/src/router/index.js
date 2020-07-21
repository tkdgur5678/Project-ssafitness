import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import constants from '../lib/constants'

// 유저
import Join from '../page/user/Join.vue'
import Info from '../page/user/Info.vue'


Vue.use(VueRouter)

  const routes = [
    //Main
  {
    path: '/',
    name: constants.URL_TYPE.POST.MAIN,
    component: Home
  },
    //User
  {
    path: '/user/join',
    name: constants.URL_TYPE.USER.JOIN,
    component: Join
  },
  {
    path: '/user/info',
    name: constants.URL_TYPE.USER.INFO,
    component: Info,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
