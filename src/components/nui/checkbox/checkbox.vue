<template>
  <el-checkbox v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-checkbox>
</template>

<script>
export default {
  name: "nui-checkbox",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped lang="scss">
</style>
