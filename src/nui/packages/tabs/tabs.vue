<template>
  <el-tabs v-bind="$attrs" v-on="$listeners">
    <slot></slot>
    <!-- <el-tab-pane
      v-for="(tab, index) in tabs"
      :key="index"
      :label="tab.label"
      :name="tab.name"
      :disabled="tab.disabled"
      :closable="tab.closable"
      :lazy="tab.lazy"
    ></el-tab-pane> -->
  </el-tabs>
</template>

<script>
export default {
  name: "nui-tabs",
  props: {
    skin: {
      type: String,
    },
  },
  data() {
    return {
      a: 123,
    }
  },
  computed: {},
  created() {
    // this.$parent = this
  },
  mounted() {},
  methods: {},
  model: {
    prop: "value", //这里使我们定义的v-model属性
  },
}
</script>
<style scoped lang="scss"></style>
