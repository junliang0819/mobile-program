<template>
  <div style="background-color: #eeeeee">
    <mt-cell v-for="store in storeList" :key="store.id">
      <div slot="title" class="store">
        <div class="inline-block">
          <i class="iconfont icon-kxbshop2"></i>
          <span>{{store.displayname}}</span>
        </div>
      </div>
      <i class="iconfont icon-kxbshop2"></i>
    </mt-cell>
  </div>
</template>

<style scoped>
  .store {
    padding: 5px 0 10px;
    border-top: none;
  }
  .icon-kxbshop2 {
    margin-top: 5px;
    font-size: 25px;
    vertical-align: middle;
    color: #dfc47d;
  }
  .inline-block {
    margin-top: 8px;
    display: inline-block;
    vertical-align: top;
  }
</style>
<script>
  import Api from '@/api'
  export default {
    data () {
      return {
        storeList: []
      }
    },
    methods: {
      selectStore (id) {
        console.log(id)
      }
    },
    mounted () {
      Api.post('/admin/shopinfomgr/list').then(rs => {
        if(rs.status === 200){
          console.log(rs)
          this.storeList = rs.data.shoplist
        }
      })
    }
  }
</script>

