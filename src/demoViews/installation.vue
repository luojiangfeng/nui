<template>
  <div class="page-main">
    <h2>安装</h2>

    <h3>1、安装NodeJS</h3>
    <h5>新版nodeJs自带npm，nodejs的安装方法请自行百度。</h5>

    <h3>2、npm 安装vue-nui-cli脚手架工具</h3>
    <h5>类似vue-cli，脚手架工具vue-nui-cli能生成一个已集成nui的项目框架。</h5>
    <div class="demo-block">
      npm install -g vue-nui-cli
    </div>

    <h3>3、创建一个项目：</h3>
    <h5>
      通过nui creat命令创建一个名称为“my-project”的项目（如果使用 Git
      Bash，默认上下键不能正常工作，可以使用“winpty nui.cmd create
      my-project”命令）：
    </h5>
    <div class="demo-block">
      nui create my-project
    </div>

    <h3>4、运行项目：</h3>
    <h5>进入到刚创建项目的根目录下，通过npm run serve命令运行开发项目：</h5>
    <div class="demo-block">
      <p>npm run serve</p>
    </div>
  </div>
</template>

<script>
console.log(process.env.NODE_ENV)
export default {
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
