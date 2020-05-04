<template>
  <el-upload v-bind="$attrs" v-on="$listeners" :style="{ width: width }">
    <slot></slot>
    <slot name="tip" slot="tip"></slot>
    <slot name="trigger" slot="trigger"></slot>
  </el-upload>
</template>

<script>
export default {
  name: "nui-upload",
  props: {
    width: {
      type: String,
    },
  },
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
