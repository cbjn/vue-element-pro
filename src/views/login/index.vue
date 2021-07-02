<!--  -->
<template>
  <div class="login">
    <div class="login_title">
      <h1 class="title">{{title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title:"xxxx管理系统"
    }
  }
}
</script>

<style  scoped>
.login{
  height: 100%;
  background: url("~@/assets/img/login_bg.jpg") center no-repeat;
  background-size: cover;
}
.login_title{
  height: 120px;
 
}
.title{
  font-family: 'Microsoft YaHei';
  line-height: 1em;
  color: #fff;
  font-weight: bold;
  padding: 40px 0 0 50px;
}

</style>
