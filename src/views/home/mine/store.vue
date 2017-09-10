<template>
  <div style="background-color: #eeeeee">
    <div>
      <input file="file" accept="image/*;capture=camera">
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
    <div>
      <mt-cell is-link>
        <div slot="title">
          <span>绑定的网店</span>
        </div>
      </mt-cell>
    </div>
    <div>
      <mt-cell is-link>
        <div slot="title">
          <span>门店地址</span>
        </div>
      </mt-cell>
      <mt-cell>
        <span>北京市</span>
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

</style>

