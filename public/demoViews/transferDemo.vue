<!-- 比elementUI多的属性：width， -->
<template>
  <div class="page-main">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
        <h2>Transfer 穿梭框</h2>
        <div class="demo-block">
          <nui-transfer
            center
            panel-width="200px"
            v-model="value"
            :data="data"
          ></nui-transfer>
        </div>

        <article class="intro-list">
          <h3>Transfer Attributes</h3>
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
                <td>width</td>
                <td>外层宽度</td>
                <td>string</td>
                <td>—</td>
                <td>默认为内部pannel宽度加上中间按钮宽度</td>
              </tr>
              <tr>
                <td>panel-width</td>
                <td>每个面板的宽度</td>
                <td>string</td>
                <td>—</td>
                <td>200px</td>
              </tr>
              <tr>
                <td>center</td>
                <td>是否居中，实际是加上margin:0 auto</td>
                <td>boolean</td>
                <td>—</td>
                <td>—</td>
              </tr>
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
                <td>callback</td>
                <td>
                  获取接口数据成功后的回调函数.参数为接口数据格式化后的data对象数组
                </td>
                <td>function</td>
                <td>—</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>

          <h3>Events</h3>
          <table>
            <thead>
              <tr>
                <th>事件名称</th>
                <th>说明</th>
                <th>回调参数</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>nui-change</td>
                <td>
                  触发逻辑和elementUI的change事件一致，返回值不同。
                </td>
                <td>
                  elementUI的change事件返回的是key字符串数组。nui-chang返回的是包括key和label组成的对象数组
                </td>
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
          url="demoViews/transferDemo.vue"
        ></show-code>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    const generateData = (_) => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选备选项项 ${i}`,
          disabled: i % 4 === 0,
        })
      }
      return data
    }
    return {
      activeTab: 'doc',
      data: generateData(),
      value: [1, 4],
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleChange(value) {
      console.log(value)
    },
  },
}
</script>

<style scoped lang="scss">
/deep/ .test-col {
  color: green;
}
</style>
