import Vue from 'vue'
import Router from 'vue-router'

const login = () => import('@/views/login')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
