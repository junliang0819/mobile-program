// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/font_404119_cl5py42rpqk0rudi/iconfont.css'
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Mint)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
