<template>
  <div class="page-main">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
        <h2>DropdownTree 下拉树</h2>
        <h3></h3>

        <h3>默认单选下拉树</h3>
        <div class="demo-block">
          <nui-dropdown-tree
            leaf-only
            :data="treeData"
            placeholder="选择内容"
            @change="hindleChanged"
            v-model="selectedRadio1"
          >
          </nui-dropdown-tree>
        </div>

        <h3>带选框的单选下拉树</h3>
        <h5>
          建议只在leaf-only为true的时候使用带选框的单选，如果leaf-only为false的时候要用单选建议不带选框。如果leaf-only为false的时候，又带选框，则为了避免混乱：若某节点是父节点的唯一子节点，且被选中，则等价于其父节点被选中。（如示例的数据，选择“广州”等价于选择“广东”）
        </h5>
        <div class="demo-block">
          <p>只能选择子叶节点，leaf-only为true</p>
          <nui-dropdown-tree
            show-checkbox
            leaf-only
            :multi-check="false"
            :data="treeData"
            placeholder="选择内容"
            @change="hindleChanged"
            v-model="selectedRadio2"
          >
          </nui-dropdown-tree>

          <p>可以选择所有节点，leaf-only为false</p>

          <nui-dropdown-tree
            show-checkbox
            :multi-check="false"
            :data="treeData"
            placeholder="选择内容"
            @change="hindleChanged"
            v-model="selectedRadio3"
          >
          </nui-dropdown-tree>
        </div>

        <h3>多选下拉树</h3>
        <div class="demo-block">
          <nui-dropdown-tree
            show-checkbox
            leaf-only
            :default-expanded-keys="[4]"
            :data="treeData"
            filterable
            @change="hindleChanged"
            v-model="selectedCheckbox"
          ></nui-dropdown-tree>
        </div>

        <h3>通过接口url传入树数据</h3>
        <h5>
          通过url获取后台数据。通过elementUI原有的props属性传入接口数据对应的label属性名，isLeaf属性名。通过node-key属性传入接口数据对应的id或key等唯一的值。
        </h5>
        <div class="demo-block">
          <nui-dropdown-tree
            leaf-only
            url="api/getTree.json"
            :props="treeApi.props"
            node-key="key"
            filterable
            @change="hindleChanged"
            v-model="treeApi.selectedNodes"
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
                <td>url</td>
                <td>
                  通过接口地址获取接口数据。注意因为接口数据的属性名可能不一致，可以通过elementUI原有的props属性传入接口数据对应的label属性名，isLeaf属性名。通过node-key属性传入接口数据对应的id（或key）等唯一的值。
                </td>
                <td>string</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>v-model</td>
                <td>当前选中的数据(可在此处设置默认选中的值)</td>
                <td>array</td>
                <td>—</td>
                <td>[]</td>
              </tr>
              <tr>
                <td>leaf-only</td>
                <td>是否只能选择子叶</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
              </tr>
              <tr>
                <td>multi-check</td>
                <td>当show-checkbox为true的时候(即显示选框时)，开启多选功能</td>
                <td>boolean</td>
                <td>—</td>
                <td>true</td>
              </tr>
              <tr>
                <td>trigger</td>
                <td>弹出层触发方式</td>
                <td>枚举</td>
                <td>click/focus/hover/manual</td>
                <td>click</td>
              </tr>
              <tr>
                <td>size</td>
                <td>尺寸</td>
                <td>枚举</td>
                <td>default/medium/small/mini</td>
                <td>default</td>
              </tr>
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
              <tr>
                <td>collapse-tags</td>
                <td>多选时，对于选中的数量大于1的部分用数字显示</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
              </tr>
              <tr>
                <td>expand-on-click-node</td>
                <td>
                  是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为
                  false，则只有点箭头图标的时候才会展开或者收缩节点。
                </td>
                <td>boolean</td>
                <td>—</td>
                <td><em>true</em></td>
              </tr>
              <tr>
                <td>filterable</td>
                <td>
                  是否开启搜索功能，设置为true后，默认为搜索是否存在相应的字符
                </td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
              </tr>
              <tr>
                <td>filter-node-method</td>
                <td>
                  自定义筛选时执行的方法，返回 true 表示这个节点可以显示，返回
                  false 则表示这个节点会被隐藏
                </td>
                <td>Function(value, data, node)</td>
                <td>—</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>

          <h3>Refs 内部元素</h3>
          <h5>
            调用内部组件的方法：因为nui是基于elementUI二次封装的，一般情况没做处理的话，调用elmentUI组件的方法，需要再加一层。
          </h5>
          <table>
            <thead>
              <tr>
                <th>ref名称</th>
                <th>说明</th>
                <th>获取方式(假设nui-dropdown-tree的ref=dropdownTree)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>popover</td>
                <td>原生el-popover组件</td>
                <td>this.$refs.dropdownTree.$refs.popover</td>
              </tr>
              <tr>
                <td>tree</td>
                <td>原生el-tree组件</td>
                <td>this.$refs.dropdownTree.$refs.tree</td>
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
          url="demoViews/DropdownTreeDemo.vue"
        ></show-code>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'DropdownTree',
  data() {
    return {
      activeTab: 'doc',
      code: '',
      treeData: [
        {
          id: 1,
          label: '广东',
          children: [
            {
              id: 4,
              label: '广州',
              children: [
                {
                  id: 9,
                  label: '天河区',
                },
                {
                  id: 10,
                  label: '越秀区',
                },
                {
                  id: 11,
                  label: '萝岗区',
                },
                {
                  id: 12,
                  label: '黄浦区',
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: '上海',
          children: [
            {
              id: 5,
              label: '静安区',
            },
            {
              id: 6,
              label: '浦东区',
            },
          ],
        },
      ],
      treeApi: {
        props: {
          label: 'title',
          isLeaf: 'expand',
        },
        selectedNodes: [],
      },
      selectedCheckbox: [
        {
          id: 11,
          label: '萝岗区',
        },
        {
          id: 6,
          label: '浦东区',
        },
      ], // 多选树下拉框选中数据
      selectedRadio1: [], // 单选树下拉框选中数据
      selectedRadio2: [], // 单选树下拉框选中数据
      selectedRadio3: [], // 单选树下拉框选中数据
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
