<template>
  <viewer
    ref="viewer"
    v-bind="$attrs"
    v-on="$listeners"
  >

    <slot :images="images">
    <!-- <img v-for="src in images" :key="src" :src="src"> -->
    </slot></viewer>
</template>

<script>
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer/src/component.vue'

export default {
  name: 'NuiImgViewer',
  components: {
    Viewer
  },
  props: {
    images: {
      type: Array,
      default: () => []
    },
    option: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
    }
  },
  computed: {},
  created() {},
  mounted() {
    let viewerOptions = this.$refs.viewer.$viewer.options
    viewerOptions = Object.assign(viewerOptions, this.option)
  },
  methods: {}
}
</script>
<style scoped lang="scss"></style>
