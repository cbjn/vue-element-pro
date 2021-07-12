<!--  -->
<template>
  <div class="login">
    <el-container class="allHeight">
      <el-header height="100px">
        <div class="allHeight">
          <p class="title">{{ title }}</p>
        </div>
      </el-header>
      <el-main>
        <div class="loginBox">
          <div class="loginTitle">用户登录</div>
          <el-form ref="loginForm" :model="form" :size="medium" :rules="rules">
            <el-form-item prop="username">
              <el-input
                v-model="form.username"
                prefix-icon="el-icon-user-solid"
                placeholder="请输入用户名"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="form.password"
                show-password
                prefix-icon="el-icon-lock"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-row>
                <el-col :span="12">
                  <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
                </el-col>
                <el-col :span="12">
                  <div class="grid-content bg-purple-light"></div>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item style="text-align:center;">
              <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
              <el-button @click="resetForm('loginForm')">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
      <el-footer>
        <div class="foot">
          <p id="copyright">Copyright © 2021.vue-element-pro.</p>
        </div>
      </el-footer>
    </el-container>
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
      },
      rules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, message: '最少3个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, message: '最少3个字符', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //登录
          this.$store.dispatch("token/login", this.form);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
.allHeight {
  height: 100%;
}
.title {
  font-family: "Microsoft YaHei";
  line-height: 1em;
  color: #fff;
  font-weight: bold;
  font-size: 3em;
  padding: 40px 0 0 50px;
}
.loginBox {
  height: 380px;
  width: 300px;
  right: 320px;
  top: 280px;
  border: 2px solid rgb(159 238 254);
  border-radius: 10px;
  /* background: url("~@/assets/login/denglukuang01.png") center no-repeat; */
  position: absolute;
}
.el-form {
  margin: 0 15px;
}
.el-form-item {
  margin-bottom: 32px;
}
.foot {
  color: #fff;
  text-align: center;
}
.loginTitle {
  color: #ffffff;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  padding: 15px 0;
}
</style>
