<template>
  <div>
    <div class="box">
      <div class="left">
        <ul>
          <li :class="currentIndex==index?'active':''" v-for="(item,index) in types" @click="changeType(item.id,index)">
            {{item.name}}
            <mt-badge v-show="currentIndex==index&&item.chosen>=1" size="small">{{item.chosen}}</mt-badge>
          </li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li v-for="(good,index) in types[currentIndex].goods" class="ks-clear" @click="chooseGoods(index)">
            <img :src="good.pic" alt="" width="50" height="50">
            <div>
              <div>
                {{good.name}}
              </div>
              ￥ {{good.price}}/千克
            </div>
            <i v-show="editable" :class="good.chosen?'iconfont icon-rechargefill':'iconfont icon-recharge'"></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="fix-bottom">
      <span @click="handleLeft">
        {{leftButton}}
      </span>
      <span @click="handleRight">
        {{rightButton}}
      </span>
    </div>
  </div>
</template>
<style scoped>
  .box {
    display: flex;
    justify-content: flex-start;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 30px;
  }
  .box .left {
    background: grey;

  }
  .box .left li{
    padding: 26px;
  }
  .box .left li.active{
    background: #fff;
    color: #dfa900;
  }
  .box .right {
    flex: 1;
  }
  .box .right li {
    border-bottom: 1px solid grey;
    padding: 10px;
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
  .fix-bottom {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
  }
  .fix-bottom span {
    float: left;
    width: 50%;
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
      leftButton: '批量编辑',
      rightButton: '新增商品',
      types: [
        {
          id: 1,
          name: '商品分类1',
          chosen: 0,
          goods: [
            {
              id: 1,
              pic: 'http://www.cnblogs.com/skins/summerGarden/images/header.jpg',
              name: '测试商品1', 
              price: '10.00',
              chosen: false
            },
            {
              id: 2,
              pic: 'http://www.cnblogs.com/skins/summerGarden/images/header.jpg',
              name: '测试商品2',
              price: '10.00',
              chosen: false
            }
          ]
        },
        {
          id: 2,
          name: '商品分类2',
          chosen: 0,
          goods: [
            {
              id: 1,
              pic: 'http://www.cnblogs.com/skins/summerGarden/images/header.jpg',
              name: '测试商品3',
              price: '10.00',
              chosen: false
            },
            {
              id: 2,
              pic: 'http://www.cnblogs.com/skins/summerGarden/images/header.jpg',
              name: '测试商品4',
              price: '10.00',
              chosen: false
            }
          ]
        }
      ]
    }
  },
  methods: {
    changeType (id, index) {
      this.currentIndex = index
      
    },
    chooseGoods (index) {
      if (this.editable) {
        let isChosen = this.types[this.currentIndex].goods[index].chosen
        if (!isChosen) {
          this.types[this.currentIndex].chosen = this.types[this.currentIndex].chosen + 1
        } else {
          this.types[this.currentIndex].chosen = this.types[this.currentIndex].chosen - 1
        }
        this.types[this.currentIndex].goods[index].chosen = !this.types[this.currentIndex].goods[index].chosen
      } else {
        this.$router.push('./detail')
      }
    },
    handleLeft () {
      if (this.editable) {
        this.types = this.types.map(el => {
          el.chosen = 0
          return el
        })
        this.leftButton = '批量编辑'
        this.rightButton = '新增商品'
      } else {
        this.leftButton = '取消'
        this.rightButton = '删除'
      }
      this.editable = !this.editable
    },
    handleRight () {

    }
  }

}
</script>

