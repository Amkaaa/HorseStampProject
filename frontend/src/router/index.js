import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import List from '@/components/List'
import burtgeh from '@/components/burtgeh'
import profile from '@/components/profile'
import photo from '@/components/photo'
import stamp from '@/components/stamp'
import logout from '@/components/logout'
import createStamp from '@/components/createStamp'
import about from '@/components/about'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      component: about
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
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/photo',
      name: 'photo',
      component: photo
    },
    {
      path: '/stamp/:id/:name/:define/:date',
      name: 'stamp',
      component: stamp
    },
    {
      path: '/createstamp',
      name: 'createStamp',
      component: createStamp
    },
    {
      path: '/logout',
      name: 'logout',
      component: logout
    }
  ]
})
