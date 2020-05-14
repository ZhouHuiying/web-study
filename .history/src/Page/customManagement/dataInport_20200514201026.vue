<template>
  <div class="allContent">
    <div class="tab-head">外部 Excel 导入数据库</div>
    <div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="上传文件" style="width: 300px; margin-top: 20px">
          <el-input v-model="form.upload"></el-input>
        </el-form-item>
        <el-form-item label="数据表">
          <el-select v-model="form.dataTable" placeholder="请选择">
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
        <el-form-item label="导入公海">
          <el-radio-group v-model="form.inport">
            <el-radio label="是"></el-radio>
          </el-radio-group>
        </el-form-item>
         <el-form-item>
              <el-button type="primary"  style="width: 98px">导出</el-button>
              <el-button style="width: 98px">清空</el-button>
            </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        upload: "",
        dataTable: "",
        people: "",
        inport: ""
      }
    };
  }
};
</script>

<style>
</style>