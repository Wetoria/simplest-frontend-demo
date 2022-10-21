<template>
  <div
    v-for="item of yaoxuexideneirong"
    :class="item.done ? 'done' : ''"
    :key="item.content"
    @click="dianjile(item)"
  >
    {{ item.content }}
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['yaoxuexideneirong'],
  emits: ['dianjile'],
  data() {
    return {
      
    }
  },
  methods: {
    dianjile(value) {
      console.log(value, value.content)
      this.$emit('dianjile', value, value.content)
    },
  },
}
</script>

<style>
.done {
  color: lightblue;
}
</style>