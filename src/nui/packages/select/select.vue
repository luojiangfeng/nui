<template>
  <div :id="id" class="select-wrap">
    <el-select
      v-bind="$attrs"
      v-on="$listeners"
      :style="{ width: width }"
      @change="selectChange"
    >
      <template v-if="groupOptions.length > 0">
        <el-option-group
          v-for="group in groupOptions"
          :key="group.label"
          :label="group.label"
        >
          <el-option
            v-for="item in group.options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-option-group>
      </template>

      <el-option
        v-else
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import { randomChar } from "../../utils.js"

export default {
  name: "nui-select",
  props: {
    width: {
      type: String,
      default: "100%",
    },
    options: {
      type: Array,
      default: () => [],
    },
    groupOptions: {
      type: Array,
      default: () => [],
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
    this.id = "select" + randomChar(20)

    console.log(this.groupOptions)
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
