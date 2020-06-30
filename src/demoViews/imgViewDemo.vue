<!-- 比elementUI多的属性：width， -->
<template>
  <div class="page-main">
    <el-tabs v-model="activeTab" class="page-tab">
      <el-tab-pane label="文档" name="doc">
        <h2>ImgViewer 图片浏览器</h2>
        <h3 />
        <h5>该组件基于“v-viewer”，请先确保安装。（若不需要此组件，也不想安装多余的npm插件。可以删除nui\packages\img-view文件夹）</h5>
        <h5>点击图片显示组件。也可以通过调用viewer实例的show方法，手动触发。</h5>
        <h5>(该组件支持键盘操作。上下左右、ESC等)</h5>
        <div class="demo-block">
          <nui-img-viewer
            ref="viewer"
            :option="viewerOption"
            :images="images"
            class="viewer"
            @inited="inited"
          >
            <template scope="scope">
              <img v-for="src in scope.images" :key="src" :src="src">
            </template>
          </nui-img-viewer>

          <nui-button type="primary" class="button" wave @click="show">函数调用触发</nui-button>
        </div>
        <article class="intro-list">
          <h3>ImgViewer Attributes</h3>
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
                <td>images</td>
                <td>图片的地址src数组</td>
                <td>array</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>trigger</td>
                <td>你可以使用trigger来代替images, 从而传入任何类型的数据。当trigger绑定的数据发生变更，组件就会自动更新。</td>
                <td>array</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>rebuild</td>
                <td>默认情况下当图片发生变更时(添加、删除或排序)，viewer实例会使用update方法更新内容。</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
              </tr>
              <tr>
                <td>option</td>
                <td>viewer本身的配置项。详细的配置文档见<a target="_blank" href="https://github.com/fengyuanchen/viewerjs">https://github.com/fengyuanchen/viewerjs</a></td>
                <td>object</td>
                <td>—</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>

          <h3>ImgView Events</h3>
          <table>
            <thead>
              <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>参数</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>inited</td>
                <td>监听inited事件来获取viewer实例，或者也可以用this.$refs.xxx.$refs.viewer.$viewer这种方法</td>
                <td>function</td>
                <td>viewer实例</td>
              </tr>
            </tbody>
          </table>
        </article>
      </el-tab-pane>
      <el-tab-pane label="查看代码" name="code">
        <show-code
          v-if="activeTab == 'code'"
          url="demoViews/ImgViewerDemo.vue"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'ImgViewerDemo',
  data() {
    return {
      activeTab: 'doc',
      images: ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg'],
      viewerOption: {
        navbar: true // 默认就是true
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    inited(viewer) {
      this.$viewer = viewer
    },
    show() {
      this.$viewer.view(0)
    }
  }
}
</script>

<style scoped lang="scss">
.button{
  display: block;
  margin: 0 auto;
  margin-top: 15px;
}
.viewer{
  img{
    width: 300px;
    height: 300px;
     object-fit: contain;
  }
}
</style>
