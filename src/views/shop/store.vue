<template>
  <div style="background-color: #eeeeee">
    <mt-header title="门店列表">
      <router-link to=".." slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <div @click="addStore" slot="right">
        新增
      </div>
    </mt-header>
    <mt-cell v-for="store in storeList" :key="store.id">
      <div @click="chooseStore(store.id)" slot="title" class="store">
        <div class="inline-block">
          <i class="iconfont icon-kxbshop2"></i>
          <span>{{store.displayname}}</span>
        </div>
      </div>
      <i @click="chooseStore(store.id)" class="iconfont icon-kxbshop2"></i>
    </mt-cell>
  </div>
</template>

<style lang="less" scoped>
  @import '../../assets/css/colors.less';
  .store {
    padding: 5px 0 10px;
    border-top: none;
  }
  .icon-kxbshop2 {
    margin-top: 5px;
    font-size: 25px;
    vertical-align: middle;
    color: @yellow;
  }
  .inline-block {
    margin-top: 8px;
    display: inline-block;
    vertical-align: top;
  }
</style>
<script>
  import Api from '@/api'
  function getList () {
    var _this = this
    Api.post('/admin/shopinfomgr/list', {shopinfoid: _this.$route.params.shopId}).then(rs => {
      if(!rs.error_response){
        _this.storeList = rs.shoplist
      }
    })
  }
  export default {
    data () {
      return {
        storeList: []
      }
    },
    methods: {
      selectStore (id) {

      },
      addStore () {
        this.$router.push(`/cash/shop/store/${this.$route.params.shopId}/store_add`)
      },
      chooseStore (id) {
        this.$router.push(`/cash/shop/store/${this.$route.params.shopId}/employee/${id}`)
      }
    },
    mounted () {
      getList.apply(this, [])
    }
  }
</script>

