<template>
  <div>
    <mt-header title="分类管理">
      <router-link to="/cash/goods" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
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
export default {
  mounted () {
    Api.post('/admin/cate/list', {status: 1})
  },
  data () {
    return {
      editable: false,
      types: [
        {
          id: 1,
          name: '商品分类1'
        },
        {
          id: 2,
          name: '商品分类2'
        }
      ]
    }
  },
  methods: {
    edit() {
      this.editable = !this.editable
    },
    change(index) {
      MessageBox.prompt('修改分类名','').then(({ value, action }) => {
        if(!value.trim()) return
        // 请求修改分类接口
        this.types[index].name = value.trim()
      });
    },
    del(index) {
      this.types.splice(index,1)
    },
    addType() {
      MessageBox.prompt('新增分类','').then(({ value, action }) => {
        if(!value.trim()) return
        // 请求新增分类接口
        this.types.push({
          id: '',
          name: value.trim()
        })
      });
    }
    
  }

}
</script>

