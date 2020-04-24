<template>
  <div class="page-main">
    <h2>Tag 标签</h2>
    <div class="demo-block">
      <nui-tag>标签一</nui-tag>
      <nui-tag type="success">标签二</nui-tag>
      <nui-tag type="info">标签三</nui-tag>
      <nui-tag type="warning">标签四</nui-tag>
      <nui-tag type="danger">标签五</nui-tag>
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
.el-tag {
  margin-right: 20px;
}
</style>
