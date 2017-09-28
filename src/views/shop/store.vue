<template>
  <div>
    <mt-header title="门店列表">
      <router-link to=".." slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <span slot="right" @click="editable=!editable">{{editable?'取消':'编辑'}}</span>
    </mt-header>
    <mt-cell v-for="store in storeList" :key="store.id">
      <div @click="chooseStore(store.id)" slot="title" class="store">
        <div class="inline-block">
          <i class="iconfont icon-kxbshop2"></i>
          <span>{{store.displayname}}</span>
        </div>
      </div>
      <mt-button v-show="editable" size="small" type="primary" style="margin-right: 10px;" @click="change(store.id)">修改</mt-button>
      <mt-button v-show="editable" size="small" type="danger" @click="del(store.id)">删除</mt-button>
    </mt-cell>
    <div class="bottom" @click="addStore">
      添加门店
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import '../../assets/css/colors.less';
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
    let _this = this
    Api.post('/admin/shopinfomgr/list', {shopid: _this.shopid}).then(rs => {
      if(!rs.error_response){
        _this.storeList = rs.shoplist
      }
    })
  }
  export default {
    data () {
      return {
        editable: false,
        shopid: this.$route.params.shopId,
        storeList: []
      }
    },
    methods: {
      selectStore (id) {

      },
      change(id) {
        this.$router.push(`/cash/shop/store/${this.shopid}/store_edit/${id}`)
      },
      del(id) {
        Api.post('/admin/shopinfomgr/del',{
          "shopinfoid": id,
        })
          .then(rs=>{
            getList.apply(this, [])
          })
      },
      addStore () {
        this.$router.push(`/cash/shop/store/${this.shopid}/store_add`)
      },
      chooseStore (id) {
        if (!this.editable) {
          this.$router.push(`/cash/shop/store/${this.shopid}/employee/${id}`)
        }
      }
    },
    mounted () {
      getList.apply(this, [])
    }
  }
</script>

