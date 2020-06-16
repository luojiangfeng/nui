<template>
  <el-input
    v-if="type === 'number'"
    ref="input"
    v-enter-number
    class="nui-number-input"
    :class="hideArrow ? 'hide-arrow' : ''"
    :clearable="clearable"
    v-bind="$attrs"
    :type="type"
    onkeyup="this.value=this.value.replace(/[\u4e00-\u9fa5]/g,'')"
    :style="{ width: width }"
    v-on="$listeners"
    @clear="clearFun"
  >
    <slot />
  </el-input>

  <el-input
    v-else
    ref="input"
    :clearable="clearable"
    v-bind="$attrs"
    :type="type"
    :style="{ width: width }"
    v-on="$listeners"
    @clear="clearFun"
  >
    <slot />
  </el-input>
</template>

<script>
export default {
  name: 'NuiInput',
  directives: {
    enterNumber: {
      inserted: function(el, binding, vnode) {
        const that = vnode.componentInstance

        el.addEventListener('keypress', function(e) {
          e = e || window.event

          const charcode = typeof e.charCode === 'number' ? e.charCode : e.keyCode
          const re = /\d/

          // 解决输入e时，Vue绑定值丢失的浏览器BUG
          setTimeout(() => {
            that.$emit('input', this.querySelector('input').value)
          }, 0)

          if (
            !re.test(String.fromCharCode(charcode)) &&
            charcode > 9 &&
            !e.ctrlKey
          ) {
            if (e.preventDefault) {
              e.preventDefault()
            } else {
              e.returnValue = false
            }
          }
        })
      }
    }
  },
  props: {
    width: {
      type: String
    },
    type: {
      type: String
    },
    hideArrow: {
      type: Boolean,
      default: true
    },
    clearable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    clearFun() {
      this.$refs['input'].focus()
    }
  }
}
</script>
<style scoped lang="scss">
.hide-arrow /deep/input::-webkit-outer-spin-button,
.hide-arrow /deep/input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.hide-arrow /deep/input[type='number'] {
  -moz-appearance: textfield;
}

.nui-number-input /deep/input[type='number'] {
  -webkit-ime-mode: disabled;
  ime-mode: disabled;
}
</style>
