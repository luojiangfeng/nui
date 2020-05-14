<template>
  <el-form
    ref="form"
    v-bind="$attrs"
    v-on="$listeners"
    :style="{ width: width, margin: isCenter }"
  >
    <slot></slot>
  </el-form>
</template>

<script>
export default {
  name: 'nui-form',
  props: {
    width: {
      type: String,
    },
    center: {
      type: Boolean,
    },
  },
  data() {
    return {}
  },
  computed: {
    isCenter() {
      return this.center ? '0 auto' : ''
    },
  },
  created() {},
  mounted() {},
  methods: {
    validate(callback) {
      this.$refs['form'].validate(callback)
    },
    clearValidate(callback) {
      this.$refs['form'].clearValidate(callback)
    },
  },
}
</script>
<style scoped lang="scss"></style>
