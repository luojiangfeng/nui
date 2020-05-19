<template>
  <el-collapse v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-collapse>
</template>

<script>
export default {
  name: 'nui-collapse',
  props: {},
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
