<template>
  <div>
    <mt-header title="优惠券">
      <router-link to="./" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/coupon/add" slot="right">
        添加
      </router-link>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">全部</mt-tab-item>
      <mt-tab-item id="2">进行中</mt-tab-item>
      <mt-tab-item id="3">未开始</mt-tab-item>
      <mt-tab-item id="4">已结束</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        
      </mt-tab-container-item>
      <mt-tab-container-item id="2">

      </mt-tab-container-item>
      <mt-tab-container-item id="3">

      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        
      </mt-tab-container-item>
    </mt-tab-container>
  </div>  
</template>
<style scoped>
  
</style>

<script>
import Api from '@/api'
export default {
  mounted() {
    Api.post('/admin/coupon/list',{
      "shopid":1,//店铺id
      "type": "all",//优惠券类型，可选值为，"all","waitforstart","running","end"，分别对应全部，还未开始，进行中，结束
      "pagesize":5,//分页大小
      "page":1//当前页
    })
    .then(rs=>{
      console.log(rs)
      if(rs['error-response']){

      }else{
        
      }
    })
  },
  data () {
    return {
      selected: "1"
    }
  },
  methods: {
    
  }

}
</script>

