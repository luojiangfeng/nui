<!-- 比elementUI多的属性：width， -->
<template>
  <div class="page-main">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
        <h2>Divider 分割线</h2>
        <h3>基本水平分割线</h3>
        <div class="demo-block">
          <div>
            <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
            <nui-divider></nui-divider>
            <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
          </div>
        </div>

        <h3>设置文案</h3>
        <div class="demo-block">
          <div>
            <span>头上一片晴天，心中一个想念</span>
            <nui-divider content-position="left">少年包青天</nui-divider>
            <span>饿了别叫妈, 叫饿了么</span>
            <nui-divider><i class="el-icon-mobile-phone"></i></nui-divider>
            <span>为了无法计算的价值</span>
            <nui-divider content-position="right">阿里云</nui-divider>
          </div>
        </div>

        <h3>垂直分割</h3>
        <div class="demo-block">
          <div>
            <span>雨纷纷</span>
            <nui-divider direction="vertical"></nui-divider>
            <span>旧故里</span>
            <nui-divider direction="vertical"></nui-divider>
            <span>草木深</span>
          </div>
        </div>

        <article class="intro-list">
          <h3>Divider Attributes</h3>
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
          url="demoViews/dividerDemo.vue"
        ></show-code>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'DemoDivider',
  data() {
    return {
      activeTab: 'doc',
      num: 1,
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
