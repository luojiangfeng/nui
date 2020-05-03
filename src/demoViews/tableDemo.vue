<template>
  <div class="demo">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
        <nui-table
          ref="nuiTable"
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
                        ></nui-button>
                      </div>
                    </template>

                    <template slot-scope="scope">
                      <el-tag> {{ scope.row[item.prop] }}</el-tag>
                    </template>
                  </el-table-column>

                  <nui-table-column v-else :key="index" :config="item">
                  </nui-table-column>
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
              </tbody>
            </table>

            <h3>Table Config Attributes</h3>
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
              </tbody>
            </table>
            <h6>
              注：一般情况下只列出与elementUI不同的属性。其他elementUI的原生属性都可以正常使用，不再专门列出。
            </h6>
          </article>
        </div>
      </el-tab-pane>
      <el-tab-pane label="查看代码" name="code">
        <show-code
          v-if="activeTab == 'code'"
          url="demoViews/tableDemo.vue"
        ></show-code>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "DemoTable",
  data() {
    return {
      activeTab: "doc",
      tableConfig: {
        /*================================= 接口有关 ===============================*/
        api: {
          url: "/api/getEntUserList.json",
          params: {
            //接口需要的参数。"当前页page","每页数量pageSize"默认传递，可以不在此写
            dateRange: "",
            userName: "",
            company: "",
            sex: "",
          },
          resPropsName: {
            //返回的json主要字段名称&获取方式
            code: "code", //解析接口状态
            msg: "msg", //解析提示文本
            rows: "data.rows", //解析数据列表数组
            total: "data.total", //解析数据列表长度
          },
        },
        /*========titleBar:表格顶部（表格外）的标题行：包括表格标题，表单，按钮等。=========*/
        titleBar: [
          {
            // style: { background: "#f7fbff" },
            form: [
              {
                ref: "dateRange", //与api里面的params对应
                type: "date", //日期选择器
                label: "入职日期:",
                dateType: "daterange",
              },
              {
                ref: "userName",
                type: "input", //普通文本输入框
                label: "用户姓名:",
                // width: "220px",
                placeholder: "请输入用户名",
                clearable: true, //默认true
                //其他elementUI的属性
                $attrs: {
                  maxlength: 6,
                },
                //其他elementUI的事件
                $listeners: {
                  blur: function(e) {
                    console.log(e.target.value)
                  },
                },
              },
              {
                ref: "company",
                type: "select", //下拉选择器
                label: "所属企业:",
                options: [
                  {
                    value: "0",
                    label: "华为技术有限公司",
                  },
                  {
                    value: "1",
                    label: "中山TCL制冷制热设备有限公司",
                  },
                  {
                    value: "2",
                    label: "惠州市普安电子有限公司",
                  },
                ],
                width: "120px",
                placeholder: "请选择企业",
                changeWidth: true, //是否根据选择内容改变宽度。。默认为true
                $attrs: {
                  clearable: true,
                },
              },
              {
                ref: "sex",
                type: "radio", //单选radio
                label: "性别:",
                options: [
                  {
                    value: "0",
                    label: "男",
                  },
                  {
                    value: "1",
                    label: "女",
                  },
                ],
              },
              {
                type: "submit", //表单提交submit
                text: "查询",
                icon: "el-icon-search",
                fun: this.tableSearch,
              },
            ],
          },
          {
            title: {
              text: "企业职工信息",
              // class: ""
              // style: { color: "#666", fontWeight: "normal" }
            },
            form: [
              {
                type: "button",
                text: "添加",
                circle: true,
                icon: "el-icon-plus",
                buttonType: "success",
                fun: this.cancelSelect, //测试调用el-table的methods
              },
              {
                type: "button",
                text: "修改",
                icon: "el-icon-edit",
                buttonType: "warning",
                fun: this.cancelSelect, //测试调用el-table的methods
              },
              {
                type: "button",
                text: "删除",
                icon: "el-icon-delete",
                buttonType: "danger",
                fun: this.cancelSelect, //测试调用el-table的methods
              },
              {
                type: "button",
                text: "导出",
                icon: "el-icon-download",
                loading: true,
                plain: true,
                round: true,
                fun: this.tableExport,
              },
            ],
          },
        ],
        /*================================= 表格内容 ===============================*/
        data: [], // 表格数据
        total: 1,
        currentPage: 1,
        pageSize: 10,
        // 是否显示复选框selection或序列号index或折叠expand
        firstColumn: {
          type: "selection",
          reserveSelection: true,
          hidden: true,
        },
        // 表格列设置
        column: [
          {
            prop: "userName",
            label: "用户名",
            minWidth: "100",
            sortable: true,
            /* 2种方式自定义模板字符串 （局限性：并不能解析类似<el-input>的各种组件，绑定数据等，适用于单纯的样式展示）。要用到更全面的功能，需要用tbody插槽插入完整的el-table-column */
            //第一种是直接传html字符串，其中{{data}}代表当前字段的值
            // template: "<div class='test-tpl'>{{data}}</div>",

            //第二种传一个函数，参数为当前字段的值，返回一个html字符串（其中{{data}}代表当前字段的值）
            template: function(data) {
              let res

              if (data.length == 2) {
                res = "<div class='test-tpl word2'>{{data}}</div>"
              } else {
                res = "<div class='test-tpl'>{{data}}</div>"
              }
              return res
            },
          },
          {
            prop: "joinDate",
            label: "入职日期",
            minWidth: "100",
            hidden: false,
            sortable: true,
            align: "left",
          },
          {
            prop: "loginName",
            label: "登录名",
            minWidth: "100",
            $attrs: {
              //其他elementUI的属性
              "class-name": "test-col",
            },

            //表头的自定义模板和内容的模板类似。只不过data代表的是label的值
            templateHead: function(data) {
              let res = '<div >{{data}} <i class="el-icon-search"></i></div> '
              return res
            },
          },
          {
            prop: "pay",
            label: "工资",
            minWidth: "100",
            sortable: true,
            //过滤器：内置了几种常用的（人民币格式：“￥”，小数转百分比：“%”），也可以传自定义的filter,例如每3位加逗号num3。
            filters: { method: "num3" },
          },
          {
            prop: "dataStatus",
            label: "状态",
            minWidth: "60",
            filters: { param: "ROLE_STATUS" },
          },
          {
            prop: "entName",
            label: "所属企业",
            minWidth: "200",
            ellipsis: false, //当超过列宽时，是否显示省略号。默认为true。当为false的时候会换行显示完整的内容。
          },
        ],
        // 表格内操作列
        operatorColumn: {
          fixed: "right",
          minWidth: 120,
          label: "操作",
          buttonArr: [
            {
              text: "详情",
              type: "default",
              fun: this.tableRowDetail,
            },
            {
              icon: "el-icon-delete",
              hidden: false,
              circle: true,
              type: "danger",
              fun: this.cancelSelect, //测试调用el-table的methods
            },
          ],
        },
        /*================================= 翻页 ===============================*/
        pagination: {
          showSize: true, //是否可选择每页数量
          align: "center", //对齐方式
          background: true, //是否显示背景色
          $attrs: {
            //其他elementUI的属性
            small: false, //尺寸
          },
        },
      },
      chosenIds: [],
      testColHeadInput: "",
    }
  },
  created() {},
  mounted() {},
  methods: {
    tableSearch() {
      console.log("搜索表格")
    },
    tableRowDetail(row) {
      this.$alert("这是一段内容", row.userName, {
        confirmButtonText: "确定",
        callback: (action) => {},
      })
    },
    tableExport() {
      this.$notify({
        title: "示例",
        message: "导出成功",
        type: "success",
      })
    },
    // 获取列表数据的唯一标识
    getRowKey(row) {
      return row.id
    },
    setRowClass(row, index) {
      if (row.row.dataStatus == "0") {
        return "row-disable"
      }
    },
    rowClick(row) {
      console.log(row)
    },
    cancelSelect(rows) {
      this.$refs.nuiTable.$refs["el-table"].clearSelection()
    },
    // 选中的数据
    handlesSelectionChange(val) {
      this.chosenIds = val.map((item) => item.id)
      console.log(this.chosenIds)
    },
    goAuthorize(row) {
      this.$message({
        message: row.userName + ",授权成功",
        type: "success",
      })
    },
  },
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

/deep/.row-disable {
  color: #aaa;
}

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
