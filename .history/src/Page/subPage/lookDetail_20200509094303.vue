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
            <div class="form-content">浙江省杭州市浙江大学</div>
          </div>
          <div class="form-item">
            <div class="form-title">联系人：</div>
            <div class="form-content">殷瑞</div>
          </div>
          <div class="form-item">
            <div class="form-title">手机：</div>
            <div class="form-content">123</div>
          </div>
          <div class="form-item">
            <div class="form-title">联系电话：</div>
            <div class="form-content"></div>
          </div>
          <div class="form-item">
            <div class="form-title">传真号码：</div>
            <div class="form-content"></div>
          </div>
          <div class="form-item">
            <div class="form-title">企业网站：</div>
            <div class="form-content"></div>
          </div>
          <div class="form-item">
            <div class="form-title">手机：</div>
            <div class="form-content"></div>
          </div>
          <div class="form-item">
            <div class="form-title">客户邮箱：</div>
            <div class="form-content"></div>
          </div>
          <div class="form-item">
            <div class="form-title">产品分类：</div>
            <div class="form-content"></div>
          </div>
          <div class="form-item">
            <div class="form-title">客户类型：</div>
            <div class="form-content">有意向</div>
          </div>
          <div class="form-item">
            <div class="form-title">客户级别：</div>
            <div class="form-content">初级客户</div>
          </div>
          <div class="form-item">
            <div class="form-title">客户来源：</div>
            <div class="form-content">同事</div>
          </div>
          <div class="form-item">
            <div class="form-title">QQ：</div>
            <div class="form-content"></div>
          </div>
          <div class="form-item">
            <div class="form-title">主营项目：</div>
            <div class="form-content"></div>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="联系人" name="second">
        <el-table :data="tableData1" style="width: 100%">
          <el-table-column prop="contact" label="联系人" ></el-table-column>
          <el-table-column prop="sex" label="性别" ></el-table-column>
          <el-table-column prop="position" label="职位"></el-table-column>
          <el-table-column prop="phonenumber" label="手机号码" ></el-table-column>
          <el-table-column prop="email" label="电子邮件"></el-table-column>
          <el-table-column prop="qq" label="QQ"></el-table-column>
          <el-table-column prop="note" label="备注说明" ></el-table-column>
          <el-table-column prop="time" label="录入时间"></el-table-column>
          <el-table-column prop="manage" label="管理" ></el-table-column>
        </el-table>
      </el-tab-pane>

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
      activeName: "first",
      tableData1: [
        {
          contact: "殷瑞",
          sex: "",
          position: "CTO",
          phonenumber: "111",
          email: "",
          qq: "",
          note: "",
          time: "",
          manage: ""
        }
      ]
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