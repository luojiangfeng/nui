<template>
  <el-col v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-col>
</template>

<script>
export default {
  name: "nui-col",
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
