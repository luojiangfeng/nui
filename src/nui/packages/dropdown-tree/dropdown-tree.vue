<template>
  <div ref="wrap" class="nui-tree-select" :style="{ width: width }">
    <!-- 选中框区 -->
    <el-popover
      ref="popover"
      placement="bottom"
      :trigger="trigger"
      :disabled="disabled"
      :popper-class="popoverWrapClass"
      @show="popResize"
      v-model="options_show"
    >
      <el-scrollbar
        :style="{ height: popHeight }"
        class="nui-treeselect-popover"
      >
        <el-input
          v-if="filterable"
          v-model="filterText"
          class="filter-input"
          clearable
          :size="size"
          placeholder="输入关键词"
        ></el-input>

        <nui-tree
          ref="tree"
          v-bind="$attrs"
          v-on="$listeners"
          :leaf-only="leafOnly"
          :url="url"
          :data="selfData"
          :props="selfProps"
          :node-key="nodeKey"
          :show-checkbox="showCheckbox"
          :expand-on-click-node="expandOnClickNode"
          :filter-node-method="filterNode"
          :default-checked-keys="checked_keys"
          @change="handleChange"
          @node-click="treeItemClick"
          v-model="checked_keys"
        ></nui-tree>

        <!-- <el-tree
          ref="tree"
          class="nui-options-tree"
          highlight-current
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
        ></el-tree> -->
      </el-scrollbar>
      <!---->
      <div
        slot="reference"
        class="selected-box"
        :class="[{ 'nui-disabled': disabled, 'no-wrap': nowrap }, sizeClass]"
      >
        <div class="tag-box">
          <div v-show="selecteds.length > 0">
            <template v-if="!collapseTags">
              <el-tag
                closable
                :disable-transitions="true"
                :size="size"
                class="nui-select-tag"
                v-for="item in selecteds"
                :title="item[selfProps.label]"
                :key="item[nodeKey]"
                @close="tabClose(item[nodeKey])"
                >{{ item[selfProps.label] }}</el-tag
              >
            </template>
            <template v-else>
              <el-tag
                closable
                :disable-transitions="true"
                :size="size"
                class="nui-select-tag"
                :title="collapseTagsItem[selfProps.label]"
                @close="tabClose(collapseTagsItem[nodeKey])"
                >{{ collapseTagsItem[selfProps.label] }}</el-tag
              >
              <el-tag
                v-if="this.selecteds.length > 1"
                :size="size"
                class="nui-select-tag"
                >+{{ this.selecteds.length - 1 }}</el-tag
              >
            </template>
          </div>
          <p class="nui-placeholder-box" v-show="selecteds.length == 0">
            {{ placeholder }}
          </p>
        </div>
        <div class="icon-box">
          <transition name="fade-rotate" mode="out-in">
            <i class="el-icon-arrow-down" v-if="!options_show" key="top"></i>
            <i class="el-icon-arrow-up" v-else key="btm"></i>
          </transition>
        </div>
      </div>
    </el-popover>
  </div>
</template>

<script>
import { randomChar } from '../../utils.js'
/**
 * name:"树形select"
 * description:"基于element-ui的tab和tree的树形下拉选项框"
 * props:
 * data -> 数据
 * props -> 数据options
 * nodeKey -> 数据key字段
 * selected -> 选中数据
 * showCheckbox -> 是否多选
 * emit:
 * selected -> 选中数据
 */
export default {
  name: 'nui-dropdown-tree',

  props: {
    url: {
      type: String,
    },
    popHeight: {
      type: String,
      default: '260px',
    },
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
    // node-key
    nodeKey: {
      type: String,
      default: 'id',
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
    // 多选时是否将选中值按文字的形式展示
    collapseTags: {
      type: Boolean,
      default: false,
    },
    // 是否只可选叶子节点
    leafOnly: {
      type: Boolean,
      default: false,
    },
    // 宽度
    width: {
      type: String,
      default: '100%',
    },
    // 触发方式 click/focus/hover/manual
    trigger: {
      type: String,
      default: 'click',
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 是否允许多行显示
    nowrap: {
      type: Boolean,
      default: false,
    },
    // 多选时，清空选项关闭
    noCheckedClose: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '请选择',
    },
    size: {
      type: String,
      default: 'default',
    },
    // 是否使用搜索
    filterable: {
      type: Boolean,
      default: false,
    },
    // 自定义筛选函数
    filterNodeMethod: Function,
  },
  data() {
    return {
      innerData: this.data,
      selecteds: [], // 选中数据
      options_show: false, // 是否显示下拉选项
      checked_keys: [], // 默认选中
      filterText: '',
      popoverWrapClass: '',
    }
  },
  model: {
    prop: 'value', //这里使我们定义的v-model属性
    event: 'change',
  },

  watch: {
    value(val) {
      this.chaeckDefaultValue()
    },
    // 树节点搜索
    filterText(val) {
      this.$refs['tree'].filter(val)
    },
  },
  computed: {
    selfData() {
      return this.innerData
    },
    selfProps() {
      return {
        label: 'label',
        children: 'children',
        disabled: (data) => {
          return data.disabled
        },
        ...this.props,
      }
    },
    sizeClass() {
      let size_class = 'size-medium'
      switch (this.size) {
        case 'medium':
          size_class = 'size-medium'
          break
        case 'small':
          size_class = 'size-small'
          break
        case 'default':
          size_class = 'size-default'
          break
        case 'mini':
          size_class = 'size-mini'
          break
        default:
          size_class = 'size-medium'
          break
      }
      return size_class
    },
    // 开启collapseTags时首个选中值
    collapseTagsItem() {
      return this.selecteds[0] || {}
    },
  },
  created() {
    if (this.url) {
      this.$http
        .get(this.url)
        .then((res) => {
          this.innerData = res.data
        })
        .catch((err) => {})
    }

    this.popoverWrapClass = `popover-wrap-${randomChar(12)}`
  },
  mounted() {
    let that = this

    this.$refs['tree'] = this.$refs['tree'].$refs['tree']

    this.$nextTick(() => {
      this.chaeckDefaultValue()
    })

    window.addEventListener('resize', this.popResize, false)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.popResize, false)
  },
  methods: {
    popResize() {
      if (this.$refs['tree']) {
        let dom = document.querySelector('.' + this.popoverWrapClass)

        dom.style.width = this.$refs.wrap.offsetWidth + 'px'
        dom.style.minWidth = '160px'
      }
    },
    handleChange(val) {
      let that = this

      setTimeout(() => {
        that.selecteds = val
      }, 0)

      this.$nextTick(() => {
        setTimeout(() => {
          let myEvent = new Event('resize') // resize是指resize事件
          window.dispatchEvent(myEvent) // 触发window的resize事件
        }, 0)
      })
    },
    // 树节点-点击选中
    treeItemClick(item, node) {
      if (this.showCheckbox || (this.leafOnly && !node.isLeaf)) {
        return
      }
      this.selecteds = [item]
      this.options_show = false
      this.$emit('change', this.selecteds)
    },
    // tag标签关闭
    tabClose(Id) {
      if (this.disabled) return
      if (this.showCheckbox) {
        this.$refs['tree'].setChecked(Id, false, true)
        this.selecteds = this.$refs['tree'].getCheckedNodes()
        if (this.selecteds.length === 0 && this.noCheckedClose)
          this.options_show = false
      } else {
        this.selecteds = []
        this.$refs['tree'].setCurrentKey(null)
        this.options_show = false
      }
      this.$emit('change', this.selecteds)

      this.$nextTick(() => {
        let myEvent = new Event('resize') // resize是指resize事件
        window.dispatchEvent(myEvent) // 触发window的resize事件
      })
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
          this.$refs['tree'].setCheckedKeys([])
        })
        return
      }
      // 多选处理
      if (this.showCheckbox) {
        this.checked_keys =
          typeof val[0] === 'object' ? val.map((i) => i[this.nodeKey]) : val
        this.$nextTick(() => {
          this.selecteds = this.$refs['tree'].getCheckedNodes(this.leafOnly)
        })
        return
      }
      // 单选处理
      if (typeof val === 'object') {
        let _val = Array.isArray(val) ? val[0] : val
        this.selecteds = [_val]
        this.$nextTick(() => {
          this.$refs['tree'].setCurrentNode(_val)
        })
      } else {
        this.$nextTick(() => {
          this.$refs['tree'].setCurrentKey(val)
          let _node = this.$refs['tree'].getCurrentNode()
          this.selecteds = _node ? [_node] : []
        })
      }
    },
    // 关闭
    closeOptions() {
      this.options_show = false
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
  margin-top: 5px;
  position: relative;
  display: inline-block;
  width: 240px;
  vertical-align: middle;
  outline: none;
  background: #fff;

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

      > div {
        height: 100%;
        flex-wrap: wrap;
        display: flex;
        align-items: center;
      }
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
    margin: 2px 3px;
    text-overflow: ellipsis;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
    vertical-align: middle;
  }

  .nui-select-tag + .nui-select-tag {
  }
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

  .el-input__suffix {
    padding-right: 5px;
  }
}
</style>
