<template>
  <div style="background-color: #eeeeee">
    <mt-header title="新增门店">
      <router-link to="./" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link v-on:click="addStore" to="/mine/store_list/store_add" slot="right">
        保存
      </router-link>
    </mt-header>
    <div class="margin-bt15">
      <mt-cell is-link to="/mine/store">
        <div slot="title" class="store">
          <div class="inline-block">
            <span>门店LOGO</span>
          </div>
        </div>
        <i class="iconfont icon-kxbshop2"></i>
      </mt-cell>
      <mt-cell is-link>
        <div slot="title">
          <span>门店名称</span>
        </div>
        <span>测试</span>
      </mt-cell>
      <mt-cell is-link>
        <div slot="title">
          <span>门店认证</span>
        </div>
        <span>未认证</span>
      </mt-cell>
      <mt-cell is-link>
        <div slot="title">
          <span>门店台卡</span>
        </div>
        <i class="iconfont icon-weibiaoti10101"></i>
      </mt-cell>
    </div>
    <div class="margin-bt15">
      <mt-cell is-link>
        <div slot="title">
          <span>绑定的网店</span>
        </div>
      </mt-cell>
    </div>
    <div class="margin-bt15">
      <mt-cell to="/mine">
        <div slot="title" class="border-none">
          <span>门店地址</span>
        </div>
      </mt-cell>
      <mt-cell>
        <div slot="title" class="border-none">
          <span @click="open" class="address">{{ address }}</span>
        </div>
      </mt-cell>

      <mt-popup v-model="visible" position="bottom" class="mint-datetime">
        <mt-picker
          :slots="addressSlots"
          @change="onAddressChange"
          :visible-item-count="5"
          class="mint-datetime-picker"
          ref="picker"
          v-model="value"
          show-toolbar>
          <span class="mint-datetime-action mint-datetime-cancel" @click="visible = false;$emit('cancel')">取消</span>
          <span class="mint-datetime-action mint-datetime-confirm" @click="confirm">确定</span>
        </mt-picker>
      </mt-popup>
    </div>
    <div class="margin-bt15">
      <mt-cell>
        <div slot="title">
          <span>门店主营商品类目</span>
        </div>
        <span>餐饮外卖</span>
      </mt-cell>
      <mt-cell is-link>
        <div slot="title">
          <span>设置微信公众号</span>
        </div>
      </mt-cell>
    </div>
    <div>
      <mt-cell is-link>
        <div slot="title">
          <span>同步卡卷至微信卡包</span>
        </div>
      </mt-cell>
    </div>
  </div>
</template>

<style scoped>
  .border-none {
    border: none;
  }
  .address {
    color: #888;
  }
  .margin-bt15 {
    margin-bottom: 15px;
  }
  .store {
    padding: 5px 0 10px;
    border-top: none;
  }
  .icon-kxbshop2 {
    margin-top: 5px;
    font-size: 60px;
    vertical-align: middle;
    color: #dfc47d;
  }
  .inline-block {
    margin-top: 8px;
    display: inline-block;
    vertical-align: top;
  }
</style>
<script>
  import s from './address3.json'
  export default {
    data () {
      return {
        value: null,
        visible: false,
        companyName: '',
        addressSlots: [
          {
            flex: 1,
            defaultIndex: 1,
            values: Object.keys(s),
            className: 'slot1',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: [],
            className: 'slot3',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot4'
          }, {
            flex: 1,
            values: [],
            className: 'slot5',
            textAlign: 'center'
          }
        ],
        address: '北京市 市辖区 东城区',
        addressProvince: '省',
        addressCity: '市',
        addressXian: '区'
      }
    },
    methods: {
      addStore () {
        Api.post('/admin/shopmgr/create').then(rs => {
          if(!rs.error_response){
            this.storeList = rs.shoplist
          }
        })
      },
      confirm () {
        this.visible = false
        this.address = this.addressProvince + ' ' + this.addressCity + ' ' + this.addressXian
      },
      onAddressChange (picker, values) {
        let shi = Object.keys(s[values[0]])
        let index = shi.indexOf(values[1])
        let xian = s[values[0]][shi[index]]
        picker.setSlotValues(1, shi)
        this.addressProvince = values[0]
        this.addressCity = values[1]
        this.addressXian = values[2]
        picker.setSlotValues(2, xian)
      }
    },
    mounted () {
      this.$nextTick(() => {
        setTimeout(() => {
          this.addressSlots[0].defaultIndex = 0
        }, 100)
      })
    }
  }
</script>

