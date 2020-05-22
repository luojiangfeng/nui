<template>
  <div class="page-main">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
        <h2>Radio 单选框</h2>
        <div class="demo-block">
          <nui-radio v-model="radio" label="1">备选项</nui-radio>
          <nui-radio v-model="radio" label="2">备选项</nui-radio>
        </div>

        <h3>单选框组（3种方式）</h3>
        <h5>1、单独传每个nui-checkbox组件</h5>
        <div class="demo-block">
          <nui-radio-group v-model="radioGroup1" @change="changeRadio">
            <nui-radio :label="3">备选项1</nui-radio>
            <nui-radio :label="6">备选项2</nui-radio>
            <nui-radio :label="9">备选项3</nui-radio>
          </nui-radio-group>
        </div>

        <h5>2、将每个选项的数据，通过nui-radio-group的options属性传入</h5>
        <div class="demo-block">
          <nui-radio-group v-model="radioGroup2" :options="radioOptions">
          </nui-radio-group>
        </div>

        <h5>
          3、选项通过接口获取:通过设置nui-radio-group的url属性，value-name属性，label-name属性
        </h5>
        <div class="demo-block">
          <nui-radio-group
            url="/api/getLocationList.json"
            value-name="orgId"
            label-name="orgName"
            v-model="radioGroup3"
          >
          </nui-radio-group>
        </div>

        <h3>按钮样式</h3>
        <div class="demo-block">
          <nui-radio-group v-model="radioBtn1">
            <nui-radio-button label="上海"></nui-radio-button>
            <nui-radio-button label="北京"></nui-radio-button>
            <nui-radio-button label="广州"></nui-radio-button>
            <nui-radio-button label="深圳"></nui-radio-button>
          </nui-radio-group>

          <div style="margin-top: 20px">
            <nui-radio-group v-model="radioBtn2" size="small">
              <nui-radio-button label="0">上海</nui-radio-button>
              <nui-radio-button label="1">北京</nui-radio-button>
              <nui-radio-button label="2">广州</nui-radio-button>
              <nui-radio-button label="3">深圳</nui-radio-button>
            </nui-radio-group>
          </div>
        </div>

        <h3>带有边框</h3>
        <div class="demo-block">
          <nui-radio-group v-model="radioBtn1">
            <nui-radio v-model="radio" label="1" border>男</nui-radio>
            <nui-radio v-model="radio" label="2" border>女</nui-radio>
          </nui-radio-group>
        </div>
        <article class="intro-list">
          <h3>Radio-group Attributes</h3>
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
                <td>url</td>
                <td>接口地址(支持GET请求)</td>
                <td>string</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>value-name</td>
                <td>
                  接口返回的，对应option的value的属性名（一般为ID等唯一值）
                </td>
                <td>string</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>label-name</td>
                <td>
                  接口返回的，对应option的label的属性名（一般为name等实际展示的名称）
                </td>
                <td>string</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>options</td>
                <td>选项列表</td>
                <td>array</td>
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
          url="demoViews/radioDemo.vue"
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
      radio: '2',
      radioGroup1: 9,
      radioGroup2: 9,
      radioGroup3: 9,
      radioOptions: [
        { label: '单选框A', value: 'A' },
        { label: '单选框B', value: 'B' },
        { label: '单选框C', value: 'C' },
      ],
      radioBtn1: '上海',
      radioBtn2: '2',
    }
  },
  created() {},
  mounted() {},
  methods: {
    changeRadio(val) {
      console.log(val)
    },
  },
}
</script>

<style scoped lang="scss">
/deep/ .test-col {
  color: green;
}
</style>
