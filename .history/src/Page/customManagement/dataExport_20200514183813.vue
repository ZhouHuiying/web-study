<template>
  <div class="allContent">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="客户档案" name="first">
        <div class="tab-head">按条件筛选</div>
        <div class="table">
          <div class="table-left">
            <el-form ref="customForm" :model="customForm" label-width="80px">
              <el-form-item label="客户类型">
                <el-select v-model="customForm.type" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="客户来源">
                <el-select v-model="customForm.source" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="客户级别">
                <el-select v-model="customForm.range" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="业务员">
                <el-select v-model="customForm.people" placeholder="请选择">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="2" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
          </div>

          <div class="table-right">
            <el-form-item label="省份地区">
              <el-select v-model="customForm.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="产品分类">
              <el-select v-model="customForm.region" placeholder="请选择">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
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
            <el-form-item label="最后更新">
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </el-form-item>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="跟单记录" name="second">
        <div class="tab-head">按条件筛选</div>
      </el-tab-pane>

      <el-tab-pane label="订单记录" name="third">
        <div class="tab-head">按条件筛选</div>
      </el-tab-pane>

      <el-tab-pane label="合同记录" name="fourth">
        <div class="tab-head">按条件筛选</div>
      </el-tab-pane>

      <el-tab-pane label="售后记录" name="fifth">
        <div class="tab-head">按条件筛选</div>
      </el-tab-pane>

      <el-tab-pane label="费用记录" name="sixth">
        <div class="tab-head">按条件筛选</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
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
</style>