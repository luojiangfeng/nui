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

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
        <template v-slot="scope">
          <div class="test">{{ scope.row.date }}12</div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
