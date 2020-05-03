<template>
  <div class="page-main">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
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
        <article class="intro-list">
          <h3>Table Attributes</h3>
          <table>
            <thead>
              <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td>object</td>
                <td>—</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>

          <h6>
            注：一般情况下只列出与elementUI不同的属性。其他elementUI的原生属性都可以正常使用，不再专门列出。
          </h6>
        </article>
      </el-tab-pane>
      <el-tab-pane label="查看代码" name="code">
        <show-code
          v-if="activeTab == 'code'"
          url="demoViews/dialogDemo.vue"
        ></show-code>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "doc",
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
