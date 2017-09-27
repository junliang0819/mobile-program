<template>
  <div>
    <mt-header title="分类管理">
      <mt-button icon="back" @click="$router.go(-1)" slot="left"></mt-button>
      <span slot="right" @click="edit">{{editable?'取消':'编辑'}}</span>
    </mt-header>
    <mt-cell :key="item.id" v-for="(item,index) in types" :title="item.name">
      <mt-button v-show="editable" size="small" type="primary" style="margin-right: 10px;" @click="change(index)">修改</mt-button>
      <mt-button v-show="editable" size="small" type="danger" @click="del(index)">删除</mt-button>
    </mt-cell>
    <div class="bottom" @click="addType">
      添加分类
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import '../../../assets/css/colors.less';
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
</style>

<script>
import Api from '@/api'
import { MessageBox } from 'mint-ui'
import Store from '@/utils/store'
export default {
  mounted () {
    this.getTypes()
  },
  data () {
    return {
      editable: false,
      types: []
    }
  },
  methods: {
    getTypes() {
      Api.post('/admin/category/list',{
        shopid: Store.getShopId()
      })
      .then(rs=>{
        this.types = rs.cates
      })
    },
    edit() {
      this.editable = !this.editable
    },
    change(index) {
      MessageBox.prompt('修改分类名','').then(({ value, action }) => {
        if(!value.trim()) return
        Api.post('/admin/category/modify',{
          "id": this.types[index].id,
          "shopid": Store.getShopId(),
          "name": value.trim()
        })
        .then(rs=>{
          this.types[index].name = value.trim()
        })
      });
    },
    del(index) {
      Api.post('/admin/category/delete',{
          "shopid":1,
	        "cateids":[this.types[index].id]//需要删除的分类id
        })
        .then(rs=>{
          this.types.splice(index,1)
        })
      
    },
    addType() {
      MessageBox.prompt('新增分类','').then(({ value, action }) => {
        if(!value.trim()) return
        Api.post('/admin/category/create',{
          shopid: Store.getShopId(),
          name: value.trim()
        })
        .then(rs=>{
          this.getTypes()
        })
      });
    }
    
  }

}
</script>

