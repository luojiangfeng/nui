<template>
  <el-input-number v-bind="$attrs" v-on="$listeners" :style="{ width: width }">
    <slot></slot>
  </el-input-number>
</template>

<script>
export default {
  name: "nui-input-number",
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
