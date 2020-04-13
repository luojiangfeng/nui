<template>
  <div class="page-main">
    <h2>Button 按钮</h2>
    <div class="demo-block">
      <nui-row>
        <nui-button>默认按钮</nui-button>
        <nui-button type="primary">主要按钮</nui-button>
        <nui-button type="success">成功按钮</nui-button>
        <nui-button type="info">信息按钮</nui-button>
        <nui-button type="warning">警告按钮</nui-button>
        <nui-button type="danger">危险按钮</nui-button>
      </nui-row>

      <nui-row>
        <nui-button plain>朴素按钮</nui-button>
        <nui-button type="primary" plain>主要按钮</nui-button>
        <nui-button type="success" plain>成功按钮</nui-button>
        <nui-button type="info" plain>信息按钮</nui-button>
        <nui-button type="warning" plain>警告按钮</nui-button>
        <nui-button type="danger" plain>危险按钮</nui-button>
      </nui-row>

      <nui-row>
        <nui-button round>圆角按钮</nui-button>
        <nui-button type="primary" round>主要按钮</nui-button>
        <nui-button type="success" round>成功按钮</nui-button>
        <nui-button type="info" round>信息按钮</nui-button>
        <nui-button type="warning" round>警告按钮</nui-button>
        <nui-button type="danger" round>危险按钮</nui-button>
      </nui-row>

      <nui-row>
        <nui-button icon="el-icon-search" circle></nui-button>
        <nui-button type="primary" icon="el-icon-edit" circle></nui-button>
        <nui-button type="success" icon="el-icon-check" circle></nui-button>
        <nui-button type="info" icon="el-icon-message" circle></nui-button>
        <nui-button type="warning" icon="el-icon-star-off" circle></nui-button>
        <nui-button type="danger" icon="el-icon-delete" circle></nui-button>
      </nui-row>
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
