<template>
  <div :id="id" class="upload-wrap">
    <el-upload
      v-bind="$attrs"
      :list-type="listType"
      :limit="limit"
      :style="{ width: width }"
      :before-remove="innerBeforeRemove"
      :before-upload="innerBeforeUpload"
      :on-exceed="innerOnExceed"
      :on-remove="innerOnRemove"
      :on-preview="innerOnPreview"
      :on-change="innerOnChange"
      :on-success="innerOnSuccess"
      v-on="$listeners"
    >
      <slot v-if="useDefaultSlot" />
      <i v-else-if="listType==='picture-card'" class="el-icon-plus" />
      <nui-button v-else size="small" type="primary">点击上传</nui-button>

      <div v-if="tips" slot="tip" class="el-upload__tip">
        {{ tips }}
      </div>
      <slot v-else slot="tip" name="tip" />

      <slot slot="trigger" name="trigger" />
    </el-upload>

    <nui-img-viewer
      v-if="viewerVisable"
      v-show="false"
      ref="viewer"
      rebuild
      :images="images"
      class="viewer"
      @inited="inited"
    >
      <template scope="scope">
        <img v-for="src in scope.images" :key="src" :src="src">
      </template>
    </nui-img-viewer>
  </div>
</template>

<script>
import { randomChar } from '../../utils.js'
export default {
  name: 'NuiUpload',
  model: {
    prop: 'id-list',
    event: 'change'
  },
  props: {
    width: {
      type: String
    },
    maxSize: {
      type: [Number, String]
    },
    limit: {
      type: Number
    },
    listType: {
      type: String,
      default: 'picture-card'
    },
    tips: {
      type: String
    },
    idList: {
      type: Array,
      default: () => []
    },
    idProp: {
      type: String,
      default: 'uid'
    },
    onChange: {
      type: Function,
      default: () => {}
    },
    onSuccess: {
      type: Function,
      default: () => {}
    },
    onPreview: {
      type: Function,
      default: () => {}
    },
    onRemove: {
      type: Function,
      default: () => {}
    },
    onExceed: {
      type: Function,
      default: () => {}
    },
    beforeUpload: {
      type: Function,
      default: () => {}
    },
    beforeRemove: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      viewerVisable: true,
      images: [],
      fileList: [],
      id: ''
    }
  },
  computed: {
    useDefaultSlot() {
      return !!this.$slots.default
    },
    innerOnChange() {
      const that = this
      return function(file, fileList) {
        that.resetImgViewer(fileList)
        that.fileList = fileList

        that.onChange(file, fileList)
      }
    },
    innerOnPreview() {
      const that = this
      return function(file) {
        const index = that.fileList.indexOf(file)
        that.$viewer.view(index)

        that.onPreview(file)
      }
    },
    innerOnSuccess() {
      const that = this
      return function(response, file, fileList) {
        const idListArr = []

        fileList.forEach((item) => {
          let target
          eval('target=item.' + that.idProp)
          idListArr.push(target)
        })

        this.$emit('change', idListArr)

        that.onSuccess(response, file, fileList)
      }
    },
    innerOnRemove() {
      const that = this
      return function(file, fileList) {
        that.resetImgViewer(fileList)
        that.fileList = fileList

        that.onRemove(file, fileList)
      }
    },
    innerOnExceed() {
      const that = this
      return function(file, fileList) {
        this.$message.warning(`已限制最多上传 ${that.limit} 个文件！`)

        that.onExceed(file, fileList)
      }
    },
    innerBeforeUpload() {
      const that = this
      const maxSize = parseInt(that.maxSize)
      return function(file) {
        if (maxSize || !isNaN(maxSize)) {
          const isLtSize = file.size / 1024 < maxSize

          if (!isLtSize) {
            const tipSize = maxSize > 1024 ? `${maxSize / 1024}MB` : `${maxSize}KB`
            this.$message.warning(`单个文件大小不能超过 ${tipSize} !`)
            return false
          }
        }

        that.beforeUpload(file)
      }
    },
    innerBeforeRemove() {
      const that = this
      return function(file, fileList) {
        that.beforeRemove(file, fileList)

        return this.$confirm(`确定移除 ${file.name} 吗？`)
      }
    }
  },
  created() {
    this.id = 'upload' + randomChar(20)
  },
  mounted() {
  },
  methods: {
    inited(viewer) {
      this.$viewer = viewer
    },
    resetImgViewer(fileList) {
      const imagesSrcArr = []
      fileList.forEach(element => {
        imagesSrcArr.push(element.url)
      })

      this.viewerVisable = false
      this.images = imagesSrcArr

      this.$nextTick(() => {
        this.viewerVisable = true
      })
    }
  }
}
</script>
<style scoped lang="scss">

/deep/.el-upload-list__item-thumbnail{
 object-fit: contain;
}
</style>
