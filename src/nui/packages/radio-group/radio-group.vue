<template>
  <el-radio-group v-bind="$attrs" v-on="$listeners">
    <slot></slot>
    <el-radio
      v-for="item in innerOptions"
      :label="item.value"
      :key="item.value"
      >{{ item.label }}</el-radio
    >
  </el-radio-group>
</template>

<script>
export default {
  name: 'nui-radio-group',
  props: {
    url: {
      type: String,
    },
    valueName: {
      type: String,
      default: 'value',
    },
    labelName: {
      type: String,
      default: 'label',
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      innerOptions: this.options,
    }
  },
  computed: {},
  created() {
    if (this.url) {
      this.$http
        .get(this.url)
        .then((res) => {
          let resArr = res.data

          let resOptions = resArr.map((item) => {
            let obj = {}
            obj.label = item[this.labelName]
            obj.value = item[this.valueName]
            return obj
          })

          // resOptions.length = 3

          this.innerOptions = resOptions
        })
        .catch((err) => {})
    }
  },
  mounted() {},
  methods: {},
}
</script>
<style scoped lang="scss">
// /deep/.el-radio {
//   margin-top: 8px;
//   margin-bottom: 4px;
// }
</style>
