<template>
  <div class="page-main">
    <h2>Drawer 抽屉</h2>
    <div class="demo-block">
      <nui-radio-group v-model="direction">
        <nui-radio label="ltr">从左往右开</nui-radio>
        <nui-radio label="rtl">从右往左开</nui-radio>
        <nui-radio label="ttb">从上往下开</nui-radio>
        <nui-radio label="btt">从下往上开</nui-radio>
      </nui-radio-group>

      <nui-button
        @click="drawer = true"
        type="primary"
        style="margin-left: 16px;"
      >
        点我打开
      </nui-button>

      <nui-drawer
        title="我是标题"
        :visible.sync="drawer"
        :direction="direction"
        :before-close="handleClose"
      >
        <span>我来啦!</span>
      </nui-drawer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      direction: "rtl",
    }
  },
  methods: {
    handleClose(done) {
      done()
      // this.$confirm("确认关闭？")
      //   .then((_) => {
      //     done()
      //   })
      //   .catch((_) => {})
    },
  },
}
</script>
