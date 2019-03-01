import Vue from 'vue'
import Router from 'vue-router'

const login = () => import('@/components/login')
const index = () => import('@/components/index')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
