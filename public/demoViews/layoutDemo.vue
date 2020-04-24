<template>
  <div class="page-main">
    <h2>Layout 布局</h2>
    <h3>nui-row和nui-col</h3>
    <div class="demo-block">
      <nui-row>
        <nui-col :span="24"
          ><div class="grid-content bg-purple-dark"></div
        ></nui-col>
      </nui-row>
      <nui-row>
        <nui-col :span="12"><div class="grid-content bg-purple"></div></nui-col>
        <nui-col :span="12"
          ><div class="grid-content bg-purple-light"></div
        ></nui-col>
      </nui-row>
      <nui-row>
        <nui-col :span="8"><div class="grid-content bg-purple"></div></nui-col>
        <nui-col :span="8"
          ><div class="grid-content bg-purple-light"></div
        ></nui-col>
        <nui-col :span="8"><div class="grid-content bg-purple"></div></nui-col>
      </nui-row>
      <nui-row>
        <nui-col :span="6"><div class="grid-content bg-purple"></div></nui-col>
        <nui-col :span="6"
          ><div class="grid-content bg-purple-light"></div
        ></nui-col>
        <nui-col :span="6"><div class="grid-content bg-purple"></div></nui-col>
        <nui-col :span="6"
          ><div class="grid-content bg-purple-light"></div
        ></nui-col>
      </nui-row>
      <nui-row>
        <nui-col :span="4"><div class="grid-content bg-purple"></div></nui-col>
        <nui-col :span="4"
          ><div class="grid-content bg-purple-light"></div
        ></nui-col>
        <nui-col :span="4"><div class="grid-content bg-purple"></div></nui-col>
        <nui-col :span="4"
          ><div class="grid-content bg-purple-light"></div
        ></nui-col>
        <nui-col :span="4"><div class="grid-content bg-purple"></div></nui-col>
        <nui-col :span="4"
          ><div class="grid-content bg-purple-light"></div
        ></nui-col>
      </nui-row>
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

<style lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
