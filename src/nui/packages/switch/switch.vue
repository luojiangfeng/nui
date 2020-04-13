<template>
  <el-switch v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-switch>
</template>

<script>
export default {
  name: "nui-switch",
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
