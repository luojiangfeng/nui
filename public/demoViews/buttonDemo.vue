<template>
  <div class="page-main">
    <el-tabs v-model="activeTab" class="page-tab">
      <el-tab-pane label="文档" name="doc">
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
            <nui-button icon="el-icon-search" circle />
            <nui-button type="primary" icon="el-icon-edit" circle />
            <nui-button type="success" icon="el-icon-check" circle />
            <nui-button type="info" icon="el-icon-message" circle />
            <nui-button
              type="warning"
              icon="el-icon-star-off"
              circle
            />
            <nui-button type="danger" icon="el-icon-delete" circle />
          </nui-row>
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
                <td>wave</td>
                <td>点击时，是否有波动效果。</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
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
          url="demoViews/buttonDemo.vue"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'DemoButton',
  data() {
    return {
      activeTab: 'doc',
      input: ''
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
