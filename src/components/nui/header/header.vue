<template>
  <el-header v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-header>
</template>

<script>
export default {
  name: "nui-header",
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
