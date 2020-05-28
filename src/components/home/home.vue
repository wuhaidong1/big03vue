<template>
  <div class="container">
    <el-container class="container">
      <el-header class="header">
        <el-row>
          <el-col :span="4"><div class="grid-content bg-purple">
              <img class="header-img" src="../../assets/logo.png" alt="无法显示图片">
            </div></el-col>
          <el-col :span="18">
            <h3 class="header-title">电商管理系统</h3>
          </el-col>
          <el-col :span="2"><div class="grid-content bg-purple">
              <a class="header-loginout" @click.prevent="handelLoginout()" href="#">退出</a>
            </div></el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside class="aside" width="200px">
           <el-menu
           :router="true"
            :unique-opened="true"
            >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
                <el-menu-item index="users">
                  <i class="el-icon-location"></i>
                  <span>用户列表</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
                <el-menu-item index="rights">
                  <i class="el-icon-location"></i>
                  <span>用户权限</span>
                </el-menu-item>
                <el-menu-item index="2-2">
                  <i class="el-icon-location"></i>
                  <span>选项二</span>
                </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  beforeCreate () {
    // const token = localStorage.getItem('token')
    // if (!token) {
    //   this.$router.push({name: 'login'})
    // }
  },
  methods: {
    handelLoginout () {
      localStorage.clear()
      this.$message.success('退出成功')
      this.$router.push({name: 'login'})
    }
  }
}
</script>
<style>
  .container {
    height: 100%;
  }
  .header {
    background-color: #b3c0d1;
  }
  .aside {
    background-color: #d3dce6;
  }
  .main {
    background-color: #e9eef3;
  }
  .header-img {
    width: 166px;
    height: 60px;
  }
  .header-title {
    font-size: 29px;
    line-height: 0px;
    text-align: center;
  }
  .header-loginout {
    text-decoration: none;
    line-height: 60px;
  }
</style>
