import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import Cash from '@/views/home/cash/cash'
import Goods from '@/views/home/cash/goods'
import GoodsType from '@/views/home/cash/goods_type'
import GoodsDetail from '@/views/home/cash/goods_detail'
import GoodsAdd from '@/views/home/cash/goods_add'

import State from '@/views/home/state'
import Mine from '@/views/home/mine'

import Store from '@/views/home/mine/store'

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
  },
  {
    path: '/cash/goods/type',
    name: 'type',
    component: GoodsType
  },
  {
    path: '/cash/goods/detail/:id',
    name: 'detail',
    component: GoodsDetail
  },
  {
    path: '/cash/goods/add',
    name: 'add',
    component: GoodsAdd
  },
  {
    path: '/mine/store',
    name: 'goods',
    component: Store
  }
]

export default new Router({
  mode: 'history',
  routes: routes
})
