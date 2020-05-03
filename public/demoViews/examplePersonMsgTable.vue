<template>
  <div class="demo">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
        <nui-table ref="nuiTable" :config="tableConfig">
          <!-- <template v-slot:titleBar>自定义头部</template> -->
        </nui-table>
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
          url: "/api/getPersonInfoList.json",
          params: {
            //接口需要的参数。"当前页page","每页数量pageSize"默认传递，可以不在此写
            // dateRange: "",
            // userName: "",
            // company: "",
            // sex: "",
          },
          resPropsName: {
            rows: "data.result",
            total: "data.totalCount",
          },
        },
        /*========titleBar:表格顶部（表格外）的标题行：包括表格标题，表单，按钮等。=========*/
        titleBar: [
          {
            // style: { background: "#f7fbff" },
            form: [
              {
                ref: "userName",
                type: "input", //普通文本输入框
                label: "姓名:",
                // width: "220px",
                placeholder: "请输入姓名",
              },
              {
                ref: "dateRange", //与api里面的params对应
                type: "date", //日期选择器
                label: "出生日期:",
                dateType: "daterange",
              },

              {
                ref: "company",
                type: "select", //下拉选择器
                label: "籍贯:",
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
                placeholder: "请选择籍贯",
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
        total: 0,
        currentPage: 1,
        pageSize: 10,
        // 表格列设置
        column: [
          {
            prop: "name",
            label: "姓名",
          },
          {
            prop: "sex",
            label: "性别",
            sortable: true,
            filters: { param: "SEX" },
          },
          {
            prop: "hobby",
            label: "兴趣爱好",
            ellipsis: false,
            minWidth: "220",
          },
          {
            prop: "birthday",
            label: "出生日期",
            minWidth: "120",
            sortable: true,
          },
          {
            prop: "mobile",
            label: "手机号",
            minWidth: "110",
          },

          {
            prop: "email",
            label: "邮箱",
            minWidth: "160",
          },
          {
            prop: "entryTime",
            label: "入职时间",
            minWidth: "160",
          },
          {
            prop: "workTime",
            label: "上班时间",
          },
          {
            prop: "political",
            label: "政治面貌",
            filters: { param: "POLITICAL_ROLE" },
          },
          {
            prop: "nativePlace",
            label: "籍贯",
            minWidth: "120",
          },
          {
            prop: "usualAddress",
            label: "常住地",
            minWidth: "200",
          },
          {
            prop: "curProject",
            label: "当前参与项目",
            minWidth: "210",
          },
          {
            prop: "allProject",
            label: "所有参与项目",
            minWidth: "160",
          },
        ],
        /*================================= 翻页 ===============================*/
        pagination: {
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
.demo {
  padding-right: 20px;
}
</style>
