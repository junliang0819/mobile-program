<template>
  <div class="box">
    <div class="left">
      <ul>
        <li class="active">商品分类1</li>
        <li>商品分类2</li>
        <li>商品分类3</li>
      </ul>
    </div>
    <div class="right">
      <ul>
        <li v-for="good in currentGoods" class="ks-clear">
          <img src="" alt="" width="50">
          <div>
            <div>
              {{good.name}}
            </div>
            ￥ {{good.price}}/千克
          </div>
        </li>
      </ul>
    </div>
  </div>  
</template>
<style scoped>
  .box {
    display: flex;
    justify-content: flex-start;
  }
  .box .left {
    background: grey;

  }
  .box .left li{
    padding: 10px;
  }
  .box .left li.active{
    background: #fff;
    color: #dfa900;
  }
  .box .right {
    
  }
  .box .right li {

  }
  .box .right li>img {
    float: left;
  }
  .box .right li>div {
    float: right;
    color: #dfa900;
  }
  .box .right li>div>div {
    color: #000;
  }
</style>

<script>
import Api from '@/api'
export default {
  mounted () {
    Api.post('/admin/cate/list')
  },
  data () {
    return {
      types: [],
      currentGoods: [
        {
          id: 1,
          pic: 'xxx',
          name: '测试商品1',
          price: '10.00'
        }
      ]
    }
  },
  methods: {
    goto (path) {
    }
  }

}
</script>

