<template>
  <div class="allContent">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="number" label="编号" width="180"></el-table-column>
      <el-table-column prop="name" label="真实姓名" width="180"></el-table-column>
      <el-table-column prop="phone" label="手机号码"></el-table-column>
      <el-table-column prop="email" label="电子邮箱" width="180"></el-table-column>
      <el-table-column prop="birthday" label="生日" width="180"></el-table-column>
      <el-table-column prop="time" label="入司时间"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          number: "11",
          name: "ych",
          phone: "13858033500",
          email: "yuch_2007@163.com",
          birthday: "2018-04-13",
          time: "2018-04-13"
        }
      ]
    };
  }
};
</script>

<style>
</style>