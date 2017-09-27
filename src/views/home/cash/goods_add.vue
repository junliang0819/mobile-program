<template>
  <div>
    <mt-header :title="`${editable?'编辑':'新增'}商品`">
      <router-link to="../" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <span slot="right" @click="save">保存</span>
    </mt-header>
    <section>
      <mt-field label="商品名称" placeholder="请输入商品名称" v-model="product.name"></mt-field>
      <mt-field label="商品描述" placeholder="请输入商品描述" v-model="product.desc"></mt-field>
    </section>
    <section>
      <mt-cell title="设置规格" is-link to="/cash/goods/add/set"></mt-cell>
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
    this.editable = location.search.indexOf('editable')!= -1
    this.cateId = this.$route.params.cateId
    if(this.editable){
      this.product = copyObjProperty(window.productDetail)
    }
  },
  data () {
    return {
      cateId: '',
      editable: false,
      product: {
        
      }
      
    }
  },
  methods: {
    save() {
      Api.post('/admin/product/add',{
        "shopid": Store.getShopId(), 
        "cateid": this.cateId,
        "share": this.product.share,  //用户分享获取的点数，取值0-100，也可以不设置
        "product":{
          "name": this.product.name,
          "img":  this.product.img,
          "desc": this.product.desc,
          "detail": this.product.detail,
          "specs":[{
            "name":"规格名称",   //商品规格
            "price":99.00  //规格对应的价格
          }
          ]
        }
      })
    }
    
  },
  watch: {
    ['product.marketable'](oldValue,newValue){
      if(!this.editable) return
      
      Api.post(`/admin/product/${newValue?'onsale':'offsale'}`,{
        "cateid": this.cateId, //商品所属的分类
        "productids": [1,2] //需要上架的商品id
      })
      .then(rs=>{
        Toast(`${newValue?'上架':'下架'}成功！`)
      })
    }
  }

}
</script>

