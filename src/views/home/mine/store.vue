<template>
  <div style="background-color: #eeeeee">
    <div class="margin-bt15">
      <mt-cell is-link to="/mine/store">
        <div slot="title" class="store">
          <div class="inline-block">
            <span>门店LOGO</span>
          </div>
        </div>
        <i class="iconfont icon-kxbshop2"></i>
      </mt-cell>
      <mt-cell is-link>
        <div slot="title">
          <span>门店名称</span>
        </div>
        <span>测试</span>
      </mt-cell>
      <mt-cell is-link>
        <div slot="title">
          <span>门店认证</span>
        </div>
        <span>未认证</span>
      </mt-cell>
      <mt-cell is-link>
        <div slot="title">
          <span>门店台卡</span>
        </div>
        <i class="iconfont icon-weibiaoti10101"></i>
      </mt-cell>
    </div>
    <div class="margin-bt15">
      <mt-cell is-link>
        <div slot="title">
          <span>绑定的网店</span>
        </div>
      </mt-cell>
    </div>
    <div class="margin-bt15">
      <mt-cell is-link>
        <div slot="title">
          <span>门店地址</span>
        </div>
      </mt-cell>
      <mt-cell>
        <span>北京市</span>
      </mt-cell>
    </div>
    <div class="margin-bt15">
      <mt-cell>
        <div slot="title">
          <span>门店主营商品类目</span>
        </div>
        <span>餐饮外卖</span>
      </mt-cell>
      <mt-cell is-link>
        <div slot="title">
          <span>设置微信公众号</span>
        </div>
      </mt-cell>
    </div>
    <div>
      <mt-cell is-link>
        <div slot="title">
          <span>同步卡卷至微信卡包</span>
        </div>
      </mt-cell>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {

    }
  }
</script>
<style scoped>
  .margin-bt15 {
    margin-bottom: 15px;
  }
  .store {
    padding: 5px 0 10px;
    border-top: none;
  }
  .icon-kxbshop2 {
    margin-top: 5px;
    font-size: 60px;
    vertical-align: middle;
    color: #dfc47d;
  }
  .inline-block {
    margin-top: 8px;
    display: inline-block;
    vertical-align: top;
  }
</style>

