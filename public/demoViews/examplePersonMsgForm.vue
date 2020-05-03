<template>
  <div class="page-main">
    <el-tabs class="page-tab" v-model="activeTab">
      <el-tab-pane label="文档" name="doc">
        <h2>人员信息录入表单</h2>
        <div class="demo-block">
          <nui-form ref="form" :rules="rules" :model="form" label-width="100px">
            <nui-row>
              <nui-form-item :span="8" label="姓名" prop="name">
                <nui-input v-model="form.name"></nui-input>
              </nui-form-item>

              <nui-form-item :span="8" label="政治面貌" prop="political">
                <nui-select
                  clearable
                  v-model="form.political"
                  :options="form.politicalOptions"
                  placeholder="请选择"
                >
                </nui-select>
              </nui-form-item>

              <nui-form-item :span="8" label="性别:" prop="sex">
                <nui-radio-group v-model="form.sex">
                  <nui-radio :label="0">男</nui-radio>
                  <nui-radio :label="1">女</nui-radio>
                </nui-radio-group>
              </nui-form-item>
            </nui-row>

            <nui-row>
              <nui-form-item :span="8" label="出生日期" prop="birthday">
                <nui-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="form.birthday"
                ></nui-date-picker>
              </nui-form-item>

              <nui-form-item :span="8" label="籍贯" prop="nativePlace">
                <nui-dropdown-tree
                  leaf-only
                  :data="treeCityData"
                  v-model="form.nativePlace"
                >
                </nui-dropdown-tree>
              </nui-form-item>

              <nui-form-item :span="8" label="常住地" prop="usualAddress">
                <nui-dropdown-tree
                  leaf-only
                  show-checkbox
                  :data="treeCityData"
                  v-model="form.usualAddress"
                >
                </nui-dropdown-tree>
              </nui-form-item>
            </nui-row>

            <nui-row>
              <nui-form-item :span="12" label="手机号" prop="phone">
                <nui-input v-model="form.phone"></nui-input>
              </nui-form-item>
              <nui-form-item :span="12" label="邮箱" prop="email">
                <nui-input v-model="form.email"></nui-input>
              </nui-form-item>
            </nui-row>

            <nui-row>
              <nui-form-item :span="24" label="兴趣爱好" prop="hobby">
                <nui-checkbox-group v-model="form.hobby">
                  <nui-checkbox label="体育运动"></nui-checkbox>
                  <nui-checkbox label="电子游戏"></nui-checkbox>
                  <nui-checkbox label="乐器"></nui-checkbox>
                  <nui-checkbox label="音乐"></nui-checkbox>
                  <nui-checkbox label="电影"></nui-checkbox>
                  <nui-checkbox label="小说"></nui-checkbox>
                </nui-checkbox-group>
              </nui-form-item>
            </nui-row>

            <nui-row>
              <nui-form-item :span="12" label="入职时间" prop="entryTime">
                <nui-date-picker
                  type="datetime"
                  placeholder="选择日期时间"
                  v-model="form.entryTime"
                ></nui-date-picker>
              </nui-form-item>
              <nui-form-item :span="12" label="上班时间" prop="workTime">
                <nui-time-select
                  width="45%"
                  placeholder="起始时间"
                  v-model="form.workTime[0]"
                  :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30',
                  }"
                >
                </nui-time-select>
                <span class="range-separator">至</span>
                <nui-time-select
                  width="45%"
                  placeholder="结束时间"
                  v-model="form.workTime[1]"
                  :picker-options="{
                    start: '17:00',
                    step: '00:15',
                    end: '20:30',
                    minTime: form.workTime[0],
                  }"
                >
                </nui-time-select>
              </nui-form-item>
            </nui-row>

            <nui-form-item label="所属部门" prop="department">
              <!-- <nui-input v-model="form.department"></nui-input> -->
              <nui-cascader
                v-model="form.department"
                :options="departmentOptions"
              ></nui-cascader>
            </nui-form-item>

            <nui-form-item label="当前参与项目" prop="curProject">
              <nui-select
                filterable
                :options="projectArr"
                v-model="form.curProject"
                placeholder="请选择"
                clearable
              >
              </nui-select>
            </nui-form-item>

            <nui-form-item label="所有参与项目" prop="allProject">
              <nui-select
                multiple
                :options="projectArr"
                v-model="form.allProject"
                placeholder="请选择"
                clearable
              >
              </nui-select>
            </nui-form-item>

            <nui-form-item label="证件资料" prop="certificateData">
              <nui-input v-model="form.certificate"></nui-input>
            </nui-form-item>

            <nui-form-item label="其他资料" prop="otherData">
              <nui-input v-model="form.otherData"></nui-input>
            </nui-form-item>

            <nui-form-item label="影像资料" prop="vedioData">
              <nui-input v-model="form.vedioData"></nui-input>
            </nui-form-item>

            <nui-form-item>
              <nui-button type="primary" @click.prevent="submitForm('form')"
                >立即创建</nui-button
              >
              <nui-button>取消</nui-button>
            </nui-form-item>
          </nui-form>
        </div>
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
  name: "DemoRadio",
  data() {
    return {
      activeTab: "doc",

      treeCityData: [
        {
          id: 1,
          label: "广东",
          children: [
            {
              id: 4,
              label: "广州",
              children: [
                {
                  id: 9,
                  label: "天河区",
                },
                {
                  id: 10,
                  label: "越秀区",
                },
                {
                  id: 11,
                  label: "萝岗区",
                },
                {
                  id: 12,
                  label: "黄浦区",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "上海",
          children: [
            {
              id: 5,
              label: "静安区",
            },
            {
              id: 6,
              label: "浦东区",
            },
          ],
        },
      ],
      departmentOptions: [
        {
          value: "1",
          label: "利通数字研究院",
          children: [
            {
              value: "2",
              label: "软件研发部",
              children: [
                {
                  value: "3",
                  label: "公共组件产品线",
                },
                {
                  value: "4",
                  label: "道路监控产品线",
                },
                {
                  value: "5",
                  label: "数据应用产品线",
                },
              ],
            },
            {
              value: "6",
              label: "硬件设计部",
              children: [
                {
                  value: "7",
                  label: "etc设计",
                },
                {
                  value: "8",
                  label: "基础设备研发",
                },
              ],
            },
          ],
        },
        {
          value: "10",
          label: "东方思维",
          children: [
            {
              value: "11",
              label: "软件研发部",
              children: [
                {
                  value: "12",
                  label: "微信小程序",
                },
                {
                  value: "13",
                  label: "IOS",
                },
                {
                  value: "14",
                  label: "Andriod",
                },
              ],
            },
          ],
        },
      ],
      projectArr: [
        {
          value: 1,
          label: "基于微服务的新一代软件开发平台研发",
        },
        {
          value: 2,
          label: "路段数字化运行监测平台研究项目",
        },
        {
          value: 3,
          label: "广西交投数据管理中心项目",
        },
        {
          value: 4,
          label: "数据应用产品线技术支持工作",
        },
        {
          value: 5,
          label: "新一代全国联网收费系统",
        },
        {
          value: 6,
          label: "基于新收费模式下的路段稽核系统研发",
        },
      ],
      form: {
        name: "",
        sex: 0,
        political: "",
        politicalOptions: [
          {
            value: 1,
            label: "正式党员",
          },
          {
            value: 2,
            label: "预备党员",
          },
          {
            value: 3,
            label: "共青团员",
          },
          {
            value: 4,
            label: "群众",
          },
        ],
        birthday: "",
        nativePlace: "",
        usualAddress: "",
        department: [],
        phone: "",
        email: "",
        hobby: [],
        entryTime: "",
        workTime: ["08:30", "17:00"],
        curProject: [],
        allProject: [],
        certificateData: "",
        otherData: "",
        vedioData: "",
      },
      rules: {
        name: [{ required: true, message: "请输入公司名称", trigger: "blur" }],
      },
    }
  },
  created() {},
  mounted() {},
  methods: {
    testInput(val) {},
  },
}
</script>

<style scoped lang="scss">
.range-separator {
  display: inline-block;
  font-size: 12px;
  text-align: center;
  width: 10%;
}
/deep/ .test-col {
  color: green;
}
</style>
