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

const defaultResumeInfo = {
        name: 'Vip',
        contact: [
          '手机：13700001234',
          'Email：myemail@163.com',
          'QQ/微信：637737373/1370001234',
        ],
        info: [
          'Vip/男/1995',
          '本科/XXX大学/软件工程/18年毕业',
          '工作年限：2年',
          'Github：https://github.com/wetoria',
        ],
        skills: [
          '熟练使用HTML、CSS、JavaScript等技术',
          '熟练使用Vue、React、jQuery等JS框架',
          '熟练使用ES6常用新特性',
          '熟练使用Ant Design、Element UI、Kendo UI等前端UI框架',
          '熟练使用axios、Promise、asnyc/await',
        ],
        // experiences 工作经历这一段，属于挑战难度，尝试用下面的数据结构完成功能。
        experiences: [{
          company: 'XX公司（2018年5月～至今）',
          projects: [{
            projectName: 'XXXX项目',
            projectExp: [
              '在这个项目中，承担前端负责人的角色，负责整个系统的前端架构、规范制定、代码审计、版本控制、进度把控。',
              '负责前端开发任务的澄清、任务的拆分、相关负责人员的分配、以及任务进度的确认。',
              '攻克XX功能，实现XXX。',
              '封装XXXX组件，提高整个系统的开发效率。',
              '负责项目性能优化。通过XXX，分析出系统性能瓶颈所在，包括XXX的渲染时间优化，以及XXX全选的响应时间，优化效果显著。',
              '处理XXXX问题。根据XXX、XXX、XXX等字段，区分字符串以及数字两种情况进行排序。',
              'XXXX的导出。封装导出XXXX表格为图片，以及导出为 Excel 的方法，并提供一定的扩展性。',
              '负责项目测试工作的展开。包括测试用例的编写、组织测试人员进行测试、使用 SQL 导出相关测试数据。',
              '在有限时间的情况下，了解并学习相关Vue技术，从零Vue项目开发经验，到独立负责整个项目的搭建及规范制定。',
            ]
          }, {
            projectName: 'XXXX项目3',
            projectExp: [
              '在这个项目中，承担前端负责人的角色，负责整个系统的前端架构、规范制定、代码审计、版本控制、进度把控。',
              '负责前端开发任务的澄清、任务的拆分、相关负责人员的分配、以及任务进度的确认。',
              '攻克XX功能，实现XXX。',
            ]
          }],
        },{
          company: 'XX公司2（2018年5月～至今）',
          projects: [{
            projectName: 'XXXX项目2',
            projectExp: [
              '处理XXXX问题。根据XXX、XXX、XXX等字段，区分字符串以及数字两种情况进行排序。',
              'XXXX的导出。封装导出XXXX表格为图片，以及导出为 Excel 的方法，并提供一定的扩展性。',
              '负责项目测试工作的展开。包括测试用例的编写、组织测试人员进行测试、使用 SQL 导出相关测试数据。',
              '在有限时间的情况下，了解并学习相关Vue技术，从零Vue项目开发经验，到独立负责整个项目的搭建及规范制定。',
            ]
          }],
        }],
        others: [
          '学习理解能力优秀。',
          '业务感知能力优秀。',
          '英语四级。具备良好的英语阅读能力。',
          '爱好折腾。个人时间记录系统，微信(macOS)消息转发给指定账户，以及通过指定账户给特定好友发送消息。',
        ],
      }

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