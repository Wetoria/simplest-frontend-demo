<template>
  <SinglePageLayout />
</template>

<script>
import SinglePageLayout from './components/Layout/SinglePageLayout.vue'

export default {
  components: {
    SinglePageLayout,
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

html, body, #app {
  width: 100%;
  height: 100%;
}
</style>