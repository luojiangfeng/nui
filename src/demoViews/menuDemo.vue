<template>
  <div class="page-main">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
        <h2>NavMenu 导航菜单</h2>
        <div class="demo-block">
          <nui-menu
            :default-active="activeIndex"
            class="nui-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <nui-menu-item index="1">处理中心</nui-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <nui-menu-item index="2-1">选项1</nui-menu-item>
              <nui-menu-item index="2-2">选项2</nui-menu-item>
              <nui-menu-item index="2-3">选项3</nui-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <nui-menu-item index="2-4-1">选项1</nui-menu-item>
                <nui-menu-item index="2-4-2">选项2</nui-menu-item>
                <nui-menu-item index="2-4-3">选项3</nui-menu-item>
              </el-submenu>
            </el-submenu>
            <nui-menu-item index="3" disabled>消息中心</nui-menu-item>
            <nui-menu-item index="4"
              ><a href="https://www.ele.me" target="_blank"
                >订单管理</a
              ></nui-menu-item
            >
          </nui-menu>
          <div class="line"></div>
          <nui-menu
            :default-active="activeIndex2"
            class="nui-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <nui-menu-item index="1">处理中心</nui-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <nui-menu-item index="2-1">选项1</nui-menu-item>
              <nui-menu-item index="2-2">选项2</nui-menu-item>
              <nui-menu-item index="2-3">选项3</nui-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <nui-menu-item index="2-4-1">选项1</nui-menu-item>
                <nui-menu-item index="2-4-2">选项2</nui-menu-item>
                <nui-menu-item index="2-4-3">选项3</nui-menu-item>
              </el-submenu>
            </el-submenu>
            <nui-menu-item index="3" disabled>消息中心</nui-menu-item>
            <nui-menu-item index="4"
              ><a href="https://www.ele.me" target="_blank"
                >订单管理</a
              ></nui-menu-item
            >
          </nui-menu>
        </div>

        <article class="intro-list">
          <h3>NavMenu Attributes</h3>
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
          url="demoViews/menuDemo.vue"
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
      activeTab: "doc",
      activeIndex: "1",
      activeIndex2: "1",
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<style scoped lang="scss">
.line {
  margin: 30px 0;
}

a {
  text-decoration: none;
}
</style>
