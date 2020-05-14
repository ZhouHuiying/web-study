<template>
  <div>
    <div class="top">
      <i class="el-icon-location"></i>
      欢迎使用领克信息CRM客户管理系统！
      <i class="el-icon-refresh" id="refresh"></i>
    </div>

    <div class="column">
      <ul id="column1" class="in-column">
        <li class="list" v-for="(item, index) in list" :key="index">
          <div class="system-head">{{item.title}}</div>
          <div class="system-content">{{item.content}}</div>
        </li>
      </ul>

      <ul id="column2" class="in-column">
        <li class="list">
          <div class="system-head">跟单提醒</div>
          <div class="system-content">content1</div>
        </li>
        <li class="list">
          <div class="system-head">未完成订单</div>
          <div class="system-content">content2</div>
        </li>

        <li class="list">
          <div class="system-head">合同提醒</div>
          <div class="system-content">content3</div>
        </li>
      </ul>

      <ul id="column3" class="in-column">
        <li class="list">
          <div class="system-head" id="system-head3">
            概要统计
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="one" label="类型"></el-table-column>
              <el-table-column prop="seven" label="7天内"></el-table-column>
              <el-table-column prop="sevenTothirty" label="7-30"></el-table-column>
              <el-table-column prop="thirty" label=">30"></el-table-column>
              <el-table-column prop="all" label="总量"></el-table-column>
            </el-table>
          </div>
          <div class="system-content" id="system-content3">content1</div>
        </li>
        <li class="list">
          <div class="system-head">生日提醒</div>
          <div class="system-content">content1</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "内部公文",
          content: "content1"
        },
        {
          title: "站内信通知",
          content: "content2"
        },
        {
          title: "个人日历",
          content: "content3"
        }
      ],
      tableData: [
        {
          one: "客户",
          seven: "0",
          sevenTothirty: "1",
          thirty: "14",
          all: "15"
        },
        {
          one: "跟单",
          seven: "0",
          sevenTothirty: "1",
          thirty: "14",
          all: "15"
        }
      ]
    };
  },
  created()
};
</script>

<style scoped>
ul li {
  list-style: none;
}
.top {
  font-size: 18px;
  height: 20px;
  border-bottom: solid 1px;
  padding: 3px;
}
div i {
  height: 20px;
  margin-left: 10px;
  margin-right: 5px;
}
#refresh {
  float: right;
}
.column {
  display: flex;
}
.in-column {
  width: 33.3%;
}
.list {
  padding: 20px;
  /* border-radius: 10px; */
}
.system-head {
  height: 30px;
  background-color: #abcdef;
  border-radius: 5px 5px 0 0;
}
.system-content {
  height: 70px;
  background-color: #fff;
  border-radius: 0 0 5px 5px;
}
#system-head3 {
  height: 30px;
}
#system-content3 {
  height: 200px;
}
</style>