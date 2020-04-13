<!-- 比elementUI多的属性：width， -->
<template>
  <div class="page-main">
    <h2>Rate 评分</h2>
    <div class="demo-block">
      <nui-rate v-model="value1"></nui-rate>
    </div>
  </div>
</template>

<script>
export default {
  name: "DemoRadio",
  data() {
    return {
      value1: null
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
