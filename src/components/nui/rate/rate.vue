<template>
  <el-rate v-bind="$attrs" v-on="$listeners" :style="{ width: width }">
    <slot></slot>
  </el-rate>
</template>

<script>
export default {
  name: "nui-rate",
  props: {
    width: {
      type: String
    }
  },
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
