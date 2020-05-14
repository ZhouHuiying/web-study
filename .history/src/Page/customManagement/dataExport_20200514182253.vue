<template>
  <div class="allContent">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="客户档案" name="first">
          客户档案
          

      </el-tab-pane>

      <el-tab-pane label="跟单记录" name="second">跟单记录</el-tab-pane>
      <el-tab-pane label="订单记录" name="third">订单记录</el-tab-pane>
      <el-tab-pane label="合同记录" name="fourth">合同记录</el-tab-pane>
      <el-tab-pane label="售后记录" name="fifth">售后记录</el-tab-pane>
       <el-tab-pane label="费用记录" name="sixth">费用记录</el-tab-pane>
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
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>
</style>