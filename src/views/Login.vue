<template>
  <div>这是登陆页</div>
  请输入用户名：<input @input="handleUsernameInput" />
  请输入密码：<input type="password" @input="handleInput" />
  <button @click="handleConfirm">确定</button>
</template>

<script>
export default {
  name: 'LoginVie',
  methods: {
    handleUsernameInput(event) {
      localStorage.setItem('yonghuming', event.target.value);
    },
    handleInput(event) {
      localStorage.setItem('shifoudenglu', event.target.value);
    },
    handleConfirm() {
      const pwd = localStorage.getItem('shifoudenglu');
      if (pwd === 'shi') {
        this.$router.back();
      } else {
        alert('密码不正确');
      }
    },
  },
};
</script>
