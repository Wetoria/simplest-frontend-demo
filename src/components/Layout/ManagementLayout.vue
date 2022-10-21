<template>
  <div class="container">
    <div
      class="left"
      :style="{
        width: `${sideBarWidth}px`,
        height: `100%`,
        background: `#222b45`,
        overflowY: `auto`,
      }"
    >
      <el-menu default-active="Home" @select="handleMenuSelect">
        <el-menu-item index="Home">
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="pageA">
          <span>页面 A</span>
        </el-menu-item>

        <el-menu-item index="pageB">
          <span>页面 B</span>
        </el-menu-item>

        <el-sub-menu index="aboutMe">
          <template #title>
            <span>关于我</span>
          </template>
          <el-menu-item index="resume">
            <span>个人简历</span>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
    <div
      class="right"
      :style="{
        width: `calc(100% - ${sideBarWidth}px)`,
        height: `100%`,
        display: `flex`,
        flexDirection: `column`,
      }"
    >
      <div
        style="
          width: 100%;
          height: 50px;
          background: white;
          border-bottom: 1px solid #d1d1d1;
          display: flex;
          justify-content: space-between;
        "
      >
        <div class="header-container">
        </div>
        <div
          class="header-container"
          style="display: flex; justify-content: flex-end; padding-right: 20px"
        >
          <el-dropdown style="height: 100%; display: flex; align-items: center;" @command="handleCommand">
            <span class="el-dropdown-link">
              <el-icon style="margin-right: 8px"><Avatar /></el-icon>{{ username }}
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div
        style="
          width: calc(100% - 16px);
          height: calc(100% - 50px - 16px);
          overflow: auto;
          padding: 8px;
        "
      >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    const username = localStorage.getItem('用户名');
    this.username = username;
  },
  data() {
    return {
      sideBarWidth: 220,
      username: '',
    }
  },
  methods: {
    handleMenuSelect(index) {
      console.log('idnex is ', index)
      this.$router.push({
        name: index,
      })
    },
    handleCommand(command) {
      const isLogout = command === 'logout'
      if (isLogout) {
        localStorage.removeItem('已登录')
        localStorage.removeItem('用户名')
        this.$router.push({
          name: 'Login',
        })
      }
    }
  }
}
</script>

<style>
.container {
  width: 100%;
  height: 100%;
  background: #EEF0F3;
  display: flex;
}

.container .left .el-menu {
  background-color: unset;
  border-right: unset;
}

.container .left .el-sub-menu__title,
.container .left .el-menu-item-group__title,
.container .left .el-menu-item {
  color: white;
}

.container .left .el-menu .is-active {
  color: #409eff;
}

.header-container {
  height: 100%;
  min-width: 100px;
}

</style>