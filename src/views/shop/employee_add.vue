<template>
  <div style="background-color: #eeeeee">

  </div>
</template>

<style scoped>
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
      Api.get('/admin/shopinfomgr/getbarcode?id=123&&width=300&&height=300').then(rs => {
        if(!rs.error_response){
          this.adminList = rs.admins
        }
      })
    }
  }
</script>

