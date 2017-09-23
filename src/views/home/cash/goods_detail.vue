<template>
  <div class="content">
    <mt-header title="商品详情">
      <router-link to="../" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/cash/goods/add" slot="right">
        编辑
      </router-link>
    </mt-header>
    <section>
      <mt-cell title="商品名称" value="说明文字"></mt-cell>
      <mt-cell title="商品描述" value="说明文字"></mt-cell>
    </section>
    <section>
      <mt-cell title="商品规格" value="说明文字"></mt-cell>
    </section>
    <section>
      <mt-cell title="分享可获取点数" value="说明文字"></mt-cell>
      <mt-cell title="商品详细信息" value="说明文字"></mt-cell>
    </section>
    <mt-cell title="商品是否在售">
      <mt-switch v-model="isSale"></mt-switch>
    </mt-cell>
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
      isSale: true
    }
  },
  methods: {
    b() {

    }
    
  }

}
</script>

