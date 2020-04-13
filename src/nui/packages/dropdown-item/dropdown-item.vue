<template>
  <el-dropdown-item v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-dropdown-item>
</template>

<script>
export default {
  name: "nui-dropdown-item",
  props: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style scoped lang="scss"></style>
