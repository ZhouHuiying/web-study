<template>
  <div class="allContent">
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
            <el-form ref="form" :model="searchForm" label-width="80px" style="margin-top:20px">
              <el-form-item label="公司名称">
                <el-input v-model="searchForm.factoryName"></el-input>
              </el-form-item>
              <el-form-item label="联系人">
                <el-input v-model="searchForm.factoryName"></el-input>
              </el-form-item>

              <el-form-item label="手机">
                <el-input v-model="searchForm.factoryName"></el-input>
              </el-form-item>
              <el-form-item label="联系电话">
                <el-input v-model="searchForm.factoryName"></el-input>
              </el-form-item>
              <el-form-item label="审核中">
                <el-select v-model="searchForm.people" placeholder="请选择">
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
          </div>
          <div class="table-right">
            <el-form ref="form" :model="searchForm" label-width="80px" style="margin-top:20px">
              <el-form-item label="录入日期">
                <el-date-picker
                  v-model="value1"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                ></el-date-picker>
              </el-form-item>

              <el-form-item label="最后更新">
                <el-date-picker
                  v-model="value1"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                ></el-date-picker>
              </el-form-item>

              <el-form-item label="省份地区">
                <el-select v-model="searchForm.type" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="客户类型">
                <el-select v-model="searchForm.type" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="客户级别">
                <el-select v-model="searchForm.type" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="客户来源">
                <el-select v-model="searchForm.type" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
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

</style>