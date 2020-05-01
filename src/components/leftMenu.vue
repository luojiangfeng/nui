<template>
  <div id="leftMenu">
    <el-scrollbar class="page-component__nav" style="height:100%">
      <div class="side-nav" style="opacity: 1;">
        <ul>
          <li class="nav-item sponsors">
            <ul class="pure-menu-list sub-nav" style="height: auto;">
              <li class="nav-item">
                <i id="logoImg"></i>
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
                  <router-link active-class="active" to="/dropdownTree"
                    >DropdownTree 下拉树</router-link
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
                <li class="nav-item">
                  <router-link active-class="active" to="/drawer"
                    >Drawer 抽屉</router-link
                  >
                </li>
              </ul>
            </div>

            <div class="nav-group">
              <div class="nav-group__title">Example</div>
              <ul class="pure-menu-list" style="height: auto;">
                <li class="nav-item">
                  <router-link active-class="active" to="/examplePersonMsgForm"
                    >人员信息表单</router-link
                  >
                </li>
                <li class="nav-item">
                  <router-link active-class="active" to="/examplePersonMsgTable"
                    >人员信息表格</router-link
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
    },
  },
}
</script>

<style scoped lang="scss">
#logoImg {
  display: block;
  position: relative;
  left: -20px;
  padding-top: 25px;
  width: 134px;
  height: 116px;
  transform: scale(0.5);
  @include bg("logo.png");
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
