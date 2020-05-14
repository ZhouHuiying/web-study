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
          @selection-change="handleSelectionChange"
          class="table-box"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="编号" width="120">
            <template slot-scope="scope">{{ scope.row.date }}1</template>
          </el-table-column>
          <el-table-column prop="factory" label="公司名称" width="120"></el-table-column>
          <el-table-column prop="nextContact" label="下次联系" show-overflow-tooltip></el-table-column>
          <el-table-column prop="detail" label="详细内容" show-overflow-tooltip></el-table-column>
          <el-table-column prop="recordTime" label="录入时间" show-overflow-tooltip></el-table-column>
          <el-table-column fixed="right" label="管理" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>

      <!-- -----------------高级搜索 ------------------------------>
      <el-tab-pane label="高级搜索" name="second">
        <div class="tab-head">按条件筛选</div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
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

          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
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
      messageTableData: [
        {
          factory: "浙江联通",
          nextContact: "2020-4-21",
          detail:
            "下次跟进的内容： 1、打听近期产线数字化的进展； 2、聊一下在远程运维的内容上是否有合作可能性； 3、聊一下在产线数字化方面，我们的产品是否可能有合作可能性",
          recordTime: "2020-4-21",
          manage: ""
        }
      ],
     form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
    };
  }
};
</script>

<style>
.allContent {
  margin-left: 20px;
  width: 80%;
  margin-top: 3px;
}
.tab-head {
  height: 35px;
  line-height: 35px;
  font-size: 16px;
  background-color: #015591;
  color: #fff;
}
/* .table-box td{
  height: 200px;
} */
.table-box td:nth-child(5) div {
  height: 100%;
  white-space: pre-wrap !important;
}
</style>