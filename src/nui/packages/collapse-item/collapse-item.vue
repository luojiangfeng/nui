<template>
  <el-collapse-item v-bind="$attrs" v-on="$listeners">
    <slot></slot>
    <slot slot="title" name="title"></slot>
  </el-collapse-item>
</template>

<script>
export default {
  name: 'nui-collapse-item',
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
