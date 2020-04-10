<template>
  <el-form-item
    v-if="span === undefined"
    v-bind="$attrs"
    v-on="$listeners"
    :style="{ width: width }"
  >
    <slot></slot>
  </el-form-item>

  <el-col v-else :span="span">
    <el-form-item v-bind="$attrs" v-on="$listeners" :style="{ width: width }">
      <slot></slot>
    </el-form-item>
  </el-col>
</template>

<script>
export default {
  name: "nui-form-item",
  props: {
    width: {
      type: String,
    },
    span: {
      type: Number,
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
