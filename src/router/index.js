import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/views/home/home'
import Cash from '@/views/home/cash/cash'
import Goods from '@/views/home/cash/goods'

import State from '@/views/home/state'
import Mine from '@/views/home/mine'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'cash',
        name: 'cash',
        component: Cash
      },
      {
        path: 'state',
        name: 'state',
        component: State
      },
      {
        path: 'mine',
        name: 'mine',
        component: Mine
      }
    ]
  },
  {
    path: '/cash/goods',
    name: 'goods',
    component: Goods
  }
]

export default new Router({
  mode: 'history',
  routes: routes
})
