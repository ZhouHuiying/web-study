<template>
  <!-- echarts -->
  <div class="app">
    <div id="myChart" :style="{}"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        title: {
          text: "产线节拍统计图",
          // x: "center",
          //  top: '0',
          textStyle: {
            fontSize: 20,
          },
        },
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          data: [1, 2, 3, 4, 5, 6, 7],
          name: "时间/天",
          nameTextStyle: {
            fontWeight: "bold",
            fontSize: 16,
          },
        },
        yAxis: {
          splitLine: {
            show: false,
          },
          name: "s/件",
          nameTextStyle: {
            fontWeight: "bold",
            fontSize: 16,
          },
        },
        // dataZoom: [
        //   {
        //     startValue: "2014-06-01",
        //   },
        //   {
        //     type: "inside",
        //   },
        // ],
        visualMap: {
          top: 20,
          right: 10,
          pieces: [
            {
              gt: 0,
              lte: 1000,
              color: "#7e0023",
            },
            {
              gt: 1000,
              lte: 1100,
              color: "rgba(181, 174, 36, 1)",
            },
            {
              gt: 1100,
              color: "#096",
            },
          ],
          outOfRange: {
            color: "#096",
          },
        },
        series: {
          name: "产线节拍统计图",
          type: "line",
          data: [530, 932, 901, 934, 1290, 1330, 1320],
          markLine: {
            silent: true,
            label: {
              show: true,
              formatter: "最大",
            },
            lineStyle: {
              // color: "#096",
            },
            data: [
              {
                yAxis: 1000,
              },
              {
                yAxis: 1100,
              },
            ],
          },
        },
      });
    },
  },
  computed: {},
};
</script>

<style >
#myChart {
  margin-top: 100px;
  margin-left: 100px;
  width: 1000px;
  height: 800px;
}
</style>
