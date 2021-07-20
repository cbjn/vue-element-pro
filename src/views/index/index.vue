<!--  -->
<template>
  <Layout>
    <template v-slot:header>
      <Header></Header>
    </template>
    <template v-slot:aside>
      <Aside></Aside>
    </template>
    <template #main>
      <router-view></router-view>
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/layout";
import Aside from "@/views/index/aside";
import Header from "@/views/index/header";

export default {
  data() {
    return {
    }
  },
  components: {
    Layout,
    Header,
    Aside
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
