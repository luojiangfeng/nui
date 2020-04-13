<template>
  <el-slider v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-slider>
</template>

<script>
export default {
  name: "nui-slider",
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
