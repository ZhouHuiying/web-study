<template>
  <div class="allContent">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="信息列表" name="first">
        <div class="tab-head">信息列表</div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="number" label="编号"></el-table-column>
          <el-table-column prop="type" label="分类"></el-table-column>
          <el-table-column prop="name" label="公司名称"></el-table-column>
          <el-table-column prop="contact" label="联系人"></el-table-column>
          <el-table-column prop="phone" label="电话"></el-table-column>
          <el-table-column prop="position" label="职位"></el-table-column>
          <el-table-column prop="department" label="部门"></el-table-column>
          <el-table-column prop="qq" label="QQ"></el-table-column>
          <el-table-column prop="mainSale" label="主营"></el-table-column>
          <el-table-column prop="manage" label="管理"></el-table-column>
        </el-table>
      </el-tab-pane>

      <el-tab-pane label="新增信息" name="second">
        <div class="tab-head">新增联系人</div>
        <div class="table">
          <div class="table-left">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="公司名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="联系人">
                <el-input v-model="form.contact"></el-input>
              </el-form-item>
              <el-form-item label="职位">
                <el-select v-model="form.position" placeholder="请选择活动区域">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="1" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="QQ">
                <el-input v-model="form.qq"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">保存</el-button>
                <el-button>关闭</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="table-right">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="分类">
                <el-radio-group v-model="form.type">
                  <el-radio label="1"></el-radio>
                  <el-radio label="2"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="电话">
                <el-input v-model="form.phone"></el-input>
              </el-form-item>
              <el-form-item label="部门">
                <el-select v-model="form.department" placeholder="请选择活动区域">
                  <el-option label="1" value="1"></el-option>
                  <el-option label="1" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="主营">
                <el-input v-model="form.mainSale"></el-input>
              </el-form-item>
              <el-form-item label="备注">
                <el-input v-model="form.remark"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="高级管理" name="third">
        <div class="tab-head">高级配置</div>
        <el-form ref="manageForm" :model="manageForm" label-width="80px">
          <el-form-item label="分类" style="margin-top: 10px">
            <el-input v-model="manageForm.type" style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item label="职位">
            <el-input v-model="manageForm.position" style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item label="部门">
            <el-input v-model="manageForm.department" style="width: 300px"></el-input>
          </el-form-item>
          <el-form-item label="管理权限">
            <el-input v-model="manageForm.manage" style="width: 300px"></el-input>
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
      activeName: "first",
      tableData: [
        {
          number: "",
          type: "",
          name: "",
          contact: "",
          phone: "",
          position: "",
          department: "",
          qq: "",
          mainSale: "",
          manage: ""
        }
      ],
      form: {
        number: "",
        type: "",
        name: "",
        contact: "",
        phone: "",
        position: "",
        department: "",
        qq: "",
        mainSale: "",
        remark: ""
      },
      manageForm: {
        type: "",
        position: "",
        department: "",
        manage: ""
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