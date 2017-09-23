import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import Cash from '@/views/home/cash/cash'
import Goods from '@/views/home/cash/goods'
import GoodsType from '@/views/home/cash/goods_type'
import GoodsDetail from '@/views/home/cash/goods_detail'
import GoodsAdd from '@/views/home/cash/goods_add'
import Coupon from '@/views/coupon/index'
import AddCoupon from '@/views/coupon/add'



import Mine from '@/views/home/mine'

import Store from '@/views/home/mine/store'
import List from '@/views/home/mine/list'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/cash',
    component: Home,
    children: [
      {
        path: 'cash',
        name: 'cash',
        component: Cash
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
    path: '/coupon',
    component: Coupon
  },
  {
    path: '/coupon/add',
    component: AddCoupon
  },
  {
    path: '/mine/store',
    name: 'store',
    component: Store
  },
  {
    path: '/mine/list',
    name: 'list',
    component: List
  }
]

export default new Router({
  mode: 'history',
  routes: routes
})
