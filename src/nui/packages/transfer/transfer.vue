<template>
  <div :id="id" class="transfer-wrap">
    <el-transfer
      v-bind="$attrs"
      v-on="$listeners"
      :url="innerUrl"
      :titles="titles"
      :data="innerData"
      @change="changeFunc"
      :style="{ width: innerWidth, margin: center ? '0 auto' : '' }"
    >
      <slot></slot>
    </el-transfer>
  </div>
</template>

<script>
import { randomChar } from '../../utils.js'
export default {
  name: 'nui-transfer',
  props: {
    url: {
      type: String,
    },
    valueName: {
      type: String,
    },
    labelName: {
      type: String,
    },
    callback: {
      type: Function,
    },
    data: {
      type: Array,
    },
    width: {
      type: String,
    },
    panelWidth: {
      type: String,
    },
    center: {
      type: Boolean,
      default: false,
    },
    titles: {
      type: Array,
      default: () => ['源列表', '目标列表'],
    },
  },
  data() {
    return {
      id: '',
      innerWidth: this.width,
      innerData: this.data,
    }
  },
  computed: {
    innerUrl() {
      if (this.url) {
        this.$http
          .get(this.url)
          .then((res) => {
            let resArr = res.data

            let resDataFormat = resArr.map((item) => {
              let obj = {}
              obj.label = item[this.labelName]
              obj.key = item[this.valueName]
              return obj
            })

            this.innerData = resDataFormat
            typeof this.callback === 'function' && this.callback(this.innerData)
          })
          .catch((err) => {})
      } else {
        this.innerData = this.data
      }
      return this.url
    },
  },
  created() {
    this.id = 'transfer' + randomChar(20)
  },
  mounted() {
    let dom = document.getElementById(this.id)
    let pannelArr = dom.querySelectorAll('.el-transfer-panel')
    let midButtons = dom.querySelectorAll('.el-transfer__buttons')[0]

    if (this.panelWidth) {
      for (let i = 0; i < pannelArr.length; i++) {
        const element = pannelArr[i]
        element.style.width = this.panelWidth
      }
    }

    if (!this.width) {
      //midButtons会抖动一下，直接获取宽度比真实的小，先给默认值182.再用定时器计算真实大小
      this.innerWidth = pannelArr[0].offsetWidth * pannelArr.length + 182 + 'px'
      setTimeout(() => {
        this.innerWidth =
          pannelArr[0].offsetWidth * pannelArr.length +
          midButtons.offsetWidth +
          'px'
      }, 200)
    }
  },
  methods: {
    changeFunc(val) {
      let valArr = this.innerData.filter((item) => {
        return val.includes(item.key)
      })

      this.$emit('nui-change', valArr)
    },
  },
}
</script>
<style scoped lang="scss"></style>
