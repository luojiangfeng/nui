<template>
  <el-progress v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-progress>
</template>

<script>
export default {
  name: "nui-progress",
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
