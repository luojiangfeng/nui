<template>
  <div class="page-main">
    <h2>Tree 树形控件</h2>
    <div class="demo-block">
      <!-- 比elementUI多的属性：width， -->
      <nui-tree
        :data="tree1.data"
        :props="tree1.defaultProps"
        @node-click="handleNodeClick"
      ></nui-tree>
    </div>

    <h3>单选</h3>
    <h5>
      当设置show-checkbox时，默认是可以多选的。增加了一个check-type属性，当设置check-type="radio"时，可变为单选模式。
    </h5>
    <div class="demo-block">
      <!-- 比elementUI多的属性：width， -->
      <nui-tree
        :data="tree2.treeData"
        check-type="radio"
        @check="handleRadioClick"
        ref="tree"
        :check-on-click-node="false"
        show-checkbox
        :check-strictly="false"
        node-key="id"
      >
      </nui-tree>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tree1: {
        data: [
          {
            label: "一级 1",
            children: [
              {
                label: "二级 1-1",
                children: [
                  {
                    label: "三级 1-1-1",
                  },
                ],
              },
            ],
          },
          {
            label: "一级 2",
            children: [
              {
                label: "二级 2-1",
                children: [
                  {
                    label: "三级 2-1-1",
                  },
                ],
              },
              {
                label: "二级 2-2",
                children: [
                  {
                    label: "三级 2-2-1",
                  },
                ],
              },
            ],
          },
          {
            label: "一级 3",
            children: [
              {
                label: "二级 3-1",
                children: [
                  {
                    label: "三级 3-1-1",
                  },
                ],
              },
              {
                label: "二级 3-2",
                children: [
                  {
                    label: "三级 3-2-1",
                  },
                ],
              },
            ],
          },
        ],
        defaultProps: {
          children: "children",
          label: "label",
        },
      },
      tree2: {
        treeData: [
          {
            id: 1,
            label: "广东",
            children: [
              {
                id: 4,
                label: "广州",
                children: [
                  {
                    id: 9,
                    label: "天河区",
                  },
                  {
                    id: 10,
                    label: "越秀区",
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            label: "上海",
            children: [
              {
                id: 5,
                label: "静安区",
              },
              {
                id: 6,
                label: "浦东区",
              },
            ],
          },
        ],
        checkedNode: {},
      },
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    },

    handleRadioClick(data, checked, node) {
      let checkedNode = this.$refs.tree.$refs.tree.getCheckedNodes()[0]

      this.tree2.checkedNode = checkedNode

      console.log(checkedNode.id, checkedNode.label)
    },
  },
}
</script>

<style scoped lang="scss">
/deep/ .test-col {
  color: green;
}
</style>
