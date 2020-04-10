<!-- 比elementUI多的属性：width， -->
<template>
  <div class="page-main">
    <h2>InputNumber 计数器</h2>
    <div class="demo-block">
      <nui-input-number
        v-model="num"
        width="150px"
        @change="handleChange"
        :min="1"
        :max="10"
        label="描述文字"
      ></nui-input-number>
    </div>
  </div>
</template>

<script>
export default {
  name: "DemoRadio",
  data() {
    return {
      num: 1
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleChange(value) {
      console.log(value)
    }
  }
}
</script>

<style scoped lang="scss">
/deep/ .test-col {
  color: green;
}
</style>
