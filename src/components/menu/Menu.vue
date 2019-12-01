<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
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
        <el-menu-item @click="goToVue('/userInfo')"> 人员信息
        </el-menu-item>
        <el-menu-item>角色信息</el-menu-item>
        <el-menu-item>机构信息</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="1-4">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>  菜单权限管理</span>
    </template>
      <el-menu-item-group>
          <el-menu-item index="000">菜单信息</el-menu-item>
        <el-menu-item index="000">角色权限</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script >
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goToVue(path){
      console.log(path)
    }
  }
};
</script>

