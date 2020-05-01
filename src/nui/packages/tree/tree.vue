<template>
  <el-tree
    ref="tree"
    v-bind="$attrs"
    v-on="$listeners"
    @check-change="checkChange"
  >
    <slot></slot>
  </el-tree>
</template>

<script>
export default {
  name: "nui-tree",
  props: {
    checkType: {
      type: String,
      default: "checkbox",
    },
  },
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    checkChange(data, checked, node) {
      if (this.checkType === "radio") {
        if (checked) {
          this.$refs.tree.setCheckedNodes([data])
        }
      }
    },
  },
}
</script>
<style scoped lang="scss"></style>
