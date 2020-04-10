import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./components/nuiRegister.js"
// import './assets/css/index.scss'
import * as filters from "./utils/filters" // global filters
import request from "./utils/request"

import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

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
