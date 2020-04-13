<template>
  <div class="page-main">
    <h2>Badge 标记</h2>
    <div class="demo-block">
      <!-- 比nuiementUI多的属性：width， -->
      <nui-badge :value="12" class="item">
        <nui-button size="small">评论</nui-button>
      </nui-badge>
      <nui-badge :value="3" class="item">
        <nui-button size="small">回复</nui-button>
      </nui-badge>
      <nui-badge :value="1" class="item" type="primary">
        <nui-button size="small">评论</nui-button>
      </nui-badge>
      <nui-badge :value="2" class="item" type="warning">
        <nui-button size="small">回复</nui-button>
      </nui-badge>
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
