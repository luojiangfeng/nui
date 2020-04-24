import Vue from "vue"
import Element from "element-ui"
// import "@/assets/css/element-variables.scss"
Vue.use(Element)
// 全局自动注册nui的基础组件
const requireComponent = require.context("./packages", true, /\.vue$/)

// 找到组件文件夹下以.vue命名的文件，如果文件名为index，那么取组件中的name作为注册的组件名
requireComponent.keys().forEach((filePath) => {
  const componentConfig = requireComponent(filePath)
  const componentName = componentConfig.default.name

  Vue.component(componentName, componentConfig.default || componentConfig)
})
