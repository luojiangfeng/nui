<template>
  <div :id="id" class="cascader-wrap">
    <el-cascader
      v-bind="$attrs"
      v-on="$listeners"
      :style="{ width: width }"
      @change="selectChange"
    >
      <slot></slot>
    </el-cascader>
  </div>
</template>

<script>
import { randomChar } from "../../utils.js"
export default {
  name: "nui-cascader",
  props: {
    width: {
      type: String,
    },
    changeWidth: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      id: "",
    }
  },
  computed: {},
  created() {
    this.id = "cascader" + randomChar(20)
  },
  mounted() {},
  methods: {
    selectChange(val) {
      let that = this
      if (this.changeWidth) {
        let label = ""

        let dom = document.getElementById(this.id)

        setTimeout(() => {
          label = dom.querySelectorAll("input")[0].value
          that.autoInputWidth(dom, 50, label)
        }, 0)
      }
    },
    autoInputWidth(dom, baseW, val) {
      let _val = val
      let _baseW = baseW || 6
      let inputDom = dom.querySelectorAll("input")[0]
      let inputDomParent = inputDom.parentNode
      let cascaderDom = dom.querySelectorAll(".el-cascader")[0]

      let createSpanDom = inputDomParent.querySelectorAll(
        ".span-input-hidden"
      )[0]

      if (createSpanDom !== undefined) {
        createSpanDom.parentNode.removeChild(createSpanDom)
      }

      let spanHTML =
        '<span class="span-input-hidden" style="position: absolute;z-index: -10000;left:-8000px">' +
        _val +
        "</span>"

      inputDomParent.insertAdjacentHTML("beforeEnd", spanHTML)

      createSpanDom = inputDomParent.querySelectorAll(".span-input-hidden")[0]

      let resultW = createSpanDom.offsetWidth + _baseW

      if (_val == "") {
        cascaderDom.style.width = this.width ? this.width : "100%"
      } else {
        cascaderDom.style.width = resultW + "px"
      }
    },
  },
}
</script>
<style scoped lang="scss"></style>
