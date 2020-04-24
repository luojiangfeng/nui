<template>
  <code>
    <textarea ref="mycode" class="codesql"></textarea>
  </code>
</template>

<script>
import "codemirror/theme/neo.css"
import "codemirror/lib/codemirror.css"
import "codemirror/mode/vue/vue.js"

let CodeMirror = require("codemirror/lib/codemirror")
require("codemirror/addon/edit/matchbrackets")
require("codemirror/addon/selection/active-line")

export default {
  name: "show-code",
  props: {
    url: {
      type: String,
    },
  },
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {
    let that = this
    let editor = CodeMirror.fromTextArea(this.$refs.mycode, {
      theme: "neo",
      mode: "vue", // 选择对应代码编辑器的语言，我这边选的是数据库，根据个人情况自行设置即可
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
          users: ["name", "score", "birthDate"],
          countries: ["name", "population", "size"],
        },
      },
    })

    editor.setSize("auto", "calc(100vh - 40px)")

    this.$http({
      url: that.url,
      method: "GET",
    })
      .then((res) => {
        editor.setValue(res)
      })
      .catch(() => {})
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
</style>
