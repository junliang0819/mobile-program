<template>
  <div>
    <mt-header title="新增收银员">
      <router-link to="." slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
  </div>
</template>

<style lang="less" scoped>
  @import '../../assets/css/colors.less';
  .store {
    padding: 5px 0 10px;
    border-top: none;
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

    },
    mounted () {
      Api.get(`/admin/shopinfomgr/getbarcode?id=${this.$route.params.shopId}&&width=300&&height=300`).then(rs => {
        if(!rs.error_response){
          this.adminList = rs.admins
        }
      })
    }
  }
</script>

