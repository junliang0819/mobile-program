<template>
  <div>
    <mt-header title="新增商品">
      <router-link to="./" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <span slot="right" @click="save">保存</span>
    </mt-header>
    <section>
      <mt-field label="商品名称" placeholder="请输入商品名称" v-model="name"></mt-field>
      <mt-field label="商品描述" placeholder="请输入商品描述" v-model="desc"></mt-field>
    </section>
    <section>
      <mt-cell title="设置规格" is-link to="/cash/goods/add/set"></mt-cell>
    </section>
    <section>
      <mt-field label="可获取点数" placeholder="请输入用户分享可获取点数" v-model="share"></mt-field>
      <mt-field label="商品详细信息" placeholder="请输入商品详细信息" type="textarea" rows="3" v-model="info"></mt-field>
    </section>
    <mt-cell title="商品是否在售">
      <mt-switch v-model="isSale"></mt-switch>
    </mt-cell>
  </div>
</template>
<style lang="less" scoped>
  section {
    margin-bottom: 20px;
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
      name: '',
      desc: '',
      share: '',
      info: '',
      isSale: true
    }
  },
  methods: {
    save() {

    }
    
  }

}
</script>

