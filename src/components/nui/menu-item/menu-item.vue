<template>
  <el-menu-item v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-menu-item>
</template>

<script>
export default {
  name: "nui-menu-item",
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
