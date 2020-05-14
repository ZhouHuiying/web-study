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
        <el-table :data="contactTableData" style="width: 100%">
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

      <el-tab-pane label="跟单记录" name="third">
        <el-table :data="documentaryTableData" style="width: 100%">
          <el-table-column prop="nextContact" label="下次联系" width="180"></el-table-column>
          <el-table-column prop="detail" label="详细内容" width="180"></el-table-column>
          <el-table-column prop="time" label="录入时间"></el-table-column>
          <el-table-column fixed="right" label="管理" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClickThree(scope.row)" type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="订单记录" name="fourth">
        <el-table :data="orderTableData" style="width: 100%">
          <el-table-column prop="orderNumber" label="订单编号"></el-table-column>
          <el-table-column prop="contact" label="联系人"></el-table-column>
          <el-table-column prop="orderDate" label="下单日期"></el-table-column>
          <el-table-column prop="presentDate" label="交单日期"></el-table-column>
          <el-table-column prop="preMoney" label="预付款"></el-table-column>
          <el-table-column prop="orderAmount" label="订单金额"></el-table-column>
          <el-table-column prop="orderState" label="订单状态"></el-table-column>
          <el-table-column prop="detail" label="详情备注"></el-table-column>
          <el-table-column prop="salesman" label="业务员"></el-table-column>
          <el-table-column prop="inTime" label="录入时间"></el-table-column>
          <el-table-column prop="manage" label="管理"></el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="合同记录" name="fifth">
        <el-table :data="contractTableData" style="width: 100%">
          <el-table-column prop="contractName" label="合同名称"></el-table-column>
          <el-table-column prop="contractNumber" label="合同编号"></el-table-column>
          <el-table-column prop="startTime" label="起始时间"></el-table-column>
          <el-table-column prop="endTime" label="到期时间"></el-table-column>
          <el-table-column prop="contractType" label="合同分类"></el-table-column>
          <el-table-column prop="amount" label="总金额"></el-table-column>
          <el-table-column prop="collectMoney" label="已收款"></el-table-column>
          <el-table-column prop="oweMoney" label="欠款"></el-table-column>
          <el-table-column prop="salesman" label="提供发票"></el-table-column>
          <el-table-column prop="inVoice" label="是否含税"></el-table-column>
          <el-table-column prop="contractStatus" label="合同状态"></el-table-column>
          <el-table-column prop="auditor" label="审核人员"></el-table-column>
          <el-table-column prop="inTime" label="录入时间"></el-table-column>
          <el-table-column prop="manage" label="管理"></el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="售后记录" name="sixth">
        <el-table :data="afterSaleTableData" style="width: 100%">
          <el-table-column prop="contractName" label="是否解决"></el-table-column>
          <el-table-column prop="contractNumber" label="反馈主题"></el-table-column>
          <el-table-column prop="startTime" label="联系人"></el-table-column>
          <el-table-column prop="endTime" label="反馈日期"></el-table-column>
          <el-table-column prop="contractType" label="详情备注"></el-table-column>
          <el-table-column prop="amount" label="处理结果"></el-table-column>
          <el-table-column prop="collectMoney" label="已收款"></el-table-column>
        </el-table>

      </el-tab-pane>

      <el-tab-pane label="费用记录" name="seventh">费用记录</el-tab-pane>
      <el-tab-pane label="附件记录" name="eighth">附件记录</el-tab-pane>
      <el-tab-pane label="客户共享" name="ninth">客户共享</el-tab-pane>
      <el-tab-pane label="操作记录" name="tenth">操作记录</el-tab-pane>
    </el-tabs>

    <!-- 弹出的对话框 -->
    <!-- dialog1 -->
    <el-dialog title="提示" :visible.sync="dialogVisible1" width="60%" :before-close="handleClose">
      <div class="table">
        <div id="table-left1">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="联系人">
              <el-input v-model="form.contact"></el-input>
            </el-form-item>
            <el-form-item label="性别">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="男" value="man"></el-option>
                <el-option label="女" value="woman"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="职位">
              <el-select v-model="form.position" placeholder="请选择">
                <el-option label="CTO" value="CTO"></el-option>
                <el-option label="COO" value="COO"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="生日">
              <el-input v-model="form.birthday"></el-input>
            </el-form-item>
            <el-form-item label="手机号码">
              <el-input v-model="form.phonenumber"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div id="table-right1">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="联系电话">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="电子邮件">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="QQ">
              <el-input v-model="form.qq"></el-input>
            </el-form-item>
            <el-form-item label="MSN">
              <el-input v-model="form.msn"></el-input>
            </el-form-item>
            <el-form-item label="阿里旺旺">
              <el-input v-model="form.aliWang"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">关 闭</el-button>
        <el-button type="primary" @click="dialogVisible1 = false">保 存</el-button>
      </span>
    </el-dialog>

    <!-- dialog2 -->
    <el-dialog title="修改跟单记录" :visible.sync="dialogVisible2" width="30%">
      <div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="跟单类型">
            <el-select v-model="form.type" placeholder="请选择">
              <el-option label="1" value="1"></el-option>
              <el-option label="1" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="跟单进度">
            <el-select v-model="form.jindu" placeholder="请选择">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="跟单对象">
            <el-select v-model="form.people" placeholder="请选择">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="下次联系">
            <el-select v-model="form.nextContact" placeholder="请选择">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="详细内容">
            <el-input v-model="form.content"></el-input>
          </el-form-item>
        </el-form>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false">关 闭</el-button>
        <el-button type="primary" @click="dialogVisible2 = false">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      dialogVisible1: false,
      dialogVisible2: false,
      contactTableData: [
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
      ],
      documentaryTableData: [
        {
          nextContact: "2020-04-21",
          detail:
            "商讨乐清低压电器平台建设思路与方案，需要准备好平台建设的思路的资料，注意不要显得我们文字功底很好，避免对方让我们写太多的文字材料。",
          time: "2020-04-18",
          manage: ""
        }
      ],
      orderTableData: [
        {
          orderNumber: "",
          contact: "",
          orderDate: "",
          preMoney: "",
          orderAmount: "",
          orderState: "",
          detail: "",
          salesman: "",
          inTime: "",
          manage: ""
        }
      ],
      contractTableData: [
        {
          contractName: "",
          contractNumber: "",
          startTime: "",
          endTime: "",
          contractType: "",
          amount: "",
          collectMoney: "",
          oweMoney: "",
          salesman: "",
          inVoice: "",
          contractStatus: "",
          auditor: "",
          inTime: "",
          manage: "",

        }
      ],
      afterSaleTableData: [
        {

        }
      ],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      form1: {
        type: "",
        jindu: "",
        people: "",
        nextContact: "",
        content:
          "商讨乐清低压电器平台建设思路与方案，需要准备好平台建设的思路的资料，注意不要显得我们文字功底很好，避免对方让我们写太多的文字材料。"
      }
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
      this.dialogVisible1 = true;
    },
    handleClickThree() {
      // console.log(row);
      this.dialogVisible2 = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
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
.table {
  border: solid 1px black;
}
#table-left1 {
  width: 50%;
  float: left;
  padding-top: 10px;
  padding-right: 10px;
  box-sizing: border-box;
}
#table-right1 {
  width: 50%;
  padding-top: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  float: right;
}
</style>