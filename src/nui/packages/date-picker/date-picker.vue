<template>
  <el-date-picker v-bind="$attrs" v-on="$listeners" :style="{ width: width }">
    <slot></slot>
  </el-date-picker>
</template>

<script>
export default {
  name: 'nui-date-picker',
  props: {
    width: {
      type: String,
      default: '100%',
    },
  },
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style scoped lang="scss"></style>
