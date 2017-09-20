<template>
  <div>
    <mt-header title="优惠券">
      <router-link to="./" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/coupon/add" slot="right">
        添加
      </router-link>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">全部</mt-tab-item>
      <mt-tab-item id="2">进行中</mt-tab-item>
      <mt-tab-item id="3">未开始</mt-tab-item>
      <mt-tab-item id="4">已结束</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <ul>
          <li v-for="coupon in allList" class="ks-clear">
            <span class="text">已同步至微信卡券</span>
            <div class="top">
              <div>{{coupon.name}}</div>
              <div class="price red">￥{{coupon.amount}}</div>
              <div class="date">
                使用期限：
                {{coupon.startTime}}
                -
                {{coupon.endTime}}
              </div>
            </div>
            <span class="left">
              二维码发券
            </span>
            <span class="left">
              分享发券
            </span>
          </li>
        </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">

      </mt-tab-container-item>
      <mt-tab-container-item id="3">

      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        
      </mt-tab-container-item>
    </mt-tab-container>
  </div>  
</template>
<style lang="less" scoped>
  li {
    position: relative;
    background: #fff;
    margin-bottom: 20px;
    .left {
      float: left;
      width: 49.5%;
      text-align: center;
      margin: 10px 0;
      &+.left {
        border-left: 1px solid grey;
      }
    }
  }
  .text {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #dfa900;
  }
  .top {
    padding: 10px;
    border-bottom: 2px solid #ff4e00;
  }
  .date {
    font-size: 12px;
  }
  .price {
    font-size: 30px;
  }
  .red {
    color: #ff4e00;
  }
  
</style>

<script>
import Api from '@/api'
import moment from 'moment'
export default {
  mounted() {
    Api.post('/admin/coupon/list',{
      "shopid":1,//店铺id
      "type": "all",//优惠券类型，可选值为，"all","waitforstart","running","end"，分别对应全部，还未开始，进行中，结束
      "pagesize":5,//分页大小
      "page":1//当前页
    })
    .then(rs=>{
      console.log(rs)
      if(rs['error_response']){

      }else{
        this.allList = rs.coupons.map(el=>{
          el.startTime = moment(el.startTime).format('YYYY-MM-DD HH:mm')
          el.endTime = moment(el.endTime).format('YYYY-MM-DD HH:mm')
          return el
        })
      }
    })
  },
  data () {
    return {
      selected: "1",
      allList: []
    }
  },
  methods: {
    
  }

}
</script>

