<template>
  <div class="page-main">
    <h2>Radio 单选框</h2>
    <div class="demo-block">
      <nui-radio v-model="radio" label="1">备选项</nui-radio>
      <nui-radio v-model="radio" label="2">备选项</nui-radio>
    </div>

    <h3>单选框组</h3>
    <div class="demo-block">
      <nui-radio-group v-model="radioGroup" @change="changeRadio">
        <nui-radio :label="3">备选项1</nui-radio>
        <nui-radio :label="6">备选项2</nui-radio>
        <nui-radio :label="9">备选项3</nui-radio>
      </nui-radio-group>
    </div>

    <h3>按钮样式</h3>
    <div class="demo-block">
      <nui-radio-group v-model="radioBtn1">
        <nui-radio-button label="上海"></nui-radio-button>
        <nui-radio-button label="北京"></nui-radio-button>
        <nui-radio-button label="广州"></nui-radio-button>
        <nui-radio-button label="深圳"></nui-radio-button>
      </nui-radio-group>

      <div style="margin-top: 20px">
        <nui-radio-group v-model="radioBtn2" size="small">
          <nui-radio-button label="0">上海</nui-radio-button>
          <nui-radio-button label="1">北京</nui-radio-button>
          <nui-radio-button label="2">广州</nui-radio-button>
          <nui-radio-button label="3">深圳</nui-radio-button>
        </nui-radio-group>
      </div>
    </div>

    <h3>带有边框</h3>
    <div class="demo-block">
      <nui-radio-group v-model="radioBtn1">
        <nui-radio v-model="radio" label="1" border>男</nui-radio>
        <nui-radio v-model="radio" label="2" border>女</nui-radio>
      </nui-radio-group>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "DemoRadio",
  data() {
    return {
      radio: "2",
      radioGroup: 9,
      radioBtn1: "上海",
      radioBtn2: "2"
    };
  },
  created() {},
  mounted() {},
  methods: {
    changeRadio(val) {
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

