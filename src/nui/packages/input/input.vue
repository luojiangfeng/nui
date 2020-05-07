<template>
  <el-input
    v-if="type === 'number'"
    class="nui-number-input"
    :class="hideArrow ? 'hide-arrow' : ''"
    :clearable="clearable"
    v-bind="$attrs"
    v-on="$listeners"
    :type="type"
    v-enter-number
    onkeyup="this.value=this.value.replace(/[\u4e00-\u9fa5]/g,'')"
    :style="{ width: width }"
  >
    <slot></slot>
  </el-input>

  <el-input
    v-else
    :clearable="clearable"
    v-bind="$attrs"
    v-on="$listeners"
    :type="type"
    :style="{ width: width }"
  >
    <slot></slot>
  </el-input>
</template>

<script>
export default {
  name: 'nui-input',
  props: {
    width: {
      type: String,
    },
    type: {
      type: String,
    },
    hideArrow: {
      type: Boolean,
      default: true,
    },
    clearable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {}
  },
  computed: {},
  directives: {
    enterNumber: {
      inserted: function(el) {
        el.addEventListener('keypress', function(e) {
          e = e || window.event

          let charcode = typeof e.charCode === 'number' ? e.charCode : e.keyCode
          let re = /\d/

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
      },
    },
  },
  created() {},
  mounted() {},
  methods: {},
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
