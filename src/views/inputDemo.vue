<template>
  <div class="page-main">
    <h2>Input 输入框</h2>
    <div class="demo-block">
      <!-- 比elementUI多的属性：width，clearable默认改为true 。-->
      <!-- 当type="number"时，修改默认为不显示箭头(新增hide-arrow属性可控制显示),修改默认不能输入包括e在内的任何非数字 -->
      <nui-input
        width="200px"
        v-model="input"
        placeholder="请输入内容"
      ></nui-input>
    </div>
    <h3>数字输入框</h3>
    <h5>
      当type="number"时，修改默认为不显示箭头(新增hide-arrow属性可控制显示),修改默认不能输入包括e在内的任何非数字.
    </h5>
    <div class="demo-block">
      <nui-form label-width="80px">
        <nui-form-item label="默认">
          <nui-input
            type="number"
            width="200px"
            v-model="input2"
            @input="testInput"
            placeholder="请输入电话"
          ></nui-input>
        </nui-form-item>
        <nui-form-item label="显示箭头">
          <nui-input
            type="number"
            width="200px"
            :hide-arrow="false"
            v-model="input3"
            placeholder="请输入电话"
          ></nui-input>
        </nui-form-item>
      </nui-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "DemoRadio",
  data() {
    return {
      input: "",
      input2: "",
      input3: "",
      icCardNo: "",
    }
  },
  created() {},
  mounted() {},
  methods: {
    testInput(val) {},
  },
}
</script>

<style scoped lang="scss">
/deep/ .test-col {
  color: green;
}
</style>
