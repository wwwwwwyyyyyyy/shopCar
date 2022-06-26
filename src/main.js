import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css' // 引入第三方包里的某个css文件

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
