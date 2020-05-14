<template>
  <el-dropdown-menu v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-dropdown-menu>
</template>

<script>
export default {
  name: "nui-dropdown-menu",
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
