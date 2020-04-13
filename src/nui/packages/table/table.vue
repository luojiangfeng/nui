<template>
  <div class="nui-table">
    <!-- 表格标题&操作按钮等 -->
    <slot name="titleBar">
      <template v-for="(eachBar, index) in config.titleBar">
        <div
          :key="index"
          v-if="eachBar && config.titleBar.length > 0"
          :class="eachBar.class"
          :style="eachBar.style"
          class="title-bar"
        >
          <strong
            v-if="eachBar.title"
            :class="eachBar.title.class"
            :style="eachBar.title.style"
            class="table-title"
            >{{ eachBar.title.text }}</strong
          >
          <div class="handleBar">
            <!-- 表单元素 -->
            <el-form :inline="true" size="small ">
              <template v-for="(item, index) in eachBar.form">
                <el-form-item
                  v-show="!item.hidden"
                  v-if="item.type == 'input'"
                  :ref="item.ref"
                  :label="item.label"
                  :key="index"
                  :style="{
                    width: item.width,
                  }"
                >
                  <el-input
                    v-model="config.api.params[item.ref]"
                    :placeholder="item.placeholder"
                    :clearable="item.clearable || true"
                    v-bind="item.$attrs"
                    v-on="item.$listeners"
                  ></el-input>
                </el-form-item>

                <el-form-item
                  v-show="!item.hidden"
                  v-if="item.type == 'select'"
                  :ref="item.ref"
                  :label="item.label"
                  :key="index"
                >
                  <nui-select
                    v-model="config.api.params[item.ref]"
                    :options="item.options"
                    :change-width="
                      item.changeWidth == undefined ? true : item.changeWidth
                    "
                    :placeholder="
                      item.placeholder == undefined
                        ? '请选择'
                        : item.placeholder
                    "
                    clearable
                    v-bind="item.$attrs"
                    v-on="item.$listeners"
                    :width="item.width"
                  >
                  </nui-select>

                  <!-- <el-select
                    v-model="config.api.params[item.ref]"
                    v-bind="item.$attrs"
                    v-on="item.$listeners"
                    :id="item.ref"
                    :style="{
                      width: item.width
                    }"
                    placeholder="请选择"
                  >
                    <el-option
                      v-for="(option, index) in item.options"
                      :key="index"
                      :label="option.label"
                      :value="option.value"
                    >
                    </el-option>
                  </el-select> -->
                </el-form-item>

                <el-form-item
                  v-show="!item.hidden"
                  v-if="item.type == 'radio'"
                  :ref="item.ref"
                  :label="item.label"
                  :key="index"
                >
                  <el-radio
                    v-for="(option, index) in item.options"
                    :key="index"
                    :label="option.value"
                    v-model="config.api.params[item.ref]"
                    >{{ option.label }}
                  </el-radio>
                </el-form-item>

                <el-form-item
                  v-show="!item.hidden"
                  v-if="item.type == 'date'"
                  :key="index"
                  :label="item.label"
                >
                  <el-date-picker
                    :ref="item.ref"
                    :type="item.dateType"
                    v-model="config.api.params[item.ref]"
                    range-separator="━"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                  >
                  </el-date-picker>
                </el-form-item>
              </template>
            </el-form>

            <template v-for="(item, index) in eachBar.form">
              <!-- 按钮 -->
              <el-button
                v-show="!item.hidden"
                v-if="item.type == 'button'"
                :key="index"
                @click="formFun(item)"
                :icon="item.icon"
                :type="item.buttonType || 'primary'"
                :plain="item.plain"
                :round="item.round"
                :loading="item.loading"
                :circle="item.circle"
                size="small"
                >{{ item.text }}</el-button
              >
              <!-- 提交 -->
              <el-button
                v-show="!item.hidden"
                v-if="item.type == 'submit'"
                :key="index"
                @click="submitTable()"
                :icon="item.icon"
                :type="item.buttonType || 'primary'"
                :plain="item.plain"
                :round="item.round"
                :circle="item.circle"
                size="small"
                >{{ item.text }}</el-button
              >
            </template>
          </div>
        </div>
      </template>
    </slot>
    <!-- :style="{'width': $store.getters.tableWidth,'transition': 'width .3s'}" -->
    <el-table
      ref="el-table"
      :data="config.data"
      v-bind="$attrs"
      v-on="$listeners"
      border
      @row-click="rowClick"
    >
      <!-- 序列号/复选框 -->
      <div v-if="config.firstColumn">
        <el-table-column
          :type="config.firstColumn.type"
          width="50"
          :label="config.firstColumn.label"
          :reserve-selection="config.firstColumn.reserveSelection || false"
          align="center"
          v-bind="config.firstColumn.$attr"
          v-if="config.firstColumn.type === 'selection'"
        ></el-table-column>

        <el-table-column
          :type="config.firstColumn.type"
          width="50"
          :label="config.firstColumn.label"
          align="center"
          v-bind="config.firstColumn.$attr"
          v-if="config.firstColumn.type === 'expand'"
        ></el-table-column>
        <el-table-column
          :type="config.firstColumn.type"
          width="50"
          :reserve-selection="config.firstColumn.isPaging || false"
          :label="config.firstColumn.label"
          align="center"
          v-bind="config.firstColumn.$attr"
          v-if="config.firstColumn.type === 'index'"
        >
          <template slot-scope="scope">
            <span>{{
              config.pagination
                ? (config.currentPage - 1) * config.pageSize + scope.$index + 1
                : scope.$index + 1
            }}</span>
          </template>
        </el-table-column>
      </div>
      <slot name="begin"></slot>
      <template v-for="(item, index) in config.column">
        <el-table-column
          v-if="!item.hidden"
          :key="index"
          :type="item.type"
          :label="item.label"
          :prop="item.prop"
          :min-width="item['min-width'] || item.minWidth || item.width"
          :sortable="item.sort"
          :align="item.align || 'center'"
          show-overflow-tooltip
          v-bind="item.$attr"
          v-on="$listeners"
        >
          <template slot-scope="scope">
            <div v-if="!item.filters" :style="{ color: txtChangeColor(scope) }">
              {{ scope.row[item.prop] }}
            </div>
            <div v-if="item.filters" :style="{ color: txtChangeColor(scope) }">
              <span v-if="item.filters.param">{{
                scope.row[item.prop] | constantKey2Value(item.filters.param)
              }}</span>
              <span
                v-else-if="!item.filters.param && item.filters.method === '￥'"
                >{{ scope.row[item.prop] | num3(2, "￥") }}</span
              >
              <span
                v-else-if="!item.filters.param && item.filters.method === '%'"
                >{{ scope.row[item.prop] | percentFilter }}</span
              >
              <span v-else-if="!item.filters.param && item.filters.method">{{
                computedColFilter(scope.row[item.prop], item.filters.method)
              }}</span>
            </div>
          </template>
        </el-table-column>
      </template>

      <slot></slot>

      <el-table-column
        v-show="!config.operatorColumn.hidden"
        v-if="config.operatorColumn"
        :fixed="config.operatorColumn && config.operatorColumn.fixed"
        :label="
          (config.operatorColumn && config.operatorColumn.label) || '操作'
        "
        :min-width="
          (config.operatorColumn && config.operatorColumn.width) ||
            config.operatorColumn.minWidth ||
            100
        "
        align="center"
      >
        <template slot-scope="scope">
          <el-button
            v-for="(item, index) in config.operatorColumn.buttonArr"
            :key="index"
            @click="item.fun(scope.row)"
            :type="item.type || 'primary'"
            :icon="item.icon"
            :plain="item.plain"
            :round="item.round"
            :circle="item.circle"
            :loading="!item.loading ? false : true"
            size="small"
            v-show="!item.hidden"
            >{{ item.text }}</el-button
          >
        </template>
      </el-table-column>
      <slot name="end"></slot>
    </el-table>
    <el-pagination
      v-if="config.pagination"
      :class="config.pagination.align"
      v-show="config.data && config.data.length"
      :current-page="config.currentPage"
      @current-change="handlesCurrentChange"
      @size-change="handlesSizeChange"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="config.pageSize"
      :layout="computedPaginationlauout"
      :total="config.total"
      v-bind="config.pagination.$attrs"
      v-on="$listeners"
      :background="
        config.pagination.background != undefined
          ? config.pagination.background
          : true
      "
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "nui-table",
  props: {
    url: {
      type: String,
    },
    // table配置数据
    config: {
      type: Object,
      default: () => {
        return {}
      },
      required: true,
    },
  },
  data() {
    return {
      rowData: "",
    }
  },
  computed: {
    computedColFilter() {
      return function(value, filterMethod) {
        return this.$options.filters[filterMethod](value)
      }
    },
    computedPaginationlauout() {
      let _showSize =
        this.config.pagination.showSize === undefined
          ? true
          : this.config.pagination.showSize
      let _align = this.config.pagination.align

      if (_align === "right") {
        return _showSize
          ? "total, sizes, prev, pager, next, jumper"
          : "total, prev, pager, next, jumper"
      } else {
        return _showSize
          ? " prev, pager, next, jumper ,sizes,total "
          : "prev, pager, next, jumper,total"
      }
    },
  },
  created() {
    // 设置默认参数
    let resPropsNameDefault = {
      //返回的json主要字段名称&获取方式
      code: "code", //解析接口状态
      msg: "msg", //解析提示文本
      rows: "data.rows", //解析数据列表数组
      total: "data.total", //解析数据列表长度
    }
    this.config.api.resPropsName = Object.assign(
      {},
      resPropsNameDefault,
      this.config.api.resPropsName
    )
  },
  mounted() {
    //获取数据
    this.getTableData()
  },
  methods: {
    //获取数据
    getTableData(_params) {
      let that = this

      this.config.api.params = this.config.api.params
        ? this.config.api.params
        : {}
      const originTableParam = this.config.api.params

      originTableParam.page = this.config.currentPage
      originTableParam.size = this.config.pageSize

      const tableParam = Object.assign({}, originTableParam, _params)

      for (let key in tableParam) {
        let val = tableParam[key]
        if (val === undefined || val === "") {
          delete tableParam[key]
        }
      }

      this.$http({
        url: that.config.api.url,
        method: "GET",
        params: tableParam,
        transformResponse(data) {
          let dataObj = JSON.parse(data)

          let _codeStr = that.config.api.resPropsName.code
          let _msgStr = that.config.api.resPropsName.msg
          // that

          dataObj.code = dataObj[_codeStr]
          dataObj.msg = dataObj[_msgStr]

          return dataObj
        },
      })
        .then((res) => {
          let _rowsStr = this.config.api.resPropsName.rows
          let _totalStr = this.config.api.resPropsName.total

          let _rowData = this.formatResDataStr(res, _rowsStr)
          let _total = this.formatResDataStr(res, _totalStr)

          this.config.total = _total
          this.config.data = _rowData
          // this.config.currentPage = res.data.current;
        })
        .catch(() => {})
    },
    formatResDataStr(res, str) {
      let _strArr = str.split(".")
      let _resData = res

      for (let i = 0; i < _strArr.length; i++) {
        _strArr[i]
        _resData = _resData[_strArr[i]]
      }

      return _resData
    },
    // 提交表单
    submitTable() {
      this.getTableData()
    },
    // 控制表格字体颜色
    txtChangeColor(scope) {
      if (
        this.config.changeRowColor &&
        scope.row[this.config.changeRowColor.key] ===
          this.config.changeRowColor.val
      ) {
        return this.config.changeRowColor.txtStyle
      } else {
        return ""
      }
    },
    // 当前页码
    handlesCurrentChange(val) {
      this.config.currentPage = val
      this.getTableData({ page: val })
    },
    // 表格size
    handlesSizeChange(val) {
      this.config.pageSize = val
      this.config.currentPage = 1
      this.getTableData({ size: val })
    },

    rowClick(row) {
      this.rowData = row
      row.selectFlag = !row.selectFlag
      if (row.selectFlag) {
        this.$refs["el-table"].setCurrentRow(row)
      } else {
        this.$refs["el-table"].setCurrentRow()
      }
    },
    // 表格头部表单
    formFun(item) {
      item.fun(this.rowData)
    },
  },
}
</script>
<style scoped lang="scss">
* {
  box-sizing: border-box;
}
.nui-table {
  z-index: 0;
  background-color: #fff;

  .title-bar {
    display: flex;
    padding: 10px 12px;
    width: 100%;
    white-space: nowrap;
    .table-title {
      font-size: 18px;
      color: #333;
      line-height: 32px;
      padding-left: 12px;
    }

    .handleBar {
      display: flex;
      flex: 1;
      justify-content: flex-end;
    }
    .el-button--small {
      height: 32px;
    }
  }

  .title-bar:nth-child(1) {
    background: #f7f7f7;
  }

  .title-bar + .title-bar {
    border-top: 1px solid #eee;
  }

  .el-form {
    padding-left: 12px;
    flex: 1;
    display: flex;
    // justify-content: flex-end;
  }
  .el-form-item {
    display: flex;
    margin-bottom: 0px;
    margin-right: 20px;

    /deep/.el-form-item__content {
      flex: 1;
    }

    /deep/.el-input__inner {
      // min-width: 110px;
      // max-width: 180px;
    }

    /deep/ .el-date-editor--daterange {
      min-width: 230px;
      max-width: 230px;
    }

    /deep/ .el-range-separator {
      color: #999;
    }

    /deep/ .el-form-item__label {
      // flex: 1;
      padding-right: 6px;
      color: #666;
      white-space: nowrap;
    }

    /deep/.el-radio {
      margin-right: 12px;

      .el-radio__label {
        padding-left: 6px;
      }
    }
  }

  // border-radius: 4px;
  .el-pagination {
    display: flex;
    justify-content: flex-end;
    margin: 20px 0;
    // margin-right: 60px;
    margin-right: calc(2% - 20px);
    background-color: #fff;
    /deep/.el-pagination__total {
      padding-left: 15px;
    }

    &.left {
      justify-content: flex-start;
    }

    &.center {
      justify-content: center;
    }
  }
  .el-table th,
  .el-table td {
    padding: 8px 0;
  }
  .el-table--border th:first-child .cell,
  .el-table--border td:first-child .cell {
    padding-left: 5px;
  }
  .el-table .cell {
    padding: 0 5px;
  }
  .el-table::before {
    // height: 0;
  }
  .el-table--group::after,
  .el-table--border::after {
    // width: 0;
  }
  .el-table--scrollable-y .el-table__fixed-right {
    right: 8px !important;
  }

  .el-table--scrollable-y .el-table__body-wrapper {
    overflow-x: auto;
    // &::-webkit-scrollbar {
    //   /*滚动条整体样式*/
    //   margin-top: 110px;
    //   width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
    //   // height: 1px;
    // }
    // &::-webkit-scrollbar-thumb {
    //   /*滚动条里面小方块*/
    //   border-radius: 10px;
    //   -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    //   background: #b3b3b3;
    // }
    // &::-webkit-scrollbar-track {
    //   /*滚动条里面轨道*/
    //   -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    //   border-radius: 10px;
    //   background: #ededed;
    // }
  }

  /deep/ .el-button.is-circle span {
    display: none;
  }
}

//滚动条
/deep/::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
/deep/::-webkit-scrollbar-button,
/deep/::-webkit-scrollbar-button:vertical {
  display: none;
}
/deep/::-webkit-scrollbar-track,
/deep/::-webkit-scrollbar-track:vertical {
  background-color: black;
}
/deep/::-webkit-scrollbar-track-piece {
  background-color: #f5f5f5;
}
/deep/::-webkit-scrollbar-thumb,
/deep/::-webkit-scrollbar-thumb:vertical {
  border-radius: 0px;
  margin-right: 10px;
  background-color: #ddd;
}
/deep/::-webkit-scrollbar-thumb:hover,
/deep/::-webkit-scrollbar-thumb:vertical:hover {
  background-color: #bbb;
}
/deep/::-webkit-scrollbar-corner,
/deep/::-webkit-scrollbar-corner:vertical {
  background-color: #535353;
}
/deep/::-webkit-scrollbar-resizer,
/deep/::-webkit-scrollbar-resizer:vertical {
  background-color: #ff6e00;
}
.operator_pop {
  margin-left: 10px;
  min-width: 70px;
  padding: 0;
  .ulClose {
    font-size: 14px;
    padding: 0;
    margin: 5px 0;
    li {
      padding: 0 10px;
      text-align: center !important;
      font-size: 12px !important;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 32px;
      cursor: pointer;
    }
    li:hover {
      color: #66b1ff;
      background: #ecf5ff;
    }
  }
  .el-popoverbtn {
    border: none;
    padding: 0 3px;
    padding-left: 6px;
  }
  .el-popoverbtn:hover {
    color: #66b1ff;
    background: #fff;
  }
}
</style>
