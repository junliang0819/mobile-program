<template>
  <div>
    <mt-header title="新建优惠券">
      <router-link to="./" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <span slot="right" @click="save">保存</span>
    </mt-header>
    <section>
      <mt-field label="优惠券名称" placeholder="用优惠亮点，吸引顾客获取" v-model="name"></mt-field>
      <mt-field label="发放总量" type="number" placeholder="输入发放数量" v-model="total"></mt-field>
      <mt-field label="优惠面值" placeholder="设置每张券面值" v-model="price"></mt-field>
    </section>
    <section>
      <mt-field label="生效时间" type="date" placeholder="设置时间" v-model="start"></mt-field>
      <mt-field label="过期时间" type="date" placeholder="设置时间" v-model="end"></mt-field>
    </section>
    <section>
      <mt-field label="每人限领" placeholder="设置限领" v-model="limit"></mt-field>
    </section>
    <section>
      <mt-field label="到期前4天提醒客户一次">
        <mt-switch v-model="isMind"></mt-switch>
      </mt-field>
      <mt-field label="允许分享领取链接">
        <mt-switch v-model="canShare"></mt-switch>
      </mt-field>
      <mt-field label="使用说明" type="textarea" placeholder="输入活动的详细说明" v-model="info"></mt-field>
    </section>
  </div>  
</template>
<style scoped>
  
</style>

<script>
import Api from '@/api'
export default {
  data () {
    return {
      name: '',
      total: '',
      price: '',
      start: '',
      end: '',
      info: '',
      isMind: false,
      canShare: false
    }
  },
  methods: {
    save() {
      let data = {
        "shopid":1,
        "info":{
          "name": this.name,
          "type": "fix", //类型，优惠券金额是固定的 random优惠券金额是随机产生的
          "amount": this.total,  //优惠券总数
          "fixValue": this.price, //类型是fix，时候的优惠券面值,random时这个参数可不填
          "minRandomValue": null,//fix时候可不填，random，随机的最小值
          "maxRandomValue": null,//fix时候可不填，random，随机的最大值
          "totalValue": null,//fix时候可不填，random，随机总额，所有随机数加起来就是这个值，跟微信随机红包类似
          "needPickup": false,//是否需要领取，false不领取，用户也可以使用，true只有领取才有用
          "startTime": this.start,//优惠券生效开始时间
          "endTime": this.end,//优惠券生效最晚时间
          "minValue": 1.0,//优惠券使用的最低消费金额
          "desc": this.info
        }
      }
      Api.post('/admin/coupon/create',data)
      .then(rs=>{
        
      })
    }
  }

}
</script>

