<template>
  <div class="page-main">
    <h2>Container 布局容器</h2>
    <div class="demo-block">
      <nui-container>
        <nui-header>Header</nui-header>
        <nui-main>Main</nui-main>
      </nui-container>

      <nui-container>
        <nui-header>Header</nui-header>
        <nui-main>Main</nui-main>
        <nui-footer>Footer</nui-footer>
      </nui-container>

      <nui-container>
        <nui-aside width="200px">Aside</nui-aside>
        <nui-main>Main</nui-main>
      </nui-container>

      <nui-container>
        <nui-header>Header</nui-header>
        <nui-container>
          <nui-aside width="200px">Aside</nui-aside>
          <nui-main>Main</nui-main>
        </nui-container>
      </nui-container>

      <nui-container>
        <nui-header>Header</nui-header>
        <nui-container>
          <nui-aside width="200px">Aside</nui-aside>
          <nui-container>
            <nui-main>Main</nui-main>
            <nui-footer>Footer</nui-footer>
          </nui-container>
        </nui-container>
      </nui-container>

      <nui-container>
        <nui-aside width="200px">Aside</nui-aside>
        <nui-container>
          <nui-header>Header</nui-header>
          <nui-main>Main</nui-main>
        </nui-container>
      </nui-container>

      <nui-container>
        <nui-aside width="200px">Aside</nui-aside>
        <nui-container>
          <nui-header>Header</nui-header>
          <nui-main>Main</nui-main>
          <nui-footer>Footer</nui-footer>
        </nui-container>
      </nui-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "DemoRadio",
  data() {
    return {
      input: ""
    }
  },
  created() {},
  mounted() {},
  methods: {
    changeRadio(val) {
      console.log(val)
    }
  }
}
</script>

<style scoped lang="scss">
/deep/ .el-header,
/deep/ .el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

/deep/.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

/deep/.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.demo-block > /deep/.el-container {
  margin-bottom: 40px;
}

/deep/.el-container:nth-child(5) .el-aside,
/deep/.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

/deep/.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
