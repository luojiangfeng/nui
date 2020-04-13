<template>
  <el-container
    v-bind="$attrs"
    v-on="$listeners"
    :class="{ 'is-vertical': isVertical }"
  >
    <slot></slot>
  </el-container>
</template>

<script>
export default {
  name: "nui-container",
  props: {
    direction: String
  },

  computed: {
    isVertical() {
      if (this.direction === "vertical") {
        return true
      } else if (this.direction === "horizontal") {
        return false
      }
      return this.$slots && this.$slots.default
        ? this.$slots.default.some(vnode => {
            const tag = vnode.componentOptions && vnode.componentOptions.tag
            return tag === "nui-header" || tag === "nui-footer"
          })
        : false
    }
  }
}
</script>
<style scoped lang="scss"></style>
