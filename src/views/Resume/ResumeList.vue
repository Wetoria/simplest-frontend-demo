<template>
  <div v-if="finalList.length">
    <h4 v-if="level == 4">{{ title }}</h4>
    <h2 v-else>{{ title }}</h2>
    <ul :class="editing ? 'editing' : ''">
      <li v-for="(item, index) of finalList" :key="index">
        <el-row v-if="editing">
          <el-col :span="22">
            <el-input :modelValue="item" @input="handleInput(index, $event)" />
          </el-col>
          <el-col :span="2">
            <el-row align="middle" style="height: 100%;">
              <el-button
                class="opt-btn"
                style="margin-left: 8px"
                type="primary"
                icon="Plus"
                circle
                @click="handleAdd(index)"
              ></el-button>
              <el-button
                class="opt-btn"
                style="margin-left: 8px"
                type="danger"
                icon="Minus"
                circle
                @click="handleDelete(index)"
              ></el-button>
            </el-row>
          </el-col>
        </el-row>
        <span v-else>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ['list', 'title', 'level', 'editing'],
  computed: {
    finalList() {
      if (this.innerList.length) {
        return this.innerList
      }
      if (this.editing) {
        return ['']
      }
      return []
    },
  },
  data() {
    return {
      innerList: this.list,
    }
  },
  methods: {
    handleInput(index, event) {
      this.innerList[index] = event
    },
    handleAdd(index) {
      this.innerList.splice(index + 1, 0, '')
    },
    handleDelete(index) {
      this.innerList.splice(index, 1)
    }
  }
}
</script>

<style scoped>
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
ul.editing li {
  margin-bottom: 8px;
}

.opt-btn {
  width: 20px;
  height: 20px;
}
</style>