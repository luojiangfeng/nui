<template>
  <el-checkbox-button v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-checkbox-button>
</template>

<script>
export default {
  name: "nui-checkbox-button",
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
