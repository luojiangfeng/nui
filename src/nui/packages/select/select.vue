<template>
  <div :id="id" class="select-wrap">
    <el-select
      v-bind="$attrs"
      :url="innerUrl"
      :style="{ width: width }"
      v-on="$listeners"
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
          />
        </el-option-group>
      </template>

      <el-option
        v-for="item in innerOptions"
        v-else
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script>
import { randomChar } from '../../utils.js'

export default {
  name: 'NuiSelect',
  props: {
    width: {
      type: String,
      default: '100%'
    },
    url: {
      type: String
    },
    valueName: {
      type: String,
      default: 'value'
    },
    labelName: {
      type: String,
      default: 'label'
    },
    options: {
      type: Array,
      default: () => []
    },
    groupOptions: {
      type: Array,
      default: () => []
    },
    changeWidth: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      id: '',
      innerOptions: this.options
    }
  },
  computed: {
    innerUrl() {
      if (this.url) {
        this.$http
          .get(this.url)
          .then((res) => {
            const resArr = res.data

            const resOptions = resArr.map((item) => {
              const obj = item
              obj.label = item[this.labelName]
              obj.value = item[this.valueName]
              return obj
            })

            this.innerOptions = resOptions

            // let dom = document.getElementById(this.id)
            // let inputDom = dom.querySelectorAll('input')[0]

            // console.log(resOptions)

            // inputDom.value = '78879'
            // inputDom.setAttribute('aaaaa', 'button')
          })
          .catch((err) => {})
      } else {
        this.innerOptions = this.options
      }
      return this.url
    }
  },
  created() {
    this.id = 'select' + randomChar(20)
  },
  mounted() {},
  methods: {
    selectChange(val) {
      if (this.changeWidth) {
        let label = ''

        if (val != '' || val != undefined) {
          for (let i = 0; i < this.innerOptions.length; i++) {
            const item = this.innerOptions[i]
            if (item.value === val) {
              label = item.label
            }
          }
        }

        const dom = document.getElementById(this.id)

        this.autoInputWidth(dom, 50, label)
      }

      const valData = this.innerOptions.filter((item) => {
        return item[this.valueName] === val
      })

      this.$emit('nui-change', valData[0])
    },
    autoInputWidth(dom, baseW, val) {
      const _val = val
      const _baseW = baseW || 6
      const inputDom = dom.querySelectorAll('input')[0]
      const inputDomParent = inputDom.parentNode
      const selectDom = dom.querySelectorAll('.el-select')[0]

      let createSpanDom = inputDomParent.querySelectorAll(
        '.span-input-hidden'
      )[0]

      if (createSpanDom !== undefined) {
        createSpanDom.parentNode.removeChild(createSpanDom)
      }

      const spanHTML =
        '<span class="span-input-hidden" style="position: absolute;z-index: -10000;left:-8000px">' +
        _val +
        '</span>'

      inputDomParent.insertAdjacentHTML('beforeEnd', spanHTML)

      createSpanDom = inputDomParent.querySelectorAll('.span-input-hidden')[0]

      const resultW = createSpanDom.offsetWidth + _baseW

      if (_val == '') {
        selectDom.style.width = this.width ? this.width : '100%'
      } else {
        selectDom.style.width = resultW + 'px'
      }
    }
  }
}
</script>
<style scoped lang="scss"></style>
