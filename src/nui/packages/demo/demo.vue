<template>
  <div class="nui-demo">11111111</div>
</template>

<script>
export default {
  name: "nui-demo",
  props: {
    url: {
      type: String
    },
    // table配置数据
    config: {
      type: Object,
      default: () => {
        return {};
      },
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped lang="scss">
</style>
