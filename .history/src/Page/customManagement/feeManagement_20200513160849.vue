<template>
  <div class="allContent5">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!-- -----------------信息列表 ------------------------------>
      <el-tab-pane label="信息列表" name="first">
        <div class="tab-head">信息列表</div>
        <el-table
          ref="multipleTable"
          :data="feeTableData"
          tooltip-effect="dark"
          style="width: 100%"
          class="table-box"
        >
          <el-table-column label="编号">
            <template slot-scope="scope">{{ scope.row.date}}4</template>
          </el-table-column>
          <el-table-column prop="factory" label="公司名称"></el-table-column>
          <el-table-column prop="paymentDate" label="收支日期"></el-table-column>
          <el-table-column prop="paymentType" label="收支类型"></el-table-column>
          <el-table-column prop="feeType" label="费用类型"></el-table-column>
          <el-table-column prop="amount" label="总金额"></el-table-column>
          <el-table-column prop="detail" label="详情备注"></el-table-column>
          <el-table-column prop="people" label="业务员"></el-table-column>
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

          <el-form-item label="收支类型">
            <el-select v-model="searchForm.type" placeholder="请选择">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="收支日期">
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </el-form-item>

      
          <el-form-item label="是否解决">
            <el-select v-model="searchForm.isSolve" placeholder="请选择">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      value1: "",
      value2: "",
      feeTableData: [
        {
          factory: "浙江机电",
          paymentDate: "2020-03-27",
          paymentType: "支出",
          feeType: "赠送礼品",
          amount: "300",
          detail: "赠送明前茶半斤",
          people: "ych",
          inTime: "2020-04-18"
        }
      ],
      searchForm: {
        factoryName: "",
        subject: "",
        contact: "",
        type: "",
        isSolve: "",
        people: ""
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
    contractLookDetail() {},
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
.allContent5 {
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
.dialog {
  margin-top: 20px;
}
</style>