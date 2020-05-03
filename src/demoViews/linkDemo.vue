<template>
  <div class="page-main">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
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
        <article class="intro-list">
          <h3>Link Attributes</h3>
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
                <td>—</td>
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
          url="demoViews/linkDemo.vue"
        ></show-code>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "DemoLink",
  data() {
    return {
      activeTab: "doc",
      input: "",
    }
  },
  created() {},
  mounted() {},
  methods: {
    changeRadio(val) {
      console.log(val)
    },
  },
}
</script>

<style scoped lang="scss">
/deep/ .el-row {
  margin-bottom: 20px;
}
</style>
