<template>
  <div>
    <mt-header title="图片分类">
      <mt-button icon="back" @click="$router.go(-1)" slot="left"></mt-button>
    </mt-header>
    <div>
      <mt-cell v-for="type in types" :key="type.id" :title="type.name" is-link :to="`/image/list/${type.id}`"></mt-cell>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .imgList {
    li {
      width: 50%;
      float: left;
      
    }
  }
</style>

<script>
import Api from '@/api'
import { MessageBox } from 'mint-ui'
import Store from '@/utils/store'
export default {
  mounted () {
    Api.post('/admin/imagecate/list',{
      shopid: Store.getShopId(),
      cateid: 1
    })
    .then(rs=>{
      this.types = rs.cates.subcates
      window.imageList = rs.cates
    })
    
  },
  data () {
    return {
      types: [

      ]
    }
  },
  methods: {
    
    
  }

}
</script>

