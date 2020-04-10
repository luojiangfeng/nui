<template>
  <div class="page-main">
    <h2>Dialog 对话框</h2>
    <div class="demo-block">
      <nui-button type="text" @click="dialogVisible = true"
        >点击打开 Dialog</nui-button
      >

      <nui-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
      >
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
          <nui-button @click="dialogVisible = false">取 消</nui-button>
          <nui-button type="primary" @click="dialogVisible = false"
            >确 定</nui-button
          >
        </span>
      </nui-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods: {
    handleClose(done) {
      done()
      // this.$confirm("确认关闭？")
      //   .then((_) => {
      //     done()
      //   })
      //   .catch((_) => {})
    },
  },
}
</script>

<style scoped lang="scss">
/deep/ .el-row {
  margin-bottom: 20px;
}
</style>
