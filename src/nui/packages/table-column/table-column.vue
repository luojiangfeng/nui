<template>
  <el-table-column
    v-if="!config.hidden"
    :type="config.type"
    :label="config.label"
    :prop="config.prop"
    :min-width="config['min-width'] || config.minWidth || config.width"
    :sortable="config.sortable"
    :align="config.align || 'center'"
    show-overflow-tooltip
    v-bind="config.$attrs"
    v-on="config.$listeners"
  >
    <template slot="header" slot-scope="scope">
      <template v-if="config.templateHead">
        <div v-html="computedColTpl(config.label, config.templateHead)"></div>
      </template>
      <template v-else>
        {{ config.label }}
      </template>
    </template>
    <!-- <template v-if="custom">
      <slot :data="rowData"></slot>
    </template>
    <template v-else> -->
    <template slot-scope="scope">
      <template v-if="config.template">
        <div
          v-html="computedColTpl(scope.row[config.prop], config.template)"
        ></div>
      </template>
      <template v-else>
        <div v-if="!config.filters">
          {{ scope.row[config.prop] }}
        </div>
        <div v-if="config.filters">
          <span v-if="config.filters.param">{{
            scope.row[config.prop] | constantKey2Value(config.filters.param)
          }}</span>
          <span
            v-else-if="!config.filters.param && config.filters.method === '￥'"
            >{{ scope.row[config.prop] | num3(2, "￥") }}</span
          >
          <span
            v-else-if="!config.filters.param && config.filters.method === '%'"
            >{{ scope.row[config.prop] | percentFilter }}</span
          >
          <span v-else-if="!config.filters.param && config.filters.method">{{
            computedColFilter(scope.row[config.prop], config.filters.method)
          }}</span>
        </div>
      </template>
    </template>
    <!-- </template> -->
  </el-table-column>
</template>

<script>
export default {
  name: "nui-table-column",
  props: {
    config: {
      type: Object,
      default: () => {
        return {}
      },
    },
    data: {
      type: Array,
      default: () => {
        return []
      },
    },
    custom: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  computed: {
    rowData() {
      if (this.data.length > 0) {
        // let propName = this.config.prop

        // let rowArr = this.data.map((element) => {
        //   return element[propName]
        // })
        // console.log(rowArr)
        return this.data[0]
      } else {
        return []
      }
    },
    computedColTpl() {
      return function(data, tpl) {
        let res
        if (typeof tpl === "function") {
          res = tpl(data).replace(/{{data}}/g, data)
        } else {
          res = tpl.replace(/{{data}}/g, data)
        }

        return res
      }
    },
    computedColFilter() {
      return function(value, filterMethod) {
        return this.$options.filters[filterMethod](value)
      }
    },
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style scoped lang="scss"></style>
