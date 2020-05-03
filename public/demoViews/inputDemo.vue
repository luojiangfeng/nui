<template>
  <div class="page-main">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
        <h2>Input 输入框</h2>
        <h3></h3>
        <h5>
          比elementUI多的属性：width(宽度字符串)。clearable默认改为true 。
        </h5>
        <div class="demo-block">
          <!-- 比elementUI多的属性：width，clearable默认改为true 。-->
          <!-- 当type="number"时，修改默认为不显示箭头(新增hide-arrow属性可控制显示)。修改默认可以输入字母e，改为不能输入任何非数字. -->
          <nui-input
            width="200px"
            v-model="input"
            placeholder="请输入内容"
          ></nui-input>
        </div>
        <h3>数字输入框</h3>
        <h5>
          当type="number"时，修改默认为不显示箭头(新增hide-arrow属性可控制显示)。修改默认可以输入字母e，改为不能输入任何非数字.
        </h5>
        <div class="demo-block">
          <nui-form label-width="80px">
            <nui-form-item label="默认">
              <nui-input
                type="number"
                width="200px"
                v-model="input2"
                @input="testInput"
                placeholder="请输入电话"
              ></nui-input>
            </nui-form-item>
            <nui-form-item label="显示箭头">
              <nui-input
                type="number"
                width="200px"
                :hide-arrow="false"
                v-model="input3"
                placeholder="请输入电话"
              ></nui-input>
            </nui-form-item>
          </nui-form>
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
          url="demoViews/inputDemo.vue"
        ></show-code>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "DemoInput",
  data() {
    return {
      activeTab: "doc",
      input: "",
      input2: "",
      input3: "",
      icCardNo: "",
    }
  },
  created() {},
  mounted() {},
  methods: {
    testInput(val) {},
  },
}
</script>

<style scoped lang="scss">
/deep/ .test-col {
  color: green;
}
</style>
