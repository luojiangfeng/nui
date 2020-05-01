<!-- 比elementUI多的属性：width;options(选项数组);change-width(是否根据选项文字长度自动改变宽度) -->
<template>
  <div class="page-main">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
        <h2>DropdownTree 下拉树</h2>
        <h3></h3>

        <h3>单选下拉树</h3>
        <div class="demo-block">
          <nui-dropdown-tree
            leaf
            width="300px"
            default-expand-all
            :data="treeData"
            placeholder="选择内容"
            @change="hindleChanged"
            v-model="selectedRadio"
          >
          </nui-dropdown-tree>
        </div>

        <h3>多选下拉树</h3>
        <div class="demo-block">
          <nui-dropdown-tree
            width="300px"
            show-checkbox
            :value="testArr"
            :default-expanded-keys="testArr"
            :data="treeData"
            @change="hindleChanged"
            v-model="selectedCheckbox"
          ></nui-dropdown-tree>
        </div>

        <article class="intro-list">
          <h3>DropdownTree Attributes</h3>
          <table>
            <thead>
              <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>width</td>
                <td>宽度</td>
                <td>string</td>
                <td>—</td>
                <td>100%</td>
              </tr>
              <tr>
                <td>pop-height</td>
                <td>弹出层的高度</td>
                <td>string</td>
                <td>—</td>
                <td>260px</td>
              </tr>
              <tr>
                <td>data</td>
                <td>树形的数据</td>
                <td>array</td>
                <td>—</td>
                <td>[]</td>
              </tr>
              <tr>
                <td>checkbox</td>
                <td>树形是否可以多选</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
              </tr>
              <tr>
                <td>leaf</td>
                <td>是否只能选择子叶</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>是否禁用</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
              </tr>
              <tr>
                <td>placeholder</td>
                <td>没有选择任何内容时的占位符</td>
                <td>string</td>
                <td>—</td>
                <td>请选择</td>
              </tr>
            </tbody>
          </table>
          <h6>
            注：一般情况下只列出与elementUI不同的属性。其他elementUI的原生属性都可以正常使用，不再专门列出。
          </h6>
        </article>
      </el-tab-pane>
      <el-tab-pane label="查看代码" name="code">
        <show-code
          v-if="activeTab == 'code'"
          url="demoViews/selectDemo.vue"
        ></show-code>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "DemoRadio",
  data() {
    return {
      testArr: [4],
      activeTab: "doc",
      code: "",
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
                {
                  id: 11,
                  label: "萝岗区",
                },
                {
                  id: 12,
                  label: "黄浦区",
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
      selectedCheckbox: [], // 多选树下拉框选中数据
      selectedRadio: [], // 单选树下拉框选中数据
    }
  },
  created() {},
  mounted() {},
  methods: {
    hindleChanged(val) {
      console.log(val)
      // console.log(this.selected)
    },
  },
}
</script>

<style scoped lang="scss"></style>
