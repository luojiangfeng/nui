<template>
  <div class="page-main">
    <h2>快速上手</h2>

    <h5>
      <br />
      nui是基于elementUI二次封装的组件集合，elementUI的原有属性、方法、事件基本全部保留。
      <p>vue-nui-cli基于vue-cli。</p>
    </h5>

    <h3>1、开发目的</h3>
    <h5>
      <p>
        开发目的主要基于两个方面：一个是拓展elementUI还没有的功能；另一个是封装多个已有的elementUI组件，使之更方便使用。
      </p>
    </h5>

    <h3>2、文档说明：</h3>
    <h5>
      一般情况下，文档只列出基本的组件demo，以及和elementUI不同的属性说明。（现阶段文档未完善，文档未列出的属性，一般demo源代码中会有注释。）
      <p>
        其他未说明的elementUI属性、方法、事件等，默认都可以使用，具体使用方法请自行参考elementUI官方文档。
      </p>
    </h5>
  </div>
</template>

<script>
export default {
  name: "DemoRadio",
  data() {
    return {
      input: ""
    }
  },
  created() {},
  mounted() {},
  methods: {
    changeRadio(val) {
      console.log(val)
    }
  }
}
</script>

<style scoped lang="scss">
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
