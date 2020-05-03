<template>
  <div class="page-main">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
        <h2>Badge 标记</h2>
        <div class="demo-block">
          <!-- 比nuiementUI多的属性：width， -->
          <nui-badge :value="12" class="item">
            <nui-button size="small">评论</nui-button>
          </nui-badge>
          <nui-badge :value="3" class="item">
            <nui-button size="small">回复</nui-button>
          </nui-badge>
          <nui-badge :value="1" class="item" type="primary">
            <nui-button size="small">评论</nui-button>
          </nui-badge>
          <nui-badge :value="2" class="item" type="warning">
            <nui-button size="small">回复</nui-button>
          </nui-badge>
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
          url="demoViews/badgeDemo.vue"
        ></show-code>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Badge",
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
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
