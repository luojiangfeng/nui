<template>
  <div class="demo">
    <el-tabs v-model="activeTab" class="page-tab">
      <el-tab-pane label="文档" name="doc">
        <nui-table
          ref="nuiTable"
          inset
          :config="tableConfig"
          :row-key="getRowKey"
          :row-class-name="setRowClass"
          :stripe="true"
          @cell-click="rowClick"
          @selection-change="handlesSelectionChange"
        >
          <!-- <template v-slot:titleBar>自定义头部</template> -->
        </nui-table>

        <div class="page-main">
          <h3>完全自定义column</h3>
          <h5>
            <p>
              一般情况下，针对某列的自定义普通html模板。只需要用到封装好的的template属性和templateHead属性就可以了（如第一个表格）。但是，这种方式不能解析组件，绑定事件等。
            </p>
            <p>
              如果需要用到elementUI的某列el-table-column全面完整的模板功能（可插入组件，绑定自定义数据、事件等），可以通过tbody插槽,自定义列传入原生的el-table-colunm组件，其他列传入封装好的nui-table-colunm组件。
            </p>
          </h5>
          <div class="demo-block">
            <nui-table
              ref="nuiTable"
              max-height="360"
              :config="tableConfig"
              :row-key="getRowKey"
              :row-class-name="setRowClass"
              :stripe="true"
              @cell-click="rowClick"
              @selection-change="handlesSelectionChange"
            >
              <template v-slot:tbody>
                <template v-for="(item, index) in tableConfig.column">
                  <el-table-column
                    v-if="item.label == '登录名'"
                    :key="item.index"
                    :label="item.label"
                    :prop="item.prop"
                    :min-width="item.minWidth"
                    :align="item.align || 'center'"
                    v-bind="item.$attrs"
                  >
                    <template v-slot:header>
                      <strong>登录名</strong>
                      <div class="th-loginName-input">
                        <nui-input
                          v-model="testColHeadInput"
                          size="mini"
                          placeholder="输入关键字搜索"
                        />
                        <nui-button
                          type="primary"
                          icon="el-icon-search"
                        />
                      </div>
                    </template>

                    <template slot-scope="scope">
                      <el-tag> {{ scope.row[item.prop] }}</el-tag>
                    </template>
                  </el-table-column>

                  <nui-table-column v-else :key="index" :config="item" />
                </template>
              </template>
            </nui-table>
          </div>

          <article class="intro-list">
            <h3>Table Attributes</h3>
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
                  <td>config</td>
                  <td>表格配置（详细属性见下表）</td>
                  <td>object</td>
                  <td>—</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>inset</td>
                  <td>是否是内嵌表格（如果为true表示内嵌，没有两侧边框等）。</td>
                  <td>boolean</td>
                  <td>—</td>
                  <td>—</td>
                </tr>
                <tr>
                  <td>justify-height</td>
                  <td>是否根据页面高度变化，自适应改变表格的高度。当为true的时候，默认距离页面底部90px。也可以传一个对象如:justify-height="{bottom:120}"，自定义距离页面底部多少px。</td>
                  <td>boolean，object</td>
                  <td>—</td>
                  <td>false</td>
                </tr>
              </tbody>
            </table>
            <h6>
              注：一般情况下只列出与elementUI不同的属性。其他elementUI的原生属性都可以正常使用，不再专门列出。
            </h6>

            <h3>Table Config Attributes</h3>
            <el-table
              :row-class-name="expandRowClass"
              cell-class-name="expandTableCell"
              :data="configDocTableData"
              style="width: 100%"
            >
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-table
                    :row-class-name="expandRowClass"
                    :show-header="false"
                    :data="props.row.children"
                    style="width: 100%"
                  >
                    <el-table-column v-if="props.row.children" type="expand">
                      <template slot-scope="props">
                        <el-table
                          :show-header="false"
                          :data="props.row.children"
                          style="width: 100%"
                        >
                          <el-table-column
                            width="130px"
                            prop="name"
                          />
                          <el-table-column
                            prop="intro"
                            width="500px"
                          />
                          <el-table-column
                            prop="type"
                            width="180px"
                          />

                          <el-table-column
                            prop="default"
                          />
                        </el-table>
                      </template>
                    </el-table-column>
                    <el-table-column
                      width="130px"
                      prop="name"
                    />
                    <el-table-column
                      prop="intro"
                      width="500px"
                    />
                    <el-table-column
                      prop="type"
                      width="180px"
                    />

                    <el-table-column
                      prop="default"
                    />
                  </el-table>
                </template>
              </el-table-column>
              <el-table-column
                width="130px"
                label="参数"
                prop="name"
              />
              <el-table-column
                label="说明"
                width="500px"
                prop="intro"
              />
              <el-table-column
                label="类型"
                prop="type"
                width="180px"
              />

              <el-table-column
                label="默认值"
                prop="default"
              />
            </el-table>

            <h3>Form Item Attributes</h3>

            <h5>所有支持的表单组件，会抽出一些常用的属性，以供直接配置，其他原组件支持的属性都可以通过设置到$attrs里来配置，所有事件可以通过设置到$listeners来配置。</h5>
            <el-table
              :row-class-name="expandRowClass"
              :data="formItemTableData"
              style="width: 100%"
            >
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-table
                    :row-class-name="expandRowClass"
                    :show-header="false"
                    :data="props.row.children"
                    style="width: 100%"
                  >
                    <el-table-column v-if="props.row.children" type="expand">
                      <template slot-scope="props">
                        <el-table
                          :show-header="false"
                          :data="props.row.children"
                          style="width: 100%"
                        >
                          <el-table-column
                            width="130px"
                            prop="name"
                          />
                          <el-table-column
                            prop="intro"
                            width="500px"
                          />
                          <el-table-column
                            prop="type"
                            width="180px"
                          />

                          <el-table-column
                            prop="default"
                          />
                        </el-table>
                      </template>
                    </el-table-column>
                    <el-table-column
                      width="130px"
                      prop="name"
                    />
                    <el-table-column
                      prop="intro"
                      width="500px"
                    />
                    <el-table-column
                      prop="type"
                      width="180px"
                    />

                    <el-table-column
                      prop="default"
                    />
                  </el-table>
                </template>
              </el-table-column>
              <el-table-column
                width="150px"
                label="参数"
                prop="name"
              />
              <el-table-column
                label="说明"
                width="500px"
                prop="intro"
              />
              <el-table-column
                label="类型"
                prop="type"
                width="180px"
              />

              <el-table-column
                label="默认值"
                prop="default"
              />
            </el-table>
          </article>

        </div>
      </el-tab-pane>
      <el-tab-pane label="查看代码" name="code">
        <show-code
          v-if="activeTab == 'code'"
          url="demoViews/tableDemo.vue"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'DemoTable',
  data() {
    return {
      activeTab: 'doc',
      tableConfig: {
        /* ================================= 接口有关 ===============================*/
        api: {
          url: '/api/getEntUserList.json',
          params: {
            // 接口需要的参数。"当前页page","每页数量pageSize"默认传递，可以不在此写
            dateRange: '',
            userName: '',
            company: '',
            sex: '',
            hobby: [] // checkbox要用数组
          },
          resPropsName: {
            // 返回的json主要字段名称&获取方式
            code: 'code', // 解析接口状态
            msg: 'msg', // 解析提示文本
            rows: 'data.rows', // 解析数据列表数组
            total: 'data.total' // 解析数据列表长度
          }
        },
        /* ========titleBar:表格顶部（表格外）的标题行：包括表格标题，表单，按钮等。=========*/
        titleBar: [
          {
            // style: { background: "#f7fbff" },
            form: [
              {
                ref: 'dateRange', // 与api里面的params对应
                type: 'date', // 日期选择器
                label: '入职日期:',
                // width: '200px',
                dateType: 'daterange'
              },
              {
                ref: 'userName',
                type: 'input', // 普通文本输入框
                label: '用户姓名:',
                placeholder: '请输入用户名',
                clearable: true, // 默认true
                // 其他elementUI的属性
                $attrs: {
                  maxlength: 6
                },
                // 其他elementUI的事件
                $listeners: {
                  blur: function(e) {
                    console.log(e.target.value)
                  }
                }
              },
              {
                ref: 'company',
                type: 'select', // 下拉选择器
                label: '所属企业:',
                minWidth: '120px',
                options: [
                  {
                    value: '0',
                    label: '华为技术有限公司'
                  },
                  {
                    value: '1',
                    label: '中山TCL制冷制热设备有限公司'
                  },
                  {
                    value: '2',
                    label: '惠州市普安电子有限公司'
                  }
                ],

                placeholder: '请选择企业',
                changeWidth: true, // 是否根据选择内容改变宽度。。默认为true
                url: '/api/getLocationList.json', // 接口获取参数，radio、checkbox用法相同
                valueName: 'orgId', // 接口获取参数，radio、checkbox用法相同
                labelName: 'orgName' // 接口获取参数，radio、checkbox用法相同
              },
              {
                ref: 'sex',
                type: 'radio', // 单选radio
                label: '性别:',
                options: [
                  {
                    value: '0',
                    label: '男'
                  },
                  {
                    value: '1',
                    label: '女'
                  }
                ]
              },
              {
                type: 'submit', // 表单提交submit
                text: '查询',
                icon: 'el-icon-search',
                fun: this.tableSearch
              }
            ]
          },
          {
            // style: { background: "#f7fbff" },
            form: [
              {
                ref: 'hobby',
                type: 'checkbox', // 单选checkbox
                label: '兴趣爱好:',
                options: [
                  {
                    value: '0',
                    label: '体育运动'
                  },
                  {
                    value: '1',
                    label: '音乐'
                  },
                  {
                    value: '2',
                    label: '乐器'
                  },
                  {
                    value: '3',
                    label: '电影'
                  }
                ]
              }
            ]
          },
          {
            title: {
              text: '企业职工信息'
              // class: ""
              // style: { color: "#666", fontWeight: "normal" }
            },
            form: [
              {
                type: 'button',
                text: '添加',
                circle: true,
                icon: 'el-icon-plus',
                buttonType: 'success',
                fun: this.cancelSelect // 测试调用el-table的methods
              },
              {
                type: 'button',
                text: '修改',
                icon: 'el-icon-edit',
                buttonType: 'warning',
                fun: this.cancelSelect // 测试调用el-table的methods
              },
              {
                type: 'button',
                text: '删除',
                icon: 'el-icon-delete',
                buttonType: 'danger',
                fun: this.cancelSelect // 测试调用el-table的methods
              },
              {
                type: 'button',
                text: '导出',
                icon: 'el-icon-download',
                loading: true,
                plain: true,
                round: true,
                fun: this.tableExport
              }
            ]
          }
        ],
        /* ================================= 表格内容 ===============================*/
        data: [], // 表格数据
        total: 1,
        currentPage: 1,
        pageSize: 10,
        // 是否显示复选框selection或序列号index或折叠expand
        firstColumn: {
          type: 'selection',
          reserveSelection: true
        },
        secondColumn: {
          type: 'index',
          label: '序号'
        },
        thirdColumn: {
          type: 'expand',
          hidden: true
        },
        // 表格列设置
        column: [
          {
            prop: 'userName',
            label: '用户名',
            minWidth: '100',
            sortable: true,

            /* 2种方式自定义模板字符串 （局限性：并不能解析类似<el-input>的各种组件，绑定数据等，适用于单纯的样式展示）。要用到更全面的功能，需要用tbody插槽插入完整的el-table-column */
            // 第一种是直接传html字符串，其中{{data}}代表当前字段的值
            // template: "<div class='test-tpl'>{{data}}</div>",

            // 第二种传一个函数，参数为当前字段的值，返回一个html字符串（其中{{data}}代表当前字段的值）
            template: function(data) {
              let res

              if (data.length === 2) {
                res = "<div class='test-tpl word2'>{{data}}</div>"
              } else {
                res = "<div class='test-tpl'>{{data}}</div>"
              }
              return res
            }
          },
          {
            prop: 'joinDate',
            label: '入职日期',
            minWidth: '100',
            hidden: false,
            sortable: true,
            align: 'left'
          },
          {
            prop: 'loginName',
            label: '登录名',
            minWidth: '100',
            clickFun: this.loginNameClick, // 点击事件，回调函数第一个参数是本行的数据
            $attrs: {
              // 其他elementUI的属性
              'class-name': 'test-col'
            },

            // 表头的自定义模板和内容的模板类似。只不过data代表的是label的值
            templateHead: function(data) {
              const res = '<div >{{data}} <i class="el-icon-search"></i></div> '
              return res
            }
          },
          {
            prop: 'pay',
            label: '工资',
            minWidth: '100',
            sortable: true,
            // 过滤器：内置了几种常用的（人民币格式：“￥”，小数转百分比：“%”），也可以传自定义的filter,例如每3位加逗号num3。
            filters: { method: 'num3' }
          },
          {
            prop: 'dataStatus',
            label: '状态',
            minWidth: '60',
            filters: { param: 'ROLE_STATUS' }
          },
          {
            prop: 'entName',
            label: '所属企业',
            minWidth: '200',
            ellipsis: false // 当超过列宽时，是否显示省略号。默认为false。当为true的时候会单行溢出省略。
          }
        ],
        // 表格内操作列
        operatorColumn: {
          fixed: 'right',
          width: 120,
          label: '操作',
          buttonArr: [
            {
              text: '详情',
              type: 'default',
              fun: this.tableRowDetail,
              hidden: false // hidden可以是boolean类型，或者function类型
            },
            {
              icon: 'el-icon-delete',

              circle: true,
              type: 'danger',
              fun: this.cancelSelect, // 测试调用el-table的methods
              // hidden为function类型，row为当前行数据
              hidden: function(row) {
                if (row.entName == '华为技术有限公司') {
                  return true
                } else {
                  return false
                }
              }
            }
          ]
        },
        /* ================================= 翻页 ===============================*/
        pagination: {
          showSize: true, // 是否可选择每页数量
          align: 'center', // 对齐方式
          background: true, // 是否显示背景色
          $attrs: {
            // 其他elementUI的属性
            small: false // 尺寸
          }
        }
      },
      chosenIds: [],
      testColHeadInput: '',
      configDocTableData: [{
        name: 'api',
        intro: '接口有关的配置。(详细属性见展开表格)',
        type: 'object',
        default: '——',
        children: [
          {
            name: 'url',
            intro: '接口url地址。（默认改变url会自动刷新表格）',
            type: 'string',
            default: '——'
          },
          {
            name: 'autoRefresh',
            intro: '当表格url改变时，是否自动刷新表格数据。',
            type: 'boolean',
            default: 'true'
          },
          {
            name: 'params',
            intro: '查询表单时，需要传递给后端的参数。"当前页page","每页数量size"默认传递，可以不在此写',
            type: 'string',
            default: '——'
          },
          {
            name: 'resPropsName',
            intro: '返回的json主要字段名称&获取方式',
            type: 'object',
            default: `{
            code: 'code', // 解析接口状态
            msg: 'msg', // 解析提示文本
            rows: 'data.rows', // 解析数据列表数组
            total: 'data.total' // 解析数据列表长度
          }`
          },
          {
            name: 'callback',
            intro: '接口查询成功后的回调函数',
            type: 'function',
            default: '——'
          }
        ]
      }, {
        name: 'titleBar',
        intro: '表格顶部（表格外）的标题行：包括表格标题，表单元素，按钮等。（本身为一个数组，支持多行显示。展开表为数组每项的对象属性）',
        type: 'array',
        default: '——',
        children: [
          {
            name: 'style',
            intro: '自定义行内样式。同vue的:style设置方法',
            type: 'object',
            default: '——'
          },
          {
            name: 'title',
            intro: '表格的标题',
            type: 'object',
            default: '——',
            children: [
              {
                name: 'text',
                intro: '标题内容',
                type: 'string',
                default: '——'
              },
              {
                name: 'style',
                intro: '自定义行内样式。同vue的:style设置方法',
                type: 'object',
                default: '——'
              },
              {
                name: 'class',
                intro: '自定义class名',
                type: 'string',
                default: '——'
              }
            ]
          },
          {
            name: 'form',
            intro: `表单元素(因内容较多，详情见下方单独的“Form Item Attributes”)
          `,
            type: 'array',
            default: '——'
          }

        ]
      }, {
        name: 'data',
        intro: '表格的数据。若通过url获取表格数据，此字段可以为空。',
        type: 'array',
        default: `——`
      },
      {
        name: 'currentPage',
        intro: '当前页。',
        type: 'number',
        default: '——'
      },
      {
        name: 'pageSize',
        intro: '每页的行数',
        type: 'number',
        default: '——'
      },
      {
        name: 'firstColumn (secondColumn)  (thirdColumn)',
        intro: '表格前面的固定列，第一列（第二列）（第三列）是否显示复选框selection或序列号index或折叠expand。（原本只有firstColumn，为了使之前项目代码改动最小，就不改成数组形式了 。而且第二、三列的情况很少）',
        type: 'object',
        default: '——',
        children: [
          {
            name: 'type',
            intro: '复选框selection或序列号index或折叠expand',
            type: '枚举["selection","index","expand"]',
            default: '——'
          },
          {
            name: 'hidden',
            intro: '是否隐藏',
            type: 'boolean',
            default: 'false'
          },
          {
            name: 'label',
            intro: '表头字段。type=index或type=expand时有效。',
            type: 'string',
            default: '——'
          },
          {
            name: 'reserve-selection',
            intro: '仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）',
            type: 'Boolean',
            default: 'false'
          }
        ]
      },
      {
        name: 'column',
        intro: '接口返回的表格数据列，或data中的数据列。（展开表为数组每项的属性）',
        type: 'array',
        default: '——',
        children: [
          {
            name: 'prop',
            intro: '对应列内容的字段名(属性名)',
            type: 'string',
            default: '——'
          },
          {
            name: 'label',
            intro: '表头显示的标题',
            type: 'string',
            default: '——'
          },
          {
            name: 'width',
            intro: '对应列的宽度',
            type: 'string',
            default: '——'
          },
          {
            name: 'minWidth',
            intro: '对应列的最小宽度，与 width 的区别是 width 是固定的，minWidth 会把剩余宽度按比例分配给设置了 min-width 的列',
            type: 'string',
            default: '——'
          },
          {
            name: 'sortable',
            intro: `对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件`,
            type: 'boolean, string',
            default: 'false'
          },
          {
            name: 'align',
            intro: '对齐方式',
            type: 'left/center/right',
            default: 'center'
          },
          {
            name: 'hidden',
            intro: '隐藏当前列',
            type: 'boolean',
            default: 'false'
          },
          {
            name: 'ellipsis',
            intro: '当内容过长自动隐藏多出部分，鼠标hover时以tooltip的形式显示全部内容',
            type: 'boolean',
            default: 'false'
          },
          {
            name: 'clickFun',
            intro: '点击事件，回调函数第一个参数是本行的数据',
            type: 'function',
            default: '——'
          },
          {
            name: 'filters',
            intro: `过滤器。封装了几种常用的，比如: filters:{ param: 'ROLE_STATUS' }，会根据@/utils/const.js里的常量对应关系，将接口数字转化为中文显示。如果传其他过滤方法，如filters: { method: '￥' }内置了几种常用的（人民币格式：“￥”，小数转百分比：“%”），也可以传自定义的filter,例如filters: { method: 'num3' }每3位加逗号num3。其他自定义的全局过滤器也可以使用。
            `,
            type: 'object',
            default: '——'
          },
          {
            name: 'template',
            intro: `自定义html模板，支持字符串和函数2种格式:第一种是直接传html字符串，如template: "<div class='test-tpl'>{{data}}</div>,”其中{{data}}代表当前字段的值。第二种函数：参数为当前字段的值，需要返回一个html字符串（其中的{{data}}代表当前字段的值）。（局限性：不能解析类似<el-input>的各种组件，绑定数据等，适用于单纯的样式展示）。要用到更全面的功能，需要用tbody插槽插入完整的el-table-column组件。`,
            type: 'function',
            default: '——'
          },

          {
            name: '$attrs',
            intro: '其他未列出的原生el-table-column属性，放入此对象内设置',
            type: 'object',
            default: '——'
          },
          {
            name: '$listeners',
            intro: '其他未列出的原生el-table-column事件，放入此对象内设置',
            type: 'object',
            default: '——'
          }
        ]
      },
      {
        name: 'operatorColumn',
        intro: '操作列',
        type: 'object',
        default: '——',
        children: [
          {
            name: 'type',
            intro: `封装常用的操作列功能。现支持排序功能type=sort：封装的地址格式基准示例/sys/orgunit/{sortProp}/{orderType}，默认sortProp为当前行的row.id，只需传sortBaseUrl就行了/sys/orgunit/。也可以通过sortProp属性自定义对应的值。\n `,
            type: '排序列“sort”',
            default: `示例：operatorColumn: {
          type: 'sort',
          sortBaseUrl: '/sys/orgunit/' // sortProp: 'orgId',  如果row.id不存在，可以指定相应的属性名
        },`
          },
          {
            name: 'label',
            intro: '表头显示的标题',
            type: 'string',
            default: '排序'
          },
          {
            name: 'fixed',
            intro: '列固定在左侧或者右侧',
            type: 'left/right',
            default: 'right'
          },
          {
            name: 'hidden',
            intro: '隐藏当前列',
            type: 'boolean',
            default: 'false'
          },
          {
            name: 'width',
            intro: '对应列的宽度',
            type: 'string',
            default: '——'
          },
          {
            name: 'minWidth',
            intro: '对应列的最小宽度，与 width 的区别是 width 是固定的，minWidth 会把剩余宽度按比例分配给设置了 min-width 的列',
            type: 'string',
            default: '——'
          },
          {
            name: 'buttonArr',
            intro: '操作按钮数组。每项按钮的属性，和Form Item Attributes里的button组件一样',
            type: 'array',
            default: '——'
          }
        ]
      }, {
        name: 'pagination',
        intro: '翻页组件。（若不需要翻页组件，直接去掉本对象即可）',
        type: 'object',
        default: '——',
        children: [
          {
            name: 'showSize',
            intro: '是否可选择每页数量',
            type: 'boolean',
            default: 'true'
          },
          {
            name: 'align',
            intro: '对齐方式',
            type: 'left/center/right',
            default: 'right'
          },
          {
            name: 'background',
            intro: '是否显示背景色',
            type: 'boolean',
            default: 'true'
          },

          {
            name: '$attrs',
            intro: '其他未列出的原生el-table-column属性，放入此对象内设置',
            type: 'object',
            default: '——'
          },
          {
            name: '$listeners',
            intro: '其他未列出的原生el-table-column事件，放入此对象内设置',
            type: 'object',
            default: '——'
          }

        ]
      }],
      //
      formItemTableData: [{
        name: 'type',
        intro: '表单组件的类型，现在共支持5种：文本框input、下拉选择select、单选框radio、多选框checkbox、日期选择date、下拉树dropdownTree',
        type: 'input/select/radio/checkbox/date/dropdownTree',
        default: '——'
      }, {
        name: 'ref',
        intro: '与api里面的params对应，作为查询参数。',
        type: 'string',
        default: '——'
      }, {
        name: 'label',
        intro: 'form-item显示的label名称',
        type: 'string',
        default: '——'
      }, {
        name: 'placeholder',
        intro: '占位符',
        type: 'string',
        default: '——'
      }, {
        name: 'width',
        intro: '组件本身宽度',
        type: 'string',
        default: '——'
      }, {
        name: 'minWidth',
        intro: '组件本身最小宽度',
        type: 'string',
        default: '——'
      }, {
        name: 'maxWidth',
        intro: '组件本身最大宽度',
        type: 'string',
        default: '——'
      }, {
        name: 'itemWidth',
        intro: 'form-item(包括label元素)的宽度',
        type: 'string',
        default: '——'
      }, {
        name: 'itemMinWidth',
        intro: 'form-item(包括label元素)的最小宽度',
        type: 'string',
        default: '——'
      }, {
        name: 'itemMaxWidth',
        intro: 'form-item(包括label元素)的最大宽度',
        type: 'string',
        default: '——'
      }, {
        name: '$attrs',
        intro: '其他未列出的elementUI原生属性，放入此对象内设置',
        type: 'object',
        default: '——'
      },
      {
        name: '$listeners',
        intro: '其他未列出的elementUI原生事件，放入此对象内设置',
        type: 'object',
        default: '——'
      }, {
        name: '‘input’专有属性',
        intro: 'type=input时支持的属性',
        type: '——',
        default: '——',
        children: [
          {
            name: 'clearable',
            intro: '是否显示清空按钮',
            type: 'boolean',
            default: 'true'
          }
        ]
      }, {
        name: '‘select’专有属性',
        intro: 'type=select时支持的属性',
        type: '——',
        default: '——',
        children: [
          {
            name: 'change-width',
            intro: '是否根据当前的内容宽度，自动改变组件宽度',
            type: 'boolean',
            default: 'true'
          },
          {
            name: 'clearable',
            intro: '是否显示清空按钮',
            type: 'boolean',
            default: 'true'
          },
          {
            name: 'options',
            intro: '下拉选项数组。（当通过url接口获取时，可以不设置此属性）',
            type: 'array',
            default: '——'
          },
          {
            name: 'url',
            intro: '通过接口url获取下拉数据',
            type: 'string',
            default: '——'
          },
          {
            name: 'value-name',
            intro: '接口返回的，对应option的value的属性名（一般为ID等唯一值）',
            type: 'string',
            default: '——'
          },
          {
            name: 'label-name',
            intro: '接口返回的，对应option的label的属性名（一般为name等实际展示的名称）',
            type: 'string',
            default: '——'
          }
        ]
      }, {
        name: '‘radio’专有属性',
        intro: 'type=radio时支持的属性',
        type: '——',
        default: '——',
        children: [
          {
            name: 'options',
            intro: '下拉选项数组。（当通过url接口获取时，可以不设置此属性）',
            type: 'array',
            default: '——'
          },
          {
            name: 'url',
            intro: '通过接口url获取下拉数据',
            type: 'string',
            default: '——'
          },
          {
            name: 'value-name',
            intro: '接口返回的，对应option的value的属性名（一般为ID等唯一值）',
            type: 'string',
            default: '——'
          },
          {
            name: 'label-name',
            intro: '接口返回的，对应option的label的属性名（一般为name等实际展示的名称）',
            type: 'string',
            default: '——'
          }
        ]
      }, {
        name: '‘checkbox’专有属性',
        intro: 'type=checkbox时支持的属性',
        type: '——',
        default: '——',
        children: [
          {
            name: 'options',
            intro: '下拉选项数组。（当通过url接口获取时，可以不设置此属性）',
            type: 'array',
            default: '——'
          },
          {
            name: 'url',
            intro: '通过接口url获取下拉数据',
            type: 'string',
            default: '——'
          },
          {
            name: 'value-name',
            intro: '接口返回的，对应option的value的属性名（一般为ID等唯一值）',
            type: 'string',
            default: '——'
          },
          {
            name: 'label-name',
            intro: '接口返回的，对应option的label的属性名（一般为name等实际展示的名称）',
            type: 'string',
            default: '——'
          }
        ]
      }, {
        name: '‘date’专有属性',
        intro: 'type=date时支持的属性',
        type: '——',
        default: '——',
        children: [
          {
            name: 'dateType',
            intro: 'date组件的显示类型',
            type: 'year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange',
            default: 'date'
          },
          {
            name: 'value-format',
            intro: '可选，绑定值的格式。不指定则绑定值为 Date 对象。（可选格式见elementUI的DatePicker官方文档）',
            type: 'string',
            default: '——'
          }

        ]
      }, {
        name: '‘dropdownTree’专有属性',
        intro: 'type=dropdownTree时支持的属性。此组件用的比较少，nui-dropdown-tree的属性基本都可以直接使用。',
        type: '——',
        default: '——'
      }]
    }
  },
  created() {},
  mounted() {},
  methods: {
    tableSearch() {
      console.log('搜索表格')
    },
    tableRowDetail(row) {
      this.$alert('这是一段内容', row.userName, {
        confirmButtonText: '确定',
        callback: (action) => {}
      })
    },
    expandRowClass({ row, rowIndex }) {
      if (!row.children || row.children.length === 0) {
        return 'row-expand-cover'
      }
    },

    tableExport() {
      this.$notify({
        title: '示例',
        message: '导出成功',
        type: 'success'
      })
    },
    loginNameClick(row) {
      alert(row.loginName)
    },
    // 获取列表数据的唯一标识
    getRowKey(row) {
      return row.id
    },
    setRowClass(row, index) {
      if (row.row.dataStatus == '0') {
        return 'row-disable'
      }
    },
    rowClick(row) {
      console.log(row)
    },
    cancelSelect(rows) {
      this.$refs.nuiTable.$refs['el-table'].clearSelection()
    },
    // 选中的数据
    handlesSelectionChange(val) {
      this.chosenIds = val.map((item) => item.id)
      console.log(this.chosenIds)
    },
    goAuthorize(row) {
      this.$message({
        message: row.userName + ',授权成功',
        type: 'success'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.th-loginName-input {
  display: flex;
  .el-input {
    width: 145px;
  }
  button {
    margin-left: 5px;
    padding: 0 8px;
  }
}

/deep/.expandTableCell{
  // color: $c-m;
  background: rgb(247, 250, 253);
}

/deep/.row-disable {
  color: #aaa;
}
/deep/.row-expand-cover .el-table__expand-icon{visibility:hidden;}
/deep/.test-col {
  color: green;
}

/deep/ .test-tpl {
  background: rgb(243, 244, 247);
  border-radius: 5px;

  &.word2 {
    background: rgb(245, 234, 242);
  }
}
</style>
