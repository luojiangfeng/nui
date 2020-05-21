<!-- 比elementUI多的属性：width;options(选项数组);change-width(是否根据选项文字长度自动改变宽度) -->
<template>
  <div class="page-main">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
        <h2>Select 选择器</h2>
        <h3></h3>
        <h5>
          比elementUI多的属性：width(宽度字符串);options(选项数组);change-width(是否根据选项文字长度自动改变宽度)
        </h5>
        <div class="demo-block">
          <nui-form ref="form" label-width="80px">
            <nui-form-item label="主食">
              <nui-select
                :options="options"
                :change-width="true"
                v-model="value"
                placeholder="请选择"
                clearable
                @change="testChange"
              >
              </nui-select>
            </nui-form-item>

            <nui-form-item label="副食">
              <nui-select
                :options="options2"
                width="200px"
                v-model="value2"
                placeholder="请选择"
                clearable
                @change="testChange"
              >
              </nui-select>
            </nui-form-item>
          </nui-form>
        </div>

        <h3>
          选项分组
        </h3>
        <h5>
          <p>要用分组传group-options属性，格式与elementUI相同。</p>
        </h5>
        <div class="demo-block">
          <nui-form ref="form" label-width="80px">
            <nui-form-item label="城市">
              <nui-select
                filterable
                multiple
                :group-options="groupOptions"
                :change-width="true"
                v-model="valueGroup"
                placeholder="请选择"
                clearable
                @change="testChange"
              >
              </nui-select>
            </nui-form-item>
          </nui-form>
        </div>

        <article class="intro-list">
          <h3>Select Attributes</h3>
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
                <td>宽度</td>
                <td>string</td>
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
                <td>key-name</td>
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
              <tr>
                <td>change-width</td>
                <td>选择某项后，是否根据选项文字长度自动改变宽度</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
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
          url="demoViews/selectDemo.vue"
        ></show-code>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'DemoRadio',
  data() {
    return {
      activeTab: 'doc',
      code: '',
      options: [
        {
          value: 1,
          label: '黄金糕',
        },
        {
          value: 2,
          label: '双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶',
        },
        {
          value: 3,
          label: '蚵仔煎蚵仔煎蚵仔煎',
        },
        {
          value: 4,
          label: '龙须面龙须面',
        },
        {
          value: 5,
          label: '北京烤鸭',
        },
      ],
      options2: [
        {
          value: 10,
          label: '2黄金糕',
        },
        {
          value: 20,
          label: '2双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶',
        },
        {
          value: 30,
          label: '2蚵仔煎蚵仔煎蚵仔煎',
        },
        {
          value: 40,
          label: '2龙须面龙须面',
        },
        {
          value: 50,
          label: '2北京烤鸭',
        },
      ],
      groupOptions: [
        {
          label: '热门城市',
          options: [
            {
              value: 'Shanghai',
              label: '上海',
            },
            {
              value: 'Beijing',
              label: '北京',
            },
          ],
        },
        {
          label: '城市名',
          options: [
            {
              value: 'Chengdu',
              label: '成都',
            },
            {
              value: 'Shenzhen',
              label: '深圳',
            },
            {
              value: 'Guangzhou',
              label: '广州',
            },
            {
              value: 'Dalian',
              label: '大连',
            },
          ],
        },
      ],
      value: '',
      value2: 10,
      valueGroup: '',
    }
  },
  created() {},
  mounted() {},
  methods: {
    testChange(val) {
      console.log(val)
    },
  },
}
</script>

<style scoped lang="scss"></style>
