import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import List from '@/components/List'
import burtgeh from '@/components/burtgeh'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/register',
      name: 'burtgeh',
      component: burtgeh
    }
  ]
})
