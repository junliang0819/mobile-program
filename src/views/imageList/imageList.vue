<template>
  <div>
    <mt-header title="图片列表">
      <mt-button icon="back" @click="$router.go(-1)" slot="left"></mt-button>
      <span slot="right" @click="save">确定</span>
    </mt-header>
    <div>
      <ul class="imgList ks-clear">
        <li v-for="item in imgs">
          <i class="iconfont icon-gou1"></i>
          <img :src="item.url" alt="">
        </li>
      </ul>
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
    let cateId = 1
    for(let i=0;i<window.imageList;i++){
      let el = window.imageList[i]
      if(el.id == cateId){
        this.imgs = el.images.map(el=>{
          el.chosen = false
          return el
        })
        break;
      }
      
    }
    
  },
  data () {
    return {
      imgs: [

      ]
    }
  },
  methods: {
    save() {
      let url
      this.imgs.forEach(el=>{
        if(el.chosen){
          url = el.url
        }
      })
      window.chosenUrl = url
      this.$router.go(-2)
    }
    
  }

}
</script>

