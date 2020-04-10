<template>
  <el-time-select v-bind="$attrs" v-on="$listeners" :style="{ width: width }">
    <slot></slot>
  </el-time-select>
</template>

<script>
export default {
  name: "nui-time-select",
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
