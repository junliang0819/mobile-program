<template>
  <div class="content">
    <mt-header title="商品详情">
      <router-link to="/cash/goods" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/cash/goods/add" slot="right">
        编辑
      </router-link>
    </mt-header>
    <section class="top">
      <img src="" alt="">
      <div>
        <div>测试</div>
        <div>商品编码：wfwgwFEFEAA</div>
        <div>商品分类：默认分类</div>
      </div>
    </section>
    <section class="center">
      <ul>
        <li>
          <div>10</div>
          <div>编码：11</div>
          <div>零售价：￥10.00/千克</div>
        </li>
        <li>
          <div>5</div>
          <div>编码：11</div>
          <div>零售价：￥10.00/千克</div>
        </li>
      </ul>
    </section>
    <section class="bottom">
      <ul>
        <li>备注</li>
        <li>
          商品在售
          <mt-switch v-model="value"></mt-switch>
        </li>
      </ul>
    </section>
  </div>
</template>
<style scoped>
  .content {
    background: #f4f5f7;
  }
  section {
    background: #fff;
    margin-bottom: 20px;
  }
  li {
    padding: 5px;
    border-bottom: 1px solid #f4f5f7;
  }
  .top{
    display: flex;
  }
</style>

<script>
import Api from '@/api'
import { MessageBox } from 'mint-ui'
export default {
  mounted () {
  },
  data () {
    return {
      a: {}
    }
  },
  methods: {
    b() {

    }
    
  }

}
</script>

