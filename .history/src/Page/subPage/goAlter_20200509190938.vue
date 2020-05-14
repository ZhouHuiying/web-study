<template>
  <div class="customContent">
    <div class="tab-head">客户基本档案</div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="公司名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item label="联系人">
        <el-input v-model="form.contact"></el-input>
      </el-form-item>
      <el-form-item label="手机">
        <el-input v-model="form.phonenumber"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="传真号码">
        <el-input v-model="form.fax"></el-input>
      </el-form-item>
      <el-form-item label="企业网站">
        <el-input v-model="form.website"></el-input>
      </el-form-item>
      <el-form-item label="客户邮箱">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="产品分类">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="客户类型">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="客户级别">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="客户来源">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="QQ">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="主营项目">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        address: "",
        name: "",
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

<style>
.customContent {
  width: 80%;
  margin-left: 230px;
  margin-top: 20px;
}
.tab-head {
  height: 35px;
  line-height: 35px;
  font-size: 16px;
  background-color: #015591;
  color: #fff;
}
</style>