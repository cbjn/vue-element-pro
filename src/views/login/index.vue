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
          <el-form ref="form" :model="form" :size="medium">
            <el-form-item :required="true">
              <el-input
                v-model="form.username"
                prefix-icon="el-icon-user-solid"
                placeholder="请输入用户名"
              ></el-input>
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
            <el-form-item style="text-align:center;">
              <el-button type="primary">登录</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
      <el-footer>
        <div class="foot">
          <p id="copyright">Copyright © 2020.vue-element-pro.</p>
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
  background: url("~@/assets/login/denglukuang01.png") center no-repeat;
  position: absolute;
}
.el-form {
  margin: 60px 15px 15px 15px;
}
.el-form-item {
  margin-bottom: 32px;
}
.foot {
  color: #fff;
  text-align: center;
}
</style>
