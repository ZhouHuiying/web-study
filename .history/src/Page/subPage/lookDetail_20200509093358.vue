<template>
  <div class="allContent">
    <div class="head">客户名称：{{this.data}}</div>
    <!-- 标签页 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="客户档案" name="first">
        <div class="tabHead">客户档案</div>
        <div class="box">
          <div class="form-item">
            <div class="form-title">详细地址：</div>
            <div class="form-content">浙江省</div>
          </div>
          <div class="form-item">
            <div class="form-title">姓名：</div>
            <div class="form-content">lck</div>
          </div>
          <div class="form-item">
            <div class="form-title">公司：</div>
            <div class="form-content">厚爱还是覅瓯海Ohio和</div>
          </div>
          <div class="form-item">
            <div class="form-title">手机：</div>
            <div class="form-content">110</div>
          </div>
          <div class="form-item">
            <div class="form-title">手机：</div>
            <div class="form-content">110</div>
          </div>
          <div class="form-item">
            <div class="form-title">手机：</div>
            <div class="form-content">110</div>
          </div>
          <div class="form-item">
            <div class="form-title">手机：</div>
            <div class="form-content">110</div>
          </div>
          <div class="form-item">
            <div class="form-title">手机：</div>
            <div class="form-content">110</div>
          </div>
          <div class="form-item">
            <div class="form-title">手机：</div>
            <div class="form-content">110</div>
          </div>
          <div class="form-item">
            <div class="form-title">手机：</div>
            <div class="form-content">110</div>
          </div>
          <div class="form-item">
            <div class="form-title">手机：</div>
            <div class="form-content">110</div>
          </div>
          <div class="form-item">
            <div class="form-title">手机：</div>
            <div class="form-content">110</div>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="联系人" name="second">联系人</el-tab-pane>
      <el-tab-pane label="跟单记录" name="third">跟单记录</el-tab-pane>
      <el-tab-pane label="订单记录" name="fourth">订单记录</el-tab-pane>
      <el-tab-pane label="合同记录" name="fifth">合同记录</el-tab-pane>
      <el-tab-pane label="售后记录" name="sixth">售后记录</el-tab-pane>
      <el-tab-pane label="费用记录" name="seventh">费用记录</el-tab-pane>
      <el-tab-pane label="附件记录" name="eighth">附件记录</el-tab-pane>
      <el-tab-pane label="客户共享" name="ninth">客户共享</el-tab-pane>
      <el-tab-pane label="操作记录" name="tenth">操作记录</el-tab-pane>
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
.allContent {
  width: 80%;
  margin-left: 230px;
  margin-top: 50px;
}
.head {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
}
.tabHead {
  height: 35px;
  line-height: 35px;
  font-size: 16px;
  background-color: #015591;
  color: #fff;
}
.box {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.form-item {
  width: 50%;
  height: 50px;
  line-height: 50px;
}
.form-title {
  width: 150px;
  height: 100%;
  text-align: right;
  float: left;
  background-color: #f1f1f1;
  box-sizing: border-box;
  border: 1px solid #cccccc;
}
.form-content {
  height: 100%;
  margin-left: 150px;
  box-sizing: border-box;
  padding-left: 10px;
  border: 1px solid #cccccc;
}
</style>