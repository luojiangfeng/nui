<template>
  <el-checkbox-group v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-checkbox-group>
</template>

<script>
export default {
  name: "nui-checkbox-group",
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
