<template>
  <div class="tab">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="所有公文" name="first">
        <div class="tab-head">信息列表</div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="num" label="编号" width="180"></el-table-column>
          <el-table-column prop="star" label="星标" width="180"></el-table-column>
          <el-table-column prop="type" label="分类"></el-table-column>
          <el-table-column prop="title" label="标题" width="180"></el-table-column>
          <el-table-column prop="addTime" label="添加时间" width="180"></el-table-column>
          <el-table-column prop="manage" label="管理"></el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="规章" name="second">规章</el-tab-pane>
      <el-tab-pane label="其他" name="third">其他</el-tab-pane>
      <el-tab-pane label="项目研发" name="fourth">项目研发</el-tab-pane>
      <el-tab-pane label="工作流程规章" name="fifth">工作流程规章</el-tab-pane>
      <el-tab-pane label="通知" name="sixth">通知</el-tab-pane>
      <el-tab-pane label="工作注意事项" name="seventh">工作注意事项</el-tab-pane>
      <el-tab-pane label="学习进步" name="eighth">学习进步</el-tab-pane>
      <el-tab-pane label="添加公文" name="ninth">添加公文</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      tableData: [{
            num: '01',
            star: 'star',
            name: 'zhy',
            type: '123',
            title: '111',
            addTime: '2020-5-5',
            manage: '111'
          },
          {
            num: '02',
            star: 'star',
            name: 'zhy',
            type: '123',
            title: '111',
            addTime: '2020-5-5',
            manage: '111'
          }],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style>
.tab {
  margin-left: 20px;
}
.tab-head {
  height: 35px;
  line-height: 35px;
  font-size: 16px;
  background-color: #015591;
  color: #fff;
}
</style>