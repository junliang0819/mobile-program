<template>
  <div>
    <mt-header title="店铺列表">
      <router-link to="." slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <span slot="right" @click="editable=!editable">{{editable?'取消':'编辑'}}</span>
    </mt-header>
    <mt-cell v-for="(shop, index) in shopList" :key="shop.id">
      <div @click="chooseShop(shop.id,index)" slot="title" class="store">
        <div class="inline-block">
          <i class="iconfont icon-kxbshop2"></i>
          <span>{{shop.shopname}}</span>
        </div>
      </div>
      <mt-button v-show="editable" size="small" type="primary" style="margin-right: 10px;" @click="change(shop.id)">修改</mt-button>
      <mt-button v-show="editable" size="small" type="danger" @click="del(shop.id)">删除</mt-button>
    </mt-cell>
    <div class="bottom" @click="addShop" slot="right">
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
  import { MessageBox } from 'mint-ui'

  function getList(){
    let _this = this;
    Api.post('/admin/shopmgr/list').then(rs => {
      if(!rs.error_response){
        _this.shopList = rs.shoplist
      }
    })
  }
  export default {
    data () {
      return {
        editable: false,
        shopList: []
      }
    },
    methods: {
      chooseShop (id) {
        if (!this.editable) {
          this.$router.push(`/cash/shop/store/${id}`)
        }
      },
      getList () {
        getList.apply(this, []);
      },
      change(id) {
        MessageBox.prompt('修改店铺名','').then(({ value, action }) => {
          if(!value.trim()) return
          Api.post('/admin/shopmgr/modify',{
            "shopid": id,
            "shopname": value.trim()
          })
            .then(rs=>{
              getList.apply(this, []);
            })
        });
      },
      del(id) {
        Api.post('/admin/shopmgr/del',{
          "shopid": id
        })
          .then(rs=>{
            getList.apply(this, []);
          })

      },
      addShop() {
        MessageBox.prompt('新增店铺','').then(({ value, action }) => {
          if(!value.trim()) return
          // 请求新增分类接口
          Api.post('/admin/shopmgr/create',{shopname: value.trim()}).then(rs => {
            if(!rs.error_response){
              getList.apply(this, []);
            }
          })
        });
      }
    },
    mounted () {
      getList.apply(this, []);
    }
  }
</script>

