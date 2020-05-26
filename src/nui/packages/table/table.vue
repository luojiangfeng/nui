<template>
  <div class="nui-table" :class="inset ? 'inset' : ''">
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
                    minWidth: item.minWidth,
                    maxWidth: item.maxWidth,
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
                    :clearable="
                      item.clearable == undefined ? true : item.clearable
                    "
                    v-bind="item.$attrs"
                    v-on="item.$listeners"
                    :width="item.width"
                    :url="item.url"
                    :value-name="item.valueName"
                    :label-name="item.labelName"
                  >
                  </nui-select>
                </el-form-item>

                <el-form-item
                  v-show="!item.hidden"
                  v-if="item.type == 'radio'"
                  :ref="item.ref"
                  :label="item.label"
                  :key="index"
                >
                  <nui-radio-group
                    :options="item.options"
                    :url="item.url"
                    :value-name="item.valueName"
                    :label-name="item.labelName"
                    v-bind="item.$attrs"
                    v-on="item.$listeners"
                    v-model="config.api.params[item.ref]"
                  >
                  </nui-radio-group>
                </el-form-item>

                <el-form-item
                  v-show="!item.hidden"
                  v-if="item.type == 'checkbox'"
                  :ref="item.ref"
                  :label="item.label"
                  :key="index"
                >
                  <nui-checkbox-group
                    :options="item.options"
                    :url="item.url"
                    :value-name="item.valueName"
                    :label-name="item.labelName"
                    v-model="config.api.params[item.ref]"
                    v-bind="item.$attrs"
                    v-on="item.$listeners"
                  >
                  </nui-checkbox-group>
                </el-form-item>

                <el-form-item
                  v-show="!item.hidden"
                  v-if="item.type == 'dropdownTree'"
                  :ref="item.ref"
                  :label="item.label"
                  :key="index"
                >
                  <nui-dropdown-tree
                    v-bind="item.$attrs"
                    v-on="item.$listeners"
                    size="small"
                    :leaf-only="item.leafOnly"
                    :multi-check="item.multiCheck"
                    :trigger="item.trigger"
                    :width="item.width"
                    :disabled="item.disabled"
                    :pop-height="item.popHeight"
                    :collapse-tags="item.collapseTags"
                    :filterable="item.filterable"
                    :filter-node-method="item.filterNodeMethod"
                    :expand-on-click-node="item.expandOnClickNode"
                    :data="item.data"
                    :placeholder="item.placeholder"
                    v-model="config.api.params[item.ref]"
                  >
                  </nui-dropdown-tree>
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
      ref="table"
      :data="config.data"
      v-bind="$attrs"
      v-on="$listeners"
      border
      @row-click="rowClick"
    >
      <!-- 表格前面的列：原本只有firstColumn，后面实际开发可能会需要定义前面2、3列。-->
      <!-- 为了使之前项目代码改动最小，就不改成数组形式了 。而且第二、三列的情况很少 -->
      <template v-if="config.firstColumn && !config.firstColumn.hidden">
        <el-table-column
          :type="config.firstColumn.type"
          width="50"
          :label="config.firstColumn.label"
          :reserve-selection="config.firstColumn.reserveSelection || false"
          align="center"
          v-bind="config.firstColumn.$attrs"
          v-if="config.firstColumn.type === 'selection'"
        ></el-table-column>
        <el-table-column
          :type="config.firstColumn.type"
          width="50"
          :label="config.firstColumn.label"
          align="center"
          v-bind="config.firstColumn.$attrs"
          v-if="config.firstColumn.type === 'expand'"
        ></el-table-column>
        <el-table-column
          :type="config.firstColumn.type"
          width="50"
          :reserve-selection="config.firstColumn.isPaging || false"
          :label="config.firstColumn.label"
          align="center"
          v-bind="config.firstColumn.$attrs"
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
      </template>

      <!-- 第二列 -->
      <template v-if="config.secondColumn && !config.secondColumn.hidden">
        <el-table-column
          :type="config.secondColumn.type"
          width="50"
          :label="config.secondColumn.label"
          :reserve-selection="config.secondColumn.reserveSelection || false"
          align="center"
          v-bind="config.secondColumn.$attrs"
          v-if="config.secondColumn.type === 'selection'"
        ></el-table-column>

        <el-table-column
          :type="config.secondColumn.type"
          width="50"
          :label="config.secondColumn.label"
          align="center"
          v-bind="config.secondColumn.$attrs"
          v-if="config.secondColumn.type === 'expand'"
        ></el-table-column>
        <el-table-column
          :type="config.secondColumn.type"
          width="50"
          :reserve-selection="config.secondColumn.isPaging || false"
          :label="config.secondColumn.label"
          align="center"
          v-bind="config.secondColumn.$attrs"
          v-if="config.secondColumn.type === 'index'"
        >
          <template slot-scope="scope">
            <span>{{
              config.pagination
                ? (config.currentPage - 1) * config.pageSize + scope.$index + 1
                : scope.$index + 1
            }}</span>
          </template>
        </el-table-column>
      </template>

      <!-- 第三列 -->
      <template v-if="config.thirdColumn && !config.thirdColumn.hidden">
        <el-table-column
          :type="config.thirdColumn.type"
          width="50"
          :label="config.thirdColumn.label"
          :reserve-selection="config.thirdColumn.reserveSelection || false"
          align="center"
          v-bind="config.thirdColumn.$attrs"
          v-if="config.thirdColumn.type === 'selection'"
        ></el-table-column>

        <el-table-column
          :type="config.thirdColumn.type"
          width="50"
          :label="config.thirdColumn.label"
          align="center"
          v-bind="config.thirdColumn.$attrs"
          v-if="config.thirdColumn.type === 'expand'"
        ></el-table-column>
        <el-table-column
          :type="config.thirdColumn.type"
          width="50"
          :reserve-selection="config.thirdColumn.isPaging || false"
          :label="config.thirdColumn.label"
          align="center"
          v-bind="config.thirdColumn.$attrs"
          v-if="config.thirdColumn.type === 'index'"
        >
          <template slot-scope="scope">
            <span>{{
              config.pagination
                ? (config.currentPage - 1) * config.pageSize + scope.$index + 1
                : scope.$index + 1
            }}</span>
          </template>
        </el-table-column>
      </template>

      <slot name="tbody">
        <template v-for="(item, index) in config.column">
          <!-- <el-table-column :key="index" :config="item"> -->
          <nui-table-column :key="index" :config="item"> </nui-table-column>
        </template>
      </slot>

      <el-table-column
        v-if="config.operatorColumn && config.operatorColumn.type === 'sort'"
        v-show="!config.operatorColumn.hidden"
        :fixed="
          config.operatorColumn.fixed ? config.operatorColumn.fixed : 'right'
        "
        :label="
          config.operatorColumn.label ? config.operatorColumn.label : '排序'
        "
        :width="config.operatorColumn.width ? config.operatorColumn.width : 100"
        :min-width="config.operatorColumn.minWidth"
        align="center"
      >
        <template slot-scope="scope">
          <el-button
            @click="
              upSort(
                scope.row,
                config.operatorColumn.sortBaseUrl,
                config.operatorColumn.sortProp
              )
            "
            type="default"
            icon="el-icon-top"
            circle
            size="small"
          ></el-button>

          <el-button
            @click="
              downSort(
                scope.row,
                config.operatorColumn.sortBaseUrl,
                config.operatorColumn.sortProp
              )
            "
            type="default"
            icon="el-icon-bottom"
            circle
            size="small"
          ></el-button>
        </template>
      </el-table-column>

      <el-table-column
        v-if="config.operatorColumn && config.operatorColumn.type !== 'sort'"
        v-show="!config.operatorColumn.hidden"
        :fixed="config.operatorColumn && config.operatorColumn.fixed"
        :label="
          (config.operatorColumn && config.operatorColumn.label) || '操作'
        "
        :width="config.operatorColumn.width"
        :min-width="config.operatorColumn.minWidth"
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
            v-show="operatorBtnShow(item.hidden, scope.row)"
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
      v-on="config.pagination.$listeners"
      :background="
        config.pagination.background != undefined
          ? config.pagination.background
          : true
      "
    ></el-pagination>
  </div>
</template>

<script>
import qs from 'qs'

export default {
  name: 'nui-table',
  props: {
    inset: {
      type: Boolean,
      default: false,
    },
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
      rowData: '',
    }
  },
  computed: {
    operatorBtnShow() {
      return function(hidden, row) {
        if (typeof hidden === 'boolean' || hidden === undefined) {
          return !hidden
        }

        if (typeof hidden === 'function') {
          return !hidden(row)
        }
      }
    },
    computedColTpl() {
      return function(data, tpl) {
        let res
        if (typeof tpl === 'function') {
          res = tpl(data).replace(/{{data}}/g, data)
        } else {
          res = tpl.replace(/{{data}}/g, data)
        }

        return res
      }
    },
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

      if (_align === 'right') {
        return _showSize
          ? 'total, sizes, prev, pager, next, jumper'
          : 'total, prev, pager, next, jumper'
      } else {
        return _showSize
          ? ' prev, pager, next, jumper ,sizes,total '
          : 'prev, pager, next, jumper,total'
      }
    },
  },
  created() {
    // 设置默认参数
    let resPropsNameDefault = {
      //返回的json主要字段名称&获取方式
      code: 'code', //解析接口状态
      msg: 'msg', //解析提示文本
      rows: 'data.result', //解析数据列表数组
      total: 'data.totalCount', //解析数据列表长度
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
    getTableData(_params, cb) {
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
        if (val === undefined || val === '') {
          delete tableParam[key]
        }
      }

      let postConfig = {
        url: that.config.api.url,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        },
        data: qs.stringify(tableParam),
        transformResponse(data) {
          let dataObj = JSON.parse(data)

          let _codeStr = that.config.api.resPropsName.code
          let _msgStr = that.config.api.resPropsName.msg
          // that

          dataObj.code = dataObj[_codeStr]
          dataObj.msg = dataObj[_msgStr]

          return dataObj
        },
      }

      let getConfig = {
        url: that.config.api.url,
        method: 'GET',
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
      }

      let thisConfig =
        that.config.api.url.substring(that.config.api.url.length - 5) ===
        '.json'
          ? getConfig
          : postConfig

      this.$http(thisConfig)
        .then((res) => {
          let _rowsStr = this.config.api.resPropsName.rows
          let _totalStr = this.config.api.resPropsName.total

          let _rowData = this.formatResDataStr(res, _rowsStr)
          let _total = this.formatResDataStr(res, _totalStr)

          this.config.total = _total
          this.config.data = _rowData
          // this.config.currentPage = res.data.current;

          if (_rowData.length === 0 && tableParam.page != 1) {
            that.getTableData({ page: tableParam.page - 1 })
          }

          typeof cb === 'function' && cb()
        })
        .catch(() => {})
    },
    formatResDataStr(res, str) {
      let _strArr = str.split('.')
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
    upSort(row, baseUrl, propName = 'id') {
      this.$http
      this.$http({
        url: `${baseUrl}${row[propName]}/up`,
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          this.getTableData({}, () => {
            this.$message({
              type: 'success',
              message: '上移成功',
              duration: 1500,
            })
          })
        })
        .catch((err) => {})
    },
    downSort(row, baseUrl, propName = 'id') {
      this.$http({
        url: `${baseUrl}${row[propName]}/down`,
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          this.getTableData({}, () => {
            this.$message({
              type: 'success',
              message: '下移成功',
              duration: 1500,
            })
          })
        })
        .catch((err) => {})
    },

    rowClick(row) {
      this.rowData = row
      row.selectFlag = !row.selectFlag
      if (row.selectFlag) {
        this.$refs['table'].setCurrentRow(row)
      } else {
        this.$refs['table'].setCurrentRow()
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

  &.inset {
    .el-table--border {
      border-left: none;
      border-right: none;
    }
  }

  .title-bar {
    display: flex;
    padding: 10px 12px;
    width: 100%;
    white-space: nowrap;
    .table-title {
      font-size: 18px;
      color: #505050;
      line-height: 32px;
      padding-left: 12px;
      font-weight: bold;
    }

    .handleBar {
      display: flex;
      flex-grow: 1;
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
    flex-grow: 1;
    display: flex;
    // justify-content: flex-end;
  }
  .el-form-item {
    display: flex;
    margin-bottom: 0px;
    margin-right: 20px;

    /deep/.el-form-item__content {
      flex-grow: 1;
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
      // flex-grow: 1;
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

/deep/ .el-table .cell.el-tooltip {
  height: 100%;
  padding-right: 8px;
  padding-left: 8px;
  & > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

//滚动条
/deep/::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
/deep/::-webkit-scrollbar-button,
/deep/::-webkit-scrollbar-button:vertical {
  display: none;
}
/deep/::-webkit-scrollbar-track,
/deep/::-webkit-scrollbar-track:vertical {
  border-radius: 10px;
  background-color: black;
}
/deep/::-webkit-scrollbar-track-piece {
  background-color: #f5f5f5;
}
/deep/::-webkit-scrollbar-thumb,
/deep/::-webkit-scrollbar-thumb:vertical {
  border-radius: 10px;
  background: rgba(144, 147, 153, 0.2);
}
/deep/::-webkit-scrollbar-thumb:hover,
/deep/::-webkit-scrollbar-thumb:vertical:hover {
  background: rgba(144, 147, 153, 0.3);
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
