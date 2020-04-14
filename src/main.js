import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./nui/nuiRegister.js" //全局注册nui组件
import * as filters from "./utils/filters" // 全局 filters
import request from "./utils/request" //封装的axios请求

import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

import "./assets/styles/common.scss" // 全局样式

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.$http = request
// 过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
