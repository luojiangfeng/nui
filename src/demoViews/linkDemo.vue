<template>
  <div class="page-main">
    <h2>Link 文字链接</h2>
    <div class="demo-block">
      <nui-link href="https://element.eleme.io" target="_blank"
        >默认链接</nui-link
      >
      <nui-link type="primary">主要链接</nui-link>
      <nui-link type="success">成功链接</nui-link>
      <nui-link type="warning">警告链接</nui-link>
      <nui-link type="danger">危险链接</nui-link>
      <nui-link type="info">信息链接</nui-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "DemoRadio",
  data() {
    return {
      input: ""
    }
  },
  created() {},
  mounted() {},
  methods: {
    changeRadio(val) {
      console.log(val)
    }
  }
}
</script>

<style scoped lang="scss">
/deep/ .el-row {
  margin-bottom: 20px;
}
</style>
