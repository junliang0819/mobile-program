<template>
  <div>
    <mt-header title="设置规格">
      <mt-button icon="back" @click="$router.go(-1)" slot="left"></mt-button>
    </mt-header>
    <section v-for="rule in rules">
      <mt-field label="规格名称" placeholder="请输入商品规格名称" v-model="rule.name"></mt-field>
      <mt-field label="规格价格" placeholder="请输入商品规格价格" v-model="rule.price"></mt-field>
    </section>
    <div class="bottom" @click="addRule">
      添加规格
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import '../../../assets/css/colors.less';
  section {
    margin-bottom: 20px;
  }
  .bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    color: @yellow;
    text-align: center;
    padding: 10px;
    font-size: 14px;
    border-top: 1px solid @yellow;
  }
</style>
  
<script>
import Api from '@/api'
import { MessageBox } from 'mint-ui'
import { copyObjProperty } from '@/utils'
import Store from '@/utils/store'
import { Toast } from 'mint-ui';
export default {
  mounted () {
    this.rules = window.productRules
  },
  data () {
    return {
      rules: []
      
    }
  },
  methods: {
    addRule() {
      this.rules.push({
        name: '',
        price: ''
      })
    }
  }

}
</script>

