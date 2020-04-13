<!-- 比elementUI多的属性：width;options(选项数组);change-width(是否根据选项文字长度自动改变宽度) -->
<template>
  <div class="page-main">
    <h2>Select 选择器</h2>
    <h3></h3>
    <h5>
      比elementUI多的属性：width(宽度字符串);options(选项数组);change-width(是否根据选项文字长度自动改变宽度)
    </h5>
    <div class="demo-block">
      <el-form ref="form" label-width="80px">
        <el-form-item label="主食">
          <nui-select
            :options="options"
            :change-width="true"
            v-model="value"
            placeholder="请选择"
            clearable
            @change="testChange"
          >
          </nui-select>
        </el-form-item>

        <el-form-item label="副食">
          <nui-select
            :options="options2"
            width="200px"
            :change-width="true"
            v-model="value2"
            placeholder="请选择"
            clearable
            @change="testChange"
          >
          </nui-select>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "DemoRadio",
  data() {
    return {
      options: [
        {
          value: 1,
          label: "黄金糕"
        },
        {
          value: 2,
          label: "双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶"
        },
        {
          value: 3,
          label: "蚵仔煎蚵仔煎蚵仔煎"
        },
        {
          value: 4,
          label: "龙须面龙须面"
        },
        {
          value: 5,
          label: "北京烤鸭"
        }
      ],
      options2: [
        {
          value: 10,
          label: "2黄金糕"
        },
        {
          value: 20,
          label: "2双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶双皮奶"
        },
        {
          value: 30,
          label: "2蚵仔煎蚵仔煎蚵仔煎"
        },
        {
          value: 40,
          label: "2龙须面龙须面"
        },
        {
          value: 50,
          label: "2北京烤鸭"
        }
      ],
      value: "",
      value2: ""
    }
  },
  created() {},
  mounted() {},
  methods: {
    testChange(val) {
      console.log(val)
    }
  }
}
</script>

<style scoped lang="scss"></style>
