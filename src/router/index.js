import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/views/home'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
]

export default new Router({
  mode: 'history',
  routes: routes
})
