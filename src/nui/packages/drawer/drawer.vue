<template>
  <el-drawer v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-drawer>
</template>

<script>
export default {
  name: "nui-drawer",
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
