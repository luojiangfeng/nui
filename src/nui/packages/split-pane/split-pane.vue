<template>
  <split-pane v-bind="$attrs" v-on="$listeners">
    <slot slot="paneL" name="paneL" />
    <slot slot="paneR" name="paneR" />
  </split-pane>
</template>

<script>
import splitPane from 'vue-splitpane'

export default {
  name: 'NuiSplitPane',
  components: { splitPane },
  props: {},
  data() {
    return {}
  },
  computed: {},
  created() {
  },
  mounted() {},
  methods: {}
}
</script>
<style scoped lang="scss"></style>
