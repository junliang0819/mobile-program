<template>
  <div>
    <div class="top">
      <span>
        <i class="iconfont icon-sweep"></i>
        收款
      </span>
      <span>
        <i class="iconfont icon-gouwuchefill"></i>
        开单
      </span>
      <span>
        <i class="iconfont icon-saoyisao"></i>
        扫一扫
      </span>
    </div>
    <div class="bottom ks-clear">
      <span v-for="item in items" :class="item.type" @click="goto(item.path)">
        <i :class="item.icon"></i>
        {{item.name}}
      </span>
    </div>
  </div>
</template>
<style scoped>
  .top {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: black;
    color: #dfa900;
    height: 200px;
    font-size: 16px;
    opacity: .8;
  }
  .top span {
    text-align: center;
  }
  .top i {
    display: block;
    font-size: 50px;
  }
  .bottom {
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
export default {
  mounted() {
    Api.post('/admin/login', {
      "phone": "1814242525",
      "password": "1234fwaf",
      username: 'wfwfwa'
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
          type: 'green',
          icon: 'iconfont icon-shouru',
          name: '我的收入'
        },
        {
          type: 'blue',
          icon: 'iconfont icon-my_fill_light',
          name: '顾客'
        },
        {
          path: 'cash/member',
          type: 'blue',
          icon: 'iconfont icon-huiyuanqia',
          name: '会员卡'
        },
        {
          type: 'green',
          icon: 'iconfont icon-chuzhiqia',
          name: '储值'
        },
        {
          path: 'coupon',
          type: 'green',
          icon: 'iconfont icon-youhuijuan',
          name: '优惠券'
        },
        {
          type: 'blue',
          icon: 'iconfont icon-laba',
          name: '会员通知'
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

