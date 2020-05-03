<template>
  <el-tabs v-bind="$attrs" v-on="$listeners">
    <slot></slot>
    <!-- <el-tab-pane
      v-for="(tab, index) in tabs"
      :key="index"
      :label="tab.label"
      :name="tab.name"
      :disabled="tab.disabled"
      :closable="tab.closable"
      :lazy="tab.lazy"
    ></el-tab-pane> -->
  </el-tabs>
</template>

<script>
export default {
  name: "nui-tabs",
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
