<template>
  <el-row v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-row>
</template>

<script>
export default {
  name: "nui-row",
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
