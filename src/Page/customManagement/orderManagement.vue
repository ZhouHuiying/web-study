<template>
  <div class="allContent">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!-- -----------------信息列表 ------------------------------>
      <el-tab-pane label="信息列表" name="first">
        <div class="tab-head">信息列表</div>
        <el-table
          ref="multipleTable"
          :data="orderTableData"
          tooltip-effect="dark"
          style="width: 100%"
          class="table-box"
        >
          <el-table-column label="编号">
            <template slot-scope="scope">{{ scope.row.date}}4</template>
          </el-table-column>
          <el-table-column prop="factory" label="公司名称"></el-table-column>
          <el-table-column prop="orderNumber" label="订单编号"></el-table-column>
          <el-table-column prop="contact" label="联系人"></el-table-column>
          <el-table-column prop="orderDate" label="下单日期"></el-table-column>
          <el-table-column prop="submitDate" label="交单日期"></el-table-column>
          <el-table-column prop="preMoney" label="预付款"></el-table-column>
          <el-table-column prop="orderAmount" label="订单金额"></el-table-column>
          <el-table-column prop="status" label="订单状态"></el-table-column>
          <el-table-column prop="people" label="业务员"></el-table-column>
          <el-table-column prop="inTime" label="录入时间"></el-table-column>

          <el-table-column prop="manage" label="管理">
            <template slot-scope="scope">
              <el-button @click="orderLookDetail(scope.row)" type="text" size="small">编辑</el-button>
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
            <el-input v-model="searchForm.name"></el-input>
          </el-form-item>
          <el-form-item label="订单编号">
            <el-input v-model="searchForm.num"></el-input>
          </el-form-item>
          <el-form-item label="下单日期">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="searchForm.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="选择时间" v-model="searchForm.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>

          <el-form-item label="交单日期">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="searchForm.date3"
                style="width: 100%;"
              ></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="选择时间" v-model="searchForm.date4" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>

          <el-form-item label="订单编号">
            <el-input v-model="searchForm.number"></el-input>
          </el-form-item>

          <el-form-item label="订单状态">
            <el-select v-model="searchForm.status" placeholder="请选择">
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
            <el-button type="primary" @click="onSubmit">搜素</el-button>
            <el-button>清空</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>

    <!-- dialogVisible -->
    <el-dialog title="编辑" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <div class="tab-head">修改订单记录</div>
      <div class="dialog"></div>
      <el-form ref="dialogForm" :rules="rules" :model="dialogForm" label-width="80px" >
        <el-form-item label="订单编号">
          <el-input v-model="dialogForm.orderNumber"></el-input>
        </el-form-item>

        <el-form-item label="联系人">
          <el-select v-model="dialogForm.people" placeholder>
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="预付款">
          <el-input v-model="dialogForm.preMoney"></el-input>
        </el-form-item>

        <el-form-item label="下单日期">
          <el-date-picker v-model="dialogForm.data1" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>

        <el-form-item label="交单日期">
          <el-date-picker v-model="dialogForm.data2" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>

        <el-form-item label="详情备注">
          <el-input v-model="dialogForm.detail"></el-input>
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
      orderTableData: [
        {
          factory: "浙江富冈机床",
          orderNumber: "WG20200413001",
          contact: "吕伟民",
          orderDate: "2020-04-18",
          submitDate: "2020-04-16",
          preMoney: "0",
          orderAmount: "0",
          status: "未处理",
          people: "余长宏",
          inTime: "2020-04-18",
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
        name: "",
        date1: "",
        date2: "",
        date3: "",
        date4: "",
        number: "",
        status: "",
        people: ""
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      rules: {
        orderNumber: [{ required: true, message: "", trigger: "blur" }],
        people: [{ required: true, message: "", trigger: "change" }],
        preMoney: [{ required: true, message: "", trigger: "change" }],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        detail: [{ required: true, message: "", trigger: "blur" }]
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
    orderLookDetail() {
      this.dialogVisible = true;
      
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
.dialog {
  margin-top: 20px;
}
</style>