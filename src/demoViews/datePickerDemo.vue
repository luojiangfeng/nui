<!-- 比elementUI多的属性：width， -->
<template>
  <div class="page-main">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
        <h2>DatePicker 日期时间选择器</h2>

        <h3>日期选择器</h3>
        <div class="demo-block">
          <nui-date-picker
            v-model="value1"
            width="160px"
            type="date"
            placeholder="选择日期"
          >
          </nui-date-picker>
        </div>

        <h3>日期时间选择器</h3>
        <div class="demo-block">
          <nui-date-picker
            v-model="value2"
            type="datetime"
            placeholder="选择日期"
          >
          </nui-date-picker>
        </div>

        <h3>日期和时间范围</h3>
        <div class="demo-block">
          <nui-date-picker
            v-model="value3"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </nui-date-picker>
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
          url="demoViews/datePickerDemo.vue"
        ></show-code>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "DemoDatePicker",
  data() {
    return {
      activeTab: "doc",
      value1: "",
      value2: "",
      value3: "",
    }
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="scss"></style>
