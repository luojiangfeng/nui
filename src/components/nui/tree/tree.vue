<template>
  <el-tree v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-tree>
</template>

<script>
export default {
  name: "nui-tree",
  props: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
