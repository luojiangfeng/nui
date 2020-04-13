<!-- 比elementUI多的属性：width， -->
<template>
  <div class="page-main">
    <h2>Transfer 穿梭框</h2>
    <div class="demo-block">
      <nui-transfer v-model="value" :data="data"></nui-transfer>
    </div>
  </div>
</template>

<script>
export default {
  name: "DemoRadio",
  data() {
    const generateData = (_) => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0,
        })
      }
      return data
    }
    return {
      data: generateData(),
      value: [1, 4],
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleChange(value) {
      console.log(value)
    },
  },
}
</script>

<style scoped lang="scss">
/deep/ .test-col {
  color: green;
}
</style>
