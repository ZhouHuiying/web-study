<template>
  <div class="allContent">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <!-- -----------------信息列表 ------------------------------>
      <el-tab-pane label="信息列表" name="first">
        <div class="tab-head">信息列表</div>
        <el-table
          ref="multipleTable"
          :data="messageTableData"
          tooltip-effect="dark"
          style="width: 100%"
          class="table-box"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="编号"  width="60">
            <template slot-scope="scope">{{ scope.row.date}}</template>
          </el-table-column>
          <el-table-column prop="factory" label="公司名称" ></el-table-column>
          <el-table-column prop="nextContact" label="下次联系" show-overflow-tooltip></el-table-column>
          <el-table-column prop="detail" label="详细内容"  width="350" show-overflow-tooltip></el-table-column>
          <el-table-column prop="recordTime" label="录入时间" show-overflow-tooltip></el-table-column>
          <el-table-column fixed="right" label="管理" width="100">
            <template slot-scope="scope">
              <el-button @click="documentaryLookDetail(scope.row)" type="text" size="small">编辑</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>

      <!-- -----------------高级搜索 ------------------------------>
      <el-tab-pane label="高级搜索" name="second">
        <div class="tab-head">按条件筛选</div>
        <el-form ref="form" :model="form" label-width="80px" style="margin-top:20px">
          <el-form-item label="公司名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="录入时间">
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

          <el-form-item label="下次联系">
            <el-col :span="11">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="form.date3"
                style="width: 100%;"
              ></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker placeholder="选择时间" v-model="form.date4" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>

          <el-form-item label="跟单对象">
            <el-input v-model="form.object"></el-input>
          </el-form-item>

          <el-form-item label="跟单进度">
            <el-select v-model="form.progress" placeholder="请选择">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="跟单类型">
            <el-select v-model="form.type" placeholder="请选择">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="业务员">
            <el-select v-model="form.people" placeholder="请选择">
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

    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
      <div class="tab-head">修改跟单记录</div>
      <div class="dialog"></div>
      <el-form ref="form" :model="dialogForm" label-width="80px">
        <el-form-item label="跟单类型">
          <el-select v-model="dialogForm.type" placeholder="请选择活动区域">
            <el-option label="微信" value="wechat"></el-option>
            <el-option label="钉钉" value="dingding"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="跟单进度">
          <el-select v-model="dialogForm.progress" placeholder="请选择活动区域">
            <el-option label="初步接触" value="firstMeet"></el-option>
            <el-option label="待开发" value="waitDevelop"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="下次联系" >
          <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>

        <el-form-item label="详细内容">
          <el-input v-model="dialogForm.detail"></el-input>
        </el-form-item>
      </el-form>
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
      messageTableData: [
        {
          factory: "浙大-余教授",
          nextContact: "2020-04-21",
          detail:
            "商讨乐清低压电器平台建设思路与方案，需要准备好平台建设的思路的资料，注意不要显得我们文字功底很好，避免对方让我们写太多的文字材料。",
          recordTime: "2020-4-18",
          manage: ""
        },
        {
          factory: "浙江联通",
          nextContact: "2020-4-21",
          detail:
            "下次跟进的内容： 1、打听近期产线数字化的进展； 2、聊一下在远程运维的内容上是否有合作可能性； 3、聊一下在产线数字化方面，我们的产品是否可能有合作可能性",
          recordTime: "2020-4-21",
          manage: ""
        }
      ],
      dialogVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        date3: "",
        date4: "",
        object: "",
        progress: "",
        type: "",
        people: ""
      },
      dialogForm: {
        type: "",
        progress: "",
        people: "",
        detail: ""
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      value1: ""
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    documentaryLookDetail() {
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
.table-box td:nth-child(5) div {
  height: 100%;
  white-space: pre-wrap !important;
}
.dialog {
  margin-top: 20px;
}
</style>