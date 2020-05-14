<template>
  <div class="header">
    <div class="logo">
      客户管理系统
    </div>  
   <div class="info">
     <a href="#">账号: zhy(修改密码）</a>
     <a href="#">使用帮助</a>
     <a href="#" @click="logout">退出登录</a>
   </div>
      
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first',
        isActive: 0,
        address: [
          "systemHomepage",
          "allCustome",
          "innerFile",
          "dataAnalyze",
          "allSetting"
        ]
      };
    },  
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }, 
      logout(){
        this.$router.push('/login')}
      }
    };
</script>

<style>
.header{
    height: 60px;
    background-color: #015591;
}
.logo{
  float: left;
  width: 230px;
  line-height: 60px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border: 1px  white;
  border-style: none solid solid none;
  /* background-color: #fff; */ 
}
.info{
  line-height: 60px;
  float: right;
  padding-right: 10px;
  margin-top: -60px;
  color: #f5f5f5;
}
.info a{
   color: #f5f5f5;
   padding-right: 10px;
}
a:-webkit-any-link {
    /* color: -webkit-link; */
    cursor: pointer;
}
.active{
  background-color: #1E90FF;
}
</style>