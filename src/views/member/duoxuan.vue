<template>
  <div style="background-color: #eeeeee">
    <mt-header title="店铺列表">
      <router-link to="." slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <div @click="addShop" slot="right">
        添加
      </div>
    </mt-header>
    <mt-cell v-for="(shop, index) in shopList" :key="shop.id">
      <div @click="chooseShop(shop.id,index)" slot="title" class="store">
        <div class="inline-block">
          <i class="iconfont icon-kxbshop2"></i>
          <span>{{shop.shopname}}</span>
        </div>
      </div>
      <i @click="chooseShop(shop.id, index)" v-show="!editable" :class="shop.checkpro?'iconfont icon-gou':'iconfont icon-gou yellow'"></i>
    </mt-cell>
    <div v-show="editable" class="bottom" @click="editable=false;">
      批量编辑
    </div>
    <div v-show="!editable" class="bottom">
      <span @click="editable=true">
        取消
      </span>
      <span @click="editable=true">
        删除
      </span>
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
  .icon-gou {
    margin-left: 8px;
    color: @grey;
    display: inline-block;
    vertical-align: top;
    &.yellow{
      color: @yellow;
    }
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
        _this.shopList.forEach(o => o.checkpro = false)
      }
    })
  }
  export default {
    data () {
      return {
        editable: true,
        shopList: []
      }
    },
    methods: {
      chooseShop (id, index) {
        if (this.editable) {
          this.$router.push(`/cash/shop/store/${id}`)
        }else {
          console.log(this.shopList[index].checkpro)
          this.shopList[index].checkpro = !this.shopList[index].checkpro
        }
      },
      getList () {
        getList.apply(this, []);
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

