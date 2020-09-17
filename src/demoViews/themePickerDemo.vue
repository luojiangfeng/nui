<!-- 比elementUI多的属性：width， -->
<template>
  <div class="page-main">
    <el-tabs v-model="activeTab" class="page-tab">
      <el-tab-pane label="文档" name="doc">
        <h2>ThemePicker 换肤</h2>

        <h3>说明</h3>
        <h5>此换肤功能成功后，会自动在localStorage里面保存当前的主题色值theme-color做持久化处理。下次访问网页创建本组件时，会自动读取localStorage的色值并应用。</h5>
        <h5>通过only-element属性可以设置是否只应用于elementUI的组件。默认为false，即应用于全部"style"标签里的内容（对于link引入的css文件无效），只要"style"标签里css的属性含有“#409EFF”就会被同步换肤。</h5>
        <h5>对于link引入的css文件，虽然技术上可以实现内部属性跟随主题色变化，但是性能开销太大，所以没有采用替换link文件内容的方式。
          而是提供了预设的3个常用css类：“nui-theme-color”（字体色），“nui-theme-bgColor”（背景色），“nui-theme-borderColor”（边框色）。对于复杂的css，提供了“custom-css”属性，可以将自定义部分的css代码手动传入（注意，通常需要加!important）</h5>
        <div class="demo-block">
          <nui-theme-picker :only-element="onlyElement" class="theme-picker" :base-color="baseTheme" @change="themeChange" />

          <nui-row> only-element：<nui-switch
            v-model="onlyElement"
          /></nui-row>

          <nui-row>演示效果：</nui-row>
          <nui-row>
            <nui-button type="primary">elmentUI组件</nui-button>
            <nui-button type="primary " plain>elmentUI组件</nui-button>
          </nui-row>
          <nui-row>
            <nui-radio v-model="radio" label="1">elmentUI组件</nui-radio>
            <nui-radio v-model="radio" label="2">elmentUI组件</nui-radio>
          </nui-row>

          <nui-row>
            <div class="custom">
              <p>这是自定义的，非elmentUI元素。可以是任意元素，只要css属性的色值为“#409EFF”就可以同步换肤色</p>
              <p class="test">
                这是自定义的，非elmentUI元素。可以是任意元素，只要css属性的色值为“#409EFF”就可以同步换肤色
              </p>

            </div>
          </nui-row>
        </div>
        <article class="intro-list">
          <h3>ThemePicker Attributes</h3>
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
                <td>only-element</td>
                <td>是否只对elementUI的元素有效</td>
                <td>boolean</td>
                <td>——</td>
                <td>false</td>
              </tr>
              <tr>
                <td>width</td>
                <td>宽度</td>
                <td>string</td>
                <td>——</td>
                <td>——</td>
              </tr>

               <tr>
                <td>custom-css</td>
                <td>自定义跟随主题色变化的css代码。需要变化的基础色值为'#409EFF'。（对于简单的元素css不需要用这个属性，而是提供了预设的3个常用css类：“nui-theme-color”（字体色），“nui-theme-bgColor”（背景色），“nui-theme-borderColor”（边框色））</td>
                <td>string</td>
                <td>——</td>
                <td>示例： ".tags-view-container .tags-view-wrapper .tags-view-item.active{background-color: #409EFF!important;color: #fff;border-color: #409EFF!important;}"</td>
              </tr>
              <tr>
                <td>base-color</td>
                <td>基础的颜色，一般为项目默认的主题色。（最终色板颜色=baseColor+predefine）</td>
                <td>Boolean</td>
                <td>——</td>
                <td>false</td>
              </tr>
              <tr>
                <td>predefine</td>
                <td>色板的预设值。（最终色板颜色=baseColor+predefine）</td>
                <td>array</td>
                <td>——</td>
                <td>['#409EFE',
                  '#8269D7',
                  '#B5604B',
                  '#EA6D4E',
                  '#AD6AE1',
                  '#76D1D7',
                  '#88BF19',
                  '#35839F']</td>
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
          url="demoViews/themePickerDemo.vue"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'DemoInputNumber',
  data() {
    return {
      activeTab: 'doc',
      baseTheme: '#4A359F',
      radio: '2',
      onlyElement: false
    }
  },
  created() {},
  mounted() {},
  methods: {
    themeChange(value) {
      console.log(value)
    }
  }
}
</script>

<style scoped lang="scss">
.el-row{
  margin-top: 12px;
}

.custom{
  color: #409EFF;
  p{
    padding-left: 6px;
    border-radius:6px;
  }

  p.test{
    margin-top: 10px;
    line-height: 25px;
    width: 100%;
    height: 25px;
    background: #409EFF;
    color: #fff;
  }
}
</style>
