<template>
  <div class="page-main">
    <h2>Tree 树形控件</h2>

    <h3>普通单选</h3>
    <div class="demo-block">
      <nui-tree
        default-expand-all
        :data="tree1.treeData"
        v-model="tree1.selectedNodes"
      ></nui-tree>

      <p>当前选中值：{{ tree1.selectedNodes }}</p>
    </div>

    <h3>带选框的单选</h3>
    <div class="demo-block">
      <nui-tree
        show-checkbox
        :multi-check="false"
        :data="tree2.treeData"
        v-model="tree2.selectedNodes"
      ></nui-tree>

      <p>当前选中值：{{ tree2.selectedNodes }}</p>
    </div>

    <h3>多选</h3>
    <h5>
      当设置show-checkbox时，默认是可以多选的。增加了一个check-type属性，当设置check-type="radio"时，可变为单选模式。
    </h5>
    <div class="demo-block">
      <nui-tree
        show-checkbox
        :default-expanded-keys="[9]"
        :data="tree3.treeData"
        v-model="tree3.selectedNodes"
      ></nui-tree>

      <p>当前选中值：{{ tree3.selectedNodes }}</p>

      <!-- <nui-dropdown-tree
        show-checkbox
        leaf-only
        filterable
        :data="tree2.treeData"
        v-model="tree2.selectedNodes"
      ></nui-dropdown-tree> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tree1: {
        treeData: [
          {
            id: 1,
            label: "中餐",
            children: [
              {
                id: 4,
                label: "湘菜",
                children: [
                  {
                    id: 9,
                    label: "剁椒鱼头",
                  },
                  {
                    id: 10,
                    label: "啤酒鸭",
                  },
                ],
              },
              {
                id: 11,
                label: "川菜",
                children: [
                  {
                    id: 12,
                    label: "麻婆豆腐",
                  },
                  {
                    id: 13,
                    label: "麻辣火锅",
                  },
                  {
                    id: 14,
                    label: "宫保鸡丁",
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            label: "西餐",
            children: [
              {
                id: 5,
                label: "汉堡包",
              },
              {
                id: 6,
                label: "意大利面",
              },
            ],
          },
        ],
        selectedNodes: [],
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
        selectedNodes: [],
      },

      tree3: {
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
        selectedNodes: [
          {
            id: 10,
            label: "越秀区",
          },
        ],
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
