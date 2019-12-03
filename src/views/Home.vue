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
          <el-submenu index="index" v-for="(menuGroup, index) in menus" :key="index">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{menuGroup.menuGroup}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                index="menu.id"
                @click="goToVue(menu)"
                v-for="(menu, index) in menuGroup.menuChild"
                :key="index"
              >{{menu.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <el-tag
          v-for="tag in tags"
          @close="closeTag(tag.name)"
          class="tag-center"
          :key="tag.name"
          closable
          :type="tag.type"
        >{{tag.name}}</el-tag>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      tags: [
       
      ],
      menus: [
        {
          id: 1,
          menuGroup: "人员机构管理",
          menuChild: [
            { path: "/userInfo", name: "人员信息" },
            { path: "/role", name: "角色信息" },
            { path: "/org", name: "机构信息" }
          ]
        },
        {
          id: 1,
          menuGroup: "菜单权限管理",
          menuChild: [
            { path: "/menu", name: "菜单信息" },
            { path: "/auth", name: "角色权限" }
          ]
        }
      ]
    };
  },
  components: {},
  methods: {
    goToVue(menu) {
      if(this.tags.length == 0 || !this.tags.find(v => v.path == menu.path)){
        this.tags.push(menu)
      }
        this.$router.replace(menu.path);
    },
    closeTag(menu){
      console.log(num)
    }
  }
};
</script>
<style >
.tag-center {
  margin-bottom: 20px;
  margin-right: 10px;
}

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
  background-color: #5993df;
  color: #333;
  height: 15%;
  line-height: 60px;
}

.el-aside {
  background-color: #666;
  height: 100%;
}
</style>