<template>
  <el-upload v-bind="$attrs" v-on="$listeners" :style="{ width: width }">
    <slot></slot>
  </el-upload>
</template>

<script>
export default {
  name: "nui-upload",
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
