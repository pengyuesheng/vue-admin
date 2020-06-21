<template>
  <div v-if="!item.hidden">
    <template v-if="!item.children">
      <router-link :to="this.basePath">
          <el-menu-item :index="this.basePath">
              <span>{{item.name}}</span>
          </el-menu-item>
      </router-link>
    </template>
    <el-submenu v-else :index="item.name">
        <template v-slot:title>
            <span>{{item.name}}</span>
        </template>
        <sider v-for="child in item.children"
                :key="child.path"
                :item="child"
                :basePath="resolvePath(child.path)">

        </sider>
    </el-submenu>
  </div>
</template>

<script>
import path from "path";
export default {
  name: "sider",
  props: ["item", "basePath"],
  created(){
      console.log(this.basePath);
  },
  methods: {
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath);
    }
  }
};
</script>

<style>
</style>