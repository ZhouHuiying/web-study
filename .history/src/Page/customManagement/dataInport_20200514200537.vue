<template>
  <div class="allContent">
       <div class="tab-head">外部 Excel 导入数据库</div>
       <div>
         <el-form ref="feeRecordForm" :model="feeRecordForm" label-width="80px">
          <el-form-item label="业务员">
            <el-select v-model="feeRecordForm.people" placeholder="请选择">
              <el-option label="1" value="1"></el-option>
              <el-option label="2" value="2"></el-option>
            </el-select>
          </el-form-item>
            </el-form>
       </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>