<template>
  <div class="page-main">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
        <h2>Drawer 抽屉</h2>
        <div class="demo-block">
          <nui-radio-group v-model="direction">
            <nui-radio label="ltr">从左往右开</nui-radio>
            <nui-radio label="rtl">从右往左开</nui-radio>
            <nui-radio label="ttb">从上往下开</nui-radio>
            <nui-radio label="btt">从下往上开</nui-radio>
          </nui-radio-group>

          <nui-button
            @click="drawer = true"
            type="primary"
            style="margin-left: 16px;"
          >
            点我打开
          </nui-button>

          <nui-drawer
            title="我是标题"
            :visible.sync="drawer"
            :direction="direction"
            :before-close="handleClose"
          >
            <span>我来啦!</span>
          </nui-drawer>
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
          url="demoViews/drawerDemo.vue"
        ></show-code>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "doc",
      drawer: false,
      direction: "rtl",
    }
  },
  methods: {
    handleClose(done) {
      done()
      // this.$confirm("确认关闭？")
      //   .then((_) => {
      //     done()
      //   })
      //   .catch((_) => {})
    },
  },
}
</script>
