<template>
  <div class="page-main">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
        <h2>Checkbox 多选框</h2>
        <div class="demo-block">
          <nui-checkbox v-model="checkbox1">备选项1</nui-checkbox>
          <nui-checkbox v-model="checkbox2">备选项2</nui-checkbox>
        </div>

        <h3>多选框组</h3>
        <div class="demo-block">
          <nui-checkbox-group v-model="checkList">
            <nui-checkbox label="复选框 A"></nui-checkbox>
            <nui-checkbox label="复选框 B"></nui-checkbox>
            <nui-checkbox label="复选框 C"></nui-checkbox>
            <nui-checkbox label="禁用" disabled></nui-checkbox>
            <nui-checkbox label="选中且禁用" disabled></nui-checkbox>
          </nui-checkbox-group>
        </div>

        <h3>按钮样式</h3>
        <div class="demo-block">
          <nui-checkbox-group v-model="checkboxBtn1">
            <nui-checkbox-button label="上海"></nui-checkbox-button>
            <nui-checkbox-button label="北京"></nui-checkbox-button>
            <nui-checkbox-button label="广州"></nui-checkbox-button>
            <nui-checkbox-button label="深圳"></nui-checkbox-button>
          </nui-checkbox-group>

          <div style="margin-top: 20px">
            <nui-checkbox-group v-model="checkboxBtn2" size="small">
              <nui-checkbox-button label="0">上海</nui-checkbox-button>
              <nui-checkbox-button label="1">北京</nui-checkbox-button>
              <nui-checkbox-button label="2">广州</nui-checkbox-button>
              <nui-checkbox-button label="3">深圳</nui-checkbox-button>
            </nui-checkbox-group>
          </div>
        </div>

        <h3>带有边框</h3>
        <div class="demo-block">
          <nui-checkbox-group v-model="checkboxBoder">
            <nui-checkbox label="1" border>男</nui-checkbox>
            <nui-checkbox label="2" border>女</nui-checkbox>
          </nui-checkbox-group>
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
          url="demoViews/checkboxDemo.vue"
        ></show-code>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "DemoCheckbox",
  data() {
    return {
      activeTab: "doc",
      checkbox1: true,
      checkbox2: false,
      checkList: ["选中且禁用", "复选框 A"],
      checkboxBtn1: ["上海", "深圳"],
      checkboxBtn2: ["1"],
      checkboxBoder: ["2"],
    }
  },
  created() {},
  mounted() {},
  methods: {
    changecheckbox(val) {
      console.log(val)
    },
  },
}
</script>

<style scoped lang="scss">
/deep/ .test-col {
  color: green;
}
</style>
