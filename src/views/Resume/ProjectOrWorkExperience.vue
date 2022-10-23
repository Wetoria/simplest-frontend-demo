<template>
  <div class="work-exp-container" v-if="type === 'WORK' && (innerData.length || editing)">
    <h2>
      工作经历
      <AddAndDeleteOperation
        v-if="editing"
        :showDelete="false"
        @add="handleAddCompany(innerData.length)"
      />
    </h2>
    <template v-for="(item, companyIndex) of data" :key="item.id">
      <el-row v-if="editing">
        <el-col :span="22">
          <el-input
            :modelValue="item.company"
            @input="handleCompanyTitleInput(item, $event)"
            placeholder="请输出公司名称和任职时间"
            style="margin-bottom: 8px"
          ></el-input>
        </el-col>
        <el-col :span="2">
          <el-row align="middle" style="height: 100%;">
            <AddAndDeleteOperation
              @add="handleAddCompany(companyIndex)"
              @delete="handleDeleteCompany(companyIndex)"
            />
          </el-row>
        </el-col>
      </el-row>
      <h3 class="company-title" v-else>{{ item.company }}</h3>
      <ResumeList 
        v-for="(project, projectIndex) of item.projects"
        :key="project.projectId"
        :title="project.projectName"
        v-model="project.projectName"
        :list="project.projectExp"
        level="4"
        :editing="editing"
        @addProject="handleAddCompanyProject(item.projects, projectIndex)"
        @deleteProject="handleDeleteCompanyProject(item.projects, projectIndex)"
      />
    </template>
  </div>
  <div class="project-exp-container" v-else-if="type === 'PROJECT' && (innerData.length || editing)">
    <h2>
      项目经历
      <AddAndDeleteOperation
        v-if="editing"
        :showDelete="false"
        @add="handleAddProject(innerData.length)"
      />
    </h2>
    <ResumeList 
      v-for="(project, index) of innerData"
      :key="project.id" 
      v-model="project.projectName"
      :title="project.projectName" 
      :list="project.projectExp" 
      level="4" 
      :editing="editing"
      @addProject="handleAddProject(index)"
      @deleteProject="handleDeleteProject(index)"
    />
  </div>
</template>

<script>
import ResumeList from './ResumeList.vue'
import AddAndDeleteOperation from './AddAndDeleteOperation.vue'

export default {
  props: {
    editing: Boolean,
    data: Array,
    type: String,
  },
  components: {
    ResumeList,
    AddAndDeleteOperation,
  },
  data() {
    return {
      innerData: this.data,
    };
  },
  methods: {
    handleAddProject(index) {
      this.innerData.splice(index + 1, 0, {
        projectName: '',
        projectExp: [],
        id: new Date().getTime(),
      })
    },
    handleDeleteProject(index) {
      this.innerData.splice(index, 1)
    },
    handleCompanyTitleInput(company, value) {
      company.company = value
    },
    handleAddCompany(index) {
      this.innerData.splice(index + 1, 0, {
        company: '',
        companyId: new Date().getTime(),
        projects: [{
            projectName: "",
            projectId: new Date().getTime(),
            projectExp: [],
        }],
      })
    },
    handleDeleteCompany(index) {
      this.innerData.splice(index, 1)
    },
    handleAddCompanyProject(projectList, index) {
      projectList.splice(index + 1, 0, {
        projectName: '',
        projectExp: [],
        id: new Date().getTime(),
      })
    },
    handleDeleteCompanyProject(projectList, index) {
      projectList.splice(index, 1)
    },
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