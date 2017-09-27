<template>
  <div>
    <mt-header title="商品管理">
      <router-link to="/cash" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/cash/goods/type" slot="right">
        分类管理
      </router-link>
    </mt-header>
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
          <li v-for="(good,index) in types[currentIndex]&&types[currentIndex].goods" class="ks-clear" @click="chooseGoods(index,good.id)">
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
<style lang="less" scoped>
  @import '../../../assets/css/colors.less';
  .box {
    display: flex;
    justify-content: flex-start;
    position: absolute;
    left: 0;
    right: 0;
    top: 40px;
    bottom: 40px;
  }
  .box .left {
    background: @grey;

  }
  .box .left li{
    padding: 26px;
  }
  .box .left li.active{
    background: #fff;
    color: @yellow;
  }
  .box .right {
    flex: 1;
    overflow: auto;
  }
  .box .right li {
    border-bottom: 1px solid @grey;
    padding: 10px;
    i {
      float: right;
    }
  }
  .box .right li>img {
    float: left;
  }
  .box .right li>div {
    float: left;
    color: @yellow;
    margin-left: 20px;
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
    padding: 10px;
    &:first-child {
      border-right: 1px solid @grey; 
    }
  }
</style>

<script>
import Api from '@/api'
import { MessageBox } from 'mint-ui'
import Store from '@/utils/store'
export default {
  mounted () {
    Api.post('/admin/category/list',{ 
      shopid: Store.getShopId()
    })
    .then(rs=>{
      this.types = rs.cates.map(el=>{
        return {
          id: el.id,
          name: el.name,
          chosen: 0,
          goods: [

          ]
        }
      })

    })
    .then(rs=>{
      this.getProducts(this.types[0].id)
    })
    
  },
  data () {
    return {
      selected: '',
      currentIndex: 0,
      editable: false,
      leftButton: '批量编辑',
      rightButton: '新增商品',
      types: [
        
      ]
    }
  },
  methods: {
    getProducts(cateId) {
      Api.post('/admin/product/list',{
        "cateid": cateId, //分类id
        "pagesize":10,//分页大小
        "page":1 //当前页
      })
      .then(rs=>{
        rs.products.forEach(el=>{
          let priceArr = []
          el.specs.forEach(el=>{
            priceArr.push(el.price)
          })
          let price = Math.min.apply(null,priceArr)
          let typeIndex = this.types.findIndex(el=>{
            return el.id == cateId
          })

          this.types[typeIndex].goods.push({
            ...el,
            id: el.id,
            pic: el.img,
            name: el.name, 
            price: price,
            chosen: false
          })
        })
      })
    },
    changeType (id, index) {
      this.currentIndex = index
      this.getProducts(id)
      
    },
    chooseGoods (index,id) {
      if (this.editable) {
        let isChosen = this.types[this.currentIndex].goods[index].chosen
        if (!isChosen) {
          this.types[this.currentIndex].chosen = this.types[this.currentIndex].chosen + 1
        } else {
          this.types[this.currentIndex].chosen = this.types[this.currentIndex].chosen - 1
        }
        this.types[this.currentIndex].goods[index].chosen = !this.types[this.currentIndex].goods[index].chosen
      } else {
        this.$router.push(`/cash/goods/detail/${id}`)
        // 未提供根据商品id查询商品详情
        window.productDetail = this.types[this.currentIndex].goods[index]
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
      if(this.editable){
        let total = 0
        this.types.forEach(el=>{
          total += el.chosen
        })
        if(total === 0) return
        MessageBox.confirm(`确定删除这${total}项商品？`).then(action => {
            // 请求删除商品接口
            
        });
      }else{
        this.$router.push(`/cash/goods/add/${this.types[this.currentIndex].id}`)
      }
    }
  }

}
</script>

