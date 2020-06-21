<template>
  <el-container class="container">
    <el-header class="header">Header</el-header>
    <el-container class="content">
      <el-aside width="200px" class="sider">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
        <sider v-for="child in $store.state.permission.routes"
                :key="child.path"
                :basePath="child.path"
                :item="child">

        </sider>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import sider from "@/components/asider.vue";
export default {
  name: "Home",
  components: {
    sider
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>

<style>
.header {
  background-color: darkgray;
}
.sider {
  background-color: antiquewhite;
  height: 100%;
}
.container {
  height: 100%;
}
.content {
  height: 100%;
}
</style>