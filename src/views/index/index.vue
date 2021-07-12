<!--  -->
<template>
  <div>
    首页
    <h1>欢迎：{{ username }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    username() {
      return this.$store.getters["token/username"]; //需要监听的数据
    }
  }
}
</script>

<style  scoped>
</style>
