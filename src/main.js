import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css' // 引入第三方包里的某个css文件
import axios from 'axios'
// 2. 基础地址
axios.defaults.baseURL = 'https://applet-base-api-t.itheima.net'
// 3. axios方法添加到Vue的原型上
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
