<template>
  <!-- 根据自定义的坐标画出曲线 -->
  <div class="app">
    <div ref="zrender" id="zrender" class="zrender"></div>
  </div>
</template>

<script>
import zrender from "zrender";

export default {
  methods: {
    /**初始化 zRender */
    zRenderInit() {
      let dom = this.$refs.zrender;
      //初始化一个实例
      this.zr = zrender.init(dom);
      this.group = new zrender.Group();
      this.drawTrochoid();
      //zr-> group-> circle
      this.zr.add(this.group);
    },
    /** 绘制函数 */
    drawTrochoid() {
      let line = new zrender.Polyline({
        style: {
          stroke: "red", //线的颜色
          lineWidth: 1, //线宽
          lineDash: [0], //虚线样式
        },
        shape: {
           points:[[200,50],[100,100],[100,200],[200,200]]     //点集
        },
        z: 1, //层次，大的会覆盖小的
      });
    
      // 添加到group里
      this.group.add(line);
    },
  },
  mounted() {
    this.zRenderInit();
  },
};
</script>

<style>
#zrender {
  margin: 100px auto 0;
  width: 500px;
  height: 500px;
  border: 1px solid black;
}
</style>