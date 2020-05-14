<template>
  <div class="allContent8">
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
          <el-table-column prop="lastUpdate" label="最后更新"></el-table-column>
          <el-table-column prop="people" label="业务员"></el-table-column>
          <el-table-column prop="applicant" label="申请人"></el-table-column>

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

        <div class="table">
          <div class="table-left">

          </div>
           <div class="table-right">

          </div>
        </div>
       
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
      feeTableData: [
        {
          factory: "",
          lastUpdate: "",
          people: "",
          applicant: ""
        }
      ],
      searchForm: {
        factoryName: "",
        type: "",
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
.allContent8 {
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