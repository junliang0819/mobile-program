<template>
  <div>
    <div class="box">
      <div class="left">
        <ul>
          <li :class="currentIndex==index?'active':''" v-for="(item,index) in types" @click="changeType(item.id,index)">
            {{item.name}}
            <mt-badge size="small">30</mt-badge>
          </li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li v-for="(good,index) in currentGoods" class="ks-clear" @click="chooseGoods(index)">
            <img :src="good.pic" alt="" width="50" height="50">
            <div>
              <div>
                {{good.name}}
              </div>
              ￥ {{good.price}}/千克
            </div>
            <i v-show="editable" :class="good.choosen?'iconfont icon-rechargefill':'iconfont icon-recharge'"></i>
          </li>
        </ul>
      </div>
    </div>
    <mt-tabbar v-model="selected" class="is-fixed">
      <mt-tab-item id="cash" @click.native="editable = true">
        批量编辑
      </mt-tab-item>
      <mt-tab-item id="state">
        新增商品
      </mt-tab-item>
    </mt-tabbar>
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
    Api.post('/admin/cate/list', {status: 1})
  },
  data () {
    return {
      selected: '',
      currentIndex: 0,
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
      ],
      currentGoods: [
        {
          id: 1,
          pic: 'http://www.cnblogs.com/skins/summerGarden/images/header.jpg',
          name: '测试商品1',
          price: '10.00',
          choosen: false
        }
      ]
    }
  },
  methods: {
    changeType (id, index) {
      this.currentIndex = index
      this.currentGoods = [
        {
          id: 2,
          pic: 'xxx',
          name: '测试商品2',
          price: '10.00',
          choosen: false
        }
      ]
    },
    chooseGoods (index) {
      if (this.editable) {
        this.currentGoods[index].choosen = !this.currentGoods[index].choosen
      } else {
        this.$router.push('./detail')
      }
    }
  }

}
</script>

