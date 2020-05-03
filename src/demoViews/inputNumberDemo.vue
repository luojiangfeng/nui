<!-- 比elementUI多的属性：width， -->
<template>
  <div class="page-main">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
        <h2>InputNumber 计数器</h2>
        <div class="demo-block">
          <nui-input-number
            v-model="num"
            width="150px"
            @change="handleChange"
            :min="1"
            :max="10"
            label="描述文字"
          ></nui-input-number>
        </div>
        <article class="intro-list">
          <h3>InputNumber Attributes</h3>
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
          url="demoViews/inputNumberDemo.vue"
        ></show-code>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "DemoInputNumber",
  data() {
    return {
      activeTab: "doc",
      num: 1,
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleChange(value) {
      console.log(value)
    },
  },
}
</script>

<style scoped lang="scss">
/deep/ .test-col {
  color: green;
}
</style>
