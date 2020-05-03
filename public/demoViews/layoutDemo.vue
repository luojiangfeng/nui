<template>
  <div class="page-main">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
        <h2>Layout 布局</h2>
        <h3>nui-row和nui-col</h3>
        <div class="demo-block">
          <nui-row>
            <nui-col :span="24"
              ><div class="grid-content bg-purple-dark"></div
            ></nui-col>
          </nui-row>
          <nui-row>
            <nui-col :span="12"
              ><div class="grid-content bg-purple"></div
            ></nui-col>
            <nui-col :span="12"
              ><div class="grid-content bg-purple-light"></div
            ></nui-col>
          </nui-row>
          <nui-row>
            <nui-col :span="8"
              ><div class="grid-content bg-purple"></div
            ></nui-col>
            <nui-col :span="8"
              ><div class="grid-content bg-purple-light"></div
            ></nui-col>
            <nui-col :span="8"
              ><div class="grid-content bg-purple"></div
            ></nui-col>
          </nui-row>
          <nui-row>
            <nui-col :span="6"
              ><div class="grid-content bg-purple"></div
            ></nui-col>
            <nui-col :span="6"
              ><div class="grid-content bg-purple-light"></div
            ></nui-col>
            <nui-col :span="6"
              ><div class="grid-content bg-purple"></div
            ></nui-col>
            <nui-col :span="6"
              ><div class="grid-content bg-purple-light"></div
            ></nui-col>
          </nui-row>
          <nui-row>
            <nui-col :span="4"
              ><div class="grid-content bg-purple"></div
            ></nui-col>
            <nui-col :span="4"
              ><div class="grid-content bg-purple-light"></div
            ></nui-col>
            <nui-col :span="4"
              ><div class="grid-content bg-purple"></div
            ></nui-col>
            <nui-col :span="4"
              ><div class="grid-content bg-purple-light"></div
            ></nui-col>
            <nui-col :span="4"
              ><div class="grid-content bg-purple"></div
            ></nui-col>
            <nui-col :span="4"
              ><div class="grid-content bg-purple-light"></div
            ></nui-col>
          </nui-row>
        </div>
        <article class="intro-list">
          <h3>Layout Attributes</h3>
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
          url="demoViews/layoutDemo.vue"
        ></show-code>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "DemoLayout",
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

<style lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
