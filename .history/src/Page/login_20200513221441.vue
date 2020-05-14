<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">领克信息CRM客户管理系统</div>
            <el-form 
              ref="login" label-width="0px" class="ms-content">

                <el-form-item prop="username">
                    <el-input v-model="user" > 
                        <el-button slot="prepend" icon="el-icon-lx-people">用户名</el-button>
                    </el-input>
                </el-form-item>

                <el-form-item prop="password">
                    <el-input type="password" v-model="psw" @keyup.enter.native=login1>
                        <el-button slot="prepend" icon="el-icon-lx-lock">密码</el-button>
                    </el-input>
                </el-form-item>

                <div class="login-btn">
                    <el-button type="primary" @click="login1">登录</el-button>
                </div>

            </el-form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { login } from '@/api/apiList/test.js'
export default {
    data(){
        return{
            user:'',
            psw:''
        }
    },     
    methods: {
        _login(){
            login({
                user:this.user,
                psw: this.psw
            }).then(res => {
                console.log(res);       
            })   
        },
        login1(){
            console.log(this.psw, this.user)
            if (this.user == '' && this.psw == '') {
                this.$message('请输入账号密码')
                return
            } 
            login({
                user: this.user,
                psw: this.psw
            }).then(res => {
                console.log(res.data)
                if (res.data.code == 200) {
                    // this.$router.push('/systemHomepage')
                    // this.$router.push({path:'/systemHomepage',query: {id:123}})
                    this.$router.push({
path:'/systemHomepage',
query:{obj: {id:123}
                        }
                    })
                } else {
                    this.$message('账户密码错误，请重新输入')
                }
            })
        },
        testGet(){
           axios({
               method: 'get',
               url: 'http://192.168.0.112:8080/api/seller'
           }).then(function(res){
               console.log(res);
           })
        },
        testPost(){
            axios({
                method:'post',
                url: 'http://192.168.0.112:8080/test/post'
            }).then(function(res){
                console.log(res);  
            })
        }
    },
};
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-size: 100%;
    background-image: url('../assets/images/background.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
</style>