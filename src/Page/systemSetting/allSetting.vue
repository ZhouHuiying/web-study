<template>
  <div class="out-form">
    <div class="inner-form">
      <el-form ref="form" :model="form" label-width="auto">
        <el-form-item label="公司名称" class="form-item-special">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="分页数量" class="form-item-special">
          <el-input v-model="form.num"></el-input>
        </el-form-item>

        <el-form-item label="操作提示" class="form-item-special">
          <el-radio-group v-model="form.resource">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="默认省市区" prop="region" class="form-item-special">
          <el-select v-model="form.region" placeholder="请选择">
            <el-option label="浙江省" value="zhejiang"></el-option>
            <el-option label="北京省" value="beijing"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="跟进接触" prop="record" class="form-item-special">
          <el-select v-model="form.record" placeholder="请选择">
            <el-option label="初步接触" value="1"></el-option>
            <el-option label="待开发" value="2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="记录日志" class="form-item-special">
          <el-radio-group v-model="form.resource">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="订单编号" class="form-item-special">
          <el-radio-group v-model="form.resource">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="合同编号" class="form-item-special">
          <el-radio-group v-model="form.resource">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="删除原因" class="form-item-special">
          <el-radio-group v-model="form.resource">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="转移保留" class="form-item-special">
          <el-radio-group v-model="form.resource">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="公海审核" class="form-item-special">
          <el-radio-group v-model="form.resource">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="客户唯一" class="form-item-special">
          <el-radio-group v-model="form.resource">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="默认语言" class="form-item-special">
          <el-radio-group v-model="form.resource">
            <el-radio label="中文"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="查重模糊查询" class="form-item-special">
          <el-radio-group v-model="form.resource">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="新增客户查询" class="form-item-special">
          <el-radio-group v-model="form.resource">
            <el-radio label="是"></el-radio>
            <el-radio label="否"></el-radio>
          </el-radio-group>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
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
        name: "",
        num: "",
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
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style scoped>
.inner-form {
  border: 1px solid #fff;
  padding: 10px;
}
.form-item-special {
  margin-bottom: 10px;
}
</style>