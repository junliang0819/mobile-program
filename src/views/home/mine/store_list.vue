<template>
  <div style="background-color: #eeeeee">
    <mt-header title="门店列表">
      <router-link to="./" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/mine/store_list/store_add" slot="right">
        添加
      </router-link>
    </mt-header>
    <mt-cell v-for="store in storeList" :key="store.id">
      <div v-on:click="selectStore(store.id)" slot="title" class="store">
        <div class="inline-block">
          <i class="iconfont icon-kxbshop2"></i>
          <span>{{store.displayname}}</span>
        </div>
      </div>
      <i v-on:click="selectStore(store.id)" class="iconfont icon-kxbshop2"></i>
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
      Api.post('/admin/shopmgr/list').then(rs => {
        if(!rs.error_response){
          this.storeList = rs.shoplist
        }
      })
    }
  }
</script>

