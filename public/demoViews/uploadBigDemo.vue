<!-- 比elementUI多的属性：width， -->
<template>
  <div class="page-main">
    <el-tabs v-model="activeTab" class="page-tab">
      <el-tab-pane label="文档" name="doc">
        <h2>UploadBig 大附件上传</h2>

        <h3 />
        <h5>该组件基于"vue-simple-uploader"和"spark-md5"，请先确保安装。（若不需要此组件，也不想安装多余的npm插件。可以删除nui\packages\upload-big文件夹）</h5>
        <h3 />
        <h5>因为没有服务器，所以演示不了。实际使用时，看配置属性来设置</h5>

        <div class="demo-block">
          <nui-upload-big max-size="1024" accept=".rar,.psd,.zip" />
        </div>
        <article class="intro-list">
          <h3>UploadBig Attributes</h3>
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
                <td>v-model</td>
                <td>双向绑定的,当前已上传附件的id列表</td>
                <td>array</td>
                <td>—</td>
                <td>[]</td>
              </tr>
              <tr>
                <td>url</td>
                <td>接口请求的“上传地址”</td>
                <td>string</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>merge-url</td>
                <td>接口请求的“合并分块地址”</td>
                <td>string</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>headers</td>
                <td>接口请求的headers</td>
                <td>string</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>max-size</td>
                <td>文件的最大尺寸，单位是MB</td>
                <td>string,number</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>accept</td>
                <td>接受上传的文件类型。例如accept="image/jpeg,image/png"或者以逗号分隔的文件扩展名accept=".jpg,.png"</td>
                <td>string</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>options</td>
                <td>simple-uploader的options配置项。详情见<a target="_blank" href="https://github.com/simple-uploader/Uploader/blob/develop/README_zh-CN.md">simple-uploader</a>     </td>
                <td>string</td>
                <td>—</td>
                <td>—</td>
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
          url="demoViews/uploadBigDemo.vue"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

export default {
  name: 'UploadBigDemo',
  data() {
    return {
      activeTab: 'doc',
      num: 1
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleChange(value) {
      console.log(value)
    }
  }
}
</script>

<style scoped lang="scss">
/deep/ .test-col {
  color: green;
}
</style>
