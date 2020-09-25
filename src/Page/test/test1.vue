<template>
  <!-- 画一个圆和矩形 -->
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
      // this.zr.on("click", function (e) {
      //   //可以查看 e 里包含的属性,进行判断
      //   console.log(e);
      // });
    },
    /** 绘制函数 */
    drawTrochoid() {
      // 创建一个矩形
      //其他图形：var circle=new zrender.Circle、圆弧 var arc=new zrender.Arc、椭圆 ellipse、心形 Heart、多边形 Polygon
      //线 Line、多边形折线段 Polyline 、贝塞尔曲线BezierCurve
      let rect = new zrender.Rect({
        position: [100, 100], //平移距离，
        style: {
          fill: "red", //填充颜色
          stroke: "none", //描边颜色
        },
        shape: {
          x: 0, //x,y代表坐标
          y: 0,
          width: 200,
          height: 100,
          r: [3], //圆角
        },
        z: 1, //层次，大的会覆盖小的
      });
      //更改矩形的属性，使用attr方法，将矩形颜色更改为黄色，宽度更改300，高度更改为200，该方法触发重绘操作
      rect.attr({
        style: {
          fill: "yellow",
        },
        shape: {
          width: 300,
          height: 200,
        },
      });
      rect.on("click", function (e) {
        console.log(e);
        console.log("点击了矩形");
      });
      //添加动画
      // rect
      //   .animate("shape", true)
      //   .when(1000, { x: 100 })
      //   .when(2000, { x: 0 })
      //   .when(3000, { y: 100 })
      //   .when(4000, { y: 0 })
      //   .start();
      rect.animateTo({
        rotation: Math.PI / 3, //正值代表逆时针旋转，负值代表顺时针旋转
        origin: [200, 100], //设置变换中心
      });
      
      // //放大，缩小 
      // rect.animateTo({
      //   scale: [1.5, 1.5], //x,y轴方向放大至1.5倍
      //   origin: [240, 130],
      // });

      // //平移
      // rect.animateTo({
      //   position: [100, 100], //x,y轴分别平移10
      // });

      // 添加矩形到group里
      this.group.add(rect);
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
  border: 1px solid red;
}
</style>