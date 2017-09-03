<template>
  <div>
    <div class="top">
      <span>
        收款
      </span>
      <span>
        开单
      </span>
      <span>
        扫一扫
      </span>
    </div>
    <div class="bottom">
      <span v-for="item in items">
        <i :class="item.icon"></i>
        {{item.name}}
      </span>
    </div>
  </div>  
</template>
<style scoped>
  .top {
    background: grey;
    color: yellow;
    height: 200px;
  }
  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<script>
export default {
  data () {
    return {
      items: [
        {
          icon: 'iconfont icon-goods',
          name: '商品管理'
        },
        {
          icon: 'iconfont icon-goods',
          name: '我的收入'
        },
        {
          icon: 'iconfont icon-goods',
          name: '消息'
        },
        {
          icon: 'iconfont icon-goods',
          name: '台卡'
        },
        {
          icon: 'iconfont icon-goods',
          name: '顾客'
        },
        {
          icon: 'iconfont icon-goods',
          name: '会员卡'
        },
        {
          icon: 'iconfont icon-goods',
          name: '储值'
        },
        {
          icon: 'iconfont icon-goods',
          name: '优惠券'
        },
        {
          icon: 'iconfont icon-goods',
          name: '会员通知'
        },
        {
          icon: 'iconfont icon-goods',
          name: '会员充值'
        },
        {
          icon: 'iconfont icon-goods',
          name: '活动'
        }
      ]
    }
  },
  methods: {

  }

}
</script>

