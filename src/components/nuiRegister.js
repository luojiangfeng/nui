import Vue from "vue"
import Element from "element-ui"
import "@/assets/css/element-variables.scss"
Vue.use(Element)
// 全局自动注册nui下的基础组件
const requireComponent = require.context("./nui", true, /\.vue$/)

// 找到组件文件夹下以.vue命名的文件，如果文件名为index，那么取组件中的name作为注册的组件名
requireComponent.keys().forEach(filePath => {
  const componentConfig = requireComponent(filePath)
  const componentName = componentConfig.default.name

  Vue.component(componentName, componentConfig.default || componentConfig)
})

/**
 * 首字母大写
 * @param str 字符串
 * @example heheHaha
 * @return {string} HeheHaha
 */
function capitalizeFirstLetter(str) {
  return str && str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * 对符合'xx/xx.vue'组件格式的组件取组件名
 * @param str fileName
 * @example abc/bcd/def/basicTable.vue
 * @return {string} BasicTable
 */
function validateFileName(str) {
  return (
    /^\S+\.vue$/.test(str) &&
    str.replace(/^\S+\/(\w+)\.vue$/, (rs, $1) => capitalizeFirstLetter($1))
  )
}
