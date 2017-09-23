<template>
  <div>
    <router-view class="mt-bottom"></router-view>
    <mt-tabbar v-model="selected" class="is-fixed">
      <mt-tab-item id="cash">
        <i class="iconfont icon-rechargefill"></i>
        收银
      </mt-tab-item>
      <mt-tab-item id="mine">
        <i class="iconfont icon-my_light"></i>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>

export default {
  data () {
    return {
      selected: 'cash'
    }
  },
  methods: {

  },
  watch: {
    selected: function (newValue) {
      this.$router.push(newValue)
    }
  }

}
</script>
<style>
  .mt-bottom {
    margin-bottom: 50px;
  }
  .mint-tab-item-label { 
    font-size: 16px;
  }
  .mint-tab-item {
    padding: 12px 0;
  }
</style>

