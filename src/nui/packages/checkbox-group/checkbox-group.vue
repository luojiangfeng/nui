<template>
  <el-checkbox-group v-bind="$attrs" v-on="$listeners" :url="innerUrl">
    <slot></slot>

    <template v-for="item in innerOptions">
      <el-checkbox
        v-if="typeof item === 'object'"
        :label="item.value"
        :key="item.value"
        >{{ item.label }}</el-checkbox
      >

      <el-checkbox v-if="typeof item === 'string'" :label="item" :key="item">{{
        item
      }}</el-checkbox>
    </template>
  </el-checkbox-group>
</template>

<script>
export default {
  name: 'nui-checkbox-group',
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
  computed: {
    innerUrl() {
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

            this.innerOptions = resOptions
          })
          .catch((err) => {})
      } else {
        this.innerOptions = this.options
      }
      return this.url
    },
  },
  created() {
    // if (this.url) {
    //   this.$http
    //     .get(this.url)
    //     .then((res) => {
    //       let resArr = res.data
    //       let resOptions = resArr.map((item) => {
    //         let obj = {}
    //         obj.label = item[this.labelName]
    //         obj.value = item[this.valueName]
    //         return obj
    //       })
    //       this.innerOptions = resOptions
    //     })
    //     .catch((err) => {})
    // }
  },
  mounted() {},
  methods: {},
}
</script>
<style scoped lang="scss">
// /deep/.el-checkbox {
//   margin-top: 10px;
//   margin-bottom: 10px;
// }
</style>
