<template>
  <button @click="handleClick">返回页面 A</button>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$router.back()
    }
  }
}
</script>