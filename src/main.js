// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/reset.css'
import router from './router'
// import axios from 'axios'
// Vue.prototype.$http = axios
// 自己写的插件代替axios
import MyServerHttp from '@/plugins/http.js'
import MyBread from '@/components/public/myBread.vue'

import moment from 'moment'

// 使用插件必须用use
Vue.use(ElementUI)
Vue.use(MyServerHttp)

Vue.config.productionTip = false
// 全局过滤器 处理日期格式
Vue.filter('fmtdate', (v) => {
  return moment(v).format('YYYY--MM--DD')
})
// 自定义全局组件
Vue.component(MyBread.name, MyBread)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
