<template>
  <div id="app">
    <left-menu></left-menu>
    <main>
      <el-scrollbar class="" style="height:100%">
        <router-view />
      </el-scrollbar>
    </main>
  </div>
</template>

<script>
import leftMenu from "./components/leftMenu"
export default {
  name: "app",
  components: { leftMenu }
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

#app > main {
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
}

main > .el-scrollbar > .el-scrollbar__wrap {
  overflow-x: hidden !important;
}

.page-main {
  padding-left: 12px;
  padding-bottom: 160px;
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
  }

  h3 + h5 {
    margin-top: -10px;
  }
}
</style>
