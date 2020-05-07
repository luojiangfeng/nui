<!-- 比elementUI多的属性：width -->
<template>
  <div class="page-main">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
        <h2>Upload 上传</h2>
        <div class="demo-block">
          <nui-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :before-upload="beforeImgUpload"
            :on-change="fileChange"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
          >
            <nui-button size="small" type="primary">点击上传</nui-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb，不超过3个文件
            </div>
          </nui-upload>
        </div>

        <h3>大文件分片上传</h3>
        <div class="demo-block">
          <nui-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :before-upload="beforeImgUpload"
            :on-change="fileChange"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
          >
            <nui-button size="small" type="primary">点击上传</nui-button>
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb，不超过3个文件
            </div>
          </nui-upload>
        </div>

        <article class="intro-list">
          <h3>Table Attributes</h3>
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
                <td></td>
                <td></td>
                <td>—</td>
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
          url="demoViews/tableDemo.vue"
        ></show-code>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'doc',
      fileList: [],
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
    },
  },
}
</script>

<style scoped lang="scss">
/deep/ .test-col {
  color: green;
}
</style>
