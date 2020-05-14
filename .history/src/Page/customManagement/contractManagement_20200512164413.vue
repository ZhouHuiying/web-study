<template>
  <div class="allContent3">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!-- -----------------信息列表 ------------------------------>
      <el-tab-pane label="信息列表" name="first">
        <div class="tab-head">信息列表</div>
        <el-table
          ref="multipleTable"
          :data="contractTableData"
          tooltip-effect="dark"
          style="width: 100%"
          class="table-box"
        >
          <el-table-column label="编号">
            <template slot-scope="scope">{{ scope.row.date}}4</template>
          </el-table-column>
          <el-table-column prop="factory" label="公司名称"></el-table-column>
          <el-table-column prop="contract" label="合同名称"></el-table-column>
          <el-table-column prop="startTime" label="起始时间"></el-table-column>
          <el-table-column prop="endTime" label="到期时间"></el-table-column>
          <el-table-column prop="contractType" label="合同分类"></el-table-column>
          <el-table-column prop="allMoney" label="总金额"></el-table-column>
          <el-table-column prop="getMoney" label="已收款"></el-table-column>
          <el-table-column prop="oweMoney" label="欠款"></el-table-column>
          <el-table-column prop="bill" label="提供发票"></el-table-column>
          <el-table-column prop="fax" label="是否含税"></el-table-column>
          <el-table-column prop="status" label="合同状态"></el-table-column>
          <el-table-column prop="auditPeople" label="审核人员"></el-table-column>
          <el-table-column prop="audit" label="审核"></el-table-column>
          <el-table-column prop="inTime" label="录入时间"></el-table-column>

          <el-table-column prop="manage" label="管理">
            <template slot-scope="scope">
              <el-button @click="contractLookDetail(scope.row)" type="text" size="small">编辑</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>

      <!-- -----------------高级搜索 ------------------------------>
      <el-tab-pane label="高级搜索" name="second">
        <div class="tab-head">按条件筛选</div>
        <el-form ref="form" :model="searchForm" label-width="80px" style="margin-top:20px">
          <el-form-item label="公司名称">
            <el-input v-model="searchForm.factoryName"></el-input>
          </el-form-item>
          <el-form-item label="合同名称">
            <el-input v-model="searchForm.contractName"></el-input>
          </el-form-item>

          <el-form-item label="起始时间">
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </el-form-item>

          <el-form-item label="到期时间">
            <el-date-picker
              v-model="value2"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </el-form-item>

          <el-form-item label="合同分类">
            <el-select v-model="searchForm.type" placeholder="请选择">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="合同状态">
            <el-select v-model="searchForm.contractStatus" placeholder="请选择">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="是否欠款">
            <el-radio-group v-model="searchForm.isOwe">
              <el-radio label="1"></el-radio>
              <el-radio label="2"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="续费状态">
            <el-select v-model="searchForm.feeStatus" placeholder="请选择">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="业务员">
            <el-select v-model="searchForm.people" placeholder="请选择">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">搜索</el-button>
            <el-button>清空</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>

    <!-- dialogVisible -->
    <el-dialog title="编辑" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <div class="tab-head">修改合同记录</div>
      <div class="dialog"></div>
      <el-form ref="dialogForm" :model="dialogForm" label-width="80px">
        <el-form-item label="合同名称">
          <el-input v-model="dialogForm.contract"></el-input>
        </el-form-item>

        <el-form-item label="合同分类">
          <el-select v-model="dialogForm.contractType" placeholder>
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="合同编号">
          <el-input v-model="dialogForm.contractNumber"></el-input>
        </el-form-item>

        <el-form-item label="起始时间">
          <el-date-picker v-model="dialogForm.startTime" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>

        <el-form-item label="到期时间">
          <el-date-picker v-model="dialogForm.endTime" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>

        <el-form-item label="已收款">
          <el-input v-model="dialogForm.getMoney"></el-input>
        </el-form-item>

        <el-form-item label="总金额">
          <el-input v-model="dialogForm.allMoney"></el-input>
        </el-form-item>

        <el-form-item label="提供发票">
          <el-select v-model="dialogForm.bill" placeholder>
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="是否含税">
          <el-select v-model="dialogForm.fax" placeholder>
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="详情备注">
          <el-select v-model="dialogForm.detail" placeholder>
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关 闭</el-button>
        <el-button type="primary" @click="dialogVisible = false">保 存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      value1: "",
      value2: "",
      contractTableData: [
        {
          factory: "浙江富冈机床",
          contract: "HT20200113132005800",
          startTime: "2019-12-24",
          endTime: "",
          contractType: "买卖",
          allMoney: "0",
          getMoney: "0",
          oweMoney: "0",
          bill: "是",
          fax: "",
          status: "",
          auditPeople: "",
          audit: "审核",
          inTime: "2020-01-13",
          manage: ""
        }
      ],
      dialogVisible: false,
      dialogForm: {
        people: "",
        orderNumber: "",
        preMoney: "",
        detail: "",
        date1: "",
        date2: ""
      },
      searchForm: {
        contract: "",
        contractType: "",
        contractNumber: "",
        startTime: "",
        endTime: "",
        getMoney: "",
        allMoney: "",
        bill: "",
        fax: "",
        detail: ""
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    contractLookDetail(row) {
      this.dialogVisible = true;
      this.dialogForm.contract = row.contract;
      this.dialogForm.contractNumber = row.contractNumber;
      this.dialogForm.getMoney = row.getMoney;
      this.dialogForm.allMoney = row.allMoney;
      this.dialogForm.contractType = row.contractType;
      
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
.allContent3 {
  margin-left: 40px;
  width: 90%;
}
.tab-head {
  height: 35px;
  line-height: 35px;
  font-size: 16px;
  background-color: #015591;
  color: #fff;
}
/* .table-box td:nth-child(5) div {
  height: 100%;
  white-space: pre-wrap !important;
} */
.dialog {
  margin-top: 20px;
}
</style>