<template>
  <div class="page-main">
    <h2>Checkbox 多选框</h2>
    <div class="demo-block">
      <nui-checkbox v-model="checkbox1">备选项1</nui-checkbox>
      <nui-checkbox v-model="checkbox2">备选项2</nui-checkbox>
    </div>

    <h3>多选框组</h3>
    <div class="demo-block">
      <nui-checkbox-group v-model="checkList">
        <nui-checkbox label="复选框 A"></nui-checkbox>
        <nui-checkbox label="复选框 B"></nui-checkbox>
        <nui-checkbox label="复选框 C"></nui-checkbox>
        <nui-checkbox label="禁用" disabled></nui-checkbox>
        <nui-checkbox label="选中且禁用" disabled></nui-checkbox>
      </nui-checkbox-group>
    </div>

    <h3>按钮样式</h3>
    <div class="demo-block">
      <nui-checkbox-group v-model="checkboxBtn1">
        <nui-checkbox-button label="上海"></nui-checkbox-button>
        <nui-checkbox-button label="北京"></nui-checkbox-button>
        <nui-checkbox-button label="广州"></nui-checkbox-button>
        <nui-checkbox-button label="深圳"></nui-checkbox-button>
      </nui-checkbox-group>

      <div style="margin-top: 20px">
        <nui-checkbox-group v-model="checkboxBtn2" size="small">
          <nui-checkbox-button label="0">上海</nui-checkbox-button>
          <nui-checkbox-button label="1">北京</nui-checkbox-button>
          <nui-checkbox-button label="2">广州</nui-checkbox-button>
          <nui-checkbox-button label="3">深圳</nui-checkbox-button>
        </nui-checkbox-group>
      </div>
    </div>

    <h3>带有边框</h3>
    <div class="demo-block">
      <nui-checkbox-group v-model="checkboxBoder">
        <nui-checkbox label="1" border>男</nui-checkbox>
        <nui-checkbox label="2" border>女</nui-checkbox>
      </nui-checkbox-group>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "Democheckbox",
  data() {
    return {
      checkbox1: true,
      checkbox2: false,
      checkList: ["选中且禁用", "复选框 A"],
      checkboxBtn1: ["上海", "深圳"],
      checkboxBtn2: ["1"],
      checkboxBoder: ["2"]
    };
  },
  created() {},
  mounted() {},
  methods: {
    changecheckbox(val) {
      console.log(val);
    }
  }
};
</script>

<style scoped lang="scss">
/deep/ .test-col {
  color: green;
}
</style>

