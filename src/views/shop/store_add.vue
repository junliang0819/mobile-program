<template>
  <div>
    <mt-header title="新增商品">
      <router-link to="./" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <span slot="right" @click="save">保存</span>
    </mt-header>
    <section>
      <mt-field label="商品名称" placeholder="请输入商品名称" v-model="name"></mt-field>
      <mt-field label="商品描述" placeholder="请输入商品描述" v-model="desc"></mt-field>
    </section>
    <section>
      <mt-cell title="设置规格" is-link to="/cash/goods/add/set"></mt-cell>
    </section>
    <section>
      <mt-field label="可获取点数" placeholder="请输入用户分享可获取点数" v-model="share"></mt-field>
      <mt-field label="商品详细信息" placeholder="请输入商品详细信息" type="textarea" rows="3" v-model="info"></mt-field>
    </section>
    <mt-cell>
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
</template>
<style lang="less" scoped>
  section {
    margin-bottom: 20px;
  }
</style>

<script>
import Api from '@/api'
import { MessageBox } from 'mint-ui'
import s from './address3.json'
export default {
  mounted () {
  },
  data () {
    return {
      name: '',
      desc: '',
      share: '',
      info: '',
      isSale: true,
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
    open () {
      this.visible = true
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

