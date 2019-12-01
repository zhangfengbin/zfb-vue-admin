<template>
  <el-container style="height:100%">
    <el-header>我是header</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>人员机构管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item @click="goToVue('/UserInfo')">人员信息</el-menu-item>
              <el-menu-item>角色信息</el-menu-item>
              <el-menu-item>机构信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="1-4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>菜单权限管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="000">菜单信息</el-menu-item>
              <el-menu-item index="000">角色权限</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view ></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
export default {
  components: {
  },
  methods: {
    goToVue(path) {
      this.$router.replace(path)
    }
  }
};
</script>
<style >
html,
body,
.el-contatiner,
div {
  height: 100%;
  margin: 0px;
  padding: 0px;
}
body {
  height: 100%;
  margin: 0px;
  padding: 0px;
}

.el-header {
  background-color: #b3c0d1;
  color: #333;
  height: 15%;
  line-height: 60px;
}

.el-aside {
  background-color: #666;
  height: 100%;
}
</style>