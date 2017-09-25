<template>
  <div style="background-color: #eeeeee">
    <mt-header title="店铺列表">
      <router-link to="." slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <mt-cell v-for="shop in shopList" :key="shop.id">
      <div @click="chooseShop(shop.id)" slot="title" class="store">
        <div class="inline-block">
          <i class="iconfont icon-kxbshop2"></i>
          <span>{{shop.shopname}}</span>
        </div>
      </div>
      <i @click="chooseShop(shop.id)" class="iconfont icon-kxbshop2"></i>
    </mt-cell>
    <div class="bottom" @click="addShop">
      添加店铺
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
  import { MessageBox } from 'mint-ui'
  export default {
    data () {
      return {
        shopList: []
      }
    },
    methods: {
      selectStore (id) {
        console.log(id)
      },
      chooseShop (id) {
        this.$router.push(`/cash/shop/store/${id}`)
      },
      addShop() {
        MessageBox.prompt('新增店铺','').then(({ value, action }) => {
          if(!value.trim()) return
          // 请求新增分类接口
          Api.post('/admin/shopmgr/create',{shopname: value.trim()}).then(rs => {
            if(!rs.error_response){
              Api.post('/admin/shopmgr/list').then(rs => {
                if(!rs.error_response){
                  this.shopList = rs.shoplist
                }
              })
            }
          })
        });
      }
    },
    mounted () {
      Api.post('/admin/shopmgr/list').then(rs => {
        if(!rs.error_response){
          this.shopList = rs.shoplist
        }
      })
    }
  }
</script>

