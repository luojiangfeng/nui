<!-- 比elementUI多的属性：width， -->
<template>
  <div class="page-main">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
        <h2>Code 代码编辑器</h2>
        <h3>传字符串</h3>
        <div class="demo-block">
          <nui-code theme="dark" width="100%" :value="testValue"></nui-code>
        </div>

        <h3>传url，显示接口返回值</h3>
        <div class="demo-block">
          <nui-code url="api/getEntUserList.json"></nui-code>
        </div>

        <article class="intro-list">
          <h3>Code Attributes</h3>
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
                <td>height</td>
                <td>高度</td>
                <td>string</td>
                <td>—</td>
                <td>100%</td>
              </tr>
              <tr>
                <td>width</td>
                <td>宽度</td>
                <td>string</td>
                <td>—</td>
                <td>100%</td>
              </tr>
              <tr>
                <td>url</td>
                <td>接口获取地址，直接显示返回的所有内容</td>
                <td>string</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>value</td>
                <td>显示的代码内容</td>
                <td>string</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>type</td>
                <td>代码类型，支持javascript、vue、html、css、sass、xml等</td>
                <td>string</td>
                <td>—</td>
                <td>javascript</td>
              </tr>
              <tr>
                <td>theme</td>
                <td>主题色，支持深色dark、亮色light</td>
                <td>string</td>
                <td>—</td>
                <td>light</td>
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
          url="demoViews/inputNumberDemo.vue"
        ></show-code>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'DemoInputNumber',
  data() {
    return {
      activeTab: 'doc',
      num: 1,
      testValue: `{
  "msg": "success",
  "code": 200,
  "data": [
    {
      "title": "Portlet列表",
      "customAttr": "自定义属性",
      "expand": true,
      "key": "root",
      "children": [
        { "title": "内容管理portlet", "key": "cmsPortlet" },
        { "title": "日程管理portlet", "key": "calporltet" }
      ]
    }
  ]
}
`,
    }
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="scss">
/deep/ .test-col {
  color: green;
}
</style>
