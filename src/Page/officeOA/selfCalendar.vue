<template>
  <div class="allContent">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="月历视图" name="first">月历视图</el-tab-pane>

      <!-- 列表视图 -->
      <el-tab-pane label="列表视图" name="second">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="number" label="编号" width="180"></el-table-column>
          <el-table-column prop="time" label="录入时间" width="180"></el-table-column>
          <el-table-column prop="detail" label="详细内容"></el-table-column>
           <el-table-column prop="people" label="业务员" width="180"></el-table-column>
          <el-table-column prop="manage" label="管理"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      tableData: [
        {
          number: "",
          time: "",
          detail: "",
          people: "",
          manage: ""
        }
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>
</style>