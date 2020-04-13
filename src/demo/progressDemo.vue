<template>
  <div class="page-main">
    <h2>Progress 进度条</h2>
    <div class="demo-block">
      <nui-progress :percentage="50"></nui-progress>
      <nui-progress :percentage="100" :format="format"></nui-progress>
      <nui-progress :percentage="100" status="success"></nui-progress>
      <nui-progress :percentage="100" status="warning"></nui-progress>
      <nui-progress :percentage="50" status="exception"></nui-progress>
    </div>
  </div>
</template>

<script>
export default {
  name: "DemoRadio",
  data() {
    return {
      input: "",
    }
  },
  created() {},
  mounted() {},
  methods: {
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`
    },
  },
}
</script>

<style scoped lang="scss">
/deep/ .test-col {
  color: green;
}
</style>
