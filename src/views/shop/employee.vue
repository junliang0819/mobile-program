<template>
  <div>
    <mt-header title="收银员列表">
      <router-link to=".." slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <span slot="right" @click="editable=!editable">{{editable?'取消':'编辑'}}</span>
    </mt-header>
    <mt-cell v-for="admin in adminList" :key="admin.id">
      <div slot="title" class="store">
        <div class="inline-block">
          <i class="iconfont icon-kxbshop2"></i>
          <span>{{admin.username}}</span>
        </div>
      </div>
      <mt-button v-show="editable" size="small" type="danger" @click="del(admin.id)">删除</mt-button>
    </mt-cell>
    <div class="bottom" @click="addEmployee">
      添加管理员
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
    Api.post('/admin/shopinfomgr/getadmins',{shopinfoid: _this.shopinfoid}).then(rs => {
      if(!rs.error_response){
        _this.adminList = rs.admins
      }
    })
  }
  export default {
    data () {
      return {
        editable: false,
        shopid: this.$route.params.shopId,
        shopinfoid: this.$route.params.storeId,
        adminList: []
      }
    },
    methods: {
      addEmployee () {
        this.$router.push(`/cash/shop/store/${this.shopid}/employee/${this.shopinfoid}/employee_add`)
      },
      del(id) {
        Api.post('/admin/shopinfomgr/deladmins',{
          "shopinfoid": this.shopinfoid,
          "adminids": [id]
        })
          .then(rs=>{
            getList.apply(this, []);
          })
      }
    },
    mounted () {
      getList.apply(this, [])
    }
  }
</script>

