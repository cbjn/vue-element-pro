<!--  -->
<template>
  <div class="login">
    <div class="login_title">
      <h1 class="title">{{ title }}</h1>
    </div>
    <div class="loginBox">
      <el-form ref="form" :model="form" :size="medium">
        <el-form-item :required="true">
          <el-input v-model="form.username" prefix-icon="el-icon-user-solid" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="form.password"
            show-password
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :span="12">
              <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
            </el-col>
            <el-col :span="12">
              <div class="grid-content bg-purple-light"></div>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item style="text-align:center">
          <el-button type="primary">登录</el-button>
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
      title: "vue-element-pro管理系统",
      form: {
        username: '',
        password: '',
        code: ""
      }
    }
  }
}
</script>

<style  scoped>
.login {
  height: 100%;
  background: url("~@/assets/img/login_bg.jpg") center no-repeat;
  background-size: cover;
  position: relative;
}
.login_title {
  height: 120px;
}
.title {
  font-family: "Microsoft YaHei";
  line-height: 1em;
  color: #fff;
  font-weight: bold;
  padding: 40px 0 0 50px;
}
.loginBox {
  height: 380px;
  width: 300px;
  right: 300px;
  top: 350px;
  position: absolute;
}
</style>
