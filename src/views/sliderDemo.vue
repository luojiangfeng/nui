<template>
  <div class="page-main">
    <h2>Slider 滑块</h2>
    <div class="demo-block">
      <nui-slider v-model="value"></nui-slider>
    </div>
  </div>
</template>

<script>
export default {
  name: "DemoRadio",
  data() {
    return {
      value: 10
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
/deep/ .test-col {
  color: green;
}
</style>
