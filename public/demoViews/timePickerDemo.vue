<!-- 比elementUI多的属性：width， -->
<template>
  <div class="page-main">
    <h2>TimePicker 时间选择器</h2>

    <h3>固定时间点nui-time-select</h3>
    <div class="demo-block">
      <nui-time-select
        v-model="value"
        width="160px"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30',
        }"
        placeholder="选择时间"
      >
      </nui-time-select>
    </div>

    <h3>任意时间点nui-time-picker</h3>
    <div class="demo-block">
      <nui-time-picker
        v-model="value1"
        :picker-options="{
          selectableRange: '12:30:00 - 20:30:00',
        }"
        placeholder="选择时间"
      >
      </nui-time-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      value: "",
      value1: new Date(2016, 9, 10, 18, 40),
    }
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="scss"></style>
