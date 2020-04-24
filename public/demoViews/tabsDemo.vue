<template>
  <div class="page-main">
    <h2>Tabs 标签页</h2>
    <div class="demo-block">
      <nui-tabs v-model="activeName" :tabs="tabsArr" @tab-click="handleClick">
      </nui-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "second",
      tabsArr: [
        {
          label: "用户管理",
          name: "first",
        },
        {
          label: "配置管理",
          name: "second",
        },
        {
          label: "角色管理",
          name: "third",
          disabled: true,
        },
        {
          label: "角色管理",
          name: "four",
          closable: true,
        },
      ],
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
  },
}
</script>
