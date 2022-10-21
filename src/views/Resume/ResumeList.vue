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