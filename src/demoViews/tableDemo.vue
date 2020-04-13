<template>
  <div class="demo">
    <nui-table
      ref="nuiTable"
      :config="tableConfig"
      :row-key="getRowKey"
      :stripe="true"
      @cell-click="rowClick"
      @selection-change="handlesSelectionChange"
    >
      <!-- <template v-slot:titleBar>自定义头部</template> -->
    </nui-table>
  </div>
</template>

<script>
export default {
  name: "DemoTable",
  data() {
    return {
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
          { prop: "userName", label: "用户名", minWidth: "100", sort: true },
          {
            prop: "joinDate",
            label: "入职日期",
            minWidth: "120",
            hidden: false,
            sort: true,
            align: "left",
          },
          {
            prop: "loginName",
            label: "登录名",
            minWidth: "200",
            $attr: {
              //其他elementUI的属性
              "class-name": "test-col",
            },
          },
          {
            prop: "pay",
            label: "工资",
            minWidth: "100",
            sort: true,
            //过滤器：内置了几种常用的（人民币格式：“￥”，小数转百分比：“%”），也可以传自定义的filter,例如每3位加逗号num3。
            filters: { method: "num3" },
          },
          {
            prop: "dataStatus",
            label: "状态",
            minWidth: "160",
            filters: { param: "ROLE_STATUS" },
          },
          { prop: "entName", label: "所属企业", minWidth: "200" },
        ],
        // 行文字变色：entId值为17时，文字变色
        changeRowColor: { key: "entId", val: "17", txtStyle: "#ccc" },
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
/deep/ .test-col {
  color: green;
}
</style>
