<template>
  <!-- 上传 -->
  <div class="uploader-big">
    <uploader
      :key="uploader_key"
      ref="uploader"
      :options="innerOptions"
      :file-status-text="statusText"
      :auto-start="false"
      class="uploader-app"
      @file-added="onFileAdded"
      @file-success="onFileSuccess"
      @file-progress="onFileProgress"
      @file-error="onFileError"
    >
      <uploader-unsupport />
      <uploader-drop class="uploader-drop">
        <p>
          <uploader-btn
            class="uploader-btn"
            :attrs="{ accept: accept }"
          >点击上传</uploader-btn>
          或将文件拖到虚线框内
        </p>
      </uploader-drop>

      <uploader-list>
        <div slot-scope="props" class="file-panel">
          <ul class="file-list">
            <li v-for="file in props.fileList" :key="file.id">
              <uploader-file
                ref="files"
                :class="[
                  'file_' + file.id,
                  fileExtend(file.name, file.isFolder)
                ]"
                :file="file"
                :list="true"
              />
            </li>
            <div v-if="!props.fileList.length" class="no-file">
              <i class="nucfont inuc-empty-file" /> 暂无待上传文件
            </div>
          </ul>
        </div>
      </uploader-list>
    </uploader>
  </div>
</template>

<script>
import SparkMD5 from 'spark-md5'
import axios from 'axios'
import Vue from 'vue'

import uploader from 'vue-simple-uploader'
Vue.use(uploader)

export default {
  name: 'NuiUploadBig',
  model: {
    prop: 'file-list',
    event: 'change'
  },
  props: {
    url: {
      type: String
    },
    mergeUrl: {
      type: String
    },
    headers: {
      type: Object
    },
    options: {
      type: Object,
      default: () => {}
    },
    maxSize: {
      type: [String, Number]
    },
    accept: {
      type: String,
      default: '*'
    },
    fileList: {
      type: Array
    }
  },
  data() {
    return {
      innerFileList: [],
      uploader_key: new Date().getTime(), // 这个用来刷新组件--解决不刷新页面连续上传的缓存上传数据（注：每次上传时，强制这个值进行更改---根据自己的实际情况重新赋值）
      innerOptions: {
        target: this.url, // '//jsonplaceholder.typicode.com/posts/',
        headers: this.headers,
        fileParameterName: 'file', // 上传文件时文件的参数名，默认file
        maxChunkRetries: 3, // 最大自动失败重试上传次数
        testChunks: true, // 是否开启服务器分片校验
        // 服务器分片校验函数，秒传及断点续传基础
        checkChunkUploadedByResponse: function(chunk, message) {
          const objMessage = JSON.parse(message)
          if (objMessage.skipUpload) {
            return true
          }

          return (objMessage.uploaded || []).indexOf(chunk.offset + 1) >= 0
        },
        parseTimeRemaining: function(timeRemaining, parsedTimeRemaining) {
          return parsedTimeRemaining
            .replace(/\syears?/, '年')
            .replace(/\days?/, '天')
            .replace(/\shours?/, '小时')
            .replace(/\sminutes?/, '分钟')
            .replace(/\sseconds?/, '秒')
        },
        query() {}
      },
      statusText: {
        success: '上传成功',
        error: '出错了',
        uploading: '上传中',
        paused: '暂停中',
        waiting: '等待中'
      },
      panelShow: false, // 选择文件后，展示上传panel
      collapse: false
    }
  },
  computed: {
    // Uploader实例
    uploader() {
      return this.$refs.uploader.uploader
    },
    fileExtend() {
      return function(filename, isFolder) {
        if (isFolder) {
          return 'folder'
        } else {
          if (!filename || typeof filename !== 'string') {
            return false
          }
          const a = filename
            .split('')
            .reverse()
            .join('')
          const b = a
            .substring(0, a.search(/\./))
            .split('')
            .reverse()
            .join('')

          return b
        }
      }
    }
  },

  created() {
    this.innerOptions = Object.assign({}, this.innerOptions, this.options)
  },

  mounted() {
    this.$nextTick(() => {
      window.uploader = this.$refs.uploader.uploader
    })
  },
  methods: {
    onFileAdded(file) {
      const size = file.size / 1024 / 1024
      const maxSize = parseInt(this.maxSize)
      const fileNameReverse = file.name
        .split('')
        .reverse()
        .join('')
      const expandedName = fileNameReverse
        .substring(0, fileNameReverse.search(/\./))
        .split('')
        .reverse()
        .join('')

      if (size > maxSize) {
        const tipSize =
          maxSize >= 1024 ? `${(maxSize / 1024).toFixed(2)}GB` : `${maxSize}MB`
        this.$message.warning(`单个文件大小不能超过 ${tipSize} !`)
        this.uploader.removeFile(file)
        return false
      }

      if (
        this.accept.indexOf('/') === -1 &&
        this.accept.indexOf('*') === -1 &&
        this.accept.indexOf(expandedName) === -1
      ) {
        this.$message.warning(`只支持 ${this.accept} 格式的文件!`)
        this.uploader.removeFile(file)
        return false
      }

      this.computeMD5(file)
    },
    onFileProgress(rootFile, file, chunk) {
      console.log(
        `上传中 ${file.name}，chunk：${chunk.startByte /
          1024 /
          1024} ~ ${chunk.endByte / 1024 / 1024}`
      )
    },
    onFileSuccess(rootFile, file, response, chunk) {
      const res = JSON.parse(response)

      console.log('onFileSuccess')
      // 服务器自定义的错误（即虽返回200，但是是错误的情况），这种错误是Uploader无法拦截的
      if (!res) {
        this.$message({ message: '上传错误', type: 'error' })
        // 文件状态设为“失败”
        return
      }

      console.log(res.needmerge)
      // 如果服务端返回需要合并

      if (res.needmerge === true || res.needmerge === undefined) {
        // 文件状态设为“合并中”
        axios
          .post(
            this.mergeUrl,
            {
              identifier: rootFile.uniqueIdentifier,
              fileName: file.name,
              fileSize: file.size,
              contentType: file.type,
              ...this.params
            },
            {
              headers: this.headers,
              transformRequest: [
                function(data) {
                  // Do whatever you want to transform the data
                  let ret = ''
                  for (const it in data) {
                    ret +=
                      encodeURIComponent(it) +
                      '=' +
                      encodeURIComponent(data[it]) +
                      '&'
                  }
                  return ret
                }
              ]
            }
          )
          .then(res => {
            // 文件合并成功
            this.innerFileList.push(rootFile.uniqueIdentifier)

            console.log(this.innerFileList)
            this.$emit('change', this.innerFileList)
            console.log('文件合并成功')
          })
          .catch(e => {})

        // 不需要合并
      } else {
        this.innerFileList.push(rootFile.uniqueIdentifier)
        console.log(this.innerFileList)
        this.$emit('change', this.innerFileList)
        console.log('上传成功')
      }
    },
    onFileError(rootFile, file, response, chunk) {
      this.$message({
        message: response,
        type: 'error'
      })
    },

    /**
     * 计算md5，实现断点续传及秒传
     * @param file
     */
    computeMD5(file) {
      const loading = this.$loading({
        lock: true,
        text: '正在计算MD5',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })

      const fileReader = new FileReader()
      const time = new Date().getTime()
      const blobSlice =
        File.prototype.slice ||
        File.prototype.mozSlice ||
        File.prototype.webkitSlice
      let currentChunk = 0
      const chunkSize = 10 * 1024 * 1000
      const chunks = Math.ceil(file.size / chunkSize)
      const spark = new SparkMD5.ArrayBuffer()

      file.pause()

      loadNext()

      fileReader.onload = e => {
        spark.append(e.target.result)

        if (currentChunk < chunks) {
          currentChunk++
          loadNext()

          // 实时展示MD5的计算进度
          this.$nextTick(() => {
            const tips =
              '校验MD5 ' + ((currentChunk / chunks) * 100).toFixed(0) + '%'
            loading.text = tips
          })

          // 实时展示MD5的计算进度
          // this.$nextTick(() => {
          //   $(`.myStatus_${file.id}`).text('校验MD5 ' + ((currentChunk / chunks) * 100).toFixed(0) + '%')
          // })
        } else {
          const md5 = spark.end()
          loading.close()
          this.computeMD5Success(md5, file)
          console.log(
            `MD5计算完毕：${file.name} \nMD5：${md5} \n分片：${chunks} 大小:${
              file.size
            } 用时：${new Date().getTime() - time} ms`
          )
        }
      }

      fileReader.onerror = function() {
        this.error(`文件${file.name}读取出错，请检查该文件`)
        loading.close()
        file.cancel()
      }

      function loadNext() {
        const start = currentChunk * chunkSize
        const end =
          start + chunkSize >= file.size ? file.size : start + chunkSize

        fileReader.readAsArrayBuffer(blobSlice.call(file.file, start, end))
      }
    },

    computeMD5Success(md5, file) {
      // 将自定义参数直接加载uploader实例的opts上
      Object.assign(this.uploader.opts, {
        query: {
          ...this.params
        }
      })

      file.uniqueIdentifier = md5
      file.resume()
    },

    close() {
      this.uploader.cancel()
    },
    error(msg) {
      this.$notify({
        title: '错误',
        message: msg,
        type: 'error',
        duration: 2000
      })
    }
  }
}
</script>
<style scoped lang="scss">
.uploader-drop {
  padding: 16px;
  padding-left: 18px;
  position: relative;
  background: #fff;
  border-color: #b3d8ff;

  p {
    font-size: 14px;
    color: #666;
  }

  .uploader-btn {
    font-size: 12px;
    margin-right: 7px;

    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
    transition: 0.1s;

    &:hover {
      color: #fff;
      border-color: #409eff;
      background: #409eff;
    }
    // border-radius:5px;
  }

  .icon-upload {
    opacity: 0.6;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    font-size: 56px;
    color: #c0c4cc;
    line-height: 50px;
  }
}

.uploader-big {
  .file-panel {
    background-color: #fff;

    .file-title {
      display: flex;
      height: 40px;
      line-height: 40px;
      padding: 0 15px;

      .operate {
        flex: 1;
        text-align: right;
      }
    }

    .file-list {
      position: relative;
      overflow-x: hidden;
      overflow-y: auto;
      background-color: #fff;

      > li {
        background-color: #fff;
      }
    }

    &.collapse {
      .file-title {
        background-color: #e7ecf2;
      }
    }
  }

  .no-file {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
  }

  /deep/.uploader-file {
    /deep/.uploader-file-icon {
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAS9UlEQVR4Xu2dD5BdVX3Hf7/3XpYoKewLYkMSGkGlCNRChYpIK7b8sQ5KFEJT/mimtZRsdvecF2JQqdPnoDihkD1n35IMQUYUEXWRUlpKm5apMFSpBQF1KjJFoLDiH2CzIEmz77376xx4jAvkzzv3z7nn3Pu7M84y4/n9Od/z/eTe99695yLwwQqwArtVAFkbVoAV2L0CDAi7gxXYgwIMCNuDFWBA2AOsQDwF+AwSTzeOKokCDEhJFpqnGU8BBiSebhxVEgUYkJIsNE8zngIMSDzdOKokCjAgJVlonmY8BRiQeLpxVEkUYEBKstA8zXgKMCDxdOOokijAgJRkoXma8RQoDCDNZrMyPT19ICIehIj7E1Fh5hZvad1GISIR0QwRPaW1/gUAkNsOsqkWpIlWrFhRXbp06YlEtBwATiCixQBgwKhmIxNntVSgAwA/J6InEfEeALhlcHDwrmazGVnmyX14UIA0Go2Toyg6GxHPBICFuavHDdgo8LQBJYqir42Pj99hE5jn2BAAQSnlOUT0aUT87TzF4trpKEBEP0bES5VSX/X9UsxrQKSUvwcA1wCA+ctH8RT4HgD8pVLK/PXy8BUQc9b4BAB8FgAqXirHTaWlgPlc8tdKqc+nlTDNPN4BMjQ0tGDevHk3IuLpaU6Uc3mvwG2zs7MrN23a9CufOvUKkLVr1x7c7Xa3IuLhPonEvbhRgIgeqlarp27cuPEJNxX3XsUbQIaHhxfXajXzleDBe2+bRxRYgSc6nc7xExMTP/Vhjl4Asnr16vo+++xj4DjMB1G4h9wVeHjnzp3Hb968eTrvTrwARAhxGyK+P28xuL5XCtymlMr9c2jugEgpVwPAJq+WhpvxQgEiWqO1ztUbuQLSaDSWRFH0ECIu8GJFuAmvFCCiX0VR9LZWq/VkXo3lCoiU8hYAOCPp5InoEXMbAyKav08BwLakOTneXoHeTaKLiejNALAcEc3fRAcR3aq1TuyRuE3kBkij0TiSiH4Yt3ETR0R3RFH08VardX+SPBybjQIjIyPHVCqVv0XEP05SIYqi3xkfH0/klbj1cwNECHFT76ZD696J6BlEvEApdbN1MAc4V0BK+WEi2oKIB8QpTkTf1FqfFSc2aUwugEgpDwIAc10Z5zaSB7vd7ul5XpcmFb2M8b0fgf8eEY+JMf+o0+kcnMdvI3kB8kkAuCyGUD+o1WrvuuKKK16IEcshOSuwbt26fdvt9rcR8e0xWvlUHvdr5QKIEOJ7tv+SENHPAeB3tdbmLx+BKjA0NLRo3rx59yPiIsspPKCUinP2sSzzyuHOAendjPgcIlrVJqKPaa2vTTRbDvZCASHEXyDiF2yaMc/zttvt/VzfzGhlUpsJ7W5so9H4gPnqzjLXE1NTU4dMTk52LeN4uIcKNJvN2vT09COI+Fs27RHRGVprW+/YlHjNWOeASCkv6T3n0XfjRLROa31l3wE80HsFhBAXIeIVlo2a50Y+ZxmTaLhzQIQQ1yPieTZdE9EyrfX/2sTwWL8VkFK+CQAetemSiL6itT7fJibpWOeASCnvAoA/sGj8J0qpxL/IWtTjoY4UEEL8j82v7UR0t9baxjuJZ5IHIA+Yb6P67ZyI7tJav6ff8TwuHAWEEHci4h9adPygUupoi/GJh+YBiLlf6tB+Oyeir2utV/Y7nseFo4AQwjxa3ffaEtGjWuu+vZOGEnkA8hgALLNo/ktKqVUW43loIApIKa8DgI9atPu4Usp8dnF2MCDOpOZCr1aAAdmFJ6SUfAZhVl5UgAFhQBiFPSjAgDAgDAgDYucBvsSy06vIo/kMwmeQIvs78dwYEAYksYmKnIABYUCK7O/Ec2NAGJDEJipyAgaEASmyvxPPjQFhQBKbqMgJGBAGpMj+Tjw3BoQBSWyiIidgQBiQIvs78dwYkEABkVK+m4jeg4jvAIBYuwEmdo+7BM8Q0X2IeKdS6j/cleWbFXeptc+3moyMjCytVCpmS9R3ujSKL7WI6D+jKDrL1a6VfAYJ6Axi9usaGBgwGyTbPMzli7fT7OPx2dnZo1zsP8WABASIEGIzIl6YptNCzUVEV2utM9eCAQkEkEaj8booip5HxGqopk6zbyLq7tixY78tW7ZsTzPvq3MxIIEAIoQ4BRG3ZmmG0HIj4mljY2OZasKABALI6OjoOZVK5YbQTJxxv+cppTLVhAEJBJBGo3EyEf1rxoYLKj0Rnaq1zlQTBiQQQHrvrZjhzyAvLRh/Bvm1cXnbn54WUsqrAeCCoP6Zz6hZIrpGa525FnwGCeQMYtpcv379b8zOzn4fAJxuTJaRx5OkfWxgYODtl19++fNJkvQTy4AEBIhptfcevW8g4vH9LHDRxvAv6a9dUb7E2oXLhRAnAoDZVPlYRFxYNBDmzoeIngWAewHAbBJ+t8u58hkksDOIS3NwLb5ZcZce8PlmRTatWwX4DMJnELeOC6waA8KABGZZt+0yIAyIW8cFVo0BYUACs6zbdhkQBsSt4wKrxoAwIIFZ1m27DAgD4tZxgVVjQBiQwCzrtl0GhAFx67jAqjEgDEhglnXbLgPCgLh1XGDVGBAGJDDLum2XAWFA3DousGoMCAMSmGXdtsuAMCBuHRdYNQaEAQnMsm7bZUACBaTZbA48++yzx1YqlVK8/iCKovsWLlx4b7PZnHWJCAMSGCDNZrM2PT19KSKOAMC+Ls3iQa0XiKhVr9c/3Ww2Oy76YUDCAgSllP8MAKe6MIfHNbYqpd5n9o/LukcGJCBAhBANRNyYtSkCyX+RUipzLRiQQABZsWJFdcmSJc8AwP6BGDjrNmempqYOmJyc7GZZiAEJBJDR0dETKpWK0/fzZWm8lHKfmPU7CxmQQACRUv4ZAHw1JWMVIk0UReeOj49nqgkDEgggQojTEfEfCuHslCZBRB/QWv9jSul2mYYBCQSQkZGRA6vV6i+yNENouavV6oFXXnnl01n2zYAEAohpU0ppXhZzcpaGCCU3Ed2htc5cCwYkIEDWrl17WLfbvR8RXx+KkbPok4i2V6vVYzZu3PhwFvnn5mRAAgLEtNpoNE6NomgSEffL2hw+5iei5wDgrKxfvfby3BmQwAAx7ZrPI5VK5a/mvP6g7qOZ0+qJiKZffv1BFEVXt1qtX6aVe295GJAAAdnbovL/n54CDAgDkp6bCpiJAWFACmjr9KbEgDAg6bmpgJkYEAakgLZOb0oMCAOSnpsKmIkBYUAKaOv0psSAMCDpuamAmRgQBqSAtk5vSgwIA5KemwqYiQFhQApo6/SmxIAwIOm5qYCZGBAGpIC2Tm9KDAgDkp6bCpiJAWFACmjr9KbEgDAg6bmpgJkYEAakgLZOb0oMCAOSnpsKmIkBCRgQsx3p0qVLjyCiA7L0JiISET2ulHosyzo+5mZAAgTEbNxARB8nohMRcb4rY/WeDb+92+1eOjEx8ZCrunnWYUACA0RK+UkAuCxP0wDADiI6w9XOInnOlQEJCBAhxCmIuDVPw8ypva3T6Rw5MTHxU0/6yaQNBiQsQB5GxLdm4oQYSYnoGq31BTFCgwlhQAIBpNFoHElEP/TMWTNKqUHPekq1HQYkEECklGcBwGSqq59CMhcbSKfQZuwUDEgggAghzkTEm2KvdEaB7Xb7DVdddZV581UhDwYkEEA8vcR6Win1Rhcv08yLPgYkEEBMm0IIrz6kA8AWpZTZI7iwBwMSFiCnIaJ5DbQPxzYAOEIp9ZQPzWTVAwMSECCmVSnlJQDw2awM0WfeHYi4fGxszJffZPps234YAxIYIKbd3jtC1gPAu3O41WRrt9tt8q0mu4XN3LP2JnsU40dg/NB4kVJKc1PeMovoLymlVlmMT2WouVlx8eLFRyLiwlQS7iaJxzcrohDiWAA4FBEPIqLFiLgIAA4CgHlpaEJEhyPib1rkYkB2IVYugFgsWmGGNpvN2szMzElEtJyIzkbEAz2bHAPCgLi35MjIyNJqtbqeiM5DRJ/fqMWAMCDuAFmzZs0BtVptAwCsQsSqu8qxKz2mlDokdnSMQP4MEkO0IoSMjo6eU6lUrgKAYO73IqKHtNZvc6k/A+JSbQ9qNZvNgenpaY2IF3rQjlULRHSf1tp8ceDsYECcSZ1/od4l1e2IeFz+3cTqYKtS6rRYkTGDGJCYwoUWNjw8fEitVrsTAA4Orfc5/W5WSg257J8Bcal2TrXWrVv3xna7fQ8iOv2Am8F0L1JKbcwg725TMiAu1c6hVu8zh4HjmBzKp13yBKXUd9JOuqd8DIhLtXOoJYTYiIiNHEqnWpKIdtbr9QXNZrOTauK9JGNAXKrtuJaU8iQA+HfHZbMqd7NS6sysku8uLwPiWnFH9cyl1bZt234MAGnd3LcDAMzt9+Z/sf4VJ6J3IOKCmBKcp5S6IWZs7DAGJLZ0fgdKKc0dyeZX8iTHE0R0PRHdPD4+fl+SRFLK1QCwKU4OIvq/+fPnL9qwYcNMnPgkMQxIEvU8je2dPaYA4A1xWjSGBIDLZ2ZmPn/dddeZ/050JIHDFCaiDVrrTyRqImYwAxJTOJ/DpJQfA4BrYvb4OBGdprU2l2eJj6RwAMAL7XZ7WV6bVzAgiS3gXwIhxHcQ8fgYnZmvUN+vlDKP/CY+UoDDnD0u0Vrnth0sA5LYBn4laDQahxLRI7ZdmZjZ2dnjNm/ePG0bu6vxacABAFPbtm17SxqXeXHnxIDEVc7TuEajIYhIWbYX9fYCTmVXeSnlnwPAtZY9vGK4eScEAJyktb4rSZ6ksQxIUgU9i5dS/h0ALLds63ql1EcsY3Y53MBBRF9AxETeIqLLtNZmE41cj0STiNN5KM+kx5mbDzFSSrMjvHluvO+j2+2+pdVqWV+WvbpAWnAAwI1KqXN92DSPAenbRv4PHBoaWjAwMPC8TadE9F9a69+3idnNZ45UzhwAcPPU1NTZk5OT3aQ9pRHPgKShoic5hBDHIeJ3bdpJ41uitM4cRHRrvV4/0/X9VnvSiwGxcZPnY6WUfwIA/2TTZu9tVrfaxMwdW2Q4zDwZkLjO8DBudHR0ZaVSudGmNfN04djY2L02MS+PlVKea25FSeEDuXdnjpfnyIDEcYanMVJKs8HeF23a63Q6h05MTDxqE2PGlgEOPoPYusLz8XEAAYBDbF9BXRY4GBDPDW/bngtAygRHLoAIIX5i82w0EX1Fa32+rVnKOD5rQMoGR16A/AARj7Iw8L8ppU6xGF/aoVkCUkY4cgFESvltAHiXhYt/pJQ6wmJ8aYdmBUhZ4cgLEPM2WfNW2b4OIupGUbSw1Wo911dAiQdlAYh5AzARfaPIX+XuyTLOv+YVQnwOET9l42Mi+qjW+ss2MWUcmzYgPTi+lnRjax9/Ie/XH84B6W2abPvw/beUUu/td1JlHZcmICnC8S/1ev10n24fsfGHc0CGh4cX12o187y07fFepdS3bIPKND4tQFKG44PNZnM21HVwDogRKsYt7ybs3u3bt5+wZcuWdqhiZ913GoAwHK9cpbwAGTOc2BqGiL6utV5pG1eW8UkBYThe65RcABkeHj68Vqv9KI5xiejaer1+YajXtHHm3G9MEkCklOcT0RdT+EBuPnMEfVk1V+9cADENCCHMhsrv7Hfx544jonva7faHNm3a9LM48UWNiQOI+dE2iqJzbL9Z3JWGRFQoOMwccwNESvlhAPhmArM+T0Sfqdfrms8mL6kYBxAieg4R90uwDi+GFhGOXAExcAohvm9528lr1pGIfgkA5oGfWxDRPFf9VFr7OiU1jev4OICk0WNR4cgbEPMvnrnlxNx6wkegChQZjtwB6V0WTADAmkD9Ueq2iw6HF4CsWrVq/uDg4IMAcFip3RbY5MsAhxeAmCZGR0ePqlQq9wDAvoH5pJTtlgUObwDpXWr9EQDcDgADpXRdIJMuExxeAdI7k7wPEScTvIUoEJuF2aa5K3dmZuZP89xM2rVyuf0OsruJjoyMHFGtVs3eTstci8H19qjADYODgx9pNptRmXTyDhAj/sUXX7z/zp07bwKAk8u0GD7O1bxdFgDWaa3Nt42lO7wEpLcK2Gg0RqMougwRX1+6lfFjwubbxVVKqQf8aMd9Fz4D8qIavedHPmOeKkTEee4lKl9FIvpZpVL5m7GxMfMaN/OejtIe3gPy8soMDQ0tGhgYGCailYj45tKuWLYTN1uQbt6+ffv1/NzNS0IHA8hcX0gpjyaiDyLihwDg6Gw9U9zs5kwBAGY3+LvNt4e2OywWV5lfzyxIQOYuTKPReF2n01lcqVSWmBfHIKJ5ecz+ocKftemIqIOI/93tdr/barWezLpe6PmDByT0BeD+/VaAAfF7fbi7nBVgQHJeAC7vtwIMiN/rw93lrAADkvMCcHm/FWBA/F4f7i5nBRiQnBeAy/utAAPi9/pwdzkrwIDkvABc3m8FGBC/14e7y1kBBiTnBeDyfivAgPi9PtxdzgowIDkvAJf3WwEGxO/14e5yVoAByXkBuLzfCvw/mVpXXw4o0PAAAAAASUVORK5CYII=);
      background-repeat: no-repeat;
      background-position: 0 0;
      background-size: 100%;
    }

    &.folder {
      /deep/.uploader-file-icon {
        background: url(data:image/png;base64,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);
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: 100%;
      }
    }

    &.zip,
    &.rar {
      /deep/.uploader-file-icon {
        background: url(data:image/png;base64,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);
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: 100%;
      }
    }
  }

  /deep/.uploader-file-icon {
    &:before {
      content: "" !important;
    }

    &[icon="image"] {
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABrElEQVRIS+2WSyhEURjHf2e88kosPBdISY2NJKRZiCyUrLDxWmHBQgmT8sxihFjZkGyEYkkpj40NGxtLmiKP1FhYCffqzGnymMucGVM2zu7cvu//+56dKwBMZ2Uthm0ZSJX3oI/dMS5aR0es/IQXMFB1DWQELexzKHSAiSXEBzBDFpeOEuA95oRoGRv+qBUeQEEpREZbQsIDSEyGrHxLSHgAFvUVrj2v9h8DHA1Q3QJnR7DhCmoO9DIY2oDEFCU82QiPHm2IHqBpEIqq4c4N8x1gGArQ5ISHW9iVu2l99AA2G6Tnwv0VPD8ppbQc6F2E1xeYblegkJtsr4CbC/DcvEvU90B5vbofb8PWbIiAzDzoXgDjBQ7X4GAVIqJgaB1i4pSozGKmHTz+WfxcIiGgaw6y7e/R3V/C+SmU1X2O+GQHNmf8svgZUFwDDf16E2O8ql58LKNcsG8XLTYB+lYgPkkPIK0ssvgekF8CbRMQEakPkD2Yav5krzem+ogge/ALYZ/rfwYBi/i1RL979P1xbuHay5Wf1YOjfluWgPSAoQUyMLlEmJ3Ctb8jTd8AdEK2GXulwsYAAAAASUVORK5CYII=);
      background-repeat: no-repeat;
      background-position: 0 0;
      background-size: 100%;
    }
    &[icon="video"] {
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABf0lEQVRIS2NkYGBgqG/+6MXEwDCfgYFBDMQnFejr8jUFBDDWY9PHCBJsbP74jIGBQZJUg2Hq9XT5GBgZGLBaArPgP7mGg/SBLAADRobmQH/GOmSzqGKBpiYvAysL2CgMS6hiAS8vC4OMDCdWS6hiAbbgra/lB5s9zC3g4IBGHFIY/PhBXILDG0SaGqwMPt4cDJycmBZ8//6fYcvWHwzXb/wGW8vExMBgbMzGcPr0L5SowGtBSREvAxcXpuEwE75+/c/Q2/+ZgY2NkSE0mJNBWZmFoanlE/EW1NVAMw6e3Nfc+okhOYmbQUqSGayK6hZ0dn9mKC/lhTth6FkAcrGnOweDqSkb6UFUVMDLwMODO5I/ffrHMGHSF7DBlhZsDK4uHKTFgbISC4OnBweDkBATRjS/e/ePYfvOHwx37/6By4mIMDG8efOP+FRESdEN0ztCyiJKgoruQURRpY/hU0aGB/U1/IrwCgfabJnLwMAgQUmwQPU+ZmBiSK+v5t8O4gMA66GtGdNABPYAAAAASUVORK5CYII=);
      background-repeat: no-repeat;
      background-position: 0 0;
      background-size: 100%;
    }
    &[icon="document"] {
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA90lEQVRIS2NkYGBg8Jnx34vxP8N8BgYGMRCfVBBuzdAUo8dYj00fI9iC6f+fMTIwSJJqMEx9hDUDw38G7JaALfCd/v8/uYaD9IEsgILmaD3GOmSzqGKBvykDAycbdkuoYoGkIAODmQp2S6hiAbbg3ZzJCDZ7GFvQ7s/AoE0g4V59zsBQuRF7+iMYRF2BDAwa4vgT7/UXDAzlG8i0AF3bpgyIiN8M4nIMQR+MWjAaRASTEslB1BPEwPDvPwND2XqCZoMVkGwBccYiVI1aQDDEUIKI0kofi20PNmcyKsIrHGizZS4DA4MEQacRVvCY4T9D+uYsxu0gpQDiN4YZ4gF1LAAAAABJRU5ErkJggg==);
      background-repeat: no-repeat;
      background-position: 0 0;
      background-size: 100%;
    }
  }

  /deep/.uploader-file-actions > span {
    margin-right: 6px;
  }
}
</style>
