<template>
  <div :id="id" class="wrap">
    <el-dialog
      v-drag="drag"
      v-bind="$attrs"
      :modal-append-to-body="modalAppendToBody"
      :class="height!==undefined ? 'custom-height':''"
      v-on="$listeners"
    >
      <slot />
    </el-dialog>
  </div>
</template>

<script>
import { isIE } from '../../utils.js'
import { randomChar } from '../../utils.js'

export default {
  name: 'NuiDialog',
  directives: {
    drag: {
      bind(el, binding, vnode) {
        if (!binding.value) {
          return
        }

        const dialogHeaderEl = el.querySelector('.el-dialog__header')
        const dragDom = el.querySelector('.el-dialog')
        dialogHeaderEl.style.cssText += ';cursor:move;'
        dragDom.style.cssText += ';top:0px;'

        // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
        const getStyle = (function() {
          if (window.document.currentStyle) {
            return (dom, attr) => dom.currentStyle[attr]
          } else {
            return (dom, attr) => getComputedStyle(dom, false)[attr]
          }
        })()

        dialogHeaderEl.onmousedown = e => {
          // 鼠标按下，计算当前元素距离可视区的距离
          const disX = e.clientX - dialogHeaderEl.offsetLeft
          const disY = e.clientY - dialogHeaderEl.offsetTop

          const dragDomWidth = dragDom.offsetWidth
          const dragDomHeight = dragDom.offsetHeight

          const screenWidth = document.body.clientWidth
          const screenHeight = document.body.clientHeight

          const minDragDomLeft = dragDom.offsetLeft
          const maxDragDomLeft =
            screenWidth - dragDom.offsetLeft - dragDomWidth

          const minDragDomTop = dragDom.offsetTop
          const maxDragDomTop =
            screenHeight - dragDom.offsetTop - dragDomHeight

          // 获取到的值带px 正则匹配替换
          let styL = getStyle(dragDom, 'left')
          let styT = getStyle(dragDom, 'top')

          if (styL.includes('%')) {
            styL =
              +document.body.clientWidth * (+styL.replace(/\%/g, '') / 100)
            styT =
              +document.body.clientHeight * (+styT.replace(/\%/g, '') / 100)
          } else {
            styL = +styL.replace(/\px/g, '')
            styT = +styT.replace(/\px/g, '')
          }

          document.onmousemove = function(e) {
            // 通过事件委托，计算移动的距离
            let left = e.clientX - disX
            let top = e.clientY - disY

            // 边界处理
            if (-left > minDragDomLeft) {
              left = -minDragDomLeft
            } else if (left > maxDragDomLeft) {
              left = maxDragDomLeft
            }

            if (-top > minDragDomTop) {
              top = -minDragDomTop
            } else if (top > maxDragDomTop) {
              top = maxDragDomTop
            }

            // 移动当前元素
            dragDom.style.cssText += `;left:${left + styL}px;top:${top +
              styT}px;`

            // emit onDrag event
            vnode.child.$emit('dragDialog')
          }

          document.onmouseup = function(e) {
            document.onmousemove = null
            document.onmouseup = null
          }
        }
      }
    }
  },
  props: {
    drag: {
      type: Boolean,
      default: true
    },
    height: {
      type: String
    },
    modalAppendToBody: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      id: ''
    }
  },
  computed: {

  },
  watch: {

  },
  created() {
    this.id = 'select' + randomChar(20)

    if (isIE()) {
      this.modalAppendToBody = false
    }
  },
  mounted() {
    // console.log(this.visible)
    const dom = document.getElementById(this.id)

    this.$nextTick(() => {
      const dialogBody = dom.querySelectorAll('.el-dialog')[0]

      // dialogBody.style.height = this.height
      // console.log(dialogBody)
    })
  },
  methods: {}
}
</script>
<style scoped lang="scss">
// .custom-height{

//   /deep/.el-dialog{
//     overflow: auto;

//   }

//    /deep/.el-dialog__body{
//    height: 300px;
//     overflow: auto;

//   }

// }
</style>
