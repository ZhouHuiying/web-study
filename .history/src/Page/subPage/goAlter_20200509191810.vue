<template>
  <div class="customContent">
    <div class="tab-head">客户基本档案</div>
    <div class="table">
        <div class="table-left">
            
        </div>
    </div>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        address: "",
        contact: "",
        phonenumber: "",
        phone: "",
        fax: "",
        website: "",
        email: "",
        productType: "",
        customType: "",
        customClass: "",
        customSource: "",
        qq: "",
        project: ""
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
.table {
  border: solid 1px black;
}
.table-left {
  width: 30%;
  float: left;
  padding-top: 10px;
  padding-right: 10px;
  box-sizing: border-box;
}
.table-right {
  width: 70%;
  padding-top: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  float: right;
}
</style>