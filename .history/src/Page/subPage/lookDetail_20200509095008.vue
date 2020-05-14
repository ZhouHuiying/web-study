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
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="contact" label="联系人"></el-table-column>
          <el-table-column prop="sex" label="性别"></el-table-column>
          <el-table-column prop="position" label="职位"></el-table-column>
          <el-table-column prop="phonenumber" label="手机号码"></el-table-column>
          <el-table-column prop="email" label="电子邮件"></el-table-column>
          <el-table-column prop="qq" label="QQ"></el-table-column>
          <el-table-column prop="note" label="备注说明"></el-table-column>
          <el-table-column prop="time" label="录入时间"></el-table-column>
          <el-table-column fixed="right" label="管理" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClickTwo(scope.row)" type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
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

    <!-- 弹出的对话框 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="即时配送">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动性质">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源">
            <el-radio-group v-model="form.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      dialogVisible: false,
      tableData: [
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
    },
    handleClickTwo() {
      // console.log(row);
      this.dialogVisible = true;
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