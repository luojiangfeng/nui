<template>
  <el-main v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-main>
</template>

<script>
export default {
  name: "nui-main",
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
