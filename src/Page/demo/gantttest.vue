<template>
  <div class="new-page">
    <div ref="gantt" class="gantt-container" />
  </div>
</template>
<script>
import gantt from "dhtmlx-gantt"; // 引入模块
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
export default {
  name: "DhtmlxGantt-Demo1",
  data() {
    return {
      tasks: {
        data: [
          { id: 1, text: "Task #1", start_date: "15-04-2020", owner: "张总", duration: 10, progress: 0.6 },
          { id: 2, text: "Task #2", start_date: "20-05-2020", owner: "李总", duration: 20, progress: 0.4 },
          { id: 3, text: "Task #2-1", start_date: "12-06-2020", owner: "赵总", duration: 38, progress: 0.4, parent: 2 },
        ],
        // links: [{ id: 1, source: 1, target: 2, type: "0" }],
      },
    };
  },
  mounted() {
    //本地化
    gantt.i18n.setLocale("cn");
    // 新增列
    gantt.config.columns.push({
      name: "owner",
      label: "负责人",
      align: "center"
    });
    // 初始化
    gantt.init(this.$refs.gantt);
    // 数据解析
    gantt.parse(this.tasks);
    console.log(this.tasks)
  },
};
</script>

<style scoped>
.gantt-container {
  height: 600px;
}
.new-page {
  height: 100%;
  background-color:#FFF;
  padding: 20px;
  border-radius: 4px;
}
</style>
