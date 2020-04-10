<template>
  <el-transfer v-bind="$attrs" v-on="$listeners" :style="{ width: width }">
    <slot></slot>
  </el-transfer>
</template>

<script>
export default {
  name: "nui-transfer",
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
