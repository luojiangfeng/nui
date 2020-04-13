<template>
  <div id="leftMenu">
    <el-scrollbar class="page-component__nav" style="height:100%">
      <div class="side-nav" style="opacity: 1;">
        <ul>
          <li class="nav-item sponsors">
            <ul class="pure-menu-list sub-nav" style="height: auto;">
              <li class="nav-item">
                <img
                  id="logoImg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIYAAAB0CAYAAABAI0qDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxRjA4NUVGNzc0ODYxMUVBQUEwQjkyRkI2ODgxRjI5MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxRjA4NUVGODc0ODYxMUVBQUEwQjkyRkI2ODgxRjI5MCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFGMDg1RUY1NzQ4NjExRUFBQTBCOTJGQjY4ODFGMjkwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFGMDg1RUY2NzQ4NjExRUFBQTBCOTJGQjY4ODFGMjkwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+XCVWgQAAC6dJREFUeNrsnXtsHEcd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"
                />
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <!----><!----><a href="#/zh-CN/component/changelog" class=""
              >更新日志</a
            ><!----><!---->
          </li>
          <li class="nav-item">
            <a>开发指南</a
            ><!----><!---->
            <ul class="pure-menu-list sub-nav" style="height: auto;">
              <li class="nav-item">
                <router-link to="/installation" active-class="active"
                  >安装</router-link
                >
              </li>
              <li class="nav-item">
                <router-link to="/quickstart" active-class="active"
                  >快速上手</router-link
                >
              </li>
            </ul>
            <!---->
          </li>
          <li class="nav-item">
            <a>组件</a
            ><!----><!----><!---->
            <div class="nav-group">
              <div class="nav-group__title">Basic</div>
              <ul class="pure-menu-list" style="height: auto;">
                <li class="nav-item">
                  <router-link to="/layout" active-class="active"
                    >Layout 布局</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/container" active-class="active"
                    >Container 布局容器</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/button" active-class="active"
                    >Button 按钮</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/link" active-class="active"
                    >Link 文字链接</router-link
                  >
                </li>
              </ul>
            </div>
            <div class="nav-group">
              <div class="nav-group__title">Form</div>
              <ul class="pure-menu-list" style="height: auto;">
                <li class="nav-item">
                  <router-link to="/form" active-class="active"
                    >Form 表单</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/radio" active-class="active"
                    >Radio 单选框</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/checkbox" active-class="active"
                    >Checkbox 多选框</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/input" active-class="active"
                    >Input 输入框</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/inputNumber" active-class="active"
                    >InputNumber 计数器</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/select" active-class="active"
                    >Select 选择器</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/cascader" active-class="active"
                    >Cascader 级联选择器</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/switch" active-class="active"
                    >Switch 开关</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/slider" active-class="active"
                    >Slider 滑块</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/timePicker" active-class="active"
                    >TimePicker 时间选择器</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/datePicker" active-class="active"
                    >DatePicker 日期时间选择器</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/upload" active-class="active"
                    >Upload 上传</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/rate" active-class="active"
                    >Rate 评分</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link to="/transfer" active-class="active"
                    >Transfer 穿梭框</router-link
                  >
                </li>
              </ul>
            </div>
            <div class="nav-group">
              <div class="nav-group__title">Data</div>
              <ul class="pure-menu-list " style="height: auto;">
                <li class="nav-item ">
                  <router-link active-class="active" to="/table"
                    >Table 表格</router-link
                  >
                </li>
                <li class="nav-item ">
                  <router-link active-class="active" to="/tag"
                    >Tag 标签</router-link
                  >
                </li>
                <li class="nav-item ">
                  <router-link active-class="active" to="/progress"
                    >Progress 进度条</router-link
                  >
                </li>
                <li class="nav-item ">
                  <router-link active-class="active" to="/tree"
                    >Tree 树形控件</router-link
                  >
                </li>
                <li class="nav-item ">
                  <router-link active-class="active" to="/badge"
                    >Badge 标记</router-link
                  >
                </li>
              </ul>
            </div>
            <!-- <div class="nav-group">
              <div class="nav-group__title">Notice</div>
              <ul class="pure-menu-list" style="height: auto;">
                <li class="nav-item">
                  <a href="#/zh-CN/component/alert" class="">Alert 警告</a>
                </li>
                <li class="nav-item">
                  <a href="#/zh-CN/component/loading" class="">Loading 加载</a>
                </li>
                <li class="nav-item">
                  <a href="#/zh-CN/component/message" class=""
                    >Message 消息提示</a
                  >
                </li>
                <li class="nav-item">
                  <a href="#/zh-CN/component/message-box" class=""
                    >MessageBox 弹框</a
                  >
                </li>
                <li class="nav-item">
                  <a href="#/zh-CN/component/notification" class=""
                    >Notification 通知</a
                  >
                </li>
              </ul>
            </div> -->
            <div class="nav-group">
              <div class="nav-group__title">Navigation</div>
              <ul class="pure-menu-list" style="height: auto;">
                <li class="nav-item">
                  <router-link active-class="active" to="/menu"
                    >NavMenu 导航菜单</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link active-class="active" to="/tabs"
                    >Tabs 标签页</router-link
                  >
                </li>
                <!-- <li class="nav-item">
                  <a href="#/zh-CN/component/breadcrumb" class=""
                    >Breadcrumb 面包屑</a
                  >
                </li>
                <li class="nav-item">
                  <a href="#/zh-CN/component/page-header" class=""
                    >PageHeader 页头</a
                  >
                </li> -->
                <!-- <li class="nav-item">
                  <router-link active-class="active" to="/dropdown"
                    >Dropdown 下拉菜单</router-link
                  >
                </li> -->
                <!-- <li class="nav-item">
                  <a href="#/zh-CN/component/steps" class="">Steps 步骤条</a>
                </li> -->
              </ul>
            </div>
            <div class="nav-group">
              <div class="nav-group__title">Others</div>
              <ul class="pure-menu-list" style="height: auto;">
                <li class="nav-item">
                  <router-link active-class="active" to="/dialog"
                    >Dialog 对话框</router-link
                  >
                </li>
                <!-- <li class="nav-item">
                  <a href="#/zh-CN/component/tooltip" class=""
                    >Tooltip 文字提示</a
                  >
                </li>
                <li class="nav-item">
                  <a href="#/zh-CN/component/popover" class=""
                    >Popover 弹出框</a
                  >
                </li>
                <li class="nav-item">
                  <a href="#/zh-CN/component/popconfirm" class=""
                    >Popconfirm 气泡确认框</a
                  >
                </li>
                <li class="nav-item">
                  <a href="#/zh-CN/component/card" class="">Card 卡片</a>
                </li>
                <li class="nav-item">
                  <a href="#/zh-CN/component/carousel" class=""
                    >Carousel 走马灯</a
                  >
                </li>
                <li class="nav-item">
                  <a href="#/zh-CN/component/collapse" class=""
                    >Collapse 折叠面板</a
                  >
                </li>
                <li class="nav-item">
                  <a href="#/zh-CN/component/timeline" class=""
                    >Timeline 时间线</a
                  >
                </li>
                <li class="nav-item">
                  <a href="#/zh-CN/component/divider" class=""
                    >Divider 分割线</a
                  >
                </li>
                <li class="nav-item">
                  <a href="#/zh-CN/component/calendar" class=""
                    >Calendar 日历</a
                  >
                </li>
                <li class="nav-item">
                  <a href="#/zh-CN/component/image" class="">Image 图片</a>
                </li>
                <li class="nav-item">
                  <a href="#/zh-CN/component/backtop" class=""
                    >Backtop 回到顶部</a
                  >
                </li>
                <li class="nav-item">
                  <a href="#/zh-CN/component/infiniteScroll" class=""
                    >InfiniteScroll 无限滚动</a
                  >
                </li> -->
                <li class="nav-item">
                  <router-link active-class="active" to="/drawer"
                    >Drawer 抽屉</router-link
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  name: "leftMenu",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="scss">
#logoImg {
  padding-top: 25px;
  width: 60px;
  margin-bottom: 20px;
}
.page-component__nav {
  background: #fff;
  width: 260px;
  position: fixed;
  top: 0;
  bottom: 0;
  transition: padding-top 0.3s;
}

/deep/ .el-scrollbar__wrap {
  overflow-x: hidden;
}

/deep/ .el-scrollbar__view {
  padding-bottom: 100px;
}

.side-nav {
  width: 100%;
  box-sizing: border-box;
  padding-right: 30px;
  transition: opacity 0.3s;
}
.side-nav.is-fade {
  transition: opacity 3s;
}
.side-nav li {
  list-style: none;
  text-align: left;
}
.side-nav ul {
  padding: 0;
  margin: 0;
  overflow: hidden;
  padding-left: 20px;
}

.side-nav .pure-menu-list {
  padding-left: 10px;
}
.side-nav > ul > .nav-item > a {
  margin-top: 15px;
}
.side-nav > ul > .nav-item:nth-child(-n + 4) > a {
  margin-top: 0;
}
.side-nav .nav-item a {
  font-size: 16px;
  color: #333;
  line-height: 40px;
  height: 40px;
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: block;
  position: relative;
  transition: 0.15s ease-out;
  font-weight: 700;
}
.side-nav .nav-item a.active {
  color: #409eff;
}
.side-nav .nav-item .nav-item a {
  display: block;
  height: 40px;
  color: #444;
  line-height: 40px;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 400;
}
.side-nav .nav-item .nav-item a.active,
.side-nav .nav-item .nav-item a:hover {
  color: #409eff;
}
.side-nav .nav-item.sponsors > .sub-nav {
  margin-top: -10px;
}
.side-nav .nav-item.sponsors > a {
  color: #777;
  font-weight: 300;
  font-size: 14px;
}
.side-nav .nav-item.sponsors .nav-item {
  display: inline-block;
}
.side-nav .nav-item.sponsors .nav-item a {
  height: auto;
  display: inline-block;
  vertical-align: middle;
  margin: 8px 12px 12px 0;
}
.side-nav .nav-item.sponsors .nav-item a img {
  width: 42px;
}
.side-nav .nav-item.sponsors .nav-item:first-child a img {
  width: 36px;
}
.side-nav .nav-group__title {
  font-size: 12px;
  color: #999;
  line-height: 26px;
  margin-top: 15px;
}
.side-nav #code-sponsor-widget {
  margin: 0 0 0 -20px;
}
</style>
