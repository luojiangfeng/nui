<template>
  <div class="page-main">
    <h2>安装</h2>

    <h3>1、npm 安装vue-nui-cli脚手架工具</h3>
    <h5>类似vue-cli，脚手架工具vue-nui-cli能生成一个已集成nui的项目框架。</h5>
    <div class="demo-block">
      npm install -g vue-nui-cli
    </div>

    <h3>2、创建一个项目：</h3>
    <h5>通过nui creat命令创建一个名称为“my-project”的项目：</h5>
    <div class="demo-block">
      nui create my-project
    </div>

    <h3>3、运行项目：</h3>
    <h5>在项目根目录下，通过npm run serve命令运行开发项目：</h5>
    <div class="demo-block">
      npm run serve
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
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
