<!-- 比elementUI多的属性：width -->
<template>
  <div class="page-main">
    <el-tabs v-model="activeTab" class="page-tab">
      <el-tab-pane label="文档" name="doc">
        <h2>Upload 上传</h2>

        <h5>在elementUI的基础上：增加了图片浏览功能，封装了不同list-type下的插槽模板内容，封装了提示文字，增加文件大小属性等。</h5>
        <h5>回调函数方面的封装：文件大小超过限制提示，文件数量超过限制提示、删除文件前的提示等</h5>

        <h3>普通上传：图片</h3>
        <h5>list-type默认为"picture-card"（图片卡片），封装了默认插槽的内容为“+”大按钮。</h5>
        <h5>封装了nui-img-viewer图片浏览组件：图片卡片时，点击“放大镜”浏览图标。图片列表时，点击选项。</h5>
        <h5>(现在用的是测试接口，正常需要登录才能上传。现在返回code:200，但是没登录，所以接口秒返回，看不到进度。正常情况是有上传进度的)</h5>
        <div class="demo-block">
          <nui-form label-width="90px">
            <nui-form-item label="图片卡片：" prop="uploadImgFile">
              <nui-upload
                action="api/attach/uploadAttach/oss"
                multiple
                max-size="500"
                :limit="3"
                accept=".jpg,.png"
                tips="只能上传jpg/png文件，最多上传3张图片，且每个文件不超过500kb"
              />
            </nui-form-item>

            <nui-form-item label="图片列表：" prop="uploadImgFile2">
              <nui-upload
                action="api/attach/uploadAttach/oss"
                multiple
                list-type="picture"
                max-size="500"
                :limit="3"
                accept="image/jpeg,image/png"
                tips="图片列表形式，设置 list-type='picture'"
              />
            </nui-form-item>
          </nui-form>
        </div>

        <h3>普通上传:文件</h3>
        <h5>上传文件的形式，需要设置list-type为"text"，显示文件名字列表。封装了默认插槽的内容为“点击上传”普通按钮。</h5>
        <div class="demo-block">
          <nui-upload
            class="upload-demo"
            list-type="text"
            action="https://jsonplaceholder.typicode.com/posts/"
            max-size="1500"
            multiple
            :limit="3"
            tips="最多上传3个文件，且每个文件不超过1500kb"
          />
          </nui-form-item>
        </div>

        <article class="intro-list">
          <h3>Upload Attributes</h3>
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
                <td>双向绑定的,当前已上传图片的id列表（默认是file对象的uid属性）</td>
                <td>array</td>
                <td>—</td>
                <td>[]</td>
              </tr>
              <tr>
                <td>id-prop</td>
                <td>v-model对应的id值重置（默认是file对象的uid属性），重置是相对于file对象的。例如上传成功后接口返回的id属性是返回内容的“data[0].attachId”，则设置id-prop="response.data[0].attachId"</td>
                <td>string</td>
                <td>string</td>
                <td>uid</td>
              </tr>
              <tr>
                <td>action</td>
                <td>必选参数，上传的地址</td>
                <td>string</td>
                <td>string</td>
                <td>—</td>
              </tr>
              <tr>
                <td>headers</td>
                <td>设置上传的请求头部</td>
                <td>object</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>multiple</td>
                <td>是否支持多选文件</td>
                <td>boolean</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>list-type</td>
                <td>文件列表的类型</td>
                <td>string</td>
                <td>text/picture/picture-card</td>
                <td>picture-card</td>
              </tr>
              <tr>
                <td>tips</td>
                <td>提示文字</td>
                <td>string</td>
                <td>—</td>
                <td>—</td>
              </tr>

              <tr>
                <td>max-size</td>
                <td>单个文件的最大尺寸，以kb为单位，只传数值</td>
                <td>number或者string</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>limit</td>
                <td>最大允许上传个数</td>
                <td>number</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>accept</td>
                <td>接受上传的文件类型（thumbnail-mode 模式下此参数无效）。例如accept="image/jpeg,image/png"或者以逗号分隔的文件扩展名accept=".jpg,.png"</td>
                <td>number</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>file-list</td>
                <td>上传列表(可用于显示默认文件), 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]</td>
                <td>array</td>
                <td>—</td>
                <td>[]</td>
              </tr>
            </tbody>
          </table>

          <h6>
            注：一般情况下只列出与elementUI不同的属性。其他elementUI的原生属性都可以正常使用，不再专门列出。
          </h6>
        </article>
      </el-tab-pane>
      <el-tab-pane label="查看代码" name="code">
        <show-code v-if="activeTab == 'code'" url="demoViews/tableDemo.vue" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'doc',
      fileList: []
    }
  },
  methods: {
    beforeImgUpload(file) {
      const isImg = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLtSize = file.size / 1024 / 1024 < 0.5

      if (!isImg) {
        this.$message.error('上传图片只能是 jpg/png 格式!')
        return false
      }
      if (!isLtSize) {
        this.$message.error('上传图片大小不能超过 500KB!')
        return false
      }
      return isImg && isLtSize
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      )
    },
    fileChange(file, fileList) {
      this.fileList = fileList
      console.log(this.fileList)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

<style scoped lang="scss">
/deep/ .test-col {
  color: green;
}
</style>
