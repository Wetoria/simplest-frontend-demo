<template>
  <div class="resume-container">
    <el-button v-if="editing" type="primary" @click="handleComplete">完成</el-button>
    <el-button v-else type="primary" @click="handleEdit">编辑</el-button>
    <h1>{{ info.name }}</h1>
    <ResumeList title="联系方式" :list="info.contact" :editing="editing" />
    <ResumeList title="个人信息" :list="info.info" :editing="editing" />
    <ResumeList title="技能清单" :list="info.skills" :editing="editing" />
    <h2>工作经历</h2>
    <template
      v-for="item of info.experiences"
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
    <ResumeList title="其他" :list="info.others" :editing="editing" />
  </div>
</template>

<script>
import ResumeList from './ResumeList.vue'

import defaultResumeInfo from './ResumeInfo'

export default {
  components: {
    ResumeList,
  },
  created() {
    const cunChuDeShuJu = JSON.parse(localStorage.getItem('resumeInfo'))
    if (cunChuDeShuJu) {
      this.info = cunChuDeShuJu
    } else {
      this.info = defaultResumeInfo
    }
  },
  data() {
    return {
      editing: false,
      info: {},
    }
  },
  methods: {
    handleEdit() {
      this.editing = true;
    },
    handleComplete() {
      this.editing = false;

      // 数据的保存工作
      localStorage.setItem('resumeInfo', JSON.stringify(this.info))
    },
  }
}
</script>

<style scoped>
h1,
h2 {
  border-bottom: 1px solid #409eff;
}

h1 {
  margin: 21px 0;
}

h2 {
  margin: 20px 0;
}

h1,
h2,
h3,
h4 {
  color: #409eff;
}

.resume-container {
  background: white;
  width: 900px;
  padding: 10px 25px;
  border-radius: 8px;
  margin: 0 auto;
  position: relative;
}
</style>