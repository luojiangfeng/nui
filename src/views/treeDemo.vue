<template>
  <div class="page-main">
    <h2>Tree 树形控件</h2>
    <div class="demo-block">
      <!-- 比elementUI多的属性：width， -->
      <nui-tree
        :data="data"
        :props="defaultProps"
        @node-click="handleNodeClick"
      ></nui-tree>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    }
  }
}
</script>

<style scoped lang="scss">
/deep/ .test-col {
  color: green;
}
</style>
