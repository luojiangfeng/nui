<template>
  <code>
    <textarea ref="code" class="codesql"></textarea>
  </code>
</template>

<script>
import './codemirror/theme/neo.css'
import './codemirror/theme/ambiance.css'
import './codemirror/lib/codemirror.css'
import './codemirror/mode/vue/vue.js'

let CodeMirror = require('./codemirror/lib/codemirror')
require('./codemirror/addon/edit/matchbrackets')
require('./codemirror/addon/selection/active-line')

export default {
  name: 'nui-code',
  props: {
    width: {
      type: String,
      default: '100%',
    },
    type: {
      type: String,
      default: 'javascript',
    },
    theme: {
      type: String,
      default: 'light',
    },
    value: {
      type: String,
    },
    height: {
      type: String,
      default: '100%',
    },
    url: {
      type: String,
    },
  },
  data() {
    return {
      innerType: this.type,
    }
  },
  computed: {},
  created() {
    if (this.innerType == 'html') {
      this.innerType = 'vue'
    }
  },
  mounted() {
    let that = this
    let editor = CodeMirror.fromTextArea(this.$refs.code, {
      theme: this.theme == 'light' ? 'neo' : 'ambiance',
      mode: this.innerType, // 选择对应代码编辑器的语言
      indentWithTabs: true,
      smartIndent: true,
      lineNumbers: true,
      matchBrackets: true,
      // styleActiveLine: true,
      // theme: theme,
      // autofocus: true,
      // extraKeys: { Ctrl: 'autocomplete' }, // 自定义快捷键
      hintOptions: {
        // 自定义提示选项
        tables: {
          users: ['name', 'score', 'birthDate'],
          countries: ['name', 'population', 'size'],
        },
      },
    })

    editor.setSize(this.width, this.height)

    if (this.url) {
      this.$http({
        url: that.url,
        method: 'GET',
      })
        .then((res) => {
          if (typeof res === 'object') {
            let jsonData = JSON.stringify(res)
            let result = JSON.stringify(JSON.parse(jsonData), null, 4)
            editor.setValue(result)
          } else {
            editor.setValue(res)
          }
        })
        .catch(() => {})
    } else {
      editor.setValue(this.value)
    }
  },
  methods: {},
}
</script>
<style scoped lang="scss">
.codesql {
  font-size: 11pt;
  font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
}

/deep/.CodeMirror {
  .CodeMirror-vscrollbar,
  .CodeMirror-hscrollbar {
    outline: none;
  }
  //滚动条
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-button,
  ::-webkit-scrollbar-button:vertical {
    display: none;
  }
  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar-track:vertical {
    border-radius: 10px;
    background-color: black;
  }
  ::-webkit-scrollbar-track-piece {
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-thumb,
  ::-webkit-scrollbar-thumb:vertical {
    border-radius: 10px;
    background: rgba(144, 147, 153, 0.2);
  }
  ::-webkit-scrollbar-thumb:hover,
  ::-webkit-scrollbar-thumb:vertical:hover {
    background: rgba(144, 147, 153, 0.3);
  }
  ::-webkit-scrollbar-corner,
  ::-webkit-scrollbar-corner:vertical {
    background-color: #535353;
  }
  ::-webkit-scrollbar-resizer,
  ::-webkit-scrollbar-resizer:vertical {
    background-color: #ff6e00;
  }
}
</style>
