<template>
  <div class="allContent">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      
       <!-- -----------------信息列表 ------------------------------>
      <el-tab-pane label="信息列表" name="first">
        <div class="tab-head">信息列表</div>
        <el-table
          ref="multipleTable"
          :data="tableData"
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
        高级搜索
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          factory: "浙江联通",
          nextContact: "2020-4-21",
          detail:
            "下次跟进的内容： 1、打听近期产线数字化的进展； 2、聊一下在远程运维的内容上是否有合作可能性； 3、聊一下在产线数字化方面，我们的产品是否可能有合作可能性",
          recordTime: "2020-4-21",
          manage: ""
        }
      ]
    };
  }
};
</script>

<style>
.allContent {
  margin-left: 20px;
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