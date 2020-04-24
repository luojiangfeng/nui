<template>
  <div class="page-main">
    <h2>Switch 开关</h2>
    <div class="demo-block">
      <nui-switch
        v-model="value"
        active-color="#13ce66"
        inactive-color="#ff4949"
      >
      </nui-switch>
    </div>
  </div>
</template>

<script>
export default {
  name: "DemoRadio",
  data() {
    return {
      value: true
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="scss">
/deep/ .test-col {
  color: green;
}
</style>
