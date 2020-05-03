<!-- 比elementUI多的属性：width， -->
<template>
  <div class="page-main">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
        <h2>TimePicker 时间选择器</h2>

        <h3>固定时间点nui-time-select</h3>
        <div class="demo-block">
          <nui-time-select
            v-model="value"
            width="160px"
            :picker-options="{
              start: '08:30',
              step: '00:15',
              end: '18:30',
            }"
            placeholder="选择时间"
          >
          </nui-time-select>
        </div>

        <h3>任意时间点nui-time-picker</h3>
        <div class="demo-block">
          <nui-time-picker
            v-model="value1"
            :picker-options="{
              selectableRange: '12:30:00 - 20:30:00',
            }"
            placeholder="选择时间"
          >
          </nui-time-picker>
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
          url="demoViews/tableDemo.vue"
        ></show-code>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      activeTab: "doc",
      value: "",
      value1: new Date(2016, 9, 10, 18, 40),
    }
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="scss"></style>
