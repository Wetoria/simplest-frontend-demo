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
        "
      ></div>
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
  data() {
    return {
      sideBarWidth: 220,
    }
  },
  methods: {
    handleMenuSelect(index) {
      console.log('idnex is ', index)
      this.$router.push({
        name: index,
      })
    },
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

.container .el-menu {
  background-color: unset;
  border-right: unset;
}

.container .el-sub-menu__title,
.container .el-menu-item-group__title,
.container .el-menu-item {
  color: white;
}

</style>