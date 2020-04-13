<template>
  <el-tab-pane v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-tab-pane>
</template>

<script>
export default {
  name: "nui-tab-pane",
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
