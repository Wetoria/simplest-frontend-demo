<template>
  <div class="work-exp-container" v-if="type === 'WORK'">
    <h2>工作经历</h2>
      <template
        v-for="item of data"
        :key="item.company"
      >
        <h3>{{ item.company }}</h3>
        <ResumeList 
          v-for="project of item.projects"
          :key="project.projectName" 
          :title="project.projectName" 
          :list="project.projectExp" 
          level="4" 
          :editing="editing"
        />
      </template>
  </div>
  <div class="project-exp-container" v-else-if="type === 'PROJECT'">
    <h2>项目经历</h2>
    <ResumeList 
      v-for="project of data"
      :key="project.projectName" 
      :title="project.projectName" 
      :list="project.projectExp" 
      level="4" 
      :editing="editing"
    />
  </div>
</template>

<script>
import ResumeList from './ResumeList.vue'

export default {
  props: {
    editing: Boolean,
    data: Array,
    type: String,
  },
  components: {
    ResumeList,
  }
}
</script>

<style>
h2 {
  margin: 20px 0;
  border-bottom: 1px solid #409eff;
}
h2, h3 {
  color: #409eff;
}
</style>