<template>
  <div class="page-main">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
        <h2>Tree 树形控件</h2>

        <h3>普通单选</h3>
        <div class="demo-block">
          <nui-tree
            :data="tree1.treeData"
            v-model="tree1.selectedNodes"
          ></nui-tree>

          <p>当前选中值：{{ tree1.selectedNodes }}</p>
        </div>

        <h3>带选框的单选</h3>
        <h5>
          <p>
            可通过设置leaf-only属性来控制“是否只能选择子叶节点”。如果不设置leaf-only或者为false，则父节点可以被选择，此时该父节点的所有子节点全部选中。
          </p>
          <p>
            建议只在leaf-only为true的时候使用带选框的单选，如果leaf-only为false的时候要用单选建议不带选框。如果leaf-only为false的时候，又带选框，则为了避免混乱：若某节点是父节点的唯一子节点，且被选中，则等价于其父节点被选中。（如示例的数据，选择“广州”等价于选择“广东”）
          </p>
        </h5>
        <div class="demo-block">
          <nui-tree
            leaf-only
            default-expand-all
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
            leaf-only
            show-checkbox
            :default-expanded-keys="[9]"
            :data="tree3.treeData"
            v-model="tree3.selectedNodes"
          ></nui-tree>

          <p>当前选中值：{{ tree3.selectedNodes }}</p>
        </div>

        <h3>通过url获取树形结构数据</h3>
        <h5>
          通过url获取后台数据。通过elementUI原有的props属性传入接口数据对应的label属性名，isLeaf属性名。通过node-key属性传入接口数据对应的id或key等唯一的值。
        </h5>
        <div class="demo-block">
          <nui-tree
            url="api/getTree.json"
            :props="treeApi.props"
            node-key="key"
            v-model="treeApi.selectedNodes"
          ></nui-tree>

          <p>当前选中值：{{ treeApi.selectedNodes }}</p>
        </div>

        <h3>自定义文字前的图标</h3>
        <h5>
          通过设置custom-icon-config属性，来设置相对于条件下的class类名，该class类名将会应用于文字前的一个
          i 标签中。
        </h5>
        <div class="demo-block">
          <nui-tree
            leaf-only
            :data="tree4.treeData"
            :custom-icon-config="tree4.treeCustomIconConfig"
            v-model="tree4.selectedNodes"
          ></nui-tree>

          <p>
            当不需要判断分类，全部用相同的图标时，只需传数组的第一项，且只传class属性。
          </p>
          <p>例如treeCustomIconConfig: [ { class: 'icon-company'} ]</p>
        </div>

        <article class="intro-list">
          <h3>Tree Attributes</h3>
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

              <tr>
                <td>custom-icon-config</td>
                <td>
                  是否在文字前使用自定义的图标。数组的每一项为一个对象，对象属性见下表。
                </td>
                <td>Array</td>
                <td>—</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>

          <h3>Custom-icon-config Attributes</h3>
          <h5>
            当不需要判断分类，全部用相同的图标时，只需传数组的第一项，且只传class属性即可。
          </h5>
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
                <td>key</td>
                <td>对应node.data中的属性名</td>
                <td>string</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>value</td>
                <td>对应key的值。当key的值等于value时，应用class类名</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>class</td>
                <td>相应图标的类名（实际会将此类名应用到一个i标签上）</td>
                <td>string</td>
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
                <th>获取方式(假设nui-tree的ref=tree)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>tree</td>
                <td>原生el-tree组件</td>
                <td>this.$refs.tree.$refs.tree</td>
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
          url="demoViews/treeDemo.vue"
        ></show-code>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'doc',

      tree1: {
        treeData: [
          {
            id: 1,
            label: '中餐',
            children: [
              {
                id: 4,
                label: '湘菜',
                children: [
                  {
                    id: 9,
                    label: '剁椒鱼头',
                  },
                  {
                    id: 10,
                    label: '啤酒鸭',
                  },
                ],
              },
              {
                id: 11,
                label: '川菜',
                children: [
                  {
                    id: 12,
                    label: '麻婆豆腐',
                  },
                  {
                    id: 13,
                    label: '麻辣火锅',
                  },
                  {
                    id: 14,
                    label: '宫保鸡丁',
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            label: '西餐',
            children: [
              {
                id: 5,
                label: '汉堡包',
              },
              {
                id: 6,
                label: '意大利面',
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
        selectedNodes: [],
      },

      tree3: {
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
        selectedNodes: [
          {
            id: 10,
            label: '越秀区',
          },
        ],
      },

      tree4: {
        treeData: [
          {
            id: 1,
            label: '广东',
            type: 1,
            children: [
              {
                id: 4,
                label: '广州',
                type: 1,
                children: [
                  {
                    id: 9,
                    label: '天河区',
                    type: 0,
                  },
                  {
                    id: 10,
                    label: '越秀区',
                    type: 0,
                  },
                ],
              },
            ],
          },
          {
            id: 2,
            label: '上海',
            type: 1,
            children: [
              {
                id: 5,
                label: '静安区',
                type: 0,
              },
              {
                id: 6,
                label: '浦东区',
                type: 0,
              },
            ],
          },
          {
            id: 33,
            label: '钓鱼岛宾馆',
            type: 0,
          },
        ],
        treeCustomIconConfig: [
          {
            key: 'type',
            value: 1,
            class: 'icon-company',
          },
          {
            key: 'type',
            value: 0,
            class: 'icon-department',
          },
        ],
        selectedNodes: [
          {
            id: 10,
            label: '越秀区',
          },
        ],
      },

      treeApi: {
        props: {
          label: 'title',
          isLeaf: 'expand',
        },
        selectedNodes: [],
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

/deep/.icon-company {
  width: 20px;
  height: 20px;
  @include bg('icons/icon-company.png');
}

/deep/.icon-department {
  width: 20px;
  height: 20px;
  @include bg('icons/icon-department.png');
}
</style>
