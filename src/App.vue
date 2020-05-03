<template>
  <div id="app">
    <left-menu></left-menu>
    <div class="page-wrap">
      <el-scrollbar class="" style="height:100%">
        <router-view />
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import leftMenu from "./components/leftMenu"
export default {
  name: "app",
  components: { leftMenu },
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // background: #f8f8f8;
  // margin-top: 10px;
}
* {
  margin: 0;
  padding: 0;
}

#app > .page-wrap {
  background: #fff;
  min-height: 100vh;
  height: 100vh;
  margin-left: 270px;
  padding-left: 10px;
}

.demo-block {
  padding: 20px;
  margin-right: 20px;
  margin-top: 20px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;

  & > p {
    font-size: 14px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
}

.page-wrap > .el-scrollbar > .el-scrollbar__wrap {
  overflow-x: hidden !important;
}

.page-tab {
  .el-tab-pane {
    padding-top: 40px;
  }
  .el-tabs__item {
    padding: 0 10px;
  }

  .el-tabs__header {
    position: fixed;
    z-index: 9999;
    width: 100%;
    background: #fff;
  }
}

.page-main {
  padding-left: 12px;
  // padding-bottom: 160px;

  h2,
  h3 {
    font-weight: 400;
    color: #1f2f3d;
    text-align: left;
  }
  h2 {
    position: relative;
    left: -12px;
    padding-top: 30px;
    font-size: 26px;
    &:before {
      display: inline-block;
      position: relative;
      z-index: 100;
      top: -2px;
      content: "";
      border-radius: 2px;
      width: 4px;
      height: 30px;
      background: rgb(84, 156, 246);
      // background: rgb(87, 103, 146);
      vertical-align: middle;
      margin-right: 8px;
      opacity: 0.3;
    }
  }

  h3 {
    margin: 55px 0 20px;
    font-size: 22px;
    // padding-left: 12px;
  }
  h5 {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
    font-weight: normal;
    strong {
      font-weight: bold;
    }
  }

  h3 + h5 {
    margin-top: -10px;
  }

  .intro-list {
    padding-bottom: 120px;
    h6 {
      position: relative;
      top: -20px;
      font-size: 12px;
      color: #aaa;
      // text-align: right;
      padding-left: 12px;
    }
  }

  .intro-list > table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;

    em {
      color: #409eff;
    }
  }
  .intro-list > table strong {
    font-weight: 400;
  }
  .intro-list > table td,
  .intro-list > table th {
    border-bottom: 1px solid #dcdfe6;
    padding: 15px;
    max-width: 250px;
  }
  .intro-list > table th {
    text-align: left;
    white-space: nowrap;
    color: #909399;
    font-weight: 400;
  }
  .intro-list > table td {
    color: #606266;
  }
  .intro-list > table td:first-child,
  .intro-list > table th:first-child {
    padding-left: 10px;
  }
}
</style>
