<template>
  <div class="allContent">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="客户档案" name="first">
        <div class="tab-head">按条件筛选</div>
        <div class="table">
            <div class="table-left">
                left
            </div>

            <div class="table-right">

            </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="跟单记录" name="second">
        <div class="tab-head">按条件筛选</div>
      </el-tab-pane>

      <el-tab-pane label="订单记录" name="third">
        <div class="tab-head">按条件筛选</div>
      </el-tab-pane>

      <el-tab-pane label="合同记录" name="fourth">
        <div class="tab-head">按条件筛选</div>
      </el-tab-pane>

      <el-tab-pane label="售后记录" name="fifth">
        <div class="tab-head">按条件筛选</div>
      </el-tab-pane>

      <el-tab-pane label="费用记录" name="sixth">
        <div class="tab-head">按条件筛选</div>
      </el-tab-pane>
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