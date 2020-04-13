<template>
  <div :id="id" class="select-wrap">
    <el-select
      v-bind="$attrs"
      v-on="$listeners"
      :style="{ width: width }"
      @change="selectChange"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
      <!-- <span class="test">112222222221</span> -->
    </el-select>
  </div>
</template>

<script>
export default {
  name: "nui-select",
  props: {
    width: {
      type: String,
      default: "100%",
    },
    options: {
      type: Array,
      default: [],
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
    this.id = "select" + this.randomChar(20)
  },
  mounted() {},
  methods: {
    selectChange(val) {
      if (this.changeWidth) {
        let label = ""

        if (val != "" || val != undefined) {
          for (let i = 0; i < this.options.length; i++) {
            const item = this.options[i]
            if (item.value === val) {
              label = item.label
            }
          }
        }

        let dom = document.getElementById(this.id)

        this.autoInputWidth(dom, 50, label)
      }
    },
    randomChar(l) {
      let x = "123456789poiuytrewqasdfghjklmnbvcxzQWERTYUIPLKJHGFDSAZXCVBNM"
      let tmp = ""
      for (let i = 0; i < l; i++) {
        tmp += x.charAt(Math.ceil(Math.random() * 10000000000) % x.length)
      }
      return tmp
    },
    autoInputWidth(dom, baseW, val) {
      let _val = val
      let _baseW = baseW || 6
      let inputDom = dom.querySelectorAll("input")[0]
      let inputDomParent = inputDom.parentNode
      let selectDom = dom.querySelectorAll(".el-select")[0]

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
        selectDom.style.width = this.width ? this.width : "100%"
      } else {
        selectDom.style.width = resultW + "px"
      }
    },
  },
}
</script>
<style scoped lang="scss"></style>
