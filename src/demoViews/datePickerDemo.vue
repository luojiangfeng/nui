<!-- 比elementUI多的属性：width， -->
<template>
  <div class="page-main">
    <h2>DatePicker 日期时间选择器</h2>

    <h3>日期选择器</h3>
    <div class="demo-block">
      <nui-date-picker
        v-model="value1"
        width="160px"
        type="date"
        placeholder="选择日期"
      >
      </nui-date-picker>
    </div>

    <h3>日期时间选择器</h3>
    <div class="demo-block">
      <nui-date-picker v-model="value2" type="datetime" placeholder="选择日期">
      </nui-date-picker>
    </div>

    <h3>日期和时间范围</h3>
    <div class="demo-block">
      <nui-date-picker
        v-model="value3"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </nui-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      value1: "",
      value2: "",
      value3: ""
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style scoped lang="scss"></style>
