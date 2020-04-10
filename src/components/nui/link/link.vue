<template>
  <el-link v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-link>
</template>

<script>
export default {
  name: "nui-link",
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
