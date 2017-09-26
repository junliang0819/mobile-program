<template>
  <div style="background-color: #eeeeee">
    <mt-header title="收银员列表">
      <router-link to=".." slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <div @click="addEmployee" slot="right">
        添加
      </div>
    </mt-header>
    <mt-cell v-for="admin in adminList" :key="admin.id">
      <div slot="title" class="store">
        <div class="inline-block">
          <i class="iconfont icon-kxbshop2"></i>
          <span>{{admin.username}}</span>
        </div>
      </div>
      <i class="iconfont icon-kxbshop2"></i>
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
  export default {
    data () {
      return {
        adminList: []
      }
    },
    methods: {
      addEmployee () {
        this.$router.push(`/cash/shop/store/${this.$route.params.shopId}/employee/${this.$route.params.storeId}/employee_add`)
      }
    },
    mounted () {
      Api.post('/admin/shopinfomgr/getadmins',{shopinfoid: this.$route.params.shopId}).then(rs => {
        if(!rs.error_response){
          this.adminList = rs.admins
        }
      })
    }
  }
</script>

