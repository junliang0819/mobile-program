<template>
  <div style="background-color: #fff">
    <mt-header title="新增收银员">
      <router-link to="." slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="center">
      <img :src="imgUrl" src="../../assets/logo.png" alt="" width="300" height="300">
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import '../../assets/css/colors.less';
  .center {
    text-align: center;
    margin-top: 10%;
  }
</style>
<script>
  import Api from '@/api'
  export default {
    data () {
      return {
        imgUrl: '../../assets/logo.png',
        adminList: []
      }
    },
    methods: {

    },
    mounted () {
      /*Api.get(`/admin/shopinfomgr/getbarcode?id=${this.$route.params.shopId}&&width=300&&height=300`).then(rs => {
        this.imgUrl = rs.admins
      })*/
    }
  }
</script>

