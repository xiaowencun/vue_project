import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login.vue"
import Home from "../components/Home.vue"



Vue.use(Router)
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login

  },
  {
    path: '/home',
    component: Home
  }
]
let router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.path == '/login') return next()
  let tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
