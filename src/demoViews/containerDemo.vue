<template>
  <div class="page-main">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
        <h2>Container 布局容器</h2>
        <div class="demo-block">
          <nui-container>
            <nui-header>Header</nui-header>
            <nui-main>Main</nui-main>
          </nui-container>

          <nui-container>
            <nui-header>Header</nui-header>
            <nui-main>Main</nui-main>
            <nui-footer>Footer</nui-footer>
          </nui-container>

          <nui-container>
            <nui-aside width="200px">Aside</nui-aside>
            <nui-main>Main</nui-main>
          </nui-container>

          <nui-container>
            <nui-header>Header</nui-header>
            <nui-container>
              <nui-aside width="200px">Aside</nui-aside>
              <nui-main>Main</nui-main>
            </nui-container>
          </nui-container>

          <nui-container>
            <nui-header>Header</nui-header>
            <nui-container>
              <nui-aside width="200px">Aside</nui-aside>
              <nui-container>
                <nui-main>Main</nui-main>
                <nui-footer>Footer</nui-footer>
              </nui-container>
            </nui-container>
          </nui-container>

          <nui-container>
            <nui-aside width="200px">Aside</nui-aside>
            <nui-container>
              <nui-header>Header</nui-header>
              <nui-main>Main</nui-main>
            </nui-container>
          </nui-container>

          <nui-container>
            <nui-aside width="200px">Aside</nui-aside>
            <nui-container>
              <nui-header>Header</nui-header>
              <nui-main>Main</nui-main>
              <nui-footer>Footer</nui-footer>
            </nui-container>
          </nui-container>
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
          url="demoViews/containerDemo.vue"
        ></show-code>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "DemoContainer",
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
/deep/ .el-header,
/deep/ .el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

/deep/.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

/deep/.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.demo-block > /deep/.el-container {
  margin-bottom: 40px;
}

/deep/.el-container:nth-child(5) .el-aside,
/deep/.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

/deep/.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
