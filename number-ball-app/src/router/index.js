import Vue from 'vue'
import VueRouter from 'vue-router'

import NumberBallView from '@/views/NumberBallView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'numberball',
    component: NumberBallView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
