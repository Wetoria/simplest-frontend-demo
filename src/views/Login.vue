<template>
  <div class="login-container">
    <div class="login-form">
      <h1 style="margin-bottom: 20px; color: #409eff">欢迎使用</h1>
      <div style="display: flex; width: 100%; flex-direction: column">
        <el-input
          v-model="username"
          placeholder="请输入用户名"
          style="margin-bottom: 20px"
        />
        <el-input v-model="password" type="password" placeholder="请输入密码" />
      </div>
      <el-button type="primary" @click="handleConfirm">确定</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginVie',
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    handleConfirm() {
      console.log('yong hu ming he mima ', this.username, this.password);
      if (this.username === 'admin' && this.password === '123456') {
        localStorage.setItem('已登录', '是');
        localStorage.setItem('用户名', this.username);
        this.$router.back();
      } else {
        alert('用户名或密码不正确');
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  width: 500px;
  height: 300px;
  background: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
