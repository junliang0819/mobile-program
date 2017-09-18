<template>
  <div>
    <mt-header title="分类管理">
      <router-link to="/cash/goods" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <span slot="right">编辑</span>
    </mt-header>
    <ul>
      <li v-for="item in types">
        {{item.name}}
      </li>
    </ul>
    <div class="bottom" @click="addType">
      添加分类
    </div>
  </div>
</template>
<style scoped>
  .bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    color: #dfa900;
    text-align: center;
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

