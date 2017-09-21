<template>
  <div style="background-color: #eeeeee">
    <div style="height: 10px;background-color: #eeeeee;"></div>
    <div class="margin-bt15">
      <mt-cell is-link to="/mine/store">
        <div slot="title" class="store">
          <i class="iconfont icon-kxbshop2 yellow"></i>
          <div class="inline-block">
            <span>测试</span>
            <p class="cert">未认证</p>
          </div>
        </div>
        <i class="iconfont icon-weibiaoti10101"></i>
      </mt-cell>
      <mt-cell title="切换门店" is-link value="测试" to="/mine/store_list"></mt-cell>
    </div>
    <div style="margin-bottom: 15px;">
      <mt-cell is-link>
        <div slot="title">
          <i class="iconfont icon-my_fill_light yellow"></i>
          <span>账号设置</span>
        </div>
        <div>18282828282</div>
      </mt-cell>
      <mt-cell is-link>
        <div slot="title">
          <i class="iconfont icon-shouyinyuan yellow"></i>
          <span>收银员设置</span>
        </div>
      </mt-cell>
      <mt-cell is-link>
        <div slot="title">
          <i class="iconfont icon-shebei yellow"></i>
          <span>设备管理</span>
        </div>
      </mt-cell>
      <mt-cell is-link>
        <div slot="title">
          <i class="iconfont icon-creditlevelfilling yellow"></i>
          <span>高级服务</span>
        </div>
      </mt-cell>
    </div>
    <div style="margin-bottom: 15px;">
      <mt-cell is-link>
        <div slot="title">
          <i class="iconfont icon-newshotfill blue"></i>
          <span>收款方式</span>
        </div>
      </mt-cell>
      <mt-cell is-link>
        <div slot="title">
          <i class="iconfont icon-shezhi blue"></i>
          <span>收银设置</span>
        </div>
      </mt-cell>
      <mt-cell is-link>
        <div slot="title">
          <i class="iconfont icon-jifen blue"></i>
          <span>积分规则</span>
        </div>
      </mt-cell>
    </div>
    <div>
      <mt-cell is-link>
        <div slot="title">
          <i class="iconfont icon-liebiaoshitucaidan yellow"></i>
          <span>收银物料</span>
        </div>
      </mt-cell>
      <mt-cell is-link>
        <div slot="title">
          <i class="iconfont icon-like_fill blue"></i>
          <span>关于我们</span>
        </div>
      </mt-cell>
    </div>
  </div>
</template>

<script>
  import Api from '@/api'
  export default {
    mounted () {
      Api.post('/admin/login', {
        "phone": "13434242",
        "password": "1234fwaf"
      })
    },
    data () {
      return {
      }
    },
    methods: {

    }
  }
</script>
<style scoped>
  .store {
    padding: 10px 0;
    border-top: none;
  }
  .yellow {
    color: #dfa900;
  }
  .blue {
    color: #004adc;
  }
  .icon-kxbshop2 {
    font-size: 60px;
    vertical-align: middle;
  }
  .inline-block {
    margin-top: 8px;
    display: inline-block;
    vertical-align: top;
  }
  .cert {
    font-size: 12px;
    margin-top: 8px;
    padding: 2px 6px;
    border: 1px solid #ff4e00;
    border-radius: 5px;
    color: #ff4e00;
  }
</style>

