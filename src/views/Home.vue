<template>
  <div>这是首页</div>
  <router-link to="/">首页</router-link>
  <router-link to="/PageA">PageA</router-link>
  <router-link to="/PageB">PageB</router-link>
  <router-link to="/Resume">个人简历</router-link>
  <el-button @click="handleNext">切换下一张</el-button>

  <div style="width: 500px; height: 200px; border: 1px solid">
    <el-carousel ref="carousel" :autoplay="false" :interval="1000" type="card" height="171px" @change="testChange">
      <el-carousel-item v-for="index in 6" :key="index">
        <div style="width: 100%; height: 100%; background: lightblue"></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  methods: {
    testChange(...args) {
      console.log(...args)
    },
    handleNext() {
      this.$refs.carousel.next()
    },
  }
}
</script>

<style>
a {
  margin-right: 10px;
}
</style>