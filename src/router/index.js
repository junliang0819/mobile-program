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

import Shop from '@/views/shop/index'
import Store from '@/views/shop/store'
import StoreAdd from '@/views/shop/store_add'
import Employee from '@/views/shop/employee'
import EmployeeAdd from '@/views/shop/employee_add'

import Member from '@/views/member/index'

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
    path: '/cash/member',
    component: Member
  },
  {
    path: '/cash/shop',
    name: 'shop',
    component: Shop
  },
  {
    path: '/cash/shop/store/:id',
    name: 'store',
    component: Store
  },
  {
    path: '/cash/shop/store_add',
    name: 'store_add',
    component: StoreAdd
  },
  {
    path: '/cash/shop/employee/:id',
    name: 'employee',
    component: Employee
  },
  {
    path: '/cash/shop/employee_add',
    name: 'employee_add',
    component: EmployeeAdd
  }
]

export default new Router({
  mode: 'history',
  routes: routes
})
