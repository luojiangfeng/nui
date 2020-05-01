<template>
  <div class="page-main">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
        <h2>Form 表单</h2>

        <h3>普通表单</h3>
        <h5>
          比elementUI多的属性：width(宽度字符串)，center(表单是否整体居中)
        </h5>
        <article class="demo-block">
          <!-- 比elementUI多的属性：width，center(表单整体居中) -->
          <nui-form
            ref="form"
            width="400px"
            :center="true"
            :model="form"
            label-width="80px"
          >
            <nui-form-item label="活动名称">
              <nui-input v-model="form.name"></nui-input>
            </nui-form-item>
            <nui-form-item label="活动区域">
              <nui-select
                :change-width="true"
                clearable
                v-model="form.region"
                :options="form.regionOptions"
                placeholder="请选择活动区域"
              >
              </nui-select>
            </nui-form-item>
            <nui-form-item label="活动时间">
              <nui-col :span="11">
                <nui-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="form.date1"
                  style="width: 100%;"
                ></nui-date-picker>
              </nui-col>
              <nui-col style="text-align:center" :span="2">-</nui-col>
              <nui-col :span="11">
                <nui-time-picker
                  placeholder="选择时间"
                  v-model="form.date2"
                  style="width: 100%;"
                ></nui-time-picker>
              </nui-col>
            </nui-form-item>
            <nui-form-item label="即时配送">
              <nui-switch v-model="form.delivery"></nui-switch>
            </nui-form-item>
            <nui-form-item label="活动性质">
              <nui-checkbox-group v-model="form.type">
                <nui-checkbox label="美食/餐厅线上活动"></nui-checkbox>
                <nui-checkbox label="地推活动"></nui-checkbox>
                <nui-checkbox label="线下主题活动"></nui-checkbox>
                <nui-checkbox label="单纯品牌曝光"></nui-checkbox>
              </nui-checkbox-group>
            </nui-form-item>

            <nui-form-item label="特殊资源">
              <nui-radio-group v-model="form.resource">
                <nui-radio label="线上品牌商赞助"></nui-radio>
                <nui-radio label="线下场地免费"></nui-radio>
              </nui-radio-group>
            </nui-form-item>
            <nui-form-item label="活动形式">
              <nui-input type="textarea" v-model="form.desc"></nui-input>
            </nui-form-item>
            <nui-form-item>
              <nui-button type="primary" @click="onSubmit">立即创建</nui-button>
              <nui-button>取消</nui-button>
            </nui-form-item>
          </nui-form>
        </article>

        <h3>多列表单&表单验证</h3>
        <h5>
          <p>
            配合行元素nui-row使用:通过设置span的值来控制每个表单元素nui-form-item的宽度，100%对应的span值为24。
          </p>
          <p>例如：50%对应的span值是12；33.3%对应的span值是8。</p>
        </h5>
        <article class="demo-block">
          <nui-form
            ref="form2"
            :rules="rules2"
            :model="form2"
            label-width="100px"
          >
            <nui-form-item label="是否启用">
              <nui-switch v-model="form2.active"></nui-switch>
            </nui-form-item>
            <nui-row>
              <nui-form-item :span="16" label="上级公司" prop="superiorCompany">
                <nui-input v-model="form2.superiorCompany" disabled></nui-input>
              </nui-form-item>
            </nui-row>

            <nui-row>
              <nui-form-item :span="16" label="公司名称" prop="name">
                <nui-input v-model="form2.name"></nui-input>
              </nui-form-item>

              <nui-form-item :span="8" label="公司简称" prop="shortName">
                <nui-input v-model="form2.shortName"></nui-input>
              </nui-form-item>
            </nui-row>

            <nui-row>
              <nui-form-item :span="8" label="英文简称">
                <nui-input v-model="form2.shortNameEn"></nui-input>
              </nui-form-item>

              <nui-form-item :span="8" label="层级编码" prop="levelCode">
                <!-- 演示：可以输入非数字，会触发错误验证来提示 -->
                <nui-input
                  v-model.number="form2.levelCode"
                  placeholder="验证是否数字"
                ></nui-input>
              </nui-form-item>

              <nui-form-item :span="8" label="邮政编码">
                <!-- 演示：直接设置type="number"来强制阻止输入非数字 -->
                <nui-input
                  type="number"
                  placeholder="强制输入数字"
                  v-model="form2.postCode"
                  @input="testNumberInput"
                ></nui-input>
              </nui-form-item>
            </nui-row>

            <nui-form-item label="公司所在城市">
              <nui-select
                v-model="form2.region"
                :options="form2.regionOptions"
                placeholder="请选择活动区域"
              >
              </nui-select>
            </nui-form-item>
            <nui-form-item label="成立时间">
              <nui-col :span="11">
                <nui-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="form2.date1"
                  style="width: 100%;"
                ></nui-date-picker>
              </nui-col>
              <nui-col style="text-align:center" :span="2">-</nui-col>
              <nui-col :span="11">
                <nui-time-picker
                  placeholder="选择时间"
                  v-model="form2.date2"
                  style="width: 100%;"
                ></nui-time-picker>
              </nui-col>
            </nui-form-item>
            <nui-row>
              <nui-form-item :span="24" label="公司地址">
                <nui-input v-model="form2.address"></nui-input>
              </nui-form-item>
            </nui-row>

            <nui-form-item label="备注">
              <nui-input
                type="textarea"
                rows="5"
                v-model="form2.desc"
              ></nui-input>
            </nui-form-item>
            <nui-form-item>
              <nui-button type="primary" @click.prevent="submitForm('form2')"
                >立即创建</nui-button
              >
              <nui-button>取消</nui-button>
            </nui-form-item>
          </nui-form>
        </article>

        <h3>行内表单(单行)</h3>
        <article class="demo-block">
          <nui-form :inline="true" :model="formInline" class="demo-form-inline">
            <nui-form-item label="审批人">
              <nui-input
                v-model="formInline.user"
                placeholder="审批人"
              ></nui-input>
            </nui-form-item>
            <nui-form-item label="活动区域">
              <nui-select
                v-model="formInline.region"
                :options="formInline.regionOptions"
                placeholder="活动区域"
              >
              </nui-select>
            </nui-form-item>
            <nui-form-item>
              <nui-button type="primary" @click="onSubmit">查询</nui-button>
            </nui-form-item>
          </nui-form>
        </article>

        <article class="intro-list">
          <h3>Form Attributes</h3>
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
                <td>center</td>
                <td>是否相对父元素居中</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
              </tr>
            </tbody>
          </table>

          <h3>Nui-form-item Attributes</h3>
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
                <td>span</td>
                <td>
                  配合行组件nui-row使用。与el-col的用法一致，一行100%对应数值24。
                </td>
                <td>number</td>
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
          url="demoViews/formDemo.vue"
        ></show-code>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "DemoRadio",
  data() {
    return {
      activeTab: "doc",
      form: {
        name: "",
        region: "",
        regionOptions: [
          {
            value: 0,
            label: "上海静安区",
          },
          {
            value: 1,
            label: "广州天河区",
          },
        ],
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      form2: {
        active: true,
        superiorCompany: "广东省交通集团",
        name: "",
        shortName: "",
        shortNameEn: "",
        levelCode: "",
        postCode: "",
        region: "",
        regionOptions: [
          {
            value: 0,
            label: "上海",
          },
          {
            value: 1,
            label: "广州",
          },
        ],
        date1: "",
        date2: "",
        address: "",
        desc: "",
      },
      formInline: {
        region: "",
        user: "",
        regionOptions: [
          {
            value: 0,
            label: "南京",
          },
          {
            value: 1,
            label: "广州",
          },
        ],
      },
      rules2: {
        superiorCompany: [
          { required: true, message: "上级公司不能为空", trigger: "change" },
        ],
        name: [{ required: true, message: "请输入公司名称", trigger: "blur" }],
        shortName: [
          { required: true, message: "请输入公司简称", trigger: "blur" },
          { max: 5, message: "长度在5字符以内", trigger: "blur" },
        ],
        levelCode: [
          { required: true, message: "请输入层级编码", trigger: "blur" },
          { type: "number", message: "请输入数字", trigger: "blur" },
        ],
      },
    }
  },
  methods: {
    onSubmit() {
      console.log("submit!")
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!")
        } else {
          console.log("error submit!!")
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    testNumberInput(val) {},
  },
}
</script>

<style scoped lang="scss">
/deep/ .test-col {
  color: green;
}
</style>
