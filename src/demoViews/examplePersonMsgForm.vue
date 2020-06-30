<template>
  <div class="page-main">
    <el-tabs v-model="activeTab" class="page-tab">
      <el-tab-pane label="文档" name="doc">
        <h2>人员信息录入表单</h2>
        <div class="demo-block">
          <nui-form ref="form" :rules="rules" :model="form" label-width="110px">
            <nui-row>
              <nui-form-item :span="8" label="姓名" prop="name">
                <nui-input v-model="form.name" />
              </nui-form-item>

              <nui-form-item :span="8" label="政治面貌" prop="political">
                <nui-select
                  v-model="form.political"
                  clearable
                  :options="politicalOptions"
                  placeholder="请选择"
                />
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
                  v-model="form.birthday"
                  type="date"
                  placeholder="选择日期"
                />
              </nui-form-item>

              <nui-form-item :span="8" label="籍贯" prop="nativePlace">
                <nui-dropdown-tree
                  v-model="form.nativePlace"
                  leaf-only
                  :data="treeCityData"
                />
              </nui-form-item>

              <nui-form-item :span="8" label="常住地" prop="usualAddress">
                <nui-dropdown-tree
                  v-model="form.usualAddress"
                  leaf-only
                  show-checkbox
                  :data="treeCityData"
                />
              </nui-form-item>
            </nui-row>

            <nui-row>
              <nui-form-item :span="12" label="手机号" prop="phone">
                <nui-input v-model="form.phone" />
              </nui-form-item>
              <nui-form-item :span="12" label="邮箱" prop="email">
                <nui-input v-model="form.email" />
              </nui-form-item>
            </nui-row>

            <nui-row>
              <nui-form-item :span="24" label="兴趣爱好" prop="hobby">
                <nui-checkbox-group v-model="form.hobby">
                  <nui-checkbox label="体育运动" />
                  <nui-checkbox label="电子游戏" />
                  <nui-checkbox label="乐器" />
                  <nui-checkbox label="音乐" />
                  <nui-checkbox label="电影" />
                  <nui-checkbox label="小说" />
                </nui-checkbox-group>
              </nui-form-item>
            </nui-row>

            <nui-row>
              <nui-form-item :span="12" label="入职时间" prop="entryTime">
                <nui-date-picker
                  v-model="form.entryTime"
                  type="datetime"
                  placeholder="选择日期时间"
                />
              </nui-form-item>
              <nui-form-item :span="12" label="上班时间" prop="workTime">
                <nui-time-picker
                  v-model="form.workTime"
                  is-range
                  range-separator="至"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                  placeholder="选择时间范围"
                />

                <!-- <nui-time-select
                  width="45%"
                  :clearable="false"
                  placeholder="起始时间"
                  v-model="workTime"
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
                  v-model="form.workTimeEnd"
                  :picker-options="{
                    start: '17:00',
                    step: '00:15',
                    end: '20:30',
                    minTime: form.workTime[0],
                  }"
                >
                </nui-time-select> -->
              </nui-form-item>
            </nui-row>

            <nui-form-item label="所属部门" prop="department">
              <!-- <nui-input v-model="form.department"></nui-input> -->
              <nui-cascader
                v-model="form.department"
                clearable
                :options="departmentOptions"
              />
            </nui-form-item>

            <nui-form-item label="当前参与项目" prop="curProject">
              <nui-select
                v-model="form.curProject"
                filterable
                :options="projectArr"
                placeholder="请选择(可输入关键词搜索)"
                clearable
              />
            </nui-form-item>

            <nui-form-item label="所有参与项目" prop="allProject">
              <nui-select
                v-model="form.allProject"
                filterable
                multiple
                :group-options="projectGroupArr"
                placeholder="请选择(可输入关键词搜索)"
                clearable
              />
            </nui-form-item>

            <nui-form-item label="证件资料1" prop="certificateFile">
              <el-upload
                action="/attach/ uploadAttach/db"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :on-change="certificateFileChange"
                :limit="3"
                :before-upload="beforeImgUpload"
              >
                <i class="el-icon-plus" />
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，最多上传3张图片，且每个文件不超过500kb
                </div>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
            </nui-form-item>

            <nui-form-item label="其他资料" prop="otherFile">
              <nui-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="otherFileChange"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                :before-upload="beforeOtherDataUpload"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="form.otherFile"
              >
                <nui-button size="small" type="primary">点击上传</nui-button>
                <div slot="tip" class="el-upload__tip">
                  最多上传3个文件，且每个文件不超过1500kb
                </div>
              </nui-upload>
            </nui-form-item>

            <!-- <nui-form-item label="影像资料" prop="vedioFile"> </nui-form-item> -->

            <nui-form-item>
              <nui-button
                type="primary"
                @click.prevent="submitForm('form')"
              >立即录入</nui-button>
              <nui-button>取消</nui-button>
            </nui-form-item>
          </nui-form>
        </div>
      </el-tab-pane>
      <el-tab-pane label="查看代码" name="code">
        <show-code
          v-if="activeTab == 'code'"
          url="demoViews/examplePersonMsgForm.vue"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { validatePhone, validateEmail } from '@/utils/validate.js'
export default {
  name: 'DemoRadio',
  data() {
    return {
      activeTab: 'doc',
      dialogImageUrl: '',
      dialogVisible: false,

      treeCityData: [
        {
          id: 1,
          label: '广东',
          children: [
            {
              id: 4,
              label: '广州',
              children: [
                {
                  id: 9,
                  label: '天河区'
                },
                {
                  id: 10,
                  label: '越秀区'
                },
                {
                  id: 11,
                  label: '萝岗区'
                },
                {
                  id: 12,
                  label: '黄浦区'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '上海',
          children: [
            {
              id: 5,
              label: '静安区'
            },
            {
              id: 6,
              label: '浦东区'
            }
          ]
        }
      ],
      departmentOptions: [
        {
          value: '1',
          label: '利通数字研究院',
          children: [
            {
              value: '2',
              label: '软件研发部',
              children: [
                {
                  value: '3',
                  label: '公共组件产品线'
                },
                {
                  value: '4',
                  label: '道路监控产品线'
                },
                {
                  value: '5',
                  label: '数据应用产品线'
                }
              ]
            },
            {
              value: '6',
              label: '硬件设计部',
              children: [
                {
                  value: '7',
                  label: 'etc设计'
                },
                {
                  value: '8',
                  label: '基础设备研发'
                }
              ]
            }
          ]
        },
        {
          value: '10',
          label: '东方思维',
          children: [
            {
              value: '11',
              label: '软件研发部',
              children: [
                {
                  value: '12',
                  label: '微信小程序'
                },
                {
                  value: '13',
                  label: 'IOS'
                },
                {
                  value: '14',
                  label: 'Andriod'
                }
              ]
            }
          ]
        }
      ],
      projectArr: [
        {
          value: 1,
          label: '基于微服务的新一代软件开发平台研发'
        },
        {
          value: 2,
          label: '路段数字化运行监测平台研究项目'
        },
        {
          value: 3,
          label: '广西交投数据管理中心项目'
        },
        {
          value: 4,
          label: '数据应用产品线技术支持工作'
        },
        {
          value: 5,
          label: '新一代全国联网收费系统'
        },
        {
          value: 6,
          label: '基于新收费模式下的路段稽核系统研发'
        }
      ],
      projectGroupArr: [
        {
          label: '软件研发部',
          options: [
            {
              value: 1,
              label: '基于微服务的新一代软件开发平台研发'
            },
            {
              value: 2,
              label: '路段数字化运行监测平台研究项目'
            },
            {
              value: 3,
              label: '广西交投数据管理中心项目'
            },
            {
              value: 4,
              label: '数据应用产品线技术支持工作'
            },
            {
              value: 5,
              label: '新一代全国联网收费系统'
            },
            {
              value: 6,
              label: '基于新收费模式下的路段稽核系统研发'
            }
          ]
        },
        {
          label: '移动开发部',
          options: [
            {
              value: 12,
              label: '微信小程序'
            },
            {
              value: 13,
              label: 'IOS开发'
            },
            {
              value: 14,
              label: 'Andriod开发'
            }
          ]
        }
      ],
      politicalOptions: [
        {
          value: 1,
          label: '正式党员'
        },
        {
          value: 2,
          label: '预备党员'
        },
        {
          value: 3,
          label: '共青团员'
        },
        {
          value: 4,
          label: '群众'
        }
      ],

      form: {
        name: '',
        sex: 0,
        political: '',

        birthday: '',
        nativePlace: '',
        usualAddress: '',
        phone: '',
        email: '',
        hobby: [],
        department: [],
        entryTime: '',
        workTime: [new Date(2016, 9, 10, 8, 30), new Date(2016, 9, 10, 17, 0)],
        curProject: '',
        allProject: [],
        certificateFile: [],
        otherFile: [],
        vedioFile: []
      },
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        sex: [{ required: true }],
        political: [
          { required: true, message: '请选择政治面貌', trigger: 'change' }
        ],
        birthday: [
          { required: true, message: '请选择出生日期', trigger: 'blur' }
        ],
        nativePlace: [
          { required: true, message: '请选择籍贯', trigger: 'change' }
        ],
        usualAddress: [
          { required: true, message: '请选择常住地', trigger: 'change' }
        ],
        phone: [{ required: true, validator: validatePhone, trigger: 'blur' }],
        email: [{ required: true, validator: validateEmail, trigger: 'blur' }],
        hobby: [
          { required: true, message: '请选择兴趣爱好', trigger: 'change' }
        ],
        entryTime: [
          { required: true, message: '请选择入职时间', trigger: 'blur' }
        ],
        workTime: [
          { required: true, message: '请选择上班时间', trigger: 'change' }
        ],
        // workTimeStart: [
        //   { required: true, message: '请选择上班开始时间', trigger: 'blur' },
        // ],
        // workTimeEnd: [
        //   { required: true, message: '请选择上班结束时间', trigger: 'blur' },
        // ],
        department: [
          { required: true, message: '请选择所属部门', trigger: 'change' }
        ],
        curProject: [
          { required: true, message: '请选择当前参与项目', trigger: 'change' }
        ],
        allProject: [
          { required: true, message: '请选择所有参与项目', trigger: 'change' }
        ]
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    testInput(val) {},
    // 上传有关
    beforeImgUpload(file) {
      const isImg = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLtSize = file.size / 1024 / 1024 < 0.5

      if (!isImg) {
        this.$message.error('上传图片只能是 jpg/png 格式!')
        return false
      }
      if (!isLtSize) {
        this.$message.error('上传图片大小不能超过 500KB!')
        return false
      }
      return isImg && isLtSize
    },
    beforeOtherDataUpload(file) {
      const isLtSize = file.size / 1024 / 1024 < 1.5

      if (!isLtSize) {
        this.$message.error('文件大小不能超过 1500KB!')
      }
      return isLtSize
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message({
        type: 'warning',
        message: `最多上传3个文件`,
        offset: 60
      })
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    certificateFileChange(file, fileList) {
      this.form.certificateFile = fileList
    },
    otherFileChange(file, fileList) {
      this.form.otherFile = fileList
    },
    // 提交表单
    submitForm(formName) {
      console.log(this.form)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('提交成功!')
        } else {
          console.log('拒绝提交，请先完成验证')
          return false
        }
      })
    }
  }
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
