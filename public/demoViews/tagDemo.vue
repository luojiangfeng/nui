<template>
  <div class="page-main">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
        <h2>Tag 标签</h2>
        <div class="demo-block">
          <nui-tag>标签一</nui-tag>
          <nui-tag type="success">标签二</nui-tag>
          <nui-tag type="info">标签三</nui-tag>
          <nui-tag type="warning">标签四</nui-tag>
          <nui-tag type="danger">标签五</nui-tag>
        </div>

        <article class="intro-list">
          <h3>Tag Attributes</h3>
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
          url="demoViews/tagDemo.vue"
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
.el-tag {
  margin-right: 20px;
}
</style>
