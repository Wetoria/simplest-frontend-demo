<template>
  <h4 v-if="level == 4">{{ title }}</h4>
  <h2 v-else>{{ title }}</h2>
  <ul>
    <li v-for="item of list" :key="item">
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['list', 'title', 'level']
}
</script>

<style>
h1,
h2,
h3,
h4 {
  color: #409eff;
}

h2 {
  margin: 20px 0;
}
h3 {
  margin: 18px 0;
}

h4 {
  margin: 21px 0;
}

ul {
  margin: 16px 0;
  padding-left: 40px;
}
</style>