<template>
  <div class="login">
    <div class="login-panel">
      <h1>基于VUE3+JS的</h1>
      <h1>后台管理系统</h1>
        <el-form :rules="rules" :model="user" ref="loginRef">
          <div class="login-form">
            <div class="title">欢迎登录</div>
            <el-form-item prop="name">
              <el-input :prefix-icon="UserFilled" v-model="user.name" placeholder="请输入用户名"/>
            </el-form-item>
            <el-form-item prop="password">
              <el-input :prefix-icon="Lock" v-model="user.password" show-password placeholder="请输入密码"/>
            </el-form-item>
            <el-form-item prop="code">
              <div class="code">
                <el-input :prefix-icon="Grid" v-model="user.code" placeholder="请输入验证码"/>
                <el-button type="primary" class="code-button">验证码</el-button>
              </div>
            </el-form-item>
          </div>
          <el-form-item>
            <div class="checkbox">
              <el-checkbox label="记住密码" name="type" />
              <span>忘记密码</span>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login-button" @click="loginClick(loginRef)">立即登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script setup>
import { reactive,ref } from "vue"
import { useRouter } from "vue-router";
import { rules } from "./config"
import { UserFilled, Lock, Grid } from '@element-plus/icons-vue'

import localCache from "@/utils/cache.js";

  const user = reactive({
    name:'',
    password:'',
    code:'',
  })
  // const rules = reactive(rules)
  let router = useRouter();
  const loginRef = ref()
  const loginClick = async(formEl)=>{
    await formEl.validate((valid, fields) => {
      if (valid) {
        router.push({
          //传递参数使用query的话，指定path或者name都行，但使用params的话，只能使用name指定
          path: '/main',
          // query: {
          //   page: path,
          // },
        });
        localCache.setCache("token","123456");
      } else {
        console.log('error submit!', fields)
      }
    })
  }
</script>

<style scoped>
.login{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url("@/assets/img/login/login-bg.svg");
}
.login-panel{
  text-align: center;
}
.login-form{
  width: 300px;
  padding:10px 15px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.title{
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
  color: #409eff;
}
.code{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.code-button{
  margin-left: 10px;
}
.checkbox{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.checkbox span{
  color: #409eff;
  cursor: pointer;
}
.login-button{
  width: 100%;
}
</style>