<template>
  <el-dropdown :style="{ width: width }" trigger="click" :placement="placement">
    <el-button :style="{ width: width }" type="default">
      <div v-if="checkType == 'radio'" class="show-wrap" ref="showWrap">
        <strong class="show-value" :class="ifCheckedNode ? 'on' : ''">
          {{ ifCheckedNode ? tree.checkedNode[0].label : placeholder }}</strong
        ><i v-if="!ifCheckedNode" class="el-icon-arrow-down el-icon--right"></i>

        <i
          v-else
          @click="clearFun"
          class="el-icon-circle-close el-icon--right icon-clear"
        ></i>
      </div>

      <div v-else class="show-wrap" ref="showWrap">
        <strong class="show-value" :class="ifCheckedNode ? 'on' : ''">
          {{ ifCheckedNode ? tree.checkedNode[0].label : placeholder }}</strong
        ><i v-if="!ifCheckedNode" class="el-icon-arrow-down el-icon--right"></i>

        <i
          v-else
          @click="clearFun"
          class="el-icon-circle-close el-icon--right icon-clear"
        ></i>
      </div>
    </el-button>
    <el-dropdown-menu ref="dropdownMenu" slot="dropdown">
      <nui-tree
        ref="tree"
        :data="data"
        :check-type="checkType"
        :check-on-click-node="false"
        @check="handleCheck"
        show-checkbox
        :check-strictly="false"
        node-key="id"
      >
      </nui-tree>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: "nui-dropdown-tree-old",
  props: {
    checkType: {
      type: String,
      default: "checkbox",
    },
    width: {
      type: String,
      default: "100%",
    },
    placeholder: {
      type: String,
      default: "请选择",
    },
    placement: {
      type: String,
      default: "bottom-start",
    },
    data: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      tree: {
        checkedNode: [],
      },
    }
  },
  computed: {
    ifCheckedNode() {
      return (
        this.tree.checkedNode.length > 0 && this.tree.checkedNode[0].label != ""
      )
    },
  },
  created() {},
  mounted() {
    this.$refs.dropdownMenu.$el.style.minWidth =
      this.$refs.showWrap.offsetWidth + 42 + "px"
  },
  methods: {
    handleCheck(data, checked, node) {
      let checkedNode = this.$refs.tree.$refs.tree.getCheckedNodes()
      this.tree.checkedNode = checkedNode

      console.log(this.tree.checkedNode)

      if (this.checkType === "radio") {
        //单选
      } else {
        //多选
      }
    },
    clearFun() {
      this.$refs.tree.$refs.tree.setCheckedNodes([])
      this.tree.checkedNode = []
    },
  },
}
</script>
<style scoped lang="scss">
.show-value {
  color: #aaa;
  padding-right: 10px;

  &.on {
    color: #606266;
  }
}

.icon-clear {
  color: #aaa;
  position: absolute;
  right: 10px;

  &:hover {
    color: #606266;
  }
}

.el-dropdown-menu {
  padding: 10px;
  max-height: 350px;
  overflow: auto;
}

::-webkit-scrollbar {
  /*滚动条整体样式*/
  margin-top: 110px;
  width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
  // height: 1px;
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  background: rgba(144, 147, 153, 0.3);
}
::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  border-radius: 10px;
  // background: #ededed;
}
</style>
