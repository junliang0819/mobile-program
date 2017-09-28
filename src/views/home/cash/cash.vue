<template>
  <div>
    <div class="top">
      <div class="switch">
        <select value="店铺">
          <option value="1">中和小吃</option>
          <option value="2">银泰城面包</option>
        </select>
      </div>
      <img src="http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg" alt="">
    </div>
    <div class="bottom ks-clear">
      <span v-for="item in items" :class="item.type" @click="goto(item.path)">
        <i :class="item.icon"></i>
        {{item.name}}
      </span>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .top {
    background: black;
    color: #dfa900;
    height: 250px;
    font-size: 16px;
    opacity: .8;
    .switch {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      text-align: center;
    }
    img {
      height: 100%;
    }
  }
  .bottom {
    background: #fff;
    margin-top: 20px;
    margin-bottom: 41px;
    font-size: 16px;
    opacity: .8;
  }
  .bottom span{
    float: left;
    width: 33.33%;
    text-align: center;
    margin-bottom: 10px;
  }
  .red i {
    color: #ff4e00;
  }
  .green i {
    color: #dfa900;
  }
  .blue i {
    color: #004adc;
  }
  .bottom i {
    display: block;
    font-size: 50px;
  }
</style>

<script>
import Api from '@/api'
import Store from '@/utils/store'
export default {
  mounted() {
    Api.post('/admin/login', {
      "phone": "1814242525",
      "password": "1234fwaf",
      username: 'wfwfwa'
    })
    Api.post('/admin/shopmgr/list')
    .then(rs=>{
      Store.setShopId(rs.shopList[0].id)
    })
  },
  data () {
    return {
      items: [
        {
          path: 'cash/goods',
          type: 'red',
          icon: 'iconfont icon-goods',
          name: '商品管理'
        },
        {
          path: 'cash/shop',
          type: 'red',
          icon: 'iconfont icon-dianpu',
          name: '店铺管理'
        },
        {
          path: 'coupon',
          type: 'green',
          icon: 'iconfont icon-youhuijuan',
          name: '优惠券'
        },
        {
          type: 'blue',
          icon: 'iconfont icon-my_fill_light',
          name: '顾客'
        },
        {
          type: 'green',
          icon: 'iconfont icon-chuzhiqia',
          name: '消费记录'
        },
        {
          type: 'blue',
          icon: 'iconfont icon-laba',
          name: '图片管理'
        },
        {
          type: 'green',
          icon: 'iconfont icon-shouru',
          name: '我的收入'
        }
      ]
    }
  },
  methods: {
    goto (path) {
      this.$router.push(path)
    }
  }

}
</script>

