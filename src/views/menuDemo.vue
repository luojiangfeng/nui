<template>
  <div class="page-main">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
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
