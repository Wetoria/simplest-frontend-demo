<template>
  <button @click="handleClick">跳转到页面 B</button>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$router.push('/PageB')
    }
  }
}
</script>