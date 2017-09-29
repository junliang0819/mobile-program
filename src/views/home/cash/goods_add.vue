<template>
  <div>
    <mt-header :title="`${editable?'编辑':'新增'}商品`">
      <mt-button icon="back" @click="$router.go(-1)" slot="left"></mt-button>
      <span slot="right" @click="save">保存</span>
    </mt-header>
    <section>
      <div class="img" @click="$router.push('/image/type')">
        <img :src="product.img" alt="">
      </div>
    </section>
    <section>
      <mt-field label="商品名称" placeholder="请输入商品名称" v-model="product.name"></mt-field>
      <mt-field label="商品描述" placeholder="请输入商品描述" v-model="product.desc"></mt-field>
    </section>
    <section>
      <mt-cell title="设置规格" is-link to="/cash/goods/rules/set"></mt-cell>
    </section>
    <section>
      <mt-field label="可获取点数" placeholder="请输入用户分享可获取点数" v-model="product.share"></mt-field>
      <mt-field label="商品详细信息" placeholder="请输入商品详细信息" type="textarea" rows="3" v-model="product.detail"></mt-field>
    </section>
    <mt-cell title="商品是否在售">
      <mt-switch v-model="product.marketable"></mt-switch>
    </mt-cell>
  </div>
</template>
<style lang="less" scoped>
  section {
    margin-bottom: 20px;
    .img {
      height: 150px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>

<script>
import Api from '@/api'
import { MessageBox,Toast } from 'mint-ui'
import { copyObjProperty } from '@/utils'
import Store from '@/utils/store'
export default {
  mounted () {
    this.editable = location.search.indexOf('editable')!= -1
    this.cateId = this.$route.params.cateId
    if(this.editable){
      this.product = copyObjProperty(window.productDetail)
      window.productRules = this.product.specs
    }else{
      if(!window.productRules){
        window.productRules = []
      }else{
        this.product.specs = window.productRules
      }
    }
    this.product.img = window.chosenUrl
  },
  data () {
    return {
      cateId: '',
      editable: false,
      product: {
        marketable: false
      }
      
    }
  },
  methods: {
    save() {
      if(!this.product.name){
        Toast('请输入商品名')
        return
      }
      Api.post('/admin/product/add',{
        "shopid": Store.getShopId(), 
        "cateid": this.cateId,
        "share": this.product.share,  //用户分享获取的点数，取值0-100，也可以不设置
        "product":{
        "name": this.product.name,
        "img":  this.product.img,
        "desc": this.product.desc,
        "detail": this.product.detail,
        "specs": this.product.specs
        }
      })
      .then(rs=>{
        Toast(`${this.editable?'修改':'添加'}成功`)
        setTimeout(()=>{
          this.$router.push('/cash/goods')
        },500)
      })
    }
    
  }
}
</script>

