<template>
  <div class="page-main">
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
              placeholder="--请选择--"
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
            
            <nui-input v-model="form.nativePlace"></nui-input>
          </nui-form-item>

          <nui-form-item :span="8" label="常住地" prop="usualAddress">
            <nui-input v-model="form.usualAddress"></nui-input>
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
              v-model="form.workTime"
              :picker-options="{
                start: '08:30',
                step: '00:30',
                end: '18:30',
              }"
              placeholder="选择时间"
            >
            </nui-time-select>
          </nui-form-item>
        </nui-row>

        <nui-form-item label="当前参与项目" prop="curProject">
          <nui-input v-model="form.curProject"></nui-input>
        </nui-form-item>

        <nui-form-item label="所有参与项目" prop="allProject">
          <nui-input v-model="form.allProject"></nui-input>
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
  </div>
</template>

<script>
export default {
  name: "DemoRadio",
  data() {
    return {
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
        phone: "",
        email: "",
        hobby: [],
        entryTime: "",
        workTime: 0,
        curProject: "",
        allProject: "",
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
/deep/ .test-col {
  color: green;
}
</style>
