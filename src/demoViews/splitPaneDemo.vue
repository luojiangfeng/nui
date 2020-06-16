<!-- 比elementUI多的属性：width， -->
<template>
  <div class="page-main">
    <el-tabs v-model="activeTab" class="page-tab">
      <el-tab-pane label="文档" name="doc">
        <h2>SplitPane 分割面板(可拖动)</h2>

        <h3 />
        <h5>该组件基于“vue-splitpane”，请先确保安装。（若不需要此组件，也不想安装多余的npm插件。可以删除nui\packages\split-pane文件夹）</h5>
        <div class="demo-block wrap">
          <nui-split-pane :min-percent="20" :default-percent="40" split="vertical">
            <template slot="paneL">
              <div class="left-container">

                <p class="ztext-empty-paragraph"><br></p>
                <p>
                  堪笑兰台公子，未解庄生天籁，刚道有雌雄。一点浩然气，千里快哉风。
                </p>
                <p>——苏轼《水调歌头•黄州快哉亭赠张偓佺》</p>
                <p class="ztext-empty-paragraph"><br></p>
                <p>扬子江头杨柳春，杨花愁杀渡江人。</p>
                <p>数声风笛离亭晚，君向潇湘我向秦。</p>
                <p>——郑谷《淮上与友人别》</p>
                <p class="ztext-empty-paragraph"><br></p>
                <p class="ztext-empty-paragraph"><br></p>
                <p>客从远方来，遗我双鲤鱼。</p>
                <p>呼儿烹鲤鱼，中有尺素书。</p>
                <p>长跪读素书，书中竟何如？</p>
                <p>上言加餐食，下言长相忆。</p>
                <p>——《饮马长城窟行》</p>
                <p class="ztext-empty-paragraph"><br></p>

              </div>
            </template>
            <template slot="paneR">
              <nui-split-pane split="horizontal">
                <template slot="paneL">
                  <div class="top-container">
                    沉沉心事北南东，一睨人材海内空。壮岁始参周史席，髫年惜堕晋贤风。功高拜将成仙外，才尽回肠荡气中。万一禅关砉然破，美人如玉剑如虹。
                  </div>
                </template>
                <template slot="paneR">
                  <div class="bottom-container">
                    公子王孙逐后尘，绿珠垂泪滴罗巾。

                    侯门一入深似海，从此萧郎是路人。
                  </div>
                </template>
              </nui-split-pane>
            </template>
          </nui-split-pane>
        </div>
        <article class="intro-list">
          <h3>SplitPane Attributes</h3>
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
                <td>split</td>
                <td>分割的类型，水平or垂直</td>
                <td>String </td>
                <td>horizontal,vertical</td>
                <td>——</td>
              </tr>
              <tr>
                <td>min-percent</td>
                <td>最小宽度（高度）百分比</td>
                <td>Number </td>
                <td>——</td>
                <td>10</td>
              </tr>
              <tr>
                <td>max-percent</td>
                <td>最大宽度（高度）百分比</td>
                <td>Number </td>
                <td>——</td>
                <td>10</td>
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
          url="demoViews/splitPaneDemo.vue"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'SplitPane',
  data() {
    return {
      activeTab: 'doc',
      num: 1
    }
  },
  created() {},
  mounted() {},
  methods: {
    handleChange(value) {
      console.log(value)
    }
  }
}
</script>

<style scoped lang="scss">
.wrap {
  height: 600px;
}
/deep/.left-container {
  padding:10px;
  background-color: #f38181;
  height: 100%;
}

/deep/.right-container {
  background-color: #fce38a;
  height: 200px;
}

/deep/.top-container {
  padding:10px;
  background-color: #fce38a;
  width: 100%;
  height: 100%;
}

/deep/.bottom-container {
  padding:10px;
  width: 100%;
  background-color: #95e1d3;
  height: 100%;
}
</style>
