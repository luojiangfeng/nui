<template>
  <el-checkbox-button v-bind="$attrs" v-on="$listeners">
    <slot />
  </el-checkbox-button>
</template>

<script>
export default {
  name: 'NuiCheckboxButton',
  props: {},
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss">
</style>
