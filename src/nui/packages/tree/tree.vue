<template>
  <div ref="wrap" class="nui-tree-select" :style="{ width: width }">
    <el-input
      v-if="filterable"
      v-model="filterText"
      class="filter-input"
      :size="size"
      placeholder="请输入关键词"
    ></el-input>
    <el-tree
      ref="tree"
      class="nui-options-tree"
      :highlight-current="highlightCurrent"
      v-bind="$attrs"
      v-on="$listeners"
      :data="selfData"
      :props="selfProps"
      :node-key="nodeKey"
      :show-checkbox="showCheckbox"
      :expand-on-click-node="expandOnClickNode"
      :filter-node-method="filterNode"
      :default-checked-keys="checked_keys"
      @check="handleCheckChange"
      @node-click="treeItemClick"
    ></el-tree>
  </div>
</template>

<script>
export default {
  name: "nui-tree",
  data() {
    return {
      selecteds: [], // 选中数据
      options_show: false, // 是否显示下拉选项
      checked_keys: [], // 默认选中
      filterText: "",
      popoverWrapClass: "",
    }
  },
  props: {
    // 数据
    data: {
      type: Array,
      default: () => [],
    },
    // 树结构配置
    props: {
      type: Object,
      default: () => {
        return {}
      },
    },
    multiCheck: {
      type: Boolean,
      default: true,
    },
    highlightCurrent: {
      type: Boolean,
      default: true,
    },
    // node-key
    nodeKey: {
      type: String,
      default: "id",
    },
    // 选中数据
    value: [String, Number, Array, Object],
    // 是否可多选
    showCheckbox: {
      type: Boolean,
      default: false,
    },
    expandOnClickNode: {
      type: Boolean,
      default: true,
    },
    // 是否只可选叶子节点
    leafOnly: {
      type: Boolean,
      default: false,
    },
    // 宽度
    width: {
      type: String,
      default: "100%",
    },

    // 多选时，清空选项关闭
    noCheckedClose: {
      type: Boolean,
      default: false,
    },

    size: {
      type: String,
      default: "default",
    },
    // 是否使用搜索
    filterable: {
      type: Boolean,
      default: false,
    },
    // 自定义筛选函数
    filterNodeMethod: Function,
  },
  model: {
    prop: "value", //这里使我们定义的v-model属性
    event: "change",
  },
  created() {
    this.chaeckDefaultValue()
  },
  watch: {
    value(val) {
      this.chaeckDefaultValue()
    },
    // 树节点搜索
    filterText(val) {
      this.$refs["tree"].filter(val)
    },
  },
  computed: {
    selfData() {
      return this.data
    },
    selfProps() {
      return {
        label: "label",
        children: "children",
        disabled: (data) => {
          return data.disabled
        },
        ...this.props,
      }
    },
  },
  mounted() {},
  methods: {
    // 树节点-showCheckbox选中
    handleCheckChange(val, { checkedNodes, checkedKeys }) {
      /* let nodes = [];
      if (this.leafOnly) {
        nodes = this.$refs["tree"].getCheckedNodes(this.leafOnly);
      } else {
        checkedNodes.forEach(i => {
          let parent_node =
            Array.isArray(i[this.selfProps.children]) &&
            i[this.selfProps.children].length > 0;
          nodes.push();
        });
      }
      */

      //单选且leafOnly，点击非leaf无效
      if (
        this.showCheckbox &&
        !this.multiCheck &&
        this.leafOnly &&
        val.children &&
        val.children.length > 0
      ) {
        if (this.selecteds[0]) {
          this.$refs["tree"].setCheckedKeys(
            [this.selecteds[0].id],
            this.leafOnly
          )
        } else {
          this.$refs["tree"].setCheckedKeys([], this.leafOnly)
        }
        return 0
      }

      //单选
      if (this.showCheckbox && !this.multiCheck) {
        if (checkedKeys.length > 0) {
          this.$refs["tree"].setCheckedKeys([val.id], this.leafOnly)
        } else {
          this.$refs["tree"].setCheckedKeys([], this.leafOnly)
        }
      }

      let nodes = this.$refs["tree"].getCheckedNodes(this.leafOnly)
      //单选且可选非leaf
      if (this.showCheckbox && !this.multiCheck && !this.leafOnly) {
        this.selecteds = nodes.length > 0 ? [nodes[0]] : []
        nodes = this.selecteds
      } else {
        this.selecteds = nodes
      }

      this.$emit("change", nodes)

      if (checkedKeys.length === 0 && this.noCheckedClose) {
        this.options_show = false
      }
    },
    // 树节点-点击选中
    treeItemClick(item, node) {
      if (this.showCheckbox || (this.leafOnly && !node.isLeaf)) {
        return
      }
      this.selecteds = [item]
      this.options_show = false
      this.$emit("change", this.selecteds)
    },
    // 清空数据
    clear() {
      this.selecteds = []
    },
    // 处理默认选中数据
    chaeckDefaultValue() {
      let val = this.value

      if (!val || (Array.isArray(val) && val.length === 0)) {
        this.selecteds = []
        if (!this.showCheckbox) return
        this.checked_keys = []
        this.$nextTick(() => {
          this.$refs["tree"].setCheckedKeys([])
        })
        return
      }
      // 多选处理
      if (this.showCheckbox) {
        this.checked_keys =
          typeof val[0] === "object" ? val.map((i) => i[this.nodeKey]) : val
        this.$nextTick(() => {
          this.selecteds = this.$refs["tree"].getCheckedNodes(this.leafOnly)
        })
        return
      }
      // 单选处理
      if (typeof val === "object") {
        let _val = Array.isArray(val) ? val[0] : val
        this.selecteds = [_val]
        this.$nextTick(() => {
          this.$refs["tree"].setCurrentNode(_val)
        })
      } else {
        this.$nextTick(() => {
          this.$refs["tree"].setCurrentKey(val)
          let _node = this.$refs["tree"].getCurrentNode()
          this.selecteds = _node ? [_node] : []
        })
      }
    },

    // 树节点筛选
    filterNode(value, data, node) {
      if (this.filterNodeMethod) return this.filterNodeMethod(value, data, node)
      if (!value) return true
      return data[this.selfProps.label].indexOf(value) !== -1
    },
  },
}
</script>

<style lang="scss">
.nui-tree-select {
  position: relative;
  display: inline-block;
  width: 240px;
  vertical-align: middle;
  outline: none;

  .selected-box {
    display: flex;
    border: 1px solid #dcdfe6;
    padding: 0 5px 0 8px;
    width: 100%;
    min-height: 36px;
    line-height: 34px;
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    &:focus {
      border-color: #409eff;
    }

    > .tag-box {
      display: inline-block;
      width: calc(100% - 20px);
      text-align: left;
      padding-bottom: 2px;
    }

    > .icon-box {
      float: right;
      display: flex;
      width: 20px;
      justify-content: center;
      align-items: Center;
      font-size: 14px;
      color: #c0c4cc;
    }
  }

  .el-tag .el-icon-close {
    line-height: 18px;
  }

  .selected-box.size-small {
    min-height: 32px;
    line-height: 30px;
  }
  .selected-box.size-mini {
    min-height: 28px;
    line-height: 26px;
  }
  .selected-box.size-default {
    min-height: 40px;
    line-height: 38px;
  }

  .no-wrap {
    height: 36px;
    > .tag-box {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .nui-disabled {
    background: #eee;
    cursor: no-drop;
    &:focus {
      border-color: #dcdfe6;
    }
    .el-tag__close {
      cursor: no-drop;
    }
  }

  .nui-select-tag {
    max-width: 100%;
    margin: 0 3px;
    text-overflow: ellipsis;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
    vertical-align: middle;
  }

  .nui-select-tag + .nui-select-tag {
  }
}
.popover-wrap {
}
.nui-treeselect-popover {
  box-sizing: border-box;
  height: 300px;
  > .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}

.nui-options-tree {
  display: inline-block !important;
  min-width: 100%;

  .el-tree-node__content {
    height: 34px;
    line-height: 34px;
  }
}

.nui-placeholder-box {
  padding-left: 5px;
  color: #c0c4cc;
  font-size: 14px;
  margin: 0;
}

.filter-input {
  padding: 0 9px;
}
</style>
