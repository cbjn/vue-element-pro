<!--  -->
<template>
  <Layout :headerHeight="'80px'" style="background-color: #f9fafc;" :asideWidth="'auto'">
    <template v-slot:header>
      <Header @click-show-hide-aside="clickShowHideAside"></Header>
    </template>
    <template v-slot:aside>
      <Aside :isCollapse="showAside"></Aside>
    </template>
    <template #main>
      <!-- <router-view></router-view> -->
      内容
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
      showAside: false
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
  },
  methods: {
    clickShowHideAside() {
      this.showAside = !this.showAside;
    }
  }
}
</script>

<style  scoped>
</style>
