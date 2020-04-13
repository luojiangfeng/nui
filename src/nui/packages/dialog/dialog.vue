<template>
  <el-dialog v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </el-dialog>
</template>

<script>
export default {
  name: "nui-dialog",
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
