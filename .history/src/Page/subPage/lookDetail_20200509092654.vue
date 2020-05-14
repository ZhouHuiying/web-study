<template>
  <div class="allContent">
    <div class="head">客户名称：{{this.data}}</div>
    <!-- 标签页 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="客户档案" name="first">客户档案</el-tab-pane>
      <el-tab-pane label="联系人" name="second">联系人</el-tab-pane>
      <el-tab-pane label="跟单记录" name="third">跟单记录</el-tab-pane>
      <el-tab-pane label="订单记录" name="fourth">订单记录</el-tab-pane>
      <el-tab-pane label="合同记录" name="first">合同记录</el-tab-pane>
      <el-tab-pane label="售后记录" name="second">售后记录</el-tab-pane>
      <el-tab-pane label="费用记录" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="附件记录" name="fourth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="客户共享" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="操作记录" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      this.data = JSON.parse(sessionStorage.getItem("info"));
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>
</style>